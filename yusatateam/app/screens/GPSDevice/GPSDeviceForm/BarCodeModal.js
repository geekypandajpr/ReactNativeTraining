import React from 'react';
import { Text, Modal, View, TouchableHighlight, FlatList, TouchableOpacity,Image,Dimensions,LayoutAnimation,Alert, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Header, Body, Right, List, ListItem } from 'native-base';
import { BarCodeScanner, Permissions } from 'expo';
import { AppLoading } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class BarCodeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            modalVisible: false,
            hasCameraPermission: null,
            lastScannedUrl: null,
            keyValue : '',
            barMap : new Map()

        }
        this.setModalVisible = this.setModalVisible.bind(this);
        this.onSelectValue = this.onSelectValue.bind(this);
    }

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
            this.setState({ lastScannedUrl: result.data, bottomBar: true });
        }
    };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false });
    };

    setModalVisible(visible,data) {
        this.setState({ modalVisible: visible,title : "BarCode Scanner",keyValue :data,lastScannedUrl : null});
        
    }
    onSelectValue(item) {
      
        const barMap = new Map(this.state.barMap);
        barMap.set(this.state.keyValue,item);
       
        this.props.getBarValue(barMap);
        this.setModalVisible(false, '' ,[]);
    }

    render() {
        const { width } = Dimensions.get('window')
        const qrSize = width * 0.7;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onDismiss={() => {
                            this.setState({ modalVisible: !this.state.modalVisible })
                        }}
                        onRequestClose={() => {
                            this.setState({ modalVisible: !this.state.modalVisible })
                        }}>
                        <View style={styles.container}>
                            <View style={styles.subContainer}>

                                <Header style={styles.Header_Style}>
                                    <Body>
                                        <Text style={styles.Text_style}>{this.state.title}</Text>
                                    </Body>
                                    <Right>
                                        <TouchableHighlight onPress={() => { this.setModalVisible(false) }}>
                                            <MaterialIcons name='close' size={28} color='#fff' />
                                        </TouchableHighlight>
                                    </Right>
                                </Header>

                                <View>
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
                                                source={require('../../../assets/images/trans.png')}
                                            />
                                        </View>
                                    </BarCodeScanner>
                                </View>
                                {this._maybeRenderUrl()}
                            </View>
                        </View>
                    </Modal>
                </View >
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
                        onPress={() => this.onSelectValue(this.state.lastScannedUrl)}>
                        <Text style={styles.cancelButtonText}>
                            Ok
            </Text>
                    </TouchableOpacity>
                </View> : null}

            </View>
        );
    };
}
export { BarCodeModal }

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#00000090',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    subContainer: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        bottom: 0
    },
    Header_Style:
    {
        backgroundColor: '#0073b7'
    },
    Text_style: {
        fontSize: '1.2rem',
        color: '#fff',
        fontWeight: '500',
    },
    barCode : {
        height : "100%",
        width: "100%",
        padding : 5,
    },
    bottomBar: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        height : 80,
        
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 15,
        flexDirection: 'row',
      },
      url: {
        flex: 1,
      },
      urlText: {
        color: '#fff',
        fontSize: 20,
      },
      cancelButton: {
        marginLeft: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
      },
      cancelButtonText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 18,
      },

})