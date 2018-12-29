import React from 'react';
import { View, FlatList, KeyboardAvoidingView, Alert } from 'react-native';
import { Item, Label, Input, Button, Text, Icon } from 'native-base';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

import { Toolbar, Float, UnderlineText, Activityindication } from '../../../components';
import styles from './styles';
import { globalStyles } from '../../../styles'
import { GpsModal } from '../GpsModal/GpsModal';
import { userActions } from '../../../redux/actions';
import { VehicleModal } from '../VehicleModal/VehicleModal';
import functions from '../../../common/functions'

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
const DEVICE_TYPE = 'DEVICE_TYPE';
const DEVICE_TYPE_VALUE = 'Select device type';
const ISD_KEY = 'ISD_KEY';
const ISD_KEY_VALUE = 'Select ISD';

export class GPSDeviceForm extends React.Component {
    constructor(props) {
        super(props);
        moment.locale('en');
        this.state = {
            isLoading: true,
            flag: '',
            data: [],
            gpsdata: '',
            map: new Map(),
            idMap: new Map(),
            countryISD: [],
            companyList: [],
            deviceType: [],
            vehicleList: [],
            deviceUDID: '',
            mobileNumber: '',
            balance: '',
            dataBalance: '',
            dataPlan: '',
            dataRenewal: '',
            carrier: ''
        }

        this.modalRef = React.createRef();
        this.modalReference = React.createRef();
        this.OnValueSelect = this.OnValueSelect.bind(this);
        this.openPicker = this.openPicker.bind(this);
        this.onAddGPSDevice = this.onAddGPSDevice.bind(this);
        this.onPressCreateVehicle = this.onPressCreateVehicle.bind(this);
        this.onSubmitVehicleDetails = this.onSubmitVehicleDetails.bind(this);
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
        this.props.onFetchList();
    }

    OnValueSelect(item) {
        const newMap = new Map(this.state.map);
        newMap.set(this.state.flag, item.label);

        const newIdMap = new Map(this.state.idMap);
        newIdMap.set(this.state.flag, item.value);

        this.setState({ map: newMap, idMap: newIdMap });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.gpsDeviceData !== nextProps.gpsDeviceData) {
            var CountryIsdcode = this.props.loginResponse.data.results.countryIsdCode;
            var companyName = this.props.loginResponse.data.results.companyName;

            const newMap = new Map(this.state.map);
            newMap.set(VEHICLE_KEY, VEHICLE_KEY_VALUE);
            newMap.set(DEVICE_TYPE, DEVICE_TYPE_VALUE);
            newMap.set(COMPANY_KEY, COMPANY_KEY_VALUE);
            newMap.set(ISD_KEY, ISD_KEY_VALUE);
            newMap.set(COMPANY_KEY, companyName);

            const newIdMap = new Map(this.state.idMap);
            newIdMap.set(VEHICLE_KEY, undefined);
            newIdMap.set(DEVICE_TYPE, undefined);
            newIdMap.set(ISD_KEY, undefined);
            newIdMap.set(COMPANY_KEY, undefined);

            /**Device Type */
            const deviceTypeArray = [];
            if(nextProps.gpsDeviceData.deviceType.results) {
                const deviceType = nextProps.gpsDeviceData.deviceType.results;
                for(var i = 0; i < deviceType.length; i++ ) {
                    var obj = { "label": deviceType[i].value, "value": deviceType[i].key };
                    deviceTypeArray.push(obj);
                }
            }

            /**Vehicle List */
            const vehicleArray = [];
            if(nextProps.gpsDeviceData.vehicleList.results) {
                const vehicle = nextProps.gpsDeviceData.vehicleList.results;
                for(var i = 0; i < vehicle.length; i++ ) {
                    var obj = { "label": vehicle[i].value, "value": vehicle[i].key };
                    vehicleArray.push(obj);
                }
            }

            /**Country ISD */
            const countryISD = [];
            if (nextProps.gpsDeviceData.countryISD.results) {
                var ISD = '';
                var Isd_key = undefined;
                var countryIsdData = nextProps.gpsDeviceData.countryISD.results;
                for (var i = 0; i < countryIsdData.length; i++) {
                    var obj = { "label": countryIsdData[i].value, "value": countryIsdData[i].key };
                    countryISD.push(obj);
                    if (countryIsdData[i].code == CountryIsdcode) { ISD = countryIsdData[i].value, Isd_key = countryIsdData[i].key }
                }
                newMap.set(ISD_KEY, ISD);
                newIdMap.set(ISD_KEY, Isd_key);
            }

            this.setState({
                deviceType: deviceTypeArray,
                countryISD: countryISD,
                vehicleList: vehicleArray,
                map: newMap,
                idMap: newIdMap
            });
        }

