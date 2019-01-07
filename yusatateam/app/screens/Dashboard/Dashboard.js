import React from 'react';
import { View, Alert, BackHandler } from 'react-native';
import { AppLoading } from 'expo';
import {
    Toolbar,
    SquareButton,
    Piechart,
    MultiSwitch,
    SummarySwitch,
    Barchart,
    Activityindication
} from '../../components';
import { connect } from 'react-redux';

import { userActions} from '../../redux/actions';
import colors from '../../constants/colors';
import styles from './Styles';
import { DashboardFilter } from './DashBoardFilter/DashboardFilter';

export  class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            loading: false,
            updatedSchemaData: [],
            loginResponse: {},
            company : '',
            pieColor: ['#FD6260', '#B19DFF', '#02B8AB', '#F3C814'],
            pieSeries: [400, 200, 100, 100],
            piedata: [
                { value: 50, label: 'Total Sims', color: '#FD6260' },
                { value: 40, label: 'Installed', color: '#B19DFF' },
                { value: 25, label: 'Activated', color: '#02B8AB' },
                { value: 25, label: 'Deactivated', color: '#F3C814' }
            ],
        }
        this.onChangePieChart = this.onChangePieChart.bind(this);
        this.onBarchartChange = this.onBarchartChange.bind(this);
        this.OnValueSelect = this.OnValueSelect.bind(this);
        this.modalRef = React.createRef();
        this.openPicker = this.openPicker.bind(this);
    }

    OnValueSelect(value) {
        if (this.state.flag === 'COMPANY') {
            this.setState({ company: value });
        } 
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }

    onChangePieChart(value) {
        if (value === 'Sims') {
            var data = [
                { value: 40, label: 'Total Sims', color: '#FD6260' },
                { value: 20, label: 'Installed', color: '#B19DFF' },
                { value: 20, label: 'Activated', color: '#02B8AB' },
                { value: 25, label: 'Deactivated', color: '#F3C814' }
            ];
        }
        else if (value === 'Devices') {
            var data = [
                { value: 50, label: 'Total Devices', color: '#FD6260' },
                { value: 60, label: 'Installed', color: '#B19DFF' },
                { value: 20, label: 'Tested Ok', color: '#02B8AB' },
                { value: 30, label: 'Ready to use', color: '#F3C814' },
                { value: 60, label: 'Defective', color: '#FF9561' }
            ];
        }
        else {
            var data = [
                { value: 30, label: 'Total jobs', color: '#FD6260' },
                { value: 50, label: 'Scheduled', color: '#B19DFF' },
                { value: 40, label: 'Completed', color: '#02B8AB' },
                { value: 40, label: 'Pending', color: '#F3C814' },
                { value: 20, label: 'Cancelled', color: '#FF9561' },
            ];
        }
        this.setState({ piedata: data });
    }

    onBarchartChange(key) {
        if (key === 'Custom') {
            this.props.navigation.navigate('Calendars');
        }
    }

    componentDidMount() {
        /**Login Response */
        this.setState({loginResponse: this.props.loginResponse.data.results});

        /**Back Handler */
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.loginResponse !== nextProps.loginResponse) {
            this.setState({ loginResponse: nextProps.loginResponse.data.results })
        }
    }

    handleBackPress = () => {
        Alert.alert(
            'Exit Confirmation',
            'Do you want to exit ?',
            [
                { text: 'No', onPress: () => {}},
                { text: 'YES', onPress: () => BackHandler.exitApp()},
            ],
            { cancelable: false }
        ) // works best when the goBack is async
        return true;
    }

    openPicker() {
        this.modalRef.current.setModalVisible(true, this.state.loginResponse);
    }

    onRegionUpdate(companyId) {
        this.props.updateSchema(companyId);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>
                    <Toolbar title={this.state.loginResponse.companyName}
                        leftIcon='home'
                        setting='filter' settingType='FontAwesome'
                        onSettingsPress={this.openPicker} />
                        <Activityindication visible={this.props.loginResponse.isLoading}/>

                    <View style={styles.container1}>

                        <View style={styles.upper_view}>

                            <View style={styles.switch}>
                                <MultiSwitch onStatusChanged={this.onChangePieChart}
                                    buttonName1="Sims" buttonColor1='#9491F8'
                                    buttonName2="Devices" buttonColor2='#8BB6F3'
                                    buttonName3="Jobs" buttonColor3='#8AD3F3'
                                />
                            </View>
                            <View style={styles.pie_chart}>
                                <Piechart
                                    piedata={this.state.piedata}
                                    pieSeries={this.state.pieSeries}
                                    pieColors={this.state.pieColor} />
                            </View>

                        </View>

                        <View style={styles.lower_view}>
                            <View style={styles.summary_switch}>
                                <SummarySwitch onStatusChanged={this.onBarchartChange}
                                    buttonName1="Today" buttonColor1='#9491F8'
                                    buttonName2="Week" buttonColor2='#8BB6F3'
                                    buttonName3="Month" buttonColor3='#8AD3F3'
                                    buttonName4="Custom" buttonColor4='#EDCD68' />
                            </View>
                            <View style={styles.summary_view}>
                                <Barchart />
                            </View>

                        </View>

                        <View style={styles.middle_view}>
                            <View style={styles.icon_view}>
                                <View style={[styles.button_view, { marginRight: 1 }]}>
                                    <SquareButton
                                        name='devices'
                                        type='MaterialIcons'
                                        text='Device'
                                        iconColor={colors.HOMESCREEN.DEVICECARD_COLOR}
                                        textColor='gray'
                                        onPress={() => navigate('GPSDevice',this.state.loginResponse)}
                                        colors={['#b7ffb5', '#84e184', '#51ae56']}
                                    />
                                </View>
                                <View style={[styles.button_view, { marginRight: 1 }]}>
                                    <SquareButton
                                        name='sim'
                                        type='MaterialCommunityIcons'
                                        text='Sim'
                                        iconColor={colors.HOMESCREEN.SIMCARD_COLOR}
                                        textColor='gray'
                                        onPress={() => navigate('Sim')}
                                        colors={['#ffb994', '#f98866', '#c2593b']}
                                    />
                                </View>
                            </View>
                            <View style={styles.icon_view}>
                                <View style={[styles.button_view, { marginRight: 1, marginLeft: 1 }]}>
                                    <SquareButton
                                        name='calendar'
                                        type='Foundation'
                                        iconColor={colors.HOMESCREEN.SCHEDULECARD_COLOR}
                                        textColor='gray'
                                        text='Schedule'
                                        onPress={() => navigate('QrCode')}
                                        colors={['#fff289', '#f2c059', '#bc9029']}
                                    />
                                </View>
                                <View style={[styles.button_view, { marginRight: 1, marginLeft: 1 }]}>
                                    <SquareButton
                                        name='schedule'
                                        type='MaterialIcons'
                                        text='Jobs'
                                        iconColor={colors.HOMESCREEN.JOBSCARD_COLOR}
                                        textColor='gray'
                                        onPress={() => navigate('CreateVehicle')}
                                        colors={['#8ffcde', '#5bc8ac', '#1f977d']}
                                    />
                                </View>
                            </View>
                            <View style={styles.icon_view}>
                                <View style={[styles.button_view, { marginLeft: 1 }]}>
                                    <SquareButton
                                        name='group'
                                        type='MaterialIcons'
                                        text='Customer'
                                        iconColor={colors.HOMESCREEN.ASSOCIATIONCARD_COLOR}
                                        textColor='gray'
                                        onPress={() => navigate('Customer')}
                                        colors={['#6ddbea', '#31a9b8', '#007a88']}
                                    />
                                </View>
                                <View style={[styles.button_view, { marginLeft: 1 }]}>
                                    <SquareButton
                                        name='worker'
                                        type='MaterialCommunityIcons'
                                        text='Technician'
                                        iconColor='#6789F8'
                                        textColor='gray'
                                        onPress={() => navigate('Technicians')}
                                        colors={['#9eb9ff', '#6789f8', '#265dc4']}
                                    />
                                </View>
                            </View>
                        </View>

                    </View>
                    <DashboardFilter ref={this.modalRef}
                        onRegionUpdate={(companyId) => this.onRegionUpdate(companyId)}
                    />
                </View>
        );
    }
}

function mapStateToProps(state){
    return{
        loginResponse: state.loginData
    }
}

function mapDispatchToProps(dispatch){
    return{
        updateSchema: (companyId) => dispatch(userActions.updateSchema(companyId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) ( Dashboard )