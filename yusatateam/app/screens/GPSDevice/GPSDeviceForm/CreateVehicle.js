import React from 'react';
import { View, Image, ScrollView, BackHandler } from 'react-native';
import { Footer, FooterTab, Button, Text } from 'native-base';
import { ImagePicker, AppLoading } from 'expo';
import { connect } from 'react-redux';

import styles from './styles';
import { Toolbar, Float, UnderlineText, Activityindication, SinglePicker } from '../../../components';
import { BarCodeModal } from './BarCodeModal';
import { gpsDeviceActions } from '../../../redux/actions';
import { showToast } from '../../../common/functions';
import { colors } from '../../../styles';

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
        this.setState({ deviceId: this.props.navigation.state.params.deviceid });
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
            mediaTypes: 'Images',
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0,
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
            mediaTypes: 'Images',
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0,
            base64: true,
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
                "vehicleTypeId": this.state.vehicleTypeId
            }
            if (this.state.deviceId !== '')
                item["gpsDeviceUdid"] = this.state.deviceId;
            // if (this.state.Base )
            //     item["image"] = this.state.Base;
            // console.log(JSON.stringify(item));
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
                                    rightIconStyle={{ color: 'gray', fontSize: 20 }}
                                    placeholder='Device Id'
                                    value={this.state.deviceId}
                                    returnKeyType={'next'}
                                    keyboardType={'numeric'}
                                    blurOnSubmit={false}
                                    isMandatory={false}
                                    onChangeText={(text) => this.setState({ deviceId: text })}
                                    inputStyles={{ width: '100%' }}
                                    maxLength={38}
                                />
                            </View>
                            {/* {
                                this.state.deviceId.length>38?
                                <Text style={{color:'red'}}> Barcode Data Length can't be more then 38</Text>: null
                            } */}

                            <View style={{ width: '92%', marginTop: 10 }}>
                                <Float
                                    rightIcon={'md-barcode'}
                                    rightIconType='Ionicons'
                                    rightIconPress={() => this.BarCodePage("SIM")}
                                    rightIconStyle={{ color: 'gray', fontSize: 20 }}
                                    placeholder='Sim #'
                                    value={this.state.simNumber}
                                    returnKeyType={'next'}
                                    keyboardType={'numeric'}
                                    blurOnSubmit={false}
                                    isMandatory={false}
                                    onChangeText={(text) => this.setState({ simNumber: text })}
                                    inputStyles={{ width: '100%' }}
                                    maxLength={38}
                                />
                            </View>
                            {/* {
                                this.state.simNumber.length>38?
                                <Text style={{color:'red'}}> Barcode Data Length can't be more then 38</Text>: null
                            } */}

                            <View style={{ width: '92%', marginTop: 10 }}>
                                <Float
                                    rightIcon={'md-barcode'}
                                    rightIconType='Ionicons'
                                    rightIconPress={() => this.BarCodePage("VIN")}
                                    rightIconStyle={{ color: 'gray', fontSize: 20 }}
                                    placeholder='VIN'
                                    value={this.state.vin}
                                    returnKeyType={'next'}
                                    keyboardType={'email-address'}
                                    blurOnSubmit={false}
                                    isMandatory={true}
                                    onChangeText={(text) => this.setState({ vin: text })}
                                    inputStyles={{ width: '100%' }}
                                    maxLength={38}
                                />
                            </View>
                            {/* {
                                this.state.vin.length>38?
                                <Text style={{color:'red'}}> Barcode Data Length can't be more then 38</Text>: null
                            } */}

                            <View style={{ width: '92%', marginTop: 15 }}>
                                <UnderlineText
                                    name='Vehicle Type'
                                    isMandatory={true}
                                    upperView={true}
                                    value={this.state.vehicleTypeValue}
                                    onpress={this.openList}
                                />
                            </View>

                            {/* <View style={{ width: '92%', flexDirection: 'row', marginTop: 20, marginBottom: 20, alignItems: 'center' }}>
                                <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>
                                    {image ?
                                        <View style={{ height: 100, width: 100, borderColor: 'gray', borderWidth: 0.8, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={{ uri: image }} resizeMode='cover'
                                                style={{ alignItems: 'center', justifyContent: 'center', height: 100, width: 100, borderRadius: 50, borderColor: '#efefef' }}
                                            />
                                        </View>
                                        : <Text style={{ fontSize: 12, color: colors.DANGER, fontFamily: 'Roboto' }}>No image choosen</Text>
                                    }
                                </View>
                                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Button bordered dark style={{ height: 30, width: '70%', justifyContent: 'center' }}
                                            onPress={this._takephoto}>
                                            <Text uppercase={false} style={[styles.createVehicle, { fontFamily: 'Roboto' }]}>Capture Image</Text>
                                        </Button>
                                    </View>
                                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={[styles.createVehicle, { fontFamily: 'Roboto' }]}>OR</Text>
                                    </View>
                                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Button bordered dark style={{ height: 30, width: '70%', justifyContent: 'center' }}
                                            onPress={this._pickImage}>
                                            <Text uppercase={false} style={[styles.createVehicle, { fontFamily: 'Roboto' }]}>Upload Image</Text>
                                        </Button>
                                    </View>
                                </View>
                            </View> */}

                            {/* <View style={{ width: '92%', marginTop: 5, marginBottom: 10, alignItems: 'center' }}>
                                <Text style={{ fontSize: 12, color: '#808080', fontFamily: 'Roboto' }}>
                                    {this.state.imagename}
                                </Text>
                            </View> */}

                            <View style={{ width: '92%', flexDirection: 'row', marginBottom: 20, marginTop: 20 }}>
                                <View style={{ flex: 1, width: '100%' }}>
                                    <Button full style={{ backgroundColor: colors.PRIMARY, width: '100%', justifyContent: 'center', alignItems: 'center' }}
                                        onPress={this.onCreateVehicle} >
                                        <Text style={{ color: '#fff', fontFamily: 'Roboto' }}>Create</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                    <BarCodeModal ref={this.modalReference} getBarValue={(detail) => this.barCodeValue(detail)} />
                    {/* <Footer>
                        <FooterTab style={{ backgroundColor: '#0073b7' }}>
                            <Button transparent onPress={this.onCreateVehicle}>
                                <Text style={{ color: '#fff', fontFamily: 'Roboto', fontSize: 15 }}>Create</Text>
                            </Button>
                        </FooterTab>
                    </Footer> */}
                    <SinglePicker ref={this.modalRef} selectedValue={(item) => { this.onVehicleTypeSelect(item) }} />
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
        createVehicle: (value) => dispatch(gpsDeviceActions.createVehicle(value)),
        oncreateVehicleType: () => dispatch(gpsDeviceActions.createVehicleType())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateVehicle)