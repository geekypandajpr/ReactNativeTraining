import React from 'react';
import { View, ScrollView, BackHandler, KeyboardAvoidingView, Alert } from 'react-native';
import { Item, Label, Input, Button, Text, Icon } from 'native-base';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

import {
    Toolbar,
    Float,
    UnderlineText,
    Activityindication,
    SinglePicker,
    GpsDevicePicker
} from '../../../components';
import styles from './styles';
import { gpsDeviceActions } from '../../../redux/actions';
import functions from '../../../common/functions';
import { globalStyles, colors, typeCode } from '../../../styles';
import { BarCodeModal } from '../GPSDeviceForm/BarCodeModal'

const title = [
    'Company',
    'Vehicles',
    'Device Type',
    'Subskey',
    'Country ISD'
]

const COMPANY_KEY = 'COMPANY';
const COMPANY_KEY_VALUE = 'Select Company';

const VEHICLE_KEY = 'VEHICLE';
const VEHICLE_KEY_VALUE = 'Select vehicle';

const DEVICETYPE_KEY = 'DEVICE_TYPE';
const DEVICETYPE_KEY_VALUE = 'Select device type';

const ISD_KEY = 'ISD_KEY';
const ISD_KEY_VALUE = 'Select ISD';

export class GPSDeviceForm extends React.Component {
    constructor(props) {
        super(props);
        moment.locale('en');
        this.state = {
            isLoading: true,
            data: [],
            gpsdata: '',
            dropdowns: new Map(),
            countryISD: [],
            companyList: [],
            deviceType: [],
            vehicleList: [],
            inventoryDevice: [],
            inventorySim: [],
            isDeviceChecked: false,
            isDeviceUdidValid: false,
            deviceUDID: '',
            mobileNumber: '',
            balance: '',
            dataBalance: '',
            dataPlan: '',
            dataRenewal: '',
            carrier: '',
            createVehicle: [],
            simId: '',
            simValue: 'Select Mobile#',
            deviceId: '',
            deviceValue: 'Select Device',
            companyId: '',
        }
        this.flag = '';
        this.modalRef = React.createRef();
        this.modalReference = React.createRef();
        this.OnValueSelect = this.OnValueSelect.bind(this);
        this.openPicker = this.openPicker.bind(this);
        this.onAddGPSDevice = this.onAddGPSDevice.bind(this);
        this.checkDeviceAssociation = this.checkDeviceAssociation.bind(this);
        this.BarmodalReference = React.createRef();
        this.BarCodePage = this.BarCodePage.bind(this);
    };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
        
        /**Compnay Name and Company Id */
        const companyName = this.props.loginResponse.data.results.companyName;
        const companyId = this.props.loginResponse.data.results.companyId;

        const dropdowns = new Map(this.state.dropdowns);
        dropdowns.set(COMPANY_KEY, [COMPANY_KEY_VALUE, null]); /**Companies Dropdown */
        dropdowns.set(VEHICLE_KEY, [VEHICLE_KEY_VALUE, null]); /**Vehicles Dropdown */
        dropdowns.set(DEVICETYPE_KEY, [DEVICETYPE_KEY_VALUE, null]); /**Device Type Dropdown */
        dropdowns.set(ISD_KEY, [ISD_KEY_VALUE, null]); /**Country ISD Dropdown */
        dropdowns.set(COMPANY_KEY, [companyName, companyId]); /**Set default Company Name and Id */
        this.setState({ isLoading: false, dropdowns: dropdowns, companyId: companyId });
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        var deviceReq = {
            "listType": "INSTALL",
            "orderCode": typeCode.DEVICE_ORDER_CODE
        };
        var simReq = {
            "listType": "INSTALL",
            "orderCode": typeCode.SIM_ORDER_CODE
        }
        const companyId = this.props.loginResponse.data.results.companyId;
        this.props.onFetchList(deviceReq, simReq, companyId);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    /**Function to get selected picker value and set value to thier respective field
     * @param item - contains selected value in the form of object.
     * Object: { "label": "anyvalue", "value": "anyvalue" }
    */
    OnValueSelect(item) {
        /**Set selected dropdown value */
        const dropdowns = new Map(this.state.dropdowns);
        dropdowns.set(this.flag, [item.label, item.value]);
        // if(this.flag == COMPANY_KEY) {
        //     // alert(item.value)
        //     dropdowns.set(VEHICLE_KEY, [VEHICLE_KEY_VALUE, null]);
        //     this.props.onFetchFreeVehicles(item.value);
        // }
        this.setState({ dropdowns: dropdowns });
    }

