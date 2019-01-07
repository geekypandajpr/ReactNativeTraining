import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Footer, FooterTab, Button, Text } from 'native-base';
import { ImagePicker, Permissions, AppLoading } from 'expo';
import styles from './styles';
import { Toolbar, Float, UnderlineText } from '../../../components';
import { BarCodeModal } from './BarCodeModal';
import { userActions } from '../../../redux/actions';
import { connect } from 'react-redux';

export class CreateVehicle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: null,
            searchValue: '',
            image: null,
            hasCameraPermission: null,
            cameraperm: null,
            deviceId: null,
            vin: null,
            sim: null,
            barValueGet: new Map(),
            imagename: '',
            Base:''
        };
        this.modalReference = React.createRef();
        this.BarCodePage = this.BarCodePage.bind(this);
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false });
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ cameraperm: status === 'granted' });
        const { cstatus } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({ hasCameraPermission: cstatus === 'granted' });
    }

    barCodeValue(value) {

        if (value.get("Device")) {
            this.setState({ deviceId: value.get("Device") })
        }
        if (value.get("VIN")) {
            this.setState({ vin: value.get("VIN") })
        }
        if (value.get("SIM")) {
            this.setState({ sim: value.get("SIM") })
        }
    }
    BarCodePage(data) {
        this.modalReference.current.setModalVisible(true, data);
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            //aspect: [4, 3],
            base64:true,
        })
        const str = result.uri;
        var strArray = str.split("/");

        if (!result.cancelled) {
            this.setState({
                image: result.uri,
                imagename: strArray[strArray.length - 1],
                Base:result.base64
            })
        }
    }

    _takephoto = async () => {
        let pickResult = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            base64:true,
            exif:true
        });
        const str = pickResult.uri;
        var strArray = str.split("/");

        if (!pickResult.cancelled) {
            this.setState({
                image: pickResult.uri,
                imagename: strArray[strArray.length - 1],
                Base:pickResult.base64,
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.Addvehicles !== nextProps.Addvehicles) {
            this.setState({ createVehicle: nextProps.Addvehicles.data })
        }
    }

    submitRequest() {
        alert("hello");
        // const item = {
        //     "vehicleNumber": "678945",
        //     "odometerReading": "1",
        //     "vehicleVin": "23456",
        //     "departmentId": "56789",
        //     "vehicleTypeId": "Bus",
        // }
        // this.props.oncreateVehicle(item);
    }

    render() {
        let { image } = this.state;
        const { goBack } = this.props.navigation;
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View style={{ flex: 1 }}>
                <Toolbar title='Create Vehicle'
                    leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()} />
                <ScrollView>
                    <View style={{backgroundColor: '#fff', alignItems: 'center'}}>
                        <View style={{width: '92%', marginTop: 10}}>
                            <Float
                                placeholder='Vehicle #'
                                // value={this.state.balance}
                                returnKeyType={'next'}
                                keyboardType={'numeric'}
                                blurOnSubmit={false}
                                isMandatory={true}
                                // onChangeText={(text) => this.setState({ balance: text })}
                                inputStyles={{ width: '100%' }}
                            />
                        </View>

                        <View style={{width: '92%', marginTop: 10}}>
                            <Float
                                placeholder='Odometer Reading'
                                // value={this.state.balance}
                                returnKeyType={'next'}
                                keyboardType={'numeric'}
                                blurOnSubmit={false}
                                isMandatory={true}
                                // onChangeText={(text) => this.setState({ balance: text })}
                                inputStyles={{ width: '100%' }}
                            />
                        </View>

                        <View style={{width: '92%', marginTop: 10}}>
                            <Float
                                rightIcon={'md-barcode'}
                                rightIconType='Ionicons'
                                rightIconPress={()=>this.BarCodePage("Device")}
                                placeholder='Device Id'
                                value={this.state.deviceId}
                                returnKeyType={'next'}
                                keyboardType={'numeric'}
                                blurOnSubmit={false}
                                isMandatory={false}
                                onChangeText={(text) => this.setState({ deviceId: text })}
                                inputStyles={{ width: '100%' }}
                            />
                        </View>

                        <View style={{width: '92%', marginTop: 10}}>
                            <Float
                                rightIcon={'md-barcode'}
                                rightIconType='Ionicons'
                                rightIconPress={()=>this.BarCodePage("SIM")}
                                placeholder='Sim #'
                                value={this.state.sim}
                                returnKeyType={'next'}
                                keyboardType={'numeric'}
                                blurOnSubmit={false}
                                isMandatory={false}
                                onChangeText={(text) => this.setState({ sim: text })}
                                inputStyles={{ width: '100%' }}
                            />
                        </View>

                        <View style={{width: '92%', marginTop: 10}}>
                            <Float
                                rightIcon={'md-barcode'}
                                rightIconType='Ionicons'
                                rightIconPress={()=>this.BarCodePage("VIN")}
                                placeholder='VIN'
                                value={this.state.vin}
                                returnKeyType={'next'}
                                keyboardType={'numeric'}
                                blurOnSubmit={false}
                                isMandatory={true}
                                onChangeText={(text) => this.setState({ vin: text })}
                                inputStyles={{ width: '100%' }}
                            />
                        </View>

                        <View style={{width: '92%', marginTop: 15}}>
                            <UnderlineText
                                name='Vehicle Type'
                                isMandatory={true}
                                upperView={true}
                                // value={this.state.dropdowns.get(ISD_KEY)[0]}
                                // onpress={() => this.openPicker(ISD_KEY, this.state.countryISD, title[4])}
                            />
                        </View>

                        <View style={{width: '92%', flexDirection: 'row', marginTop: 20, marginBottom: 20, alignItems:'center'}}>
                            <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center'}}>
                                <View style={{ height: 100, width: 100, borderColor: 'gray', borderWidth: 0.8, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={{ uri: image }} resizeMode='cover'
                                        style={{ alignItems: 'center', justifyContent: 'center', height: 100, width: 100, borderRadius: 50, borderColor: '#efefef' }}
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Button bordered dark style={{ height: 35, borderColor: 'gray' }}
                                        onPress={this._takephoto}>
                                        <Text uppercase={false} style={[styles.createVehicle,{fontFamily:'Roboto'}]}>Capture Image</Text>
                                    </Button>
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={[styles.createVehicle,{fontFamily:'Roboto'}]}>OR</Text>
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Button bordered dark style={{ height: 35, borderColor: 'gray', }}
                                        onPress={this._pickImage}>
                                        <Text uppercase={false} style={[styles.createVehicle,{fontFamily:'Roboto'}]}>Upload Image</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>

                        {/* <View style={{width: '93%', flexDirection: 'row', marginBottom: 10}}>
                            <View style={{ flex: 1, marginRight: 1 }}>
                                <Button block style={{ backgroundColor: '#d9534f' }} >
                                    <Text style={{ color: '#fff', fontFamily: 'Roboto' }}>Cancel</Text>
                                </Button>
                            </View>
                            <View style={{ flex: 1, marginLeft: 1 }}>
                                <Button block style={{ backgroundColor: '#5cb85c' }} >
                                    <Text style={{ color: '#fff', fontFamily: 'Roboto' }}>Submit</Text>
                                </Button>
                            </View>
                        </View> */}
                    </View>
                    
                </ScrollView>
                <BarCodeModal ref={this.modalReference} getBarValue={(detail) => this.barCodeValue(detail)} />
                <Footer>
                    <FooterTab style={{backgroundColor: '#3498DB'}}>
                        <Button transparent>
                            <Text style={{ color: '#fff', fontFamily: 'Roboto', fontSize: 15 }}>Submit</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        Addvehicles: state.createVehicleData,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        oncreateVehicle: (value) => dispatch(userActions.createVehicle(value)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateVehicle)

