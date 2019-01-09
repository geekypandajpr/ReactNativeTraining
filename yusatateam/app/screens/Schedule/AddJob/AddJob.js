import React from 'react';
import { View, KeyboardAvoidingView, BackHandler, ScrollView } from 'react-native';
import { Button, Text, Radio } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { AppLoading } from 'expo';
import { GpsModal } from '../../GPSDevice/GpsModal/GpsModal';
import { connect } from 'react-redux'

import { Toolbar, Float, UnderlineText, Activityindication } from '../../../components';
import styles from './styles';
import { userActions } from '../../../redux/actions'

const title = [
    'Company',
    'Vehicles',
    'ServiceType',
    'Technician',
]

export class AddJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            company: 'select company',
            vehicle: 'select vehicle',
            service: 'service type',
            technician: 'select technician',
            location: '',
            radio: false,
        }
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
            if (nextProps.JobVehicleData.data.results) {
                const vehicletype = nextProps.JobVehicleData.data.results;
                for (var i = 0; i < vehicletype.length; i++) {
                    var obj = { "label": vehicletype[i].value, "value": vehicletype[i].key };
                    vehicleArray.push(obj);
                }
            }
            this.setState({ vehicle: vehicleArray })
        }
    }

    componentDidMount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        this.props.addJobVehicle();
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }
    openPicker() {
        this.modalref.current.setModalVisible(true, title[0],this.state.vehicle)
    }

    render() {
        const { goBack } = this.props.navigation;
        const { navigate } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={{ backgroundColor: '#fff', flex: 1 }}>
                    <Toolbar title='Create Service' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                    />

                    <ScrollView keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}>

                        <KeyboardAvoidingView behavior='padding'>

                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <View style={styles.Sub_View}>
                                    <View style={styles.Width_View}>

                                        <View style={styles.Small_View}>
                                            <UnderlineText
                                                name="Company"
                                                upperView={true}
                                                value={this.state.company}
                                                isMandatory={true}
                                                //onpress={this.openPicker}
                                            />
                                        </View>

                                        <View style={styles.Small_View}>
                                            <View style={{ flex: 1.4 }}>
                                                <UnderlineText
                                                    name="Vehicle #"
                                                    value={this.state.vehicle}
                                                    isMandatory={true}
                                                    upperView={true}
                                                    onpress={this.openPicker}
                                                />
                                            </View>

                                        </View>

                                        <View style={styles.Small_View}>
                                            <UnderlineText
                                                name="Service Type"
                                                isMandatory={true}
                                                upperView={true}
                                                value={this.state.service}
                                                //onpress={this.openPicker}
                                            />
                                        </View>

                                        <View style={styles.Small_View}>
                                            <UnderlineText
                                                name="Technician"
                                                upperView={true}
                                                value={this.state.technician}
                                                isMandatory={true}
                                            //onpress={alert("hello")}
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

                        </KeyboardAvoidingView>
                    </ScrollView>

                    <GpsModal ref={this.modalref} />
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
        JobVehicleData: state.addjobvehicleReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addJobVehicle: () => dispatch(userActions.addJobvehicleRequest())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddJob)


