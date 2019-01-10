import React from 'react';
import { View, KeyboardAvoidingView, BackHandler, ScrollView } from 'react-native';
import { Button, Text, Radio, CheckBox } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { AppLoading } from 'expo';
import { connect } from 'react-redux'

import { Toolbar, Float, UnderlineText, Activityindication, SinglePicker } from '../../../components';
import styles from './styles';
import { serviceActions, userActions } from '../../../redux/actions';
import { globalStyles } from '../../../styles';
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
        this.state = {
            isLoading: true,
            data: [],
            location: '',
            radio: false,
            technician: [],
            companyArray: [],
            vehicleArray: [],
            serviceTypeArray: [],
            dropdowns: new Map(),
            Cname: '',
            Ccontact: '',
            amount: '',
            Training: false,
            ServiceName: '',

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
        if (this.props.JobVehicleData !== nextProps.JobVehicleData) {
            const vehicleArray = [];
            if (nextProps.JobVehicleData.jobvehicle.results) {
                const vehicletype = nextProps.JobVehicleData.jobvehicle.results;
                for (var i = 0; i < vehicletype.length; i++) {
                    var obj = { "label": vehicletype[i].value, "value": vehicletype[i].key };
                    vehicleArray.push(obj);
                }
            }
            this.setState({ vehicleArray: vehicleArray })
        }

        if (this.props.JobcompanyData !== nextProps.JobcompanyData) {
            const companyArray = [];
            if (nextProps.JobcompanyData.company.results) {
                const vehicletype = nextProps.JobcompanyData.company.results;
                for (var i = 0; i < vehicletype.length; i++) {
                    var obj = { "label": vehicletype[i].value, "value": vehicletype[i].key };
                    companyArray.push(obj);
                }
            }

            if (nextProps.JobcompanyData.serviceType.results) {
                const vehicletype = nextProps.JobcompanyData.serviceType.results;
                for (var i = 0; i < vehicletype.length; i++) {
                    var obj = { "label": vehicletype[i].value, "value": vehicletype[i].key };
                    serviceArray.push(obj);
                }
            }

            if (nextProps.JobcompanyData.technician.results) {
                const vehicletype = nextProps.JobcompanyData.technician.results;
                for (var i = 0; i < vehicletype.length; i++) {
                    var obj = { "label": vehicletype[i].value, "value": vehicletype[i].key };
                    techArray.push(obj);
                }
            }
            this.setState({ companyArray: companyArray, serviceTypeArray: serviceArray, technician: techArray })
        }
    }

    componentDidMount() {
        const dropdowns = new Map(this.state.dropdowns);
        dropdowns.set(COMPANY_KEY, [COMPANY_KEY_VALUE, null]);
        dropdowns.set(VEHICLE_KEY, [VEHICLE_KEY_VALUE, null]);
        dropdowns.set(SERVICE_KEY, [SERVICE_VALUE, null]);
        dropdowns.set(TECHNICIAN_KEY, [TECHNICIAN_VALUE, null])
        this.setState({ dropdowns: dropdowns });

        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        this.props.addJobVehicle();
        //this.props.addjobcomapany();
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
        if (this.state.dropdowns.get(COMPANY_KEY)[1]
            && this.state.dropdowns.get(VEHICLE_KEY)[1]
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
                "companyId": this.state.dropdowns.get(COMPANY_KEY)[1],
                "vehicleId": [this.state.dropdowns.get(VEHICLE_KEY)[1]],
                "serviceType": this.state.dropdowns.get(SERVICE_KEY)[1],
                "servicePerson": this.state.dropdowns.get(TECHNICIAN_KEY)[1],
                "customerName": this.state.Cname,
                "customerMobileNumber": this.state.Ccontact,
                "address": this.state.location,
                "serviceDate": this.state.dataRenewal,
                "cashOnDelivery": this.state.radio,
                "orderCode": "TPI_SERVICE",
                "serviceStatus": "ENTERED",
                "training": this.state.Training
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

                                        <View style={styles.Small_View}>
                                            <UnderlineText
                                                name="Company"
                                                upperView={true}
                                                value={this.state.dropdowns.get(COMPANY_KEY)[0]}
                                                isMandatory={true}
                                                onpress={() => { this.openPicker(COMPANY_KEY, this.state.companyArray, 'Company') }}
                                            />
                                        </View>

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
                                                onpress={() => this.openPicker(TECHNICIAN_KEY, this.state.technician, 'Technician')}
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
                                                keyboardType={'numeric'}
                                                blurOnSubmit={false}
                                                isMandatory={true}
                                                onChangeText={(text) => this.setState({ ServiceName: text })}
                                                inputStyles={{ width: '100%' }}
                                            />
                                        </View>

                                        <View style={[styles.Small_View, { flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }]}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={[styles.label, { marginBottom: 10 }]}>Schdule date and Time</Text>
                                                <Text style={styles.star}>*</Text>
                                            </View>

                                            <View style={styles.Date_picker}>
                                                <DatePicker
                                                    style={{ width: '100%' }}
                                                    date={this.state.dataRenewal}
                                                    mode="datetime"
                                                    placeholder="DD/MM/YYYY"
                                                    format="DD/MM/YYYY  HH:MM:SS"
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
                                                <Text style={styles.label}>Training</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', flex: 1, marginTop: 10 }}>
                                                <View style={{ flex: 1, marginLeft: 5, flexDirection: 'row' }}>
                                                    <CheckBox color='gray'
                                                       // style={{ backgroundColor: 'transparent', }}
                                                        checked={this.state.Training === true}
                                                        onPress={() => { this.setState({ Training: true }) }} />
                                                    <Text style={[styles.label, { marginLeft: 20 }]}>YES</Text>
                                                </View>
                                                <View style={{ flex: 1, marginLeft: 5, flexDirection: 'row' }}>
                                                    <CheckBox color='gray'
                                                        //style={{ backgroundColor: 'transparent', }}
                                                        checked={this.state.Training === false}
                                                        onPress={() => { this.setState({ Training: false }) }} />
                                                    <Text style={[styles.label, { marginLeft: 20 }]}>NO</Text>
                                                </View>
                                            </View>
                                        </View>


                                        <View style={{ width: '100%', justifyContent: 'flex-start', marginTop: 10 }}>
                                            <View >
                                                <Text style={styles.label}>Payment Mode : COD</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', flex: 1, marginTop: 10 }}>
                                                <View style={{ flex: 1, marginLeft: 5, flexDirection: 'row' }}>
                                                    <CheckBox color='gray'
                                                        checked={this.state.radio === true}
                                                        style={{ backgroundColor: 'transparent', }}
                                                        onPress={() => { this.setState({ radio: true }) }} />
                                                    <Text style={[styles.label, { marginLeft: 20 }]}>YES</Text>
                                                </View>
                                                <View style={{ flex: 1, marginLeft: 5, flexDirection: 'row' }}>
                                                    <CheckBox color='gray'
                                                        checked={this.state.radio === false}
                                                        style={{ backgroundColor: 'transparent', }}
                                                        onPress={() => { this.setState({ radio: false }) }} />
                                                    <Text style={[styles.label, { marginLeft: 20 }]}>NO</Text>
                                                </View>
                                            </View>
                                            {this.state.radio ?
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
                                                <Button block style={{ backgroundColor: '#5cb85c' }}
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
        JobVehicleData: state.serviceVehicleData,
        JobcompanyData: state.serviceCompanyData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addJobVehicle: () => dispatch(serviceActions.VehicleRequest()),
        addjobcomapany: () => dispatch(serviceActions.companyRequest()),
        createServices: (createdata) => dispatch(serviceActions.createJobRequests(createdata))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddJob)


