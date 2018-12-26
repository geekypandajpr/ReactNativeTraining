import React from 'react';
import { View, FlatList, KeyboardAvoidingView, Alert } from 'react-native';
import { Item, Label, Input, Button, Text, Icon } from 'native-base';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';

import { Toolbar, Float, UnderlineText, Activityindication } from '../../../components';
import styles from './styles';
import { globalStyles } from '../../../styles'
import { GpsModal } from '../GpsModal/GpsModal';
import { userActions } from '../../../redux/actions';
import { VehicleModal } from '../VehicleModal/VehicleModal';
import functions from '../../../common/functions'

const value = {
    "associationId": 100,
    "balance": "25.00",
    "carrier": "Airtel",
    "countryID": 91,
    "dataBalance": "50.00",
    "dataPlan": "100",
    "dataValidity": "12/12/2018",
    "departmentId": 101,
    "deviceId": 12345,
    "deviceTypeId": 123,
    "deviceUdid": "device123",
    "simno": "7008819309",
    "vehicleId": 5236
}

const vehicles = [
    { label: 'vehicle1', value: 'vehicle1' },
    { label: 'vehicle2', value: 'vehicle2' },
    { label: 'vehicle3', value: 'vehicle3' },
    { label: 'vehicle4', value: 'vehicle4' },
    { label: 'vehicle5', value: 'vehicle5' }
];

const title = [
    'Company',
    'Vehicles',
    'DeviceType',
    'Subskey',
    'ISD'
]

const COMPANY_KEY = 'COMPANY';
const VEHICLE_KEY = 'VEHICLE';
const DEVICE_TYPE = 'DEVICE_TYPE';
const SUBSC_KEY = 'SUBSC_KEY';
const ISD_KEY = 'ISD_kEY';

