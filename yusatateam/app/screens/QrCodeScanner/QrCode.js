import React, { Component } from 'react';
import { Alert, Linking, Dimensions, LayoutAnimation, Text, View, StatusBar, TouchableOpacity, Image } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { Toolbar, SearchBar } from '../../components';
import styles from './styles';
import { userActions } from '../../redux/actions';
import { connect } from 'react-redux';
import { DeviceInfo } from './DeviceInfo'

export class QrCode extends Component {
    state = {
        hasCameraPermission: null,
        lastScannedUrl: null,
        InputSearch: '',
        deviceUDID: '',
        bottomBar: false,
        deviceInfoData: {},
        isGetDeviceUDID: false,
    };

    componentDidMount() {
        this._requestCameraPermission();
    }

    _requestCameraPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted',
        });
    };

    _handleBarCodeRead = result => {
        if (result.data !== this.state.lastScannedUrl) {
            LayoutAnimation.spring();
            this.setState({ lastScannedUrl: result.data, bottomBar: true, isSearching: true });
            this.props.fetchDeviceInfo(result.data);
        }
    };

    getDeviceInfo() {
        this.setState({ isSearching: true });
        this.props.fetchDeviceInfo(this.state.InputSearch);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.deviceInfo.isFetched && this.state.isSearching) {
            //alert(JSON.stringify(nextProps.deviceInfo.deviceInfo))
            this.setState({ deviceInfoData: nextProps.deviceInfo.deviceInfo, isGetDeviceUDID: true })
        }
    }

    render() {
        const { goBack } = this.props.navigation;
        const { width } = Dimensions.get('window')
        const qrSize = width * 0.7;
        return (
            <View style={styles.container}>
                <Toolbar title='Device Report'
                    leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()} />

                <SearchBar
                    placeholder={'Search by device ESN'}
                    isDropdown={false}
                    onChangeText={(text) => this.setState({ InputSearch: text })}
                    value={this.state.InputSearch}
                    onSearch={() => this.getDeviceInfo()}
                />

                {this.state.isGetDeviceUDID ?
                    <DeviceInfo onClose={() => this.setState({ isGetDeviceUDID: false, isSearching: false, lastScannedUrl: '' })}
                        deviceUDID={this.state.lastScannedUrl}
                        deviceInfoData={this.state.deviceInfoData}
                    />
                    :
                    <View style={{ flex: 1 }}>
                        {this.state.hasCameraPermission === null ? <Text>Requesting for camera permission</Text>
                        :
                        this.state.hasCameraPermission === false ? <Text style={{ color: '#fff' }}> Camera permission is not granted </Text>
                        :
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <BarCodeScanner
                                onBarCodeRead={this._handleBarCodeRead}
                                style={styles.barCode}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'lightskyblue', marginTop: "20%", fontSize: 26 }}>Scan BarCode or any QR</Text>
                                    <Image
                                        style={{
                                            marginTop: "20%",
                                            // marginRight: 40,
                                            // marginLeft: 40,
                                            width: qrSize,
                                            height: qrSize,
                                        }}
                                        source={require('../../../assets/trans.png')}
                                    />
                                </View>
                            </BarCodeScanner>
                        </View>
                        }

                    </View>
                }
            </View>
        );
    }


    _handlePressUrl = () => {
        Alert.alert(
            'Open this URL?',
            this.state.lastScannedUrl,
            [
                {
                    text: 'Yes',
                    onPress: () => Linking.openURL(this.state.lastScannedUrl),
                },
                { text: 'No', onPress: () => { } },
            ],
            { cancellable: false }
        );
    };

    _handlePressCancel = () => {
        this.setState({ bottomBar: false });
    };

    _maybeRenderUrl = () => {
        if (!this.state.lastScannedUrl) {
            return;
        }

        return (
            <View>
                {this.state.bottomBar ? <View style={styles.bottomBar}>
                    <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
                        <Text numberOfLines={1} style={styles.urlText}>
                            {this.state.lastScannedUrl}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={this._handlePressCancel}>
                        <Text style={styles.cancelButtonText}>
                            Ok
            </Text>
                    </TouchableOpacity>
                </View> : null}

            </View>
        );
    };
}

function mapStateToProps(state) {
    return {
        deviceInfo: state.deviceInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchDeviceInfo: (deviceUDID) => dispatch(userActions.getAssociationDeviceInfo(deviceUDID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QrCode);
