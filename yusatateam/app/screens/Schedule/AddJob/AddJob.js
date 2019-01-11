import React from 'react';
import { View, KeyboardAvoidingView, BackHandler, ScrollView } from 'react-native';
import { Button, Text, CheckBox } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import moment from 'moment';

import { Toolbar, Float, UnderlineText, Activityindication, SinglePicker } from '../../../components';
import styles from './styles';
import { serviceActions } from '../../../redux/actions';
import { globalStyles, colors } from '../../../styles';
import functions from '../../../common/functions';

const COMPANY_KEY = 'COMPANY';
const COMPANY_KEY_VALUE = 'Select company';

const VEHICLE_KEY = 'VEHICLE';
const VEHICLE_KEY_VALUE = 'Select vehicle';

const SERVICE_KEY = 'SERVICE_TYPE';
const SERVICE_VALUE = 'Select sevice type';

const TECHNICIAN_KEY = 'TECHNICIAN_KEY';
const TECHNICIAN_VALUE = 'Select Technician';

export class AddJob extends React.Component {
    constructor(props) {
        super(props);
        moment.locale('en');
        this.state = {
            isLoading: true,
            data: [],
            location: '',
            radio: 'N',
            techArray: [],
            companyArray: [],
            vehicleArray: [],
            serviceTypeArray: [],
            dropdowns: new Map(),
            Cname: '',
            Ccontact: '',
            amount: '',
            Training: 'N',
            ServiceName: '',
            dataRenewal: '',
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
            if (nextProps.JobcompanyData.jobvehicle.results) {
                const vehicletype = nextProps.JobcompanyData.jobvehicle.results;
                for (var i = 0; i < vehicletype.length; i++) {
                    var obj = { "label": vehicletype[i].value, "value": vehicletype[i].key };
                    vehicleArray.push(obj);
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
            this.setState({ vehicleArray: vehicleArray, serviceTypeArray: serviceArray,techArray:techArray })
        }
    }

    componentDidMount() {
        const dropdowns = new Map(this.state.dropdowns);
        //dropdowns.set(COMPANY_KEY, [COMPANY_KEY_VALUE, null]);
        dropdowns.set(VEHICLE_KEY, [VEHICLE_KEY_VALUE, null]);
        dropdowns.set(SERVICE_KEY, [SERVICE_VALUE, null]);
        dropdowns.set(TECHNICIAN_KEY, [TECHNICIAN_VALUE, null])
        this.setState({ dropdowns: dropdowns });

        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        this.props.addjobcomapany();
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
        dropdowns.set(flag, [item.label, item.value]);
        this.setState({ dropdowns: dropdowns });
    }

    onvalidation() {
        if (
            this.state.dropdowns.get(VEHICLE_KEY)[1]
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
                //"companyId": this.state.dropdowns.get(COMPANY_KEY)[1],
                "customerMobileNumber": this.state.Ccontact,
                "customerName": this.state.Cname,
                "orderCode": "TPI_SERVICE",
                "serviceDate": this.state.dataRenewal,
                "servicePerson": this.state.dropdowns.get(TECHNICIAN_KEY)[0],
                "servicePersonId": this.state.dropdowns.get(TECHNICIAN_KEY)[1],
                "serviceStatus": "ENTERED",
                "serviceType": this.state.dropdowns.get(SERVICE_KEY)[1],
                "training": this.state.Training,
                "vehicleId": [this.state.dropdowns.get(VEHICLE_KEY)[1]],
            }
            if (this.state.radio && this.state.amount !== '') {
                item["amountToCollect"] = this.state.amount;
            }
            if (this.state.ServiceName !== '') {
                item["serviceName"] = this.state.serviceName;
            }
            alert(JSON.stringify(item));
            //this.props.createServices(item);
        } else {
            functions.showToast('Please fill all required fields', 'warning');
        }
    }

    render() {
        const { goBack } = this.props.navigation;
        const { navigate } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={{ backgroundColor: '#fff', flex: 1 }}>
                    <Toolbar title='Create Service' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                    />

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
                                                    value={this.state.dropdowns.get(VEHICLE_KEY)[0]}
                                                    isMandatory={true}
                                                    upperView={true}
                                                    onpress={() => { this.openPicker(VEHICLE_KEY, this.state.vehicleArray, 'Vehicle') }}
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
                                            // rightIcon='google-maps'
                                            // rightIconType="MaterialCommunityIcons"
                                            // rightIconStyle={{ fontSize: 24, color: 'red' }}
                                            // rightIconPress={() => navigate('Mapview')}
                                            />
                                        </View>

                                        <View style={styles.Small_View}>
                                            <Float
                                                placeholder='Service Name'
                                                value={this.state.ServiceName}
                                                returnKeyType={'next'}
                                                keyboardType={'default'}
                                                blurOnSubmit={false}
                                                isMandatory={false}
                                                onChangeText={(text) => this.setState({ ServiceName: text })}
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
                                                    //showTime = {{ user12hours: true }}

                                                    mode="datetime"
                                                    placeholder="MM/DD/YYYY"
                                                    showTime={{ use12Hours: true, format: "HH:mm:ss a" }}
                                                    format="MM/DD/YYYY HH:mm:ss a"
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
                                            <Float
                                                placeholder='Customer Name'
                                                value={this.state.Cname}
                                                returnKeyType={'next'}
                                                keyboardType={'default'}
                                                blurOnSubmit={false}
                                                isMandatory={true}
                                                onChangeText={(text) => this.setState({ Cname: text })}
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
                                                inputStyles={{ width: '100%' }}
                                            />
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
                                                    <Text style={[styles.label, { marginLeft: 20, fontFamily: 'Roboto' }]}>YES</Text>
                                                </View>
                                                <View style={{ flex: 1, marginLeft: 5, flexDirection: 'row' }}>
                                                    <CheckBox color={colors.HEADER_COLOR}
                                                        checked={this.state.Training === 'N'}
                                                        onPress={() => { this.setState({ Training: 'N' }) }} />
                                                    <Text style={[styles.label, { marginLeft: 20, fontFamily: 'Roboto' }]}>NO</Text>
                                                </View>
                                            </View>
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
                                                    <Text style={[styles.label, { marginLeft: 20, fontFamily: 'Roboto' }]}>YES</Text>
                                                </View>
                                                <View style={{ flex: 1, marginLeft: 5, flexDirection: 'row' }}>
                                                    <CheckBox color={colors.HEADER_COLOR}
                                                        checked={this.state.radio === 'N'}
                                                        onPress={() => { this.setState({ radio: 'N' }) }} />
                                                    <Text style={[styles.label, { marginLeft: 20, fontFamily: 'Roboto' }]}>NO</Text>
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

                                        <View style={styles.button_view}>
                                            {/* <View style={{ flex: 1, marginRight: 1 }}>
                                                <Button block style={{ backgroundColor: '#d9534f' }} onPress={this.onCancel} >
                                                    <Text style={{ color: '#fff', fontFamily: 'Roboto' }}>Cancel</Text>
                                                </Button>
                                            </View> */}
                                            <View style={{ flex: 1, marginLeft: 1 }}>
                                                <Button block style={{ backgroundColor: colors.HEADER_COLOR }}
                                                    onPress={this.onSubmitAddService}>
                                                    <Text style={{ color: '#fff', fontFamily: 'Roboto' }}>Submit</Text>
                                                </Button>
                                            </View>
                                        </View>

                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                    <SinglePicker ref={this.modalref} selectedValue={(item) => this.selectedValue(item)} />
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
        JobcompanyData: state.serviceCompanyData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addjobcomapany: () => dispatch(serviceActions.companyRequest()),
        createServices: (createdata) => dispatch(serviceActions.createJobRequests(createdata))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddJob)


