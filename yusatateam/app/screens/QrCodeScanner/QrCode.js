import React, { Component } from 'react';
import {
    Alert,
    Linking,
    Dimensions,
    LayoutAnimation,
    Text,
    View,
    BackHandler,
    TouchableOpacity,
    Image
} from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { Toolbar, SearchBar } from '../../components';
import styles from './styles';
import { gpsDeviceActions } from '../../redux/actions';
import { connect } from 'react-redux';
import { DeviceInfo } from './DeviceInfo';
import { Label, Input, Item, Icon } from 'native-base';

export class QrCode extends Component {
    constructor(props) {
        super(props);
            this.state = {
            hasCameraPermission: null,
            lastScannedUrl: null,
            InputSearch: '',
            deviceUDID: '',
            bottomBar: false,
            deviceInfoData: {},
            isGetDeviceUDID: false,
            isSearching: false
        }
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        this._requestCameraPermission();
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
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
        if (this.state.lastScannedUrl != '') {
            this.setState({ isSearching: true });
            this.props.fetchDeviceInfo(this.state.lastScannedUrl);
        }
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
                <Toolbar title="Device Info" leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()} />
                <View style={{ justifyContent: 'center', alignItems: 'center', height: 80 }}>
                    <View style={{ width: '95%', justifyContent: 'center', alignItems: 'center' }}>
                        <Item>
                            <Input
                                style={{ fontSize: 14 }}
                                placeholder="Enter Device UDID/ESN"
                                onChangeText={(text) => this.setState({ lastScannedUrl: text })}
                                value={this.state.lastScannedUrl}
                            />
                            <Icon name="md-search" type="Ionicons" style={{ fontSize: 24, color: '#808080' }}
                                onPress={() => this.getDeviceInfo()} />
                        </Item>
                    </View>
                </View>
                {/* <SearchBar
                    placeholder={'Search by device ESN'}
                    isDropdown={false}
                    onChangeText={(text) => this.setState({ lastScannedUrl: text })}
                    value={this.state.lastScannedUrl}
                    onSearch={() => this.getDeviceInfo()}
                /> */}

                {this.state.isGetDeviceUDID ?
                    <DeviceInfo onClose={() => this.setState({ isGetDeviceUDID: false, isSearching: false, lastScannedUrl: '' })}
                        deviceUDID={this.state.lastScannedUrl}
                        deviceInfoData={this.state.deviceInfoData}
                    />
                    :
                    <View style={{ flex: 1 }}>
                        {this.state.hasCameraPermission === null ?
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>Requesting for camera permission</Text>
                            </View>
                            :
                            this.state.hasCameraPermission === false ?
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style> Camera permission is not granted </Text>
                                </View>
                                :
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <BarCodeScanner
                                        onBarCodeRead={this._handleBarCodeRead}
                                        style={styles.barCode}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ color: '#fff', marginTop: "10%", fontSize: 18 }}>Scan Device UDID or ESN</Text>
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
        fetchDeviceInfo: (deviceUDID) => dispatch(gpsDeviceActions.getAssociationDeviceInfo(deviceUDID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QrCode);