    selectSim(item) {
        this.setState({ simId: item.value, simValue: item.label });
    }

    selectDevice(item) {
        this.setState({ deviceId: item.value, deviceValue: item.label, isDeviceChecked: true, isDeviceUdidValid: false });
        this.props.checkDeviceAssociation(item.label);
    }

    barCodeValue(value) {

        if (value.get("DeviceUDID")) {
            this.setState({ deviceUDID: value.get("DeviceUDID") })
        }

    }
    BarCodePage(data) {
        this.BarmodalReference.current.setModalVisible(true, data);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.gpsDeviceData !== nextProps.gpsDeviceData) {
            /**Country ISD */
            var defaultISD = this.props.loginResponse.data.results.countryIsdCode;

            /**Compnay Name and Company Id */
            const companyName = this.props.loginResponse.data.results.companyName;
            const companyId = this.props.loginResponse.data.results.companyId;

            const dropdowns = new Map(this.state.dropdowns);
            // dropdowns.set(COMPANY_KEY, [COMPANY_KEY_VALUE, null]); /**Companies Dropdown */
            // dropdowns.set(VEHICLE_KEY, [VEHICLE_KEY_VALUE, null]); /**Vehicles Dropdown */
            // dropdowns.set(DEVICETYPE_KEY, [DEVICETYPE_KEY_VALUE, null]); /**Device Type Dropdown */
            // dropdowns.set(ISD_KEY, [ISD_KEY_VALUE, null]); /**Country ISD Dropdown */
            // dropdowns.set(COMPANY_KEY, [companyName, companyId]); /**Set default Company Name and Id */

            /**Device Type */
            const deviceTypeArray = [];
            if (nextProps.gpsDeviceData.deviceType.results) {
                const deviceType = nextProps.gpsDeviceData.deviceType.results;
                for (var i = 0; i < deviceType.length; i++) {
                    var obj = { "label": deviceType[i].value, "value": deviceType[i].key };
                    deviceTypeArray.push(obj);
                    if(deviceType[i].key == 887289) {
                        dropdowns.set(DEVICETYPE_KEY, [deviceType[i].value, deviceType[i].key]);
                    }
                }
            }

            /**Country ISD */
            const countryISD = [];
            if (nextProps.gpsDeviceData.countryISD.results) {
                const countryIsdData = nextProps.gpsDeviceData.countryISD.results;
                for (var i = 0; i < countryIsdData.length; i++) {
                    var obj = { "label": countryIsdData[i].value, "value": countryIsdData[i].key };
                    countryISD.push(obj);
                    //Set default country ISD to Map Array
                    if (countryIsdData[i].code == defaultISD) {
                        dropdowns.set(ISD_KEY, [countryIsdData[i].value, countryIsdData[i].key]);
                    }
                }
            }

            /**Inventory Device */
            const inventoryDevice = [];
            if (nextProps.gpsDeviceData.inventoryDevice.results) {
                const inventoryDeviceData = nextProps.gpsDeviceData.inventoryDevice.results;
                for (var i = 0; i < inventoryDeviceData.length; i++) {
                    var obj = { "label": inventoryDeviceData[i].code, "value": inventoryDeviceData[i].key };
                    inventoryDevice.push(obj);
                }
            }

            /**Inventory Sim */
            const inventorySim = [];
            if (nextProps.gpsDeviceData.inventorySim.results) {
                const inventorySimData = nextProps.gpsDeviceData.inventorySim.results;
                for (var i = 0; i < inventorySimData.length; i++) {
                    var obj = { "label": inventorySimData[i].code, "value": inventorySimData[i].key };
                    inventorySim.push(obj);
                }
            }

            this.setState({
                inventoryDevice: inventoryDevice,
                inventorySim: inventorySim,
                deviceType: deviceTypeArray,
                countryISD: countryISD,
                dropdowns: dropdowns
            });
        }

        /**Vehicle List */
        if (this.props.vehicleListDatas !== nextProps.vehicleListDatas) {
            const vehicleArray = [];
            if (nextProps.vehicleListDatas.vehicleList.results) {
                const vehicle = nextProps.vehicleListDatas.vehicleList.results;
                for (var i = 0; i < vehicle.length; i++) {
                    var obj = { "label": vehicle[i].value, "value": vehicle[i].key };
                    vehicleArray.push(obj);
                }
            }
            this.setState({
                vehicleList: vehicleArray,
            });
        }


