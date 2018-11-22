import React from 'react';
import {
    Text,
    View
} from 'react-native';
import { Agenda } from 'react-native-calendars';
import { ScheduleEvent, Toolbar } from '../../components';
import styles from './Styles';
import moment from 'moment';
import JobDetails from '../Jobs/JobDetails/JobDetails';
import colors from '../../constants/colors';
import { BackHandler } from 'react-native';
var eventList = {
    // '2018-09-16': {selected: true, selectedColor: 'green'},
    // '2018-09-17': {selected: true, selectedColor: 'red'},
    // '2018-09-18': {selected: true, selectedColor: 'green'},
    // '2018-09-30': {selected: true, selectedColor: 'orange'},
}

export default class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {}
        };
        this.modalRef = React.createRef();
    }

    renderDay(day, item) {
        return (<View><Text>{day ? day.dateString: 'item'}</Text></View>);
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
                this.props.navigation.navigate('Dashboard');                 
                return true; 
        });
    }
    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Toolbar title='Schedule'
                    leftIcon='arrow-left' leftIconType='Feather'onLeftButtonPress={() => goBack()}
                    setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')} />
                <Agenda
                    //renderDay={(day, item) => this.renderDay(day, item)}
                    items={this.state.items}
                    loadItemsForMonth={(month) => this.loadItems(month)}
                    onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
                    //onDayPress={(day) => { console.log('day pressed') }}
                    //onDayChange={(day) => { console.log('day changed') }}
                    selected={moment(new Date()).format('YYYY-MM-DD')}
                    pastScrollRange={100}
                    futureScrollRange={100}
                    renderItem={this.renderItem.bind(this)}
                    renderEmptyDate={this.renderEmptyDate.bind(this)}
                    rowHasChanged={this.rowHasChanged.bind(this)}
                    markedDates={eventList}
                    hideKnob={false}
                    theme={{
                        'stylesheet.calendar.header': {
                            dayHeader: {
                                marginTop: 2,
                                marginBottom: 7,
                                width: 30,
                                textAlign: 'center',
                                fontSize: 14,
                                color: colors.CALENDARS.DAY_HEADER_COLOR,
                            },
                            todayText: {
                                fontSize: 18,
                                color: colors.CALENDARS.TODAY_TEXT_COLOR,
                                marginTop: 0,
                            },
                        },
                        backgroundColor: colors.CALENDARS.BACKGROUND_COLOR,
                        calendarBackground: colors.CALENDARS.CALENDAR_BACKGROUND_COLOR,
                        agendaKnobColor: colors.CALENDARS.AGENDA_KNOB_COLOR,
                        textSectionTitleColor: colors.CALENDARS.TEXT_SECTION_TITLE_COLOR,
                        selectedDayBackgroundColor: colors.CALENDARS.SELECTED_DAY_BACKGROUND_COLOR,
                        selectedDayTextColor: colors.CALENDARS.SELECTED_DAY_TEXT_COLOR,
                        dayTextColor: colors.CALENDARS.DAY_TEXT_COLOR,
                        monthTextColor: colors.CALENDARS.MONTH_TEXT_COLOR,
                        textDisabledColor: colors.CALENDARS.TEXT_DISABLED_COLOR,
                        arrowColor: colors.CALENDARS.ARROW_COLOR,
                        textMonthFontWeight: 'bold',
                        textDayFontSize: 12,
                        textMonthFontSize: 15,
                        textDayHeaderFontSize: 14,
                        agendaDayNumColor: colors.CALENDARS.AGENDA_DAY_NUM_COLOR,
                        agendaDayTextColor: colors.CALENDARS.AGENDA_DAY_TEXT_COLOR,
                        agendaTodayColor: colors.CALENDARS.AGENDA_TODAY_COLOR
                    }}
                />
                <JobDetails ref={this.modalRef} />
            </View>
        );
    }

    loadItems(day) {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!this.state.items[strTime]) {
                    this.state.items[strTime] = [];
                    this.state.items[strTime].push({
                        'serviceNumber': 'SERVE001AA',
                        'serviceType' : 'Install',
                        'companyName' : 'Yusata Infotech Private Limited',
                        'vehicleNumber': 'JP01-1522',
                        'status': 'Entered',
                        'color': colors.SERVICE_STATUS_COLOR.ENTERED,
                        'device': 'DL125A',
                        'sim': '+91-7856801255',
                        'provider': 'Airtel',
                        'jobDate': '05 November 2018 14:50',
                        'location': '84/122 sector 8, pratap nagar, Jaipur',
                        'servicePerson' : 'Yash Gulati',
                        'contactPerson': 'Premsagar Choudhary',
                        'contactMobilenumber': '+91 8562565512'
                    });
                    this.state.items[strTime].push({
                        'serviceNumber': 'SERVE001AA',
                        'serviceType' : 'Install',
                        'companyName' : 'Yusata Infotech Private Limited',
                        'vehicleNumber': 'JP01-1522',
                        'status': 'Accepted',
                        'color': colors.SERVICE_STATUS_COLOR.ACCEPTED,
                        'device': 'DL125A',
                        'sim': '+91-7856801255',
                        'provider': 'Airtel',
                        'jobDate': '05 November 2018 14:50',
                        'location': '84/122 sector 8, pratap nagar, Jaipur',
                        'servicePerson' : 'Yash Gulati',
                        'contactPerson': 'Premsagar Choudhary',
                        'contactMobilenumber': '+91 8562565512'
                    });
                    this.state.items[strTime].push({
                        'serviceNumber': 'SERVE003AC',
                        'serviceType' : 'Replace',
                        'companyName' : 'Yusata Infotech Private Limited',
                        'vehicleNumber' : 'vehicle12',
                        'status': 'Onjob',
                        'color': colors.SERVICE_STATUS_COLOR.ONJOB,
                        'device': 'DEV7457866',
                        'sim': '+91-9080706556',
                        'provider': 'Airtel',
                        'jobDate': '05 November 2018, 11:12',
                        'location': '84/122 sector 8, pratap nagar, Jaipur Rajasthan 302033',
                        'servicePerson' : 'Yash Gulati',
                        'contactPerson': 'Premsagar Choudhary',
                        'contactMobilenumber': '+91 8562565512'
                    });
                    this.state.items[strTime].push({
                        'serviceNumber': 'SERVE002AB',
                        'serviceType' : 'Uninstall',
                        'companyName' : 'Yusata Infotech Private Limited',
                        'vehicleNumber': 'JP14-4555',
                        'status': 'Completed',
                        'color': colors.SERVICE_STATUS_COLOR.COMPLETED,
                        'device': 'Atlanta',
                        'sim': '+91-7845880012',
                        'provider': 'Airtel',
                        'jobDate': '28 October 2018, 12:00',
                        'location': '81/49 sector 8 pratp nagar',
                        'servicePerson' : 'Yash Gulati',
                        'contactPerson': 'Premsagar Choudhary',
                        'contactMobilenumber': '+91 8562565512'
                    });
                    
                    this.state.items[strTime].push({
                        'serviceNumber': 'SERVE004AD',
                        'serviceType' : 'Repair',
                        'companyName' : 'Yusata Infotech Private Limited',
                        'vehicleNumber': 'JH52-14A5',
                        'status': 'Cancelled',
                        'color': colors.SERVICE_STATUS_COLOR.CANCELLED,
                        'device': 'DEVICE14588ESE',
                        'sim': '+91-1201245636',
                        'provider': 'Airtel',
                        'jobDate': '10 December 2018, 05:00',
                        'location': '84/122 sector 8, pratap nagar',
                        'servicePerson' : 'Yash Gulati',
                        'contactPerson': 'Premsagar Choudhary',
                        'contactMobilenumber': '+91 8562565512'
                    });
                    this.state.items[strTime].push({
                        'serviceNumber': 'SERVE004AD',
                        'serviceType' : 'Install',
                        'companyName' : 'Yusata Infotech Private Limited',
                        'vehicleNumber': 'JH52-14A5',
                        'status': 'Reschedule',
                        'color': colors.SERVICE_STATUS_COLOR.RESCHEDULED,
                        'device': 'DEVICE14588ESE',
                        'sim': '+91-1201245636',
                        'provider': 'Airtel',
                        'jobDate': '10 December 2018, 05:00',
                        'location': '84/122 sector 8, pratap nagar',
                        'servicePerson' : 'Yash Gulati',
                        'contactPerson': 'Premsagar Choudhary',
                        'contactMobilenumber': '+91 8562565512'
                    });
                }
            }
            const newItems = {};
            Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
            this.setState({
                items: newItems
            });
        }, 1000);
    }

    renderItem(item) {
        const value = {
            'jobNumber': 'SERVE004AD',
            'jobType' : 'Install',
            'jobName' : 'Installation',
            'companyName' : 'Yusata Infotech Private Limited',
            'vehicleNumber': 'JH52-14A5',
            'jobStatus': 'Reschedule',
            'color': colors.SERVICE_STATUS_COLOR.RESCHEDULED,
            'device': 'DEVICE14588ESE',
            'sim': '+91-1201245636',
            'provider': 'Airtel',
            'scheduleDate': '10 December 2018, 05:00',
            'location': '84/122 sector 8, pratap nagar',
            'servicePerson' : 'Yash Gulati',
            'contactPerson': 'Premsagar Choudhary',
            'contactNumber': '+91 8562565512',
            'cashOnDelivery': 'Yes',
            'amount': '5000',
            'training' : 'No'
        }
        return (
            <ScheduleEvent item={[item]}
                viewMore={() => { this.modalRef.current.setModalVisible(true, value) }}/>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.empty_date_view}><Text>No Event</Text></View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }
}

export { Schedule }