        if (this.props.loginResponse) {
            const companyArray = [];
            var RegionData = this.props.loginResponse.data.results.regionDetails;
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

        if (this.props.vehicleTypeDatas !== nextProps.vehicleTypeDatas) {
            if (nextProps.vehicleTypeDatas.isFetched) {
                const departmentId = this.props.loginResponse.data.results.departmentId;
                this.modalReference.current.setModalVisible(true, nextProps.vehicleTypeDatas.data, departmentId);
            }
        }

        if (this.props.Addvehicles !== nextProps.Addvehicles) {
            this.setState({
                createVehicle: nextProps.Addvehicles.data.results
            })
        }

    }

    openPicker(keys, list, title) {
        this.setState({ flag: keys });
        this.modalRef.current.setModalVisible(true, title, list);
    }

    onAddGPSDevice() {
        if (this.checkRequiredFields()) {
            const item = {
                "balance": this.state.balance,
                "carrier": this.state.carrier,
                "countryID": this.state.idMap.get(ISD_KEY),
                "dataBalance": this.state.dataBalance,
                "dataPlan": this.state.dataPlan,
                "dataValidity": this.state.dataRenewal,
                "departmentId": this.props.loginResponse.departmentId,
                // "deviceId": 0,
                "deviceTypeId": this.state.idMap.get(DEVICE_TYPE),
                "deviceUdid": this.state.deviceUDID,
                "simno": this.state.mobileNumber,
                "vehicleId": this.state.idMap.get(VEHICLE_KEY)
            }
            //alert(JSON.stringify(item));
            this.props.addGPSDevice(item);
        } else {
            functions.showToast('Please fill all required fields', 'danger');
        }

    }

    checkRequiredFields() {
        if(this.state.deviceUDID && this.state.idMap.get(VEHICLE_KEY)
            && this.state.idMap.get(DEVICE_TYPE) && this.state.idMap.get(ISD_KEY) && this.state.mobileNumber !== ''
            && this.state.balance !== '' && this.state.dataBalance !== '' && this.state.dataPlan !== '' &&
            this.state.carrier !== '' && this.state.dataRenewal !== '') {
                return true
        }
        return false;
    }

    onPressCreateVehicle() {
        this.props.onCreateVehicleType();
    }

    onSubmitVehicleDetails( value) {
        this.props.onAddgpsVehicle(value);
    }

    render() {
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={{ backgroundColor: '#fff', flex: 1 }}>
                    <Toolbar title='Association' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()} />
                    <Activityindication visible={this.props.gpsDeviceData.isLoading} />
                    <Activityindication visible={this.props.vehicleTypeDatas.isLoading} />
                    <Activityindication visible={this.props.addGPSDeviceResp.isLoading} />
                    
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={[{ key: 1 }]}
                        keyboardShouldPersistTaps="always"
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>

                            <KeyboardAvoidingView
                                behavior="padding" >
                                <View style={{ flexDirection: 'column', flex: 1 }}>
                                    <View style={styles.Sub_View}>
                                        <View style={styles.Width_View}>

                                            <View style={styles.Small_View}>
                                                <Item floatingLabel>
                                                    <Icon name='mobile' type='FontAwesome' style={{ fontSize: 30, color: '#000' }} />
                                                    <Label style={{ color: 'rgba(0,0,0,0.8)', fontSize: 15 }}>Device</Label>
                                                    <Input
                                                        style={{ color: '#000', fontSize: 15 }}
                                                        value={this.state.deviceUDID}
                                                        keyboardType={'email-address'}
                                                        returnKeyType='next'
                                                        // getRef={this.props.getRef}
                                                        // blurOnSubmit={this.props.blurOnSubmit}
                                                        onChangeText={(text) => this.setState({ deviceUDID: text })}
                                                    />
                                                </Item>
                                            </View>

                                            <View style={styles.Small_View}>
                                                <UnderlineText
                                                    name="Company"
                                                    upperView={true}
                                                    value={this.state.map.get(COMPANY_KEY)}
                                                    isMandatory={true}
                                                    onpress={() => this.openPicker(COMPANY_KEY, this.state.companyList, title[0])}
                                                />
                                            </View>

                                            <View style={styles.Small_View}>
                                                <View style={{ flex: 1 }}>
                                                    <View style={{ height: 70, justifyContent: 'center' }}>
                                                        <UnderlineText
                                                            name="Vehicle #"
                                                            value={this.state.map.get(VEHICLE_KEY)}
                                                            isMandatory={true}
                                                            upperView={true}
                                                            onpress={() => this.openPicker(VEHICLE_KEY, this.state.vehicleList, title[1])}
                                                        >
                                                        </UnderlineText>
                                                    </View>
                                                </View>
                                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                                    <Button bordered dark style={{ height: 40, borderColor: 'gray' }}
                                                        onPress={this.onPressCreateVehicle}>
                                                        <Text style={styles.createVehicle}> Create Vehicle</Text>
                                                    </Button>
                                                </View>
                                            </View>

                                            <View style={styles.Small_View}>
                                                <UnderlineText
                                                    name="Device Type"
                                                    isMandatory={true}
                                                    upperView={true}
                                                    value={this.state.map.get(DEVICE_TYPE)}
                                                    onpress={() => this.openPicker(DEVICE_TYPE, this.state.deviceType, title[2])} />
                                            </View>

                                        </View>
                                    </View>

                                    <View style={styles.Detail_View}>
                                        <View style={{ width: '94%' }}>
                                            <Text style={globalStyles.title_text}> Sim Details </Text>
                                        </View>
                                    </View>

                                    <View style={styles.Sub_View}>
                                        <View style={styles.Width_View}>

                                            <View style={styles.Small_View}>
                                                <UnderlineText
                                                    name='Country ISD'
                                                    isMandatory={true}
                                                    upperView={true}
                                                    value={this.state.map.get(ISD_KEY)}
                                                    onpress={() => this.openPicker(ISD_KEY, this.state.countryISD, title[4])}
                                                />
                                            </View>

                                            <View style={styles.Small_View}>
                                                <Float
                                                    placeholder='Mobile'
                                                    value={this.state.mobileNumber}
                                                    returnKeyType={'next'}
                                                    keyboardType={'numeric'}
                                                    blurOnSubmit={false}
                                                    isMandatory={true}
                                                    // onSubmitEditing={() => this._focusNextField('password')}
                                                    onChangeText={(text) => this.setState({ mobileNumber: text })}
                                                    inputStyles={{ width: '100%' }}
                                                />
                                            </View>

                                            <View style={[styles.Balance_view, { marginTop: 10 }]}>
                                                <View style={styles.inner_View}>
                                                    <Float
                                                        placeholder='Balance'
                                                        value={this.state.balance}
                                                        returnKeyType={'next'}
                                                        keyboardType={'numeric'}
                                                        blurOnSubmit={false}
                                                        isMandatory={false}
                                                        onChangeText={(text) => this.setState({ balance: text })}
                                                        inputStyles={{ width: '100%' }}
                                                    />
                                                </View>
                                                <View style={styles.inner_View}>
                                                    <Float
                                                        placeholder='Data Balance'
                                                        value={this.state.dataBalance}
                                                        returnKeyType={'next'}
                                                        keyboardType={'numeric'}
                                                        blurOnSubmit={false}
                                                        isMandatory={false}
                                                        onChangeText={(text) => this.setState({ dataBalance: text })}
                                                        inputStyles={{ width: '100%' }}
                                                    />
                                                </View>
                                            </View>
                                            <View style={styles.row_Divide}>
                                                <View style={styles.inner_View}>
                                                    <Float
                                                        placeholder='Data plan'
                                                        value={this.state.dataPlan}
                                                        returnKeyType={'next'}
                                                        keyboardType={'email-address'}
                                                        blurOnSubmit={false}
                                                        isMandatory={false}
                                                        onChangeText={(text) => this.setState({ dataPlan: text })}
                                                        inputStyles={{ width: '100%' }}
                                                    />
                                                </View>
                                                <View style={styles.Date_picker}>
                                                    <DatePicker
                                                        style={{ width: '100%' }}
                                                        date={this.state.dataRenewal}
                                                        mode="date"
                                                        placeholder="Data renewal"
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
                                                <Float
                                                    placeholder='Carrier'
                                                    value={this.state.carrier}
                                                    returnKeyType={'next'}
                                                    keyboardType={'email-address'}
                                                    blurOnSubmit={false}
                                                    isMandatory={true}
                                                    onChangeText={(text) => this.setState({ carrier: text })}
                                                    inputStyles={{ width: '100%' }}
                                                />
                                            </View>

                                            <View style={styles.button_view}>
                                                <View style={{ flex: 1, marginRight: 2 }}>
                                                    <Button block danger>
                                                        <Text style={{ color: '#fff' }}>Cancel</Text>
                                                    </Button>
                                                </View>
                                                <View style={{ flex: 1, marginLeft: 2 }}>
                                                    <Button block
                                                        onPress={this.onAddGPSDevice}>
                                                        <Text style={{ color: '#fff' }}>Submit</Text>
                                                    </Button>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </KeyboardAvoidingView>
                        } />
                    <GpsModal ref={this.modalRef} selectedValue={(value) => this.OnValueSelect(value)} />
                    <VehicleModal ref={this.modalReference} onsubmitVehicleDetails={(detail) => this.onSubmitVehicleDetails(detail)} />
                </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        addGPSDeviceResp: state.addGPSDeviceData,
        gpsDeviceData: state.gpsDeviceData,
        loginResponse: state.loginData,
        vehicleTypeDatas: state.vehicletypeData,
        Addvehicles: state.addgpsVehicleData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addGPSDevice: (gpsdevice) => dispatch(userActions.addGPSDeviceAssociation(gpsdevice)),
        onFetchList: () => dispatch(userActions.gpsdeviceRequest()),
        onCreateVehicleType: () => dispatch(userActions.CreatevehicletyepRequest()),
        onAddgpsVehicle: (value) => dispatch(userActions.addgpsVehicleRequest(value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GPSDeviceForm)