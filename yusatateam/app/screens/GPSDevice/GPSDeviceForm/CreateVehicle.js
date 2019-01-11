import React from 'react';
import { View, Image, ScrollView, BackHandler } from 'react-native';
import { Footer, FooterTab, Button, Text } from 'native-base';
import { ImagePicker, AppLoading } from 'expo';
import { connect } from 'react-redux';

import styles from './styles';
import { Toolbar, Float, UnderlineText, Activityindication } from '../../../components';
import { BarCodeModal } from './BarCodeModal';
import { userActions } from '../../../redux/actions';
import { GpsModal } from '../GpsModal/GpsModal';
import { showToast } from '../../../common/functions';

export class CreateVehicle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: null,
            //DeviceId
            deviceId: '',
            //VIN
            vin: '',
            //Sim#
            simNumber: '',
            barValueGet: new Map(),
            //Image
            image: null,
            imagename: '',
            Base: null,
            //vehicle type variable
            vehicleList: [],
            vehicleTypeValue: 'Select vehicle',
            vehicleTypeId: '',
            //vehicle #
            vehicleNumber: '',
            //odometer
            odometerReading: '1000'
        };
        this.modalReference = React.createRef();
        this.BarCodePage = this.BarCodePage.bind(this);
        this.openList = this.openList.bind(this);
        this.onCreateVehicle = this.onCreateVehicle.bind(this);
        this.checkRequiredFields = this.checkRequiredFields.bind(this);
        this.modalRef = React.createRef();
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
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        this.props.oncreateVehicleType();
        this.setState({deviceId:this.props.navigation.state.params.deviceid});
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    barCodeValue(value) {

        if (value.get("Device")) {
            this.setState({ deviceId: value.get("Device") })
        }
        if (value.get("VIN")) {
            this.setState({ vin: value.get("VIN") })
        }
        if (value.get("SIM")) {
            this.setState({ simNumber: value.get("SIM") })
        }
    }
    BarCodePage(data) {
        this.modalReference.current.setModalVisible(true, data);
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            //aspect: [4, 3],
            base64: true,
        })
        const str = result.uri;
        var strArray = str.split("/");

        if (!result.cancelled) {
            this.setState({
                image: result.uri,
                imagename: strArray[strArray.length - 1],
                Base: result.base64
            })
        }
    }

    _takephoto = async () => {
        let pickResult = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            base64: true,
            exif: true
        });
        const str = pickResult.uri;
        var strArray = str.split("/");

        if (!pickResult.cancelled) {
            this.setState({
                image: pickResult.uri,
                imagename: strArray[strArray.length - 1],
                Base: pickResult.base64,
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        /**vehicle list */
        if (this.props.VehicleTypeData !== nextProps.VehicleTypeData) {
            const vehicleArray = [];
            var vehicleTypeValue = '';
            var vehicleTypeId = '';
            if (nextProps.VehicleTypeData.data.results) {
                const vehicletype = nextProps.VehicleTypeData.data.results;
                for (var i = 0; i < vehicletype.length; i++) {
                    if (vehicletype[i].value == "CAR") {
                        vehicleTypeValue = vehicletype[i].value;
                        vehicleTypeId = vehicletype[i].key;
                    }
                    var obj = { "label": vehicletype[i].value, "value": vehicletype[i].key };
                    vehicleArray.push(obj);
                }
            }
            this.setState({ vehicleList: vehicleArray, vehicleTypeValue: vehicleTypeValue, vehicleTypeId: vehicleTypeId })
        }
    }

    openList() {
        this.modalRef.current.setModalVisible(true, 'Vehicle List', this.state.vehicleList)
    }

    onVehicleTypeSelect = (item) => {
        this.setState({ vehicleTypeId: item.value, vehicleTypeValue: item.label });
    }

    onCreateVehicle() {
        const departmentId = this.props.loginResponse.data.results.departmentId;
        if (this.checkRequiredFields()) {
            const item = {
                "vehicleNumber": this.state.vehicleNumber,
                "odometerReading": this.state.odometerReading,
                "vehicleVin": this.state.vin,
                "departmentId": departmentId,
                "vehicleTypeId": this.state.vehicleTypeId,
            }
            if (this.state.deviceId !== '')
                item["gpsDeviceUdid"] = this.state.deviceId;
            if (this.state.Base)
                item["image"] = this.state.Base;
            // alert(JSON.stringify(item));
            this.props.createVehicle(item);
        } else {
            showToast('Please fill required fields', 'warning');
        }
    }

    checkRequiredFields() {
        const { vehicleNumber, odometerReading, vin, vehicleTypeId } = this.state;
        if (vehicleNumber !== ''
            && odometerReading !== ''
            && vin !== ''
            && vehicleTypeId !== '') {
            return true;
        }
        return false;
    }

    render() {
        console.disableYellowBox = true;
        const { navigate } = this.props.navigation;
        let { image } = this.state;
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={{ flex: 1 }}>
                    <Activityindication visible={this.props.VehicleTypeData.isLoading} />
                    <Activityindication visible={this.props.Addvehicles.isLoading} />

                    <Toolbar title='Create Vehicle'
                        leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                    />

                    <ScrollView keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}>
                        <View style={{ backgroundColor: '#fff', alignItems: 'center' }}>
                            <View style={{ width: '92%', marginTop: 10 }}>
                                <Float
                                    placeholder='Vehicle #'
                                    value={this.state.vehicleNumber}
                                    returnKeyType={'next'}
                                    keyboardType={'default'}
                                    blurOnSubmit={false}
                                    isMandatory={true}
                                    onChangeText={(text) => this.setState({ vehicleNumber: text })}
                                    inputStyles={{ width: '100%' }}
                                />
                            </View>

                            <View style={{ width: '92%', marginTop: 10 }}>
                                <Float
                                    placeholder='Odometer Reading'
                                    value={this.state.odometerReading}
                                    returnKeyType={'next'}
                                    keyboardType={'numeric'}
                                    blurOnSubmit={false}
                                    isMandatory={true}
                                    onChangeText={(text) => this.setState({ odometerReading: text })}
                                    inputStyles={{ width: '100%' }}
                                />
                            </View>

                            <View style={{ width: '92%', marginTop: 10 }}>
                                <Float
                                    rightIcon={'md-barcode'}
                                    rightIconType='Ionicons'
                                    rightIconPress={() => this.BarCodePage("Device")}
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
                            {
                                this.state.deviceId.length>38?
                                <Text style={{color:'red'}}> Barcode Data Length can't be more then 38</Text>: null
                            }

                            <View style={{ width: '92%', marginTop: 10 }}>
                                <Float
                                    rightIcon={'md-barcode'}
                                    rightIconType='Ionicons'
                                    rightIconPress={() => this.BarCodePage("SIM")}
                                    placeholder='Sim #'
                                    value={this.state.simNumber}
                                    returnKeyType={'next'}
                                    keyboardType={'numeric'}
                                    blurOnSubmit={false}
                                    isMandatory={false}
                                    onChangeText={(text) => this.setState({ simNumber: text })}
                                    inputStyles={{ width: '100%' }}
                                />
                            </View>
                            {
                                this.state.simNumber.length>38?
                                <Text style={{color:'red'}}> Barcode Data Length can't be more then 38</Text>: null
                            }

                            <View style={{ width: '92%', marginTop: 10 }}>
                                <Float
                                    rightIcon={'md-barcode'}
                                    rightIconType='Ionicons'
                                    rightIconPress={() => this.BarCodePage("VIN")}
                                    placeholder='VIN'
                                    value={this.state.vin}
                                    returnKeyType={'next'}
                                    keyboardType={'email-address'}
                                    blurOnSubmit={false}
                                    isMandatory={true}
                                    onChangeText={(text) => this.setState({ vin: text })}
                                    inputStyles={{ width: '100%' }}
                                />
                            </View>
                            {
                                this.state.vin.length>38?
                                <Text style={{color:'red'}}> Barcode Data Length can't be more then 38</Text>: null
                            }

                            <View style={{ width: '92%', marginTop: 15 }}>
                                <UnderlineText
                                    name='Vehicle Type'
                                    isMandatory={true}
                                    upperView={true}
                                    value={this.state.vehicleTypeValue}
                                    onpress={this.openList}
                                />
                            </View>

                            <View style={{ width: '92%', flexDirection: 'row', marginTop: 20, marginBottom: 20, alignItems: 'center' }}>
                                <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ height: 100, width: 100, borderColor: 'gray', borderWidth: 0.8, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={{ uri: image }} resizeMode='cover'
                                            style={{ alignItems: 'center', justifyContent: 'center', height: 100, width: 100, borderRadius: 50, borderColor: '#efefef' }}
                                        />
                                    </View>
                                </View>
                                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Button bordered dark style={{ height: 35, borderColor: 'gray' }}
                                            onPress={this._takephoto}>
                                            <Text uppercase={false} style={[styles.createVehicle, { fontFamily: 'Roboto' }]}>Capture Image</Text>
                                        </Button>
                                    </View>
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={[styles.createVehicle, { fontFamily: 'Roboto' }]}>OR</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Button bordered dark style={{ height: 35, borderColor: 'gray', }}
                                            onPress={this._pickImage}>
                                            <Text uppercase={false} style={[styles.createVehicle, { fontFamily: 'Roboto' }]}>Upload Image</Text>
                                        </Button>
                                    </View>
                                </View>
                            </View>

                            <View style={{ width: '92%', marginTop: 5 }}>
                                <Text>{this.state.imagename}</Text>
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
                        <FooterTab style={{ backgroundColor: '#0073b7' }}>
                            <Button transparent onPress={this.onCreateVehicle}>
                                <Text style={{ color: '#fff', fontFamily: 'Roboto', fontSize: 15 }}>Submit</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                    <GpsModal ref={this.modalRef} selectedValue={(item) => { this.onVehicleTypeSelect(item) }} />
                </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        Addvehicles: state.createVehicleData,
        VehicleTypeData: state.createVehicleTypeData,
        loginResponse: state.loginData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createVehicle: (value) => dispatch(userActions.createVehicle(value)),
        oncreateVehicleType: () => dispatch(userActions.createVehicleType())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateVehicle)

