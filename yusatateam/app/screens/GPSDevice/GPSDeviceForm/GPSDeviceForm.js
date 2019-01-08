import React from 'react';
import { View, ScrollView, BackHandler, Keyboard } from 'react-native';
import { Item, Label, Input, Button, Text, Icon } from 'native-base';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

import { Toolbar, Float, UnderlineText, Activityindication } from '../../../components';
import styles from './styles';
import { GpsModal } from '../GpsModal/GpsModal';
import { userActions } from '../../../redux/actions';
import functions from '../../../common/functions';

const title = [
    'Company',
    'Vehicles',
    'DeviceType',
    'Subskey',
    'ISD'
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
        }
        this.flag = '';
        this.modalRef = React.createRef();
        this.modalReference = React.createRef();
        this.OnValueSelect = this.OnValueSelect.bind(this);
        this.openPicker = this.openPicker.bind(this);
        this.onAddGPSDevice = this.onAddGPSDevice.bind(this);
        this.checkDeviceAssociation = this.checkDeviceAssociation.bind(this);
    };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false });
    }

    componentDidMount() {
        this.keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardDidHide.bind(this));
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        this.props.onFetchList();
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        this.keyboardDidHideListener.remove()
    }

    /**This method calls when keyboard disappear */
    keyboardDidHide(e) { this.refs.scrollView.scrollTo({y: 0}); }

    /**Scroll down the screen */
    scrolldown = (ref) => {
        const self = this;
        this.refs[ref].measure((ox, oy, width, height) => {
            console.log(oy);
            self.refs.scrollView.scrollTo({y: oy + 200});
        });
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
        this.setState({ dropdowns: dropdowns });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.gpsDeviceData !== nextProps.gpsDeviceData) {
            /**Country ISD */
            var defaultISD = this.props.loginResponse.data.results.countryIsdCode;

            /**Compnay Name and Company Id */
            const companyName = this.props.loginResponse.data.results.companyName;
            const companyId = this.props.loginResponse.data.results.companyId;

            /**Set default Company Name and Id */
            const dropdowns = new Map(this.state.dropdowns);
            dropdowns.set(COMPANY_KEY, [COMPANY_KEY_VALUE, null]); /**Companies Dropdown */
            dropdowns.set(VEHICLE_KEY, [VEHICLE_KEY_VALUE, null]); /**Vehicles Dropdown */
            dropdowns.set(DEVICETYPE_KEY, [DEVICETYPE_KEY_VALUE, null]); /**Device Type Dropdown */
            dropdowns.set(ISD_KEY, [ISD_KEY_VALUE, null]); /**Country ISD Dropdown */
            dropdowns.set(COMPANY_KEY, [companyName, companyId]);

            /**Device Type */
            const deviceTypeArray = [];
            if (nextProps.gpsDeviceData.deviceType.results) {
                const deviceType = nextProps.gpsDeviceData.deviceType.results;
                for (var i = 0; i < deviceType.length; i++) {
                    var obj = { "label": deviceType[i].value, "value": deviceType[i].key };
                    deviceTypeArray.push(obj);
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

            this.setState({
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
            if (this.state.isDeviceChecked)
                this.setState({ isDeviceUdidValid: nextProps.checkGPSDeviceAssocData.isValid });
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
                "balance": this.state.balance,
                "carrier": this.state.carrier,
                "countryID": this.state.dropdowns.get(ISD_KEY)[1],
                "dataBalance": this.state.dataBalance,
                "dataPlan": this.state.dataPlan,
                "dataValidity": this.state.dataRenewal,
                "departmentId": this.props.loginResponse.data.results.departmentId,
                // "deviceId": 0,
                "deviceTypeId": this.state.dropdowns.get(DEVICETYPE_KEY)[1],
                "deviceUdid": this.state.deviceUDID,
                "simno": this.state.mobileNumber,
                "vehicleId": this.state.dropdowns.get(VEHICLE_KEY)[1]
            }
            // alert(JSON.stringify(item));
            this.props.addGPSDevice(item);
        } else {
            functions.showToast('Please fill all required fields', 'warning');
        }

    }

    /**Function to validate mandatory fields for Add GPS Device API*/
    checkRequiredFields() {
        if (this.state.isDeviceUdidValid
            && this.state.deviceUDID !== ''
            && this.state.dropdowns.get(VEHICLE_KEY)[1]
            && this.state.dropdowns.get(DEVICETYPE_KEY)[1]
            && this.state.dropdowns.get(ISD_KEY)[1]
            && this.state.mobileNumber !== ''
            && this.state.balance !== ''
            && this.state.dataBalance !== ''
            && this.state.dataPlan !== ''
            && this.state.carrier !== ''
            && this.state.dataRenewal !== '') {
            return true
        }
        return false;
    }

    /**This function will check that whether GPS device is associated with any vehicle or not
     * @param DeviceUDID
     */
    checkDeviceAssociation() {
        if (this.state.deviceUDID === '') {
            functions.showToast('Please fill device UDID', 'warning');
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

                    <View style={{ flex: 1 }}>
                        <ScrollView keyboardShouldPersistTaps="always" ref="scrollView">
                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <View style={styles.Sub_View}>
                                    <View style={styles.Width_View}>

                                        <View style={styles.Small_View}>
                                            <Item floatingLabel>
                                                {/* <Icon name='mobile' type='FontAwesome' style={{ fontSize: 30, color: 'gray' }} /> */}
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
                                                    getRef={(input) => { this.deviceudid = input; }}
                                                    onSubmitEditing={() => this._focusNextField('mobile')}
                                                />

                                                {this.state.isDeviceUdidValid ?
                                                    <Icon name='ios-checkmark-circle-outline' style={{ fontSize: 20, color: 'green' }} />
                                                    :
                                                    <Icon name='ios-close-circle-outline' style={{ fontSize: 20, color: 'red' }} />
                                                }
                                            </Item>
                                        </View>

                                        <View style={styles.Small_View}>
                                            <UnderlineText
                                                name="Company"
                                                upperView={true}
                                                value={this.state.dropdowns.get(COMPANY_KEY)[0]}
                                                isMandatory={true}
                                                onpress={() => this.openPicker(COMPANY_KEY, this.state.companyList, title[0])}
                                            />
                                        </View>

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
                                                <Button bordered dark style={{ height: 35, borderColor: 'gray' }}
                                                    onPress={() => navigate('CreateVehicle', { deviceid: this.state.deviceUDID })}>
                                                    <Text uppercase={false} style={[styles.createVehicle, { fontFamily: 'Roboto' }]}>Create Vehicle</Text>
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

                                <View style={[styles.Detail_View, { marginTop: 20 }]}>
                                    <View style={{ width: '94%' }}>
                                        <Text style={[styles.simdetails, { fontFamily: 'Roboto' }]}>Sim Details</Text>
                                    </View>
                                </View>

                                <View style={styles.Sub_View}>
                                    <View style={styles.Width_View}>

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
                                            <Float
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
                                                onFocus={this.scrolldown.bind(this, 'mobile')}
                                            />
                                        </View>

                                        <View style={[styles.Balance_view, { marginTop: 10 }]}>
                                            <View style={styles.inner_View}>
                                                <Float
                                                    placeholder='Balance'
                                                    value={this.state.balance}
                                                    isMandatory={true}
                                                    onChangeText={(text) => this.setState({ balance: text })}
                                                    inputStyles={{ width: '100%' }}
                                                    returnKeyType={'next'}
                                                    keyboardType={'numeric'}
                                                    blurOnSubmit={false}
                                                    getRef={(input) => { this.balance = input; }}
                                                    onSubmitEditing={() => this._focusNextField('databalance')}
                                                    onFocus={this.scrolldown.bind(this, 'balance')}
                                                />
                                            </View>
                                            <View style={styles.inner_View}>
                                                <Float
                                                    placeholder='Data Balance'
                                                    value={this.state.dataBalance}
                                                    isMandatory={true}
                                                    onChangeText={(text) => this.setState({ dataBalance: text })}
                                                    inputStyles={{ width: '100%' }}
                                                    returnKeyType={'next'}
                                                    keyboardType={'numeric'}
                                                    blurOnSubmit={false}
                                                    getRef={(input) => { this.databalance = input; }}
                                                    onSubmitEditing={() => this._focusNextField('dataplan')}
                                                    onFocus={this.scrolldown.bind(this, 'databalance')}
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.row_Divide}>
                                            <View style={styles.inner_View}>
                                                <Float
                                                    placeholder='Data plan'
                                                    value={this.state.dataPlan}
                                                    isMandatory={true}
                                                    onChangeText={(text) => this.setState({ dataPlan: text })}
                                                    inputStyles={{ width: '100%' }}
                                                    returnKeyType={'next'}
                                                    keyboardType={'email-address'}
                                                    blurOnSubmit={false}
                                                    getRef={(input) => { this.dataplan = input; }}
                                                    onSubmitEditing={() => this._focusNextField('carrier')}
                                                    onFocus={this.scrolldown.bind(this, 'dataplan')}
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
                                                    onFocus={this.scrolldown.bind(this, 'carrier')}
                                                />
                                            </View>
                                        </View>
                                        <View style={[styles.Small_View, { flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }]}>

                                            <Text style={[styles.createVehicle, { marginBottom: 5 }]}>Data renewal</Text>

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

                                        <View style={styles.button_view}>
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
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>


                    <GpsModal ref={this.modalRef} selectedValue={(value) => this.OnValueSelect(value)} />
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
        checkGPSDeviceAssocData: state.checkGPSDeviceAssocData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addGPSDevice: (gpsdevice) => dispatch(userActions.addGPSDeviceAssociation(gpsdevice)),
        onFetchList: () => dispatch(userActions.gpsdeviceRequest()),
        checkDeviceAssociation: (deviceUDID) => dispatch(userActions.checkGPSDeviceAssociation(deviceUDID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GPSDeviceForm)