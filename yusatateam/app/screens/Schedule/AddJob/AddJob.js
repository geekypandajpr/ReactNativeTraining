import React from 'react';
import { View, KeyboardAvoidingView, BackHandler, ScrollView } from 'react-native';
import { Button, Text, CheckBox } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
var momentTz = require('moment-timezone');
import moment from 'moment';

import { Toolbar, Float, UnderlineText, Activityindication, SinglePicker, MultiPicker } from '../../../components';
import styles from './styles';
import { serviceActions } from '../../../redux/actions';
import { globalStyles, colors, typeCode } from '../../../styles';
import functions from '../../../common/functions';

const VEHICLE_KEY = 'VEHICLE';
const VEHICLE_KEY_VALUE = 'Select vehicle';

const SERVICE_KEY = 'SERVICE_TYPE';
const SERVICE_VALUE = 'Select sevice type';

const TECHNICIAN_KEY = 'TECHNICIAN_KEY';
const TECHNICIAN_VALUE = 'Select Technician';

export class AddJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            location: '',
            radio: 'N',
            techArray: [],
            companyArray: [],
            vehicleArray: [],
            vehicleMap: new Map(),
            selectedVehicleArray: [],
            selectedVehiclesName: '',
            serviceTypeArray: [],
            dropdowns: new Map(),
            Cname: '',
            Ccontact: '',
            amount: '',
            Training: 'N',
            serviceName: '',
            dataRenewal: '',
            timeInterval: '',
            timeZoneId: ''
        }
        this.flag = ''
        this.modalref = React.createRef();
        this.openPicker = this.openPicker.bind(this);
        this.onSubmitAddService = this.onSubmitAddService.bind(this);
    };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false });
    }

    componentWillReceiveProps(nextProps) {
        /**vehicle list */

        if (this.props.JobcompanyData !== nextProps.JobcompanyData) {
            const vehicleArray = [];
            const serviceArray = [];
            const techArray = [];
            const newMap = new Map(this.state.vehicleMap);

            if (nextProps.JobcompanyData.jobvehicle.results) {
                const vehicletype = nextProps.JobcompanyData.jobvehicle.results;
                for (var i = 0; i < vehicletype.length; i++) {
                    var obj = { "label": vehicletype[i].value, "value": vehicletype[i].key };
                    vehicleArray.push(obj);
                    newMap.set(vehicletype[i].key, vehicletype[i].value);
                }
            }

            if (nextProps.JobcompanyData.serviceType.results) {
                const ServiceTypeValue = nextProps.JobcompanyData.serviceType.results;
                console.log(ServiceTypeValue);
                for (var i = 0; i < ServiceTypeValue.length; i++) {
                    var obj = { "label": ServiceTypeValue[i].value, "value": ServiceTypeValue[i].key };
                    serviceArray.push(obj);
                }
            }

            if (nextProps.JobcompanyData.technician.results) {
                const techtypevalue = nextProps.JobcompanyData.technician.results;
                for (var i = 0; i < techtypevalue.length; i++) {
                    var obj = { "label": techtypevalue[i].value, "value": techtypevalue[i].key };
                    techArray.push(obj);
                }
            }

            this.setState({
                vehicleArray: vehicleArray,
                serviceTypeArray: serviceArray,
                techArray: techArray,
                vehicleMap: newMap
            });
        }
    }

    componentDidMount() {
        const dropdowns = new Map(this.state.dropdowns);
        dropdowns.set(VEHICLE_KEY, [VEHICLE_KEY_VALUE, null]);
        dropdowns.set(SERVICE_KEY, [SERVICE_VALUE, null]);
        dropdowns.set(TECHNICIAN_KEY, [TECHNICIAN_VALUE, null])
        this.setState({
            dropdowns: dropdowns,
            timeInterval: this.props.loginResponse.data.results.profileValue.timeInterval,
            timeZoneId: this.props.loginResponse.data.results.profileValue.timeZoneId
        });

        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        const item = {
            "userRole": "TECHNICIAN"
        }
        this.props.addjobcomapany(item);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    openPicker(keys, list, title) {
        this.flag = keys;
        this.modalref.current.setModalVisible(true, title, list);
    }

    selectedValue(item) {
        const dropdowns = new Map(this.state.dropdowns);
        dropdowns.set(this.flag, [item.label, item.value]);
        this.setState({ dropdowns: dropdowns });
    }

    onvalidation() {
        if (
            this.state.selectedVehicleArray.length != 0
            && this.state.dropdowns.get(SERVICE_KEY)[1]
            && this.state.dropdowns.get(TECHNICIAN_KEY)[1]
            && this.state.Cname !== ''
            && this.state.Ccontact !== ''
            && this.state.dataRenewal !== ''
            && this.state.location !== ''
        ) {
            return true;
        }
        return false;
    }

    onSubmitAddService() {
        if (this.onvalidation()) {
            const item = {
                "address": this.state.location,
                "cashOnDelivery": this.state.radio,
                "customerMobileNumber": this.state.Ccontact,
                "customerName": this.state.Cname,
                "orderCode": typeCode.SERVICE_ORDER_CODE,
                "serviceDate": this.state.dataRenewal,
                // "servicePerson": "Sadaiv Panchal",
                // "servicePersonId": 115565465,
                "servicePerson": this.state.dropdowns.get(TECHNICIAN_KEY)[0],
                "servicePersonId": this.state.dropdowns.get(TECHNICIAN_KEY)[1],
                "serviceStatusId": "8670131", //ENTERED Status Id
                "serviceTypeId": this.state.dropdowns.get(SERVICE_KEY)[1],
                "training": this.state.Training,
                "vehicleId": this.state.selectedVehicleArray
            }
            if (this.state.radio === 'Y' && this.state.amount !== '') {
                item["amountToCollect"] = this.state.amount;
            } else if(this.state.radio === 'Y' && this.state.amount === '') {
                functions.showToast('Please fill all required fields', 'warning');
                return false;
            }
            if (this.state.serviceName !== '') {
                item["serviceName"] = this.state.serviceName;
            }
            // alert(JSON.stringify(item));
            this.props.createServices(item);
        } else {
            functions.showToast('Please fill all required fields', 'warning');
        }
    }

    onMultipleValueSelected(selectedMap) {
        var selectedVehicleArray = [];
        var selectedVehiclesName = "";
        for(var [key, value] of selectedMap) {
            if(value) {
                selectedVehiclesName = selectedVehiclesName + ", " + this.state.vehicleMap.get(key);
                selectedVehicleArray.push(key);
            }
        }
        selectedVehiclesName = selectedVehiclesName.slice(1);
        this.setState({ selectedVehicleArray: selectedVehicleArray, selectedVehiclesName: selectedVehiclesName });
    }

    _focusNextField(id) { this[id]._root.focus(); }

    render() {
        const { goBack } = this.props.navigation;
        const { navigate } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={{ backgroundColor: '#fff', flex: 1 }}>
                    <Toolbar title='Create Service' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()} />
                    <Activityindication visible={this.props.createJobData.isLoading} />
                    <Activityindication visible={this.props.JobcompanyData.isLoading} />

                    <KeyboardAvoidingView behavior='padding' enabled style={globalStyles.keyboardAvoiding}>
                        <ScrollView keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}>
                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <View style={styles.Sub_View}>
                                    <View style={styles.Width_View}>

                                        {/* <View style={styles.Small_View}>
                                            <UnderlineText
                                                name="Company"
                                                upperView={true}
                                                value={this.state.dropdowns.get(COMPANY_KEY)[0]}
                                                isMandatory={true}
                                                onpress={() => { this.openPicker(COMPANY_KEY, this.state.vehicleArray, 'Company') }}
                                            />
                                        </View> */}

                                        <View style={styles.Small_View}>
                                            <View style={{ flex: 1.4 }}>
                                                <UnderlineText
                                                    name="Vehicle #"
                                                    value={this.state.selectedVehicleArray.length != 0 ? this.state.selectedVehiclesName : "Select Vehicle"}
                                                    isMandatory={true}
                                                    upperView={true}
                                                    onpress={() => {
                                                        this.refs.multipicker.setModalVisible(true,'Vehicle', this.state.vehicleArray) }
                                                    }
                                                />
                                            </View>
                                        </View>

                                        <View style={styles.Small_View}>
                                            <UnderlineText
                                                name="Service Type"
                                                isMandatory={true}
                                                upperView={true}
                                                value={this.state.dropdowns.get(SERVICE_KEY)[0]}
                                                onpress={() => this.openPicker(SERVICE_KEY, this.state.serviceTypeArray, 'Service Type')}
                                            />
                                        </View>

                                        <View style={styles.Small_View}>
                                            <UnderlineText
                                                name="Technician"
                                                upperView={true}
                                                value={this.state.dropdowns.get(TECHNICIAN_KEY)[0]}
                                                isMandatory={true}
                                                onpress={() => this.openPicker(TECHNICIAN_KEY, this.state.techArray, 'Technician')}
                                            />
                                        </View>

                                        <View style={styles.Small_View}>
                                            <Float
                                                placeholder='Location'
                                                value={this.state.location}
                                                returnKeyType={'next'}
                                                keyboardType={'default'}
                                                blurOnSubmit={false}
                                                isMandatory={true}
                                                onChangeText={(text) => this.setState({ location: text })}
                                                inputStyles={{ width: '100%' }}
                                                getRef={(input) => { this.address = input }}
                                                onSubmitEditing={() => { this._focusNextField('ServiceName') }}
                                            // rightIcon='google-maps'
                                            // rightIconType="MaterialCommunityIcons"
                                            // rightIconStyle={{ fontSize: 24, color: 'red' }}
                                            // rightIconPress={() => navigate('Mapview')}
                                            />
                                        </View>

                                        <View style={styles.Small_View}>
                                            <Float
                                                placeholder='Service Name'
                                                value={this.state.serviceName}
                                                returnKeyType={'next'}
                                                keyboardType={'default'}
                                                blurOnSubmit={false}
                                                isMandatory={false}
                                                onChangeText={(text) => this.setState({ serviceName: text })}
                                                getRef={(input) => { this.ServiceName = input }}
                                                onSubmitEditing={() => { this._focusNextField('CustomerName') }}
                                                inputStyles={{ width: '100%' }}
                                            />
                                        </View>

                                        <View style={[styles.Small_View, { flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }]}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={[styles.label, { marginBottom: 10, fontFamily: 'Roboto' }]}>Schdule date and Time</Text>
                                                <Text style={styles.star}>*</Text>
                                            </View>

                                            <View style={styles.Date_picker}>
                                                <DatePicker
                                                    style={{ width: '100%' }}
                                                    date={this.state.dataRenewal}
                                                    mode="datetime"
                                                    placeholder="DD/MM/YYYY HH:mm:ss a"
                                                    // showTime={{ use12Hours: true, format: "HH:mm:ss a" }}
                                                    format="DD/MM/YYYY hh:mm:ss a"
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
                                                    onDateChange={(date) => {this.setDateTime(date) }}
                                                />
                                            </View>
                                        </View>

                                        <View style={styles.Small_View}>
                                            <Float
                                                placeholder='Customer Name'
                                                value={this.state.Cname}
                                                returnKeyType={'next'}
                                                keyboardType={'default'}
                                                blurOnSubmit={false}
                                                isMandatory={true}
                                                onChangeText={(text) => this.setState({ Cname: text })}
                                                getRef={(input) => { this.CustomerName = input }}
                                                onSubmitEditing={() => { this._focusNextField('CustomerContact') }}
                                                inputStyles={{ width: '100%' }}
                                            />
                                        </View>

                                        <View style={styles.Small_View}>
                                            <Float
                                                placeholder='Customer Contact'
                                                value={this.state.Ccontact}
                                                returnKeyType={'next'}
                                                keyboardType={'numeric'}
                                                blurOnSubmit={false}
                                                isMandatory={true}
                                                onChangeText={(text) => this.setState({ Ccontact: text })}
                                                getRef={(input) => { this.CustomerContact = input }}
                                                inputStyles={{ width: '100%' }}
                                            />
                                        </View>

                                        <View style={{ width: '100%', justifyContent: 'flex-start', marginTop: 10 }}>
                                            <View >
                                                <Text style={[styles.label, { fontFamily: 'Roboto' }]}>Payment Mode : COD</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', flex: 1, marginTop: 10 }}>
                                                <View style={{ flex: 1, marginLeft: 5, flexDirection: 'row' }}>
                                                    <CheckBox color={colors.HEADER_COLOR}
                                                        checked={this.state.radio === 'Y'}
                                                        onPress={() => { this.setState({ radio: 'Y' }) }} />
                                                    <Text style={[styles.label, { marginLeft: 20, fontFamily: 'Roboto', }]}>Yes</Text>
                                                </View>
                                                <View style={{ flex: 1, marginLeft: 5, flexDirection: 'row' }}>
                                                    <CheckBox color={colors.HEADER_COLOR}
                                                        checked={this.state.radio === 'N'}
                                                        onPress={() => { this.setState({ radio: 'N' }) }} />
                                                    <Text style={[styles.label, { marginLeft: 20, fontFamily: 'Roboto' }]}>No</Text>
                                                </View>
                                            </View>
                                            {this.state.radio === 'Y' ?
                                                <View style={styles.Small_View}>
                                                    <Float
                                                        placeholder='Amount To Collect'
                                                        value={this.state.amount}
                                                        returnKeyType={'next'}
                                                        keyboardType={'numeric'}
                                                        blurOnSubmit={false}
                                                        isMandatory={true}
                                                        onChangeText={(text) => this.setState({ amount: text })}
                                                        inputStyles={{ width: '100%' }}
                                                    />
                                                </View>
                                            : null}
                                        </View>

                                        <View style={{ width: '100%', justifyContent: 'flex-start', marginTop: 10, }}>
                                            <View >
                                                <Text style={[styles.label, { fontFamily: 'Roboto' }]}>Training</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', flex: 1, marginTop: 10 }}>
                                                <View style={{ flex: 1, marginLeft: 5, flexDirection: 'row' }}>
                                                    <CheckBox color={colors.HEADER_COLOR}
                                                        checked={this.state.Training === 'Y'}
                                                        onPress={() => { this.setState({ Training: 'Y' }) }} />
                                                    <Text style={[styles.label, { marginLeft: 20, fontFamily: 'Roboto' }]}>Yes</Text>
                                                </View>
                                                <View style={{ flex: 1, marginLeft: 5, flexDirection: 'row' }}>
                                                    <CheckBox color={colors.HEADER_COLOR}
                                                        checked={this.state.Training === 'N'}
                                                        onPress={() => { this.setState({ Training: 'N' }) }} />
                                                    <Text style={[styles.label, { marginLeft: 20, fontFamily: 'Roboto' }]}>No</Text>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={styles.button_view}>
                                            <Button style={styles.button}
                                                onPress={this.onSubmitAddService}>
                                                <Text style={{ color: '#fff', fontFamily: 'Roboto' }}>Submit</Text>
                                            </Button>
                                        </View>

                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                    <SinglePicker ref={this.modalref} selectedValue={(item) => this.selectedValue(item)} />
                    <MultiPicker ref="multipicker" multipleValueSelected={(item) => this.onMultipleValueSelected(item)}/>
                </View>
        );
    }

    setDateTime = (date) => {
        this.setState({ dataRenewal: date });
        // const newDate = date + this.state.timeInterval;
        // console.log(newDate);
        // this.setState({ dataRenewal: moment(newDate, "DD/MM/YYYY hh:mm:ss Z").utc().format("DD/MM/YYYY hh:mm:ss a") });
    }   

    onCancel = () => {
        // this.props.navigation.state.params.onGoBack();
        this.props.navigation.goBack();
    }
}
function mapStateToProps(state) {
    return {
        loginResponse: state.loginData,
        JobcompanyData: state.serviceCompanyData,
        createJobData: state.createJobData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addjobcomapany: (userRole) => dispatch(serviceActions.companyRequest(userRole)),
        createServices: (createdata) => dispatch(serviceActions.createJobRequests(createdata))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddJob)


