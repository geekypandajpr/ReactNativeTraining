import React from 'react';
import { View, Alert, BackHandler, Image, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import { Button, Header, Left, Body, Right, Title, Text } from 'native-base';
import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';

import {
    Toolbar,
    SquareButton,
    Piechart,
    MultiSwitch,
    SummarySwitch,
    Barchart,
    Activityindication,
    Statusbar
} from '../../components';
import { userActions } from '../../redux/actions';
import { colors, typeCode } from '../../styles';
import styles from './Styles';
import { DashboardFilter } from './DashBoardFilter/DashboardFilter';

export class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            isAdmin: false,
            isLoading: true,
            loading: false,
            updatedSchemaData: [],
            loginResponse: {},
            userRoleId: 0,
            company: '',
            pieColor: ['#FD6260', '#B19DFF', '#02B8AB', '#F3C814'],
            // pieColor: ['#FF9F40', '#36A2EB', '#9966FF', '#4BC0C0'],
            pieSeries: [400, 200, 100, 100],
            // piedata: [
            //     { value: 50, label: 'Total Sims', color: '#FF9F40' },
            //     { value: 40, label: 'Installed', color: '#36A2EB' },
            //     { value: 25, label: 'Activated', color: '#9966FF' },
            //     { value: 25, label: 'Deactivated', color: '#4BC0C0' }
            // ],
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
        /**UserRoles Object to render action buttons */
        const userRoles = this.props.loginResponse.data.results.userRoles;
        for (let index in userRoles) {
            if (typeCode.ADMIN_USER_ROLE[userRoles[index].userRoleCode]) {
                this.setState({ isAdmin: true });
                break;
            }
        }
        /**End of the userRoles */

        this.setState({
            loginResponse: this.props.loginResponse.data.results,
            // userRoleId: this.props.loginResponse.data.results.userRoles[0].userRoleId
        });

        /**Back Handler */
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.loginResponse.data.results.userRoles[0])
        if (this.props.loginResponse !== nextProps.loginResponse) {

            /**UserRoles Object to render action buttons */
            const userRoles = nextProps.loginResponse.data.results.userRoles;
            for (let index in userRoles) {
                if (typeCode.ADMIN_USER_ROLE[userRoles[index].userRoleCode]) {
                    this.setState({ isAdmin: true });
                    break;
                }
            }
            /**End of the userRoles */

            this.setState({
                loginResponse: nextProps.loginResponse.data.results,
                // userRoleId: nextProps.loginResponse.data.results.userRoles[0].userRoleId
            });
        }
    }

    handleBackPress = () => { return true }

    openPicker() {
        this.modalRef.current.setModalVisible(true, this.state.loginResponse);
    }

    onRegionUpdate(companyId) {
        this.props.updateSchema(companyId);
    }

    logout = () => {
        Alert.alert(
            'Logout Confirmation',
            'Do you want to logout ?',
            [
                { text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'YES', onPress: () => this.props.navigation.navigate('LogIn') },
            ],
            { cancelable: false })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>

                    <View>
                        <Statusbar backgroundColor={colors.STATUSBAR_COLOR} barStyle="light-content" />
                        <Header style={{ backgroundColor: colors.PRIMARY }}>
                            {/* <Left>
                            <Image style={{width: 30, height: 30}} resizeMode='contain'
                                source={require('../../../assets/launcher.png')}>
                            </Image>
                        </Left> */}
                            <Body>
                                <Title>{this.state.loginResponse.companyName}</Title>
                            </Body>
                            <Right>
                                {this.state.isAdmin ?
                                    <Button transparent>
                                        <Feather name='filter'
                                            onPress={this.logout} onPress={this.openPicker} color='#fff' size={20} />
                                    </Button>
                                    : null}
                                <Button transparent>
                                    <Ionicons name='md-log-out'
                                        onPress={this.logout} color='#fff' size={20} />
                                </Button>
                            </Right>
                        </Header>
                    </View>

                    {/* { this.state.userRoleId == typeCode.ADMIN_USER_ROLE_ID ?
                        <Toolbar title={this.state.loginResponse.companyName} leftIcon='home'
                            Calender='filter' calenderType='Feather' onCalenderPress={this.openPicker}
                            setting='logout-variant' settingType='MaterialCommunityIcons' onSettingsPress={this.logout} />
                        :
                        <Toolbar title={this.state.loginResponse.companyName} leftIcon='home'
                            setting='logout-variant' settingType='MaterialCommunityIcons' onSettingsPress={this.logout}
                            calendarDisabled={true}/>
                    } */}

                    <Activityindication visible={this.props.loginResponse.isLoading} />

                    <View style={{ flexDirection: 'row', width: '100%', height: 100, backgroundColor: '#fff' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigate('GPSDevice', this.state.loginResponse)}>
                                <View style={styles.iconView}>
                                    <Ionicons name="md-phone-portrait" color={colors.HOMESCREEN.ASSOCIATIONCARD_COLOR}
                                        size={25} />
                                </View>
                            </TouchableOpacity>
                            <Text style={[styles.iconText, { fontFamily: 'Roboto' }]}>GPS Devices</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigate('Schedule')}>
                                <View style={styles.iconView}>
                                    <MaterialCommunityIcons name="calendar-clock" color={colors.HOMESCREEN.SCHEDULECARD_COLOR} size={25}
                                    />
                                </View>
                            </TouchableOpacity>
                            <Text style={[styles.iconText, { fontFamily: 'Roboto' }]}>Schedule</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            {/* <View style={styles.iconView}>
                                <MaterialCommunityIcons name="sim" color={colors.HOMESCREEN.SIMCARD_COLOR} size={25} />
                            </View>
                            <Text style={[styles.iconText, { fontFamily: 'Roboto' }]}>Sim</Text> */}
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            {/* <View style={styles.iconView}>
                                <MaterialIcons name="devices" color={colors.HOMESCREEN.DEVICECARD_COLOR} size={25}/>
                            </View>
                            <Text style={[styles.iconText, { fontFamily: 'Roboto' }]}>Device</Text> */}
                        </View>
                    </View>

                    {/* <View style={styles.container1}>

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
                                        text='GPS Device'
                                        iconColor={colors.HOMESCREEN.DEVICECARD_COLOR}
                                        textColor='#808080'
                                        onPress={() => navigate('GPSDevice', this.state.loginResponse)}
                                        colors={['#b7ffb5', '#84e184', '#51ae56']}
                                    />
                                </View>
                                <View style={[styles.button_view, { marginRight: 1 }]}>
                                    <SquareButton
                                        name='sim'
                                        type='MaterialCommunityIcons'
                                        text='Sim'
                                        iconColor={colors.HOMESCREEN.SIMCARD_COLOR}
                                        textColor='#808080'
                                        // onPress={() => navigate('Sim')}
                                        colors={['#ffb994', '#f98866', '#c2593b']}
                                    />
                                </View>
                            </View>
                            <View style={styles.icon_view}>
                                <View style={[styles.button_view, { marginRight: 1, marginLeft: 1 }]}>
                                    <SquareButton
                                        name='calendar-clock'
                                        type='MaterialCommunityIcons'
                                        iconColor={colors.HOMESCREEN.SCHEDULECARD_COLOR}
                                        textColor='#808080'
                                        text='Schedule'
                                        onPress={() => navigate('Schedule')}
                                        colors={['#fff289', '#f2c059', '#bc9029']}
                                    />
                                </View>
                                <View style={[styles.button_view, { marginRight: 1, marginLeft: 1 }]}>
                                    <SquareButton
                                        name='schedule'
                                        type='MaterialIcons'
                                        text='Jobs'
                                        iconColor={colors.HOMESCREEN.JOBSCARD_COLOR}
                                        textColor='#808080'
                                        // onPress={() => navigate('AddData')}
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
                                        textColor='#808080'
                                        // onPress={() => navigate('Customer')}
                                        colors={['#6ddbea', '#31a9b8', '#007a88']}
                                    />
                                </View>
                                <View style={[styles.button_view, { marginLeft: 1 }]}>
                                    <SquareButton
                                        name='worker'
                                        type='MaterialCommunityIcons'
                                        text='Technician'
                                        iconColor='#6789F8'
                                        textColor='#808080'
                                        // onPress={() => navigate('Technicians')}
                                        colors={['#9eb9ff', '#6789f8', '#265dc4']}
                                    />
                                </View>
                            </View>
                        </View>

                    </View> */}
                    <DashboardFilter ref={this.modalRef}
                        onRegionUpdate={(companyId) => this.onRegionUpdate(companyId)}
                    />
                </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        loginResponse: state.loginData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateSchema: (companyId) => dispatch(userActions.updateSchema(companyId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)