import React from 'react';
import { View, KeyboardAvoidingView, BackHandler, ScrollView } from 'react-native';
import { Button, Text, Radio } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { AppLoading } from 'expo';
import { connect } from 'react-redux'

import { Toolbar, Float, UnderlineText, Activityindication, SinglePicker } from '../../../components';
import styles from './styles';
import { serviceActions } from '../../../redux/actions';
import { globalStyles } from '../../../styles';

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
            dropdowns: new Map()
        }
        this.flag = ''
        this.modalref = React.createRef();
        this.openPicker = this.openPicker.bind(this);
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
                                                onChangeText={(text) => this.setState({ balance: text })}
                                                inputStyles={{ width: '100%' }}
                                                rightIcon='google-maps'
                                                rightIconType="MaterialCommunityIcons"
                                                rightIconStyle={{ fontSize: 24, color: 'red' }}
                                                rightIconPress={() => navigate('Mapview')}
                                            />
                                        </View>
                                        <View style={styles.Small_View}>
                                            <Float
                                                placeholder='Customer Name'
                                                value={this.state.location}
                                                returnKeyType={'next'}
                                                keyboardType={'default'}
                                                blurOnSubmit={false}
                                                isMandatory={true}
                                                onChangeText={(text) => this.setState({ balance: text })}
                                                inputStyles={{ width: '100%' }}
                                            />
                                        </View>
                                        <View style={styles.Small_View}>
                                            <Float
                                                placeholder='Customer Contact'
                                                value={this.state.location}
                                                returnKeyType={'next'}
                                                keyboardType={'numeric'}
                                                blurOnSubmit={false}
                                                isMandatory={true}
                                                onChangeText={(text) => this.setState({ balance: text })}
                                                inputStyles={{ width: '100%' }}
                                            />
                                        </View>

                                        <View style={[styles.Small_View, { flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }]}>

                                            <Text style={[styles.createVehicle, { marginBottom: 10 }]}>Schdule date and Time</Text>

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
                                        <View style={{ width: '100%', justifyContent: 'flex-start', marginTop: 10 }}>
                                            <View >
                                                <Text style={{ color: 'gray', fontSize: 13 }}>Payment Mode</Text>
                                            </View>
                                            <View style={[styles.Small_View, { flex: 1 }]} >
                                                <View style={{ flex: 1 }}>
                                                    <Text style={{ color: 'gray' }}>C.O.D</Text>
                                                </View>
                                                <View style={{ marginLeft: '10%', flex: 2, flexDirection: 'row' }}>
                                                    <Text style={{ color: 'gray' }}>Yes</Text>
                                                    <Radio color='gray'
                                                        selectedColor="gray"
                                                        style={{ marginLeft: '2%' }}
                                                        selected={this.state.radio === true}
                                                        onPress={() => { this.setState({ radio: true }) }}
                                                    ></Radio>
                                                </View>
                                                <View style={{ marginLeft: '10%', flex: 2, flexDirection: 'row' }}>
                                                    <Text style={{ color: 'gray' }}>No</Text>
                                                    <Radio color='gray'
                                                        selectedColor="gray"
                                                        style={{ marginLeft: '2%' }}
                                                        selected={this.state.radio === false}
                                                        onPress={() => { this.setState({ radio: false }) }}

                                                    ></Radio>
                                                </View>
                                            </View>
                                            {this.state.radio ?
                                                <View style={styles.Small_View}>
                                                    <Float
                                                        placeholder='Amount To Collect'
                                                        value={this.state.location}
                                                        returnKeyType={'next'}
                                                        keyboardType={'numeric'}
                                                        blurOnSubmit={false}
                                                        isMandatory={true}
                                                        onChangeText={(text) => this.setState({ balance: text })}
                                                        inputStyles={{ width: '100%' }}
                                                    />
                                                </View>
                                                : null}
                                        </View>


                                        <View style={styles.button_view}>
                                            <View style={{ flex: 1, marginRight: 1 }}>
                                                <Button block style={{ backgroundColor: '#d9534f' }} onPress={this.onCancel} >
                                                    <Text style={{ color: '#fff', fontFamily: 'Roboto' }}>Cancel</Text>
                                                </Button>
                                            </View>
                                            <View style={{ flex: 1, marginLeft: 1 }}>
                                                <Button block style={{ backgroundColor: '#5cb85c' }} >
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
        addjobcomapany: () => dispatch(serviceActions.companyRequest())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddJob)


