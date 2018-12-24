import React from 'react';
import { View, FlatList, KeyboardAvoidingView, TouchableHighlight } from 'react-native';
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



const deviceType = [
    { label: 'device1', value: 'device1' },
    { label: 'device2', value: 'device2' },
    { label: 'device3', value: 'device3' },
    { label: 'device4', value: 'device4' },
    { label: 'device5', value: 'device5' }
];

const vehicles = [
    { label: 'vehicle1', value: 'vehicle1' },
    { label: 'vehicle2', value: 'vehicle2' },
    { label: 'vehicle3', value: 'vehicle3' },
    { label: 'vehicle4', value: 'vehicle4' },
    { label: 'vehicle5', value: 'vehicle5' }
];

// const subskey = [
//     { label: 'SubsKeys1', value: 'SubsKeys1' },
//     { label: 'SubsKeys2', value: 'SubsKeys2' },
//     { label: 'SubsKeys3', value: 'SubsKeys3' },
//     { label: 'SubsKeys4', value: 'SubsKeys4' },
//     { label: 'SubsKeys5', value: 'SubsKeys5' }
// ];

// const ISD = [
//     { label: '+91', value: '+91' },
//     { label: '+92', value: '+92' },
//     { label: '+93', value: '+93' },
//     { label: '+94', value: '+94' },
//     { label: '+95', value: '+95' }
// ];

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
            data :  [],
            map: new Map(),
        }

        this.modalRef = React.createRef();
        this.modalReference = React.createRef();
        this.OnValueSelect = this.OnValueSelect.bind(this);
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

    componentDidMount() {
        const { params } = this.props.navigation.state;
       // code =params
        //alert(JSON.stringify(params));
        this.props.onFetchData();
        const newMap = new Map(this.state.map);
        newMap.set(COMPANY_KEY, "Select Company");
        newMap.set(VEHICLE_KEY, "Select Vehicle");
        newMap.set(DEVICE_TYPE, "Select device type");
        newMap.set(SUBSC_KEY, "select SubsKey");
        newMap.set(ISD_KEY, params.code)
        // var dataValues = nextProps.CountryIsdList.data.results
           
        this.setState({ map: newMap})
    }

    OnValueSelect(value) {
        // if (this.state.flag === 'COMPANY') {
        //     this.setState({ company: value });
        const newMap = new Map(this.state.map);
        newMap.set(this.state.flag, value);
        this.setState({ map: newMap })
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.CountryIsdList !== nextProps.CountryIsdList) {
            this.setState({data: nextProps.CountryIsdList.data.results});
           
        }
    }

    openPicker(keys, list, title) {
        this.setState({ flag: keys });
        this.modalRef.current.setModalVisible(true, title, list);
    }

    render() {
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={{ backgroundColor: '#fff', flex: 1 }}>
                    <Toolbar title='Association' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()} />
                    {/* <Activityindication visible={this.props.CountryIsdList.isLoading}/> */}
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
                                                    upperView ={true}
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
                                                            upperView ={true}
                                                            onpress={() => this.openPicker(VEHICLE_KEY, vehicles, title[1])}
                                                        >
                                                        </UnderlineText>
                                                    </View>
                                                </View>
                                                <View style={{ flex: 1, marginLeft:10, marginTop: 18 }}>
                                                    <Button bordered dark style={{height:40,borderColor:'gray'}}
                                                     onPress={() => { this.modalReference.current.setModalVisible(true) }}>
                                                        <Text style={{color: 'rgb(56,64,64)'}}> Create Vehicle</Text>
                                                    </Button>
                                                </View>
                                            </View>

                                            <View style={styles.Small_View}>
                                                <UnderlineText
                                                    name="Device Type"
                                                    isMandatory={true}
                                                    upperView ={true}
                                                    value={this.state.map.get(DEVICE_TYPE)}
                                                    onpress={() => this.openPicker(DEVICE_TYPE, this.state.data1, title[2])} />
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
                                            <Text style={globalStyles.title_text}> Sim Details</Text>
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
                                                            upperView ={true}
                                                            value={this.state.map.get(ISD_KEY)}
                                                            onpress={() => this.openPicker(ISD_KEY, this.state.data, title[4])}
                                                        >
                                                        </UnderlineText>
                                                    </View>
                                                </View>
                                                <View style={{ flex: 1.5, marginLeft: 10, marginTop: 12 }}>
                                                    <Float
                                                        placeholder='Mobile'
                                                        //value={this.state.username}
                                                        returnKeyType={'next'}
                                                        keyboardType={'numeric'}
                                                        blurOnSubmit={false}
                                                        isMandatory={true}
                                                        //onSubmitEditing={() => this._focusNextField('password')}
                                                        //onChangeText={(username) => this.setState({ username })}
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
                                                    <Button block >
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
        //loading : state.CompanyData,
        // CompanyDatas : state.CompanyData.data1,
         Devicetype  : state.CompanyData,
        CountryIsdList: state.CompanyData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchData: () => dispatch(userActions.gpsdeviceRequestr())

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GPSDeviceForm)