        /**Company Array */
        if (this.props.loginResponse) {
            const companyArray = [];
            const RegionData = this.props.loginResponse.data.results.regionDetails;
            if (RegionData) {
                for (var i = 0; i < RegionData.length; i++) {
                    for (var j = 0; j < RegionData[i].companyDetails.length; j++) {
                        const companyObj = { "label": RegionData[i].companyDetails[j].companyName, "value": RegionData[i].companyDetails[j].companyId };
                        companyArray.push(companyObj)
                    }
                }
                this.setState({ companyList: companyArray });
            }
        }

        /**Based on Device UDID/ESN validation, update "isDeviceUdidValid" state variable*/
        if (this.props.checkGPSDeviceAssocData !== nextProps.checkGPSDeviceAssocData) {
            if (this.state.isDeviceChecked) {
                var isValid = nextProps.checkGPSDeviceAssocData.isValid;
                if(!isValid) {
                    functions.showToast('Device is already engaged with another vehicle, please try with another device', 'warning');
                }
                this.setState({ isDeviceUdidValid: isValid, isDeviceChecked: false });
            }
                
        }
    }

    /**This function opens the picker
     * @param list - array of data to be rendered
     * @param true - value to set modal visible
     * @param keys - variable to identify which picker is currently opened
     */
    openPicker(keys, list, title) {
        this.flag = keys;
        this.modalRef.current.setModalVisible(true, title, list);
    }

    /**Function to association GPS Device with Vehicle
     */
    onAddGPSDevice() {
        if (this.checkRequiredFields()) {
            const item = {
                // "balance": this.state.balance,
                // "dataBalance": this.state.dataBalance,
                // "dataPlan": this.state.dataPlan,
                // "dataValidity": this.state.dataRenewal,
                "carrier": this.state.carrier,
                "countryID": this.state.dropdowns.get(ISD_KEY)[1],
                "departmentId": this.props.loginResponse.data.results.departmentId,
                "deviceTypeId": this.state.dropdowns.get(DEVICETYPE_KEY)[1],
                "deviceUdid": this.state.deviceValue,
                "deviceInventoryId": this.state.deviceId,
                "simno": this.state.simValue,
                "simInventoryId": this.state.simId,
                "vehicleId": this.state.dropdowns.get(VEHICLE_KEY)[1]
            }
            if(this.state.balance.trim() != '')
                item['balance'] = this.state.balance.trim();
            if(this.state.dataBalance.trim() != '')
                item['dataBalance'] = this.state.dataBalance.trim();
            if(this.state.dataPlan.trim() != '')
                item['dataPlan'] = this.state.dataPlan.trim();
            if(this.state.dataRenewal != '')
                item['dataValidity'] = this.state.dataRenewal;


            // this.props.checkDeviceAssociation(this.state.deviceUDID)  
            console.log(item);
            // if(!this.state.isDeviceUdidValid) {
            //     functions.showToast('Device is already engaged with another vehicle, please try with another device', 'warning');
            //     return false;
            // } else {
            //     this.props.addGPSDevice(item);
            // }            
            this.props.addGPSDevice(item);
        } else {
            // functions.showToast('Please fill all required fields', 'warning');
        }

    }

    /**Function to validate mandatory fields for Add GPS Device API*/
    checkRequiredFields() {
        // if (this.state.deviceUDID !== ''
        //     && this.state.dropdowns.get(VEHICLE_KEY)[1]
        //     && this.state.dropdowns.get(DEVICETYPE_KEY)[1]
        //     && this.state.dropdowns.get(ISD_KEY)[1]
        //     && this.state.mobileNumber !== ''
        //     && this.state.balance !== ''
        //     && this.state.dataBalance !== ''
        //     && this.state.dataPlan !== ''
        //     && this.state.carrier !== ''
        //     && this.state.dataRenewal !== '') {
        //         // this.props.checkDeviceAssociation(this.state.deviceUDID);
        //         if(!this.state.isDeviceUdidValid) {
        //             functions.showToast('Device is already engaged with another vehicle, please try with another device', 'warning');
        //             return false;
        //         }
        //     return true;
        // } else {
        //     functions.showToast('Please fill all required fields', 'warning');
        //     return false;
        // }
        if (this.state.deviceId !== ''
            && this.state.dropdowns.get(VEHICLE_KEY)[1]
            && this.state.dropdowns.get(DEVICETYPE_KEY)[1]
            && this.state.dropdowns.get(ISD_KEY)[1]
            && this.state.simId !== ''
            && this.state.carrier.trim() !== ''
            // && this.state.balance !== ''
            // && this.state.dataBalance !== ''
            // && this.state.dataPlan !== ''
            // && this.state.dataRenewal !== ''
            ) {
                if(!this.state.isDeviceUdidValid) {
                    functions.showToast('Device is already engaged with another vehicle, please try with another device', 'warning');
                    return false;
                }
            return true;
        } else {
            functions.showToast('Please fill all required fields', 'warning');
            return false;
        }        
    }

    /**This function will check that whether GPS device is associated with any vehicle or not
     * @param DeviceUDID
     */
    checkDeviceAssociation() {
        if (this.state.deviceUDID === '') {
            functions.showToast('Please Fill Device UDID/ESN', 'warning');
        } else {
            this.setState({ isDeviceChecked: true });
            this.props.checkDeviceAssociation(this.state.deviceUDID);
        }
    }

    _focusNextField(id) { this[id]._root.focus(); }

    render() {
        const { goBack } = this.props.navigation;
        const { navigate } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={{ backgroundColor: '#fff', flex: 1 }}>
                    <Toolbar title='Association' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()} />

                    <Activityindication visible={this.props.gpsDeviceData.isLoading} />
                    <Activityindication visible={this.props.addGPSDeviceResp.isLoading} />
                    <Activityindication visible={this.props.vehicleListDatas.isLoading} />
                    <Activityindication visible={this.props.checkGPSDeviceAssocData.isLoading} />

                    <KeyboardAvoidingView behavior='padding' enabled style={globalStyles.keyboardAvoiding} >
                        <ScrollView keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}>
                            <View style={{ flexDirection: 'column', flex: 1, backgroundColor: '#efefef' }}>
                                <View style={styles.Sub_View}>
                                    <View style={styles.Width_View}>

                                        <View style={styles.Small_View}>
                                            <UnderlineText
                                                name="Device UDID/ESN"
                                                upperView={true}
                                                value={this.state.deviceValue}
                                                isMandatory={true}
                                                isValidationIcon={this.state.isDeviceUdidValid}
                                                onpress={() => this.refs.device.setModalVisible(true, "Device UDID/ESN", this.state.inventoryDevice)}
                                            />

                                            {/* <Item floatingLabel>
                                                <Label style={[styles.label, { fontFamily: 'Roboto' }]}>
                                                    Device UDID/ESN<Text style={styles.star}>*</Text>
                                                </Label>
                                                <Input
                                                    style={[styles.value, { fontFamily: 'Roboto' }]}
                                                    value={this.state.deviceUDID}
                                                    onChangeText={(text) => this.setState({ deviceUDID: text, isDeviceChecked: false, isDeviceUdidValid: false })}
                                                    onBlur={this.checkDeviceAssociation}
                                                    keyboardType={'email-address'}
                                                    returnKeyType={'next'}
                                                    blurOnSubmit={false}
                                                    maxLength={38}
                                                    getRef={(input) => { this.deviceudid = input; }}
                                                    onSubmitEditing={() => this._focusNextField('mobile')}
                                                />
                                                <Icon name={ this.state.isDeviceUdidValid ? 'ios-checkmark-circle-outline' : null }
                                                    style={{ fontSize: 20, color: 'green' }} />
                                                <Icon name='md-barcode' type="Ionicons" onPress={() => this.BarCodePage("DeviceUDID")}
                                                    style={{color: 'gray', fontSize: 20}} />
                                            </Item> */}
                                        </View>

                                        {/* <View style={styles.Small_View}>
                                            <UnderlineText
                                                name="Company"
                                                upperView={true}
                                                value={this.state.dropdowns.get(COMPANY_KEY)[0]}
                                                isMandatory={true}
                                                onpress={() => this.openPicker(COMPANY_KEY, this.state.companyList, title[0])}
                                            />
                                        </View> */}

                                        <View style={styles.Small_View}>
                                            <View style={{ flex: 1.4 }}>
                                                <UnderlineText
                                                    name="Vehicle #"
                                                    value={this.state.dropdowns.get(VEHICLE_KEY)[0]}
                                                    isMandatory={true}
                                                    upperView={true}
                                                    onpress={() => this.openPicker(VEHICLE_KEY, this.state.vehicleList, title[1])}
                                                />
                                            </View>
                                            <View style={styles.createVehicleView}>
                                                <Button bordered dark style={{ height: 35 }}
                                                    onPress={() => navigate('CreateVehicle', { deviceid: this.state.deviceUDID })}>
                                                    <Text style={[styles.createVehicle, { fontFamily: 'Roboto', color:colors.PRIMARY, fontSize: 12 }]}>
                                                        CREATE VEHICLE
                                                    </Text>
                                                </Button>
                                            </View>
                                        </View>

                                        <View style={styles.Small_View}>
                                            <UnderlineText
                                                name="Device Type"
                                                isMandatory={true}
                                                upperView={true}
                                                value={this.state.dropdowns.get(DEVICETYPE_KEY)[0]}
                                                onpress={() => this.openPicker(DEVICETYPE_KEY, this.state.deviceType, title[2])}
                                            />
                                        </View>

                                    </View>
                                </View>

                                {/* <View style={[styles.Detail_View, { marginTop: 20 }]}>
                                    <View style={{ width: '94%' }}>
                                        <Text style={[styles.simdetails, { fontFamily: 'Roboto' }]}>Sim Details</Text>
                                    </View>
                                </View> */}

                                <View style={styles.Sub_View}>
                                    <View style={styles.Width_View}>

                                        <View style={[styles.Small_View, { marginTop: 20, marginBottom: 5 }]}>
                                            <Text style={[styles.simdetails, { fontFamily: 'Roboto' }]}>Sim Details</Text>  
                                        </View>

                                        <View style={[styles.Small_View, { marginTop: 5 }]}>
                                            <UnderlineText
                                                name='Country ISD'
                                                isMandatory={true}
                                                upperView={true}
                                                value={this.state.dropdowns.get(ISD_KEY)[0]}
                                                onpress={() => this.openPicker(ISD_KEY, this.state.countryISD, title[4])}
                                            />
                                        </View>

                                        <View style={styles.Small_View}>
                                            <UnderlineText
                                                name="Mobile#"
                                                upperView={true}
                                                value={this.state.simValue}
                                                isMandatory={true}
                                                onpress={() => this.refs.sim.setModalVisible(true, "Sims", this.state.inventorySim)}
                                            />
                                            {/* <Float
                                                placeholder='Mobile'
                                                value={this.state.mobileNumber}
                                                isMandatory={true}
                                                onChangeText={(text) => this.setState({ mobileNumber: text })}
                                                inputStyles={{ width: '100%' }}
                                                returnKeyType={'next'}
                                                keyboardType={'numeric'}
                                                blurOnSubmit={false}
                                                getRef={(input) => { this.mobile = input; }}
                                                onSubmitEditing={() => this._focusNextField('balance')}
                                                // onFocus={this.checkDeviceAssociation}
                                            /> */}
                                        </View>

                                        <View style={[styles.Balance_view, { marginTop: 10 }]}>
                                            <View style={styles.inner_View}>
                                                <Float
                                                    placeholder='Balance'
                                                    value={this.state.balance}
                                                    isMandatory={false}
                                                    onChangeText={(text) => this.setState({ balance: text })}
                                                    inputStyles={{ width: '100%' }}
                                                    returnKeyType={'next'}
                                                    keyboardType={'numeric'}
                                                    blurOnSubmit={false}
                                                    getRef={(input) => { this.balance = input; }}
                                                    onSubmitEditing={() => this._focusNextField('databalance')}
                                                // onFocus={this.scrolldown.bind(this, 'balance')}
                                                />
                                            </View>
                                            <View style={styles.inner_View}>
                                                <Float
                                                    placeholder='Data Balance'
                                                    value={this.state.dataBalance}
                                                    isMandatory={false}
                                                    onChangeText={(text) => this.setState({ dataBalance: text })}
                                                    inputStyles={{ width: '100%' }}
                                                    returnKeyType={'next'}
                                                    keyboardType={'numeric'}
                                                    blurOnSubmit={false}
                                                    getRef={(input) => { this.databalance = input; }}
                                                    onSubmitEditing={() => this._focusNextField('dataplan')}
                                                // onFocus={this.scrolldown.bind(this, 'databalance')}
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.row_Divide}>
                                            <View style={styles.inner_View}>
                                                <Float
                                                    placeholder='Data Plan'
                                                    value={this.state.dataPlan}
                                                    isMandatory={false}
                                                    onChangeText={(text) => this.setState({ dataPlan: text })}
                                                    inputStyles={{ width: '100%' }}
                                                    returnKeyType={'next'}
                                                    keyboardType={'email-address'}
                                                    blurOnSubmit={false}
                                                    getRef={(input) => { this.dataplan = input; }}
                                                    onSubmitEditing={() => this._focusNextField('carrier')}
                                                // onFocus={this.scrolldown.bind(this, 'dataplan')}
                                                />
                                            </View>
                                            <View style={styles.inner_View}>
                                                <Float
                                                    placeholder='Carrier'
                                                    value={this.state.carrier}
                                                    isMandatory={true}
                                                    onChangeText={(text) => this.setState({ carrier: text })}
                                                    inputStyles={{ width: '100%' }}
                                                    returnKeyType={'go'}
                                                    keyboardType={'email-address'}
                                                    blurOnSubmit={false}
                                                    getRef={(input) => { this.carrier = input; }}
                                                    onSubmitEditing={this.onAddGPSDevice}
                                                // onFocus={this.scrolldown.bind(this, 'carrier')}
                                                />
                                            </View>
                                        </View>
                                        <View style={[styles.Small_View, { flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }]}>

                                            <Text style={[styles.createVehicle, { marginBottom: 5 }]}>Data Renewal</Text>

                                            <View style={styles.Date_picker}>
                                                <DatePicker
                                                    style={{ width: '100%' }}
                                                    date={this.state.dataRenewal}
                                                    mode="date"
                                                    placeholder="DD/MM/YYYY"
                                                    format="DD/MM/YYYY"
                                                    //minDate=""
                                                    //maxDate=""
                                                    confirmBtnText="Confirm"
                                                    cancelBtnText="Cancel"
                                                    customStyles={{
                                                        dateIcon: {
                                                            position: 'absolute',
                                                            left: 0,
                                                            top: 4,
                                                            marginLeft: 0
                                                        },
                                                        dateInput: {
                                                            marginLeft: 36
                                                        }
                                                        // ... You can check the source to find the other keys.
                                                    }}
                                                    onDateChange={(date) => { this.setState({ dataRenewal: date }) }}
                                                />
                                            </View>
                                        </View>

                                        <View style={styles.Small_View}>
                                            <View style={styles.button_view}>
                                                <Button style={[styles.button, { backgroundColor: colors.HEADER_COLOR }]}
                                                    onPress={this.onAddGPSDevice}>
                                                    <Text style={{ fontFamily: 'Roboto' }}>Submit</Text>
                                                </Button>
                                            </View>
                                        </View>

                                        {/* <View style={styles.button_view}>
                                            <View style={{ flex: 1, marginRight: 1 }}>
                                                <Button block style={{ backgroundColor: '#d9534f' }}
                                                    onPress={this.onCancel}>
                                                    <Text style={{ color: '#fff', fontFamily: 'Roboto' }}>Cancel</Text>
                                                </Button>
                                            </View>
                                            <View style={{ flex: 1, marginLeft: 1 }}>
                                                <Button block style={{ backgroundColor: '#5cb85c' }}
                                                    onPress={this.onAddGPSDevice}>
                                                    <Text style={{ color: '#fff', fontFamily: 'Roboto' }}>Submit</Text>
                                                </Button>
                                            </View>
                                        </View> */}
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                    <BarCodeModal ref={this.BarmodalReference} getBarValue={(detail) => this.barCodeValue(detail)} />
                    <SinglePicker ref={this.modalRef} selectedValue={(value) => this.OnValueSelect(value)} />
                    <SinglePicker ref={"sim"} selectedValue={(value) => this.selectSim(value)} />
                    <GpsDevicePicker ref={"device"} selectedValue={(value) => this.selectDevice(value)} />
                </View>
        );
    }

    onCancel = () => {
        // this.props.navigation.state.params.onGoBack();
        this.props.navigation.goBack();
    }
}

function mapStateToProps(state) {
    return {
        addGPSDeviceResp: state.addGPSDeviceData,
        gpsDeviceData: state.gpsDeviceData,
        loginResponse: state.loginData,
        vehicleListDatas: state.vehicleListData,
        checkGPSDeviceAssocData: state.checkGPSDeviceAssocData,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchFreeVehicles: (companyId) => dispatch(gpsDeviceActions.freeVehicelList(companyId)),
        addGPSDevice: (gpsdevice) => dispatch(gpsDeviceActions.addGPSDeviceAssociation(gpsdevice)),
        onFetchList: (deviceReq, simReq, companyId) => dispatch(gpsDeviceActions.gpsdeviceRequest(deviceReq, simReq, companyId)),
        checkDeviceAssociation: (deviceUDID) => dispatch(gpsDeviceActions.checkGPSDeviceAssociation(deviceUDID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GPSDeviceForm)