export class GPSDeviceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            flag: '',
            data: [],
            code: '',
            gpsdata: '',
            map: new Map(),
            countryISD: [],
            deviceType: [],
            mobilenumber: ''
        }

        this.modalRef = React.createRef();
        this.modalReference = React.createRef();
        this.OnValueSelect = this.OnValueSelect.bind(this);
        this.openPicker = this.openPicker.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
        // var codeData = '';
        const { params } = this.props.navigation.state;
        console.log(JSON.stringify(params));
        // var data = params[1].countrylist;
        // for (var i = 0; i < data.length; i++) {
        //     if (data[i].code == params[0].code[0].code) {
        //         codeData = data[i].value
        //     }
        // }
        this.props.onFetchList();
        const newMap = new Map(this.state.map);
        newMap.set(COMPANY_KEY, "Select Company");
        newMap.set(VEHICLE_KEY, "Select Vehicle");
        newMap.set(DEVICE_TYPE, "Select device type");
        newMap.set(SUBSC_KEY, "select SubsKey");

        // newMap.set(ISD_KEY, codeData)
        // // var dataValues = nextProps.CountryIsdList.data.results 
        // //alert(JSON.stringify(params[2].deviceList))
        // this.setState({ map: newMap, mobilenumber: params[0].code[1].mobilenum, countryISD: params[1].countrylist, deviceType: params[2].deviceList })
    }

    OnValueSelect(value) {
        // if (this.state.flag === 'COMPANY') {
        //     this.setState({ company: value });
        //alert(JSON.stringify(value))
        const newMap = new Map(this.state.map);
        newMap.set(this.state.flag, value);
        this.setState({ map: newMap })
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.gpsDeviceData !== nextProps.gpsDeviceData) {
            this.setState({
                deviceType: nextProps.gpsDeviceData.deviceType.results,
                countryISD: nextProps.gpsDeviceData.countryISD.results,
            });
        }
    }

    openPicker(keys, list, title) {
        this.setState({ flag: keys });
        this.modalRef.current.setModalVisible(true, title, list);
    }

    onSubmit() {
        if(this.onValidation()){
            const value = {
                "associationId": 100,
                "balance": "25.00",
                "carrier": "Airtel",
                "countryID": 91,
                "dataBalance": "50.00",
                "dataPlan": "100",
                "dataValidity": "12/12/2018",
                "departmentId": 101,
                "deviceId": 12345,
                "deviceTypeId": 123,
                "deviceUdid": "device123",
                "simno": "7008819309",
                "vehicleId": 5236
            }
            this.props.onFetchData(value)
        }else{
            alert("not");
        }

    }
    onValidation() {
        if (this.state.map.get(ISD_KEY) && this.state.map.get(DEVICE_TYPE) && this.state.map.get(COMPANY_KEY)
            && this.state.map.get(VEHICLE_KEY) && this.state.mobilenumber !== '') {
           return false;
        }
        return true;

    }

    render() {
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={{ backgroundColor: '#fff', flex: 1 }}>
                    <Toolbar title='Association' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()} />
                    <Activityindication visible={this.props.gpsDeviceData.isLoading} />
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
                                                    />
                                                </Item>
                                            </View>
                                            <View style={styles.Small_View}>
                                                <UnderlineText
                                                    name="Company"
                                                    upperView={true}
                                                    value={this.state.map.get(COMPANY_KEY)}
                                                    isMandatory={true}
                                                    onpress={() => this.openPicker(COMPANY_KEY, vehicles, title[0])}
                                                />
                                            </View>
                                            {/* <View style={styles.pickerView}>
                                            <Text style={[styles.pickerLabel, { fontFamily: 'Roboto' }]}>Device Type</Text>
                                            <Pickers dropdown={deviceType} />
                                        </View> */}
                                            <View style={[styles.Balance_view, { marginTop: 5 }]}>
                                                <View style={{ flex: 1 }}>
                                                    <View style={{ height: 70, justifyContent: 'center' }}>
                                                        <UnderlineText
                                                            name="Vehicle #"
                                                            value={this.state.map.get(VEHICLE_KEY)}
                                                            isMandatory={true}
                                                            upperView={true}
                                                            onpress={() => this.openPicker(VEHICLE_KEY, vehicles, title[1])}
                                                        >
                                                        </UnderlineText>
                                                    </View>
                                                </View>
                                                <View style={{ flex: 1, marginLeft: 10, marginTop: 18 }}>
                                                    <Button bordered dark style={{ height: 40, borderColor: 'gray' }}
                                                        onPress={() => { this.modalReference.current.setModalVisible(true) }}>
                                                        <Text style={{ color: 'rgb(56,64,64)' }}> Create Vehicle</Text>
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



                                            {/* <View style={styles.Small_View}>
                                                <UnderlineText
                                                    name="Subscription Key"
                                                    value={this.state.map.get(SUBSC_KEY)}
                                                    isMandatory={false}
                                                    onpress={() => this.openPicker(SUBSC_KEY, subskey,title[3])} />
                                            </View> */}
                                        </View>
                                    </View>

                                    <View style={styles.Detail_View}>
                                        <View style={{ width: '94%' }}>
                                            <Text style={globalStyles.title_text}> Sim Details </Text>
                                        </View>
                                    </View>

                                    <View style={styles.Sub_View}>
                                        <View style={styles.Width_View}>

                                            <View style={[styles.Balance_view, { marginTop: 5 }]}>
                                                <View style={{ flex: 1 }}>
                                                    <View style={{ height: 60, justifyContent: 'center' }}>
                                                        <UnderlineText
                                                            name='Country ISD'
                                                            isMandatory={true}
                                                            upperView={true}
                                                            value={this.state.map.get(ISD_KEY)}
                                                            onpress={() => this.openPicker(ISD_KEY, this.state.countryISD, title[4])}
                                                        >
                                                        </UnderlineText>
                                                    </View>
                                                </View>
                                                <View style={{ flex: 1, marginLeft: 10, marginTop: 12 }}>
                                                    <Float
                                                        placeholder='Mobile'
                                                        value={this.state.mobilenumber}
                                                        returnKeyType={'next'}
                                                        keyboardType={'numeric'}
                                                        blurOnSubmit={false}
                                                        isMandatory={true}
                                                        // onSubmitEditing={() => this._focusNextField('password')}
                                                        onChangeText={(text) => this.setState({ mobilenumber: text })}
                                                        inputStyles={{ width: '100%' }}
                                                    />
                                                </View>
                                            </View>
                                            <View style={[styles.Balance_view, { marginTop: 10 }]}>
                                                <View style={styles.inner_View}>
                                                    <Float
                                                        placeholder='Balance'
                                                        returnKeyType={'next'}
                                                        keyboardType={'numeric'}
                                                        blurOnSubmit={false}
                                                        isMandatory={false}
                                                        inputStyles={{ width: '100%' }}
                                                    />
                                                </View>
                                                <View style={styles.inner_View}>
                                                    <Float
                                                        placeholder='Data Balance'
                                                        returnKeyType={'next'}
                                                        keyboardType={'numeric'}
                                                        blurOnSubmit={false}
                                                        isMandatory={false}
                                                        inputStyles={{ width: '100%' }}
                                                    />
                                                </View>
                                            </View>
                                            <View style={styles.row_Divide}>
                                                <View style={styles.inner_View}>
                                                    <Float
                                                        placeholder='Data plan'
                                                        returnKeyType={'next'}
                                                        keyboardType={'numeric'}
                                                        blurOnSubmit={false}
                                                        isMandatory={false}
                                                        inputStyles={{ width: '100%' }}
                                                    />
                                                </View>
                                                <View style={styles.Date_picker}>
                                                    <DatePicker
                                                        style={{ width: '100%' }}
                                                        date={this.state.datarenewal}
                                                        mode="date"
                                                        placeholder="Data renewal"
                                                        format="YYYY-MM-DD"
                                                        //minDate=""
                                                        maxDate="2018-12-13"
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
                                                        onDateChange={(date) => { this.setState({ datarenewal: date }) }}
                                                    />
                                                </View>
                                            </View>

                                            <View style={styles.Small_View}>
                                                <Float
                                                    placeholder='Carrier'
                                                    returnKeyType={'next'}
                                                    keyboardType={'email-address'}
                                                    blurOnSubmit={false}
                                                    isMandatory={true}
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
                                                        onPress={this.onSubmit}>
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
                    <VehicleModal ref={this.modalReference} />
                </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        SubmitGpsdata: state.submitFormData,
        gpsDeviceData: state.gpsDeviceData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchData: (value) => dispatch(userActions.submitgpsFormRequest(value)),
        onFetchList : () => dispatch(userActions.gpsdeviceRequest())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GPSDeviceForm)

