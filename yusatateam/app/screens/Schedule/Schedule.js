import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    BackHandler,
} from 'react-native';
import { Agenda } from 'react-native-calendars';
import { ScheduleEvent, Toolbar } from '../../components';
import styles from './Styles';
import moment from 'moment';
import CompleteSchedule from './CompleteSchedule';
import colors from '../../constants/colors';

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
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        return true;
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Toolbar title='Schedule' leftIcon='arrow-left' leftIconType='Feather'
                    onLeftButtonPress={() => navigate('HomeScreen')}
                    rightIcon='settings'
                    rightIconType='MaterialCommunityIcons' />
                <Agenda
                    items={this.state.items}
                    loadItemsForMonth={(month) => this.loadItems(month)}
                    onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
                    onDayPress={(day) => { console.log('day pressed') }}
                    onDayChange={(day) => { console.log('day changed') }}
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
                        textDayHeaderFontSize: 14
                    }}
                />
                <CompleteSchedule ref='modal' />
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
                        'jobDate': '05 November 2018 14:50',
                        'location': '84/122 sector 8, pratap nagar, Jaipur'
                    });
                    this.state.items[strTime].push({
                        'serviceNumber': 'SERVE002AB',
                        'serviceType' : 'Uninstall',
                        'companyName' : 'Yusata Infotech Private Limited',
                        'vehicleNumber': 'JP14-4555',
                        'status': 'Accepted',
                        'color': colors.SERVICE_STATUS_COLOR.ACCEPTED,
                        'device': 'Atlanta',
                        'sim': '+91-7845880012',
                        'jobDate': '28 October 2018, 12:00',
                        'location': '81/49 sector 8 pratp nagar'
                    });
                    this.state.items[strTime].push({
                        'serviceNumber': 'SERVE003AC',
                        'serviceType' : 'Replace',
                        'companyName' : 'Yusata Infotech Private Limited',
                        'vehicleNumber' : 'vehicle12',
                        'status': 'Onjob',
                        'color': colors.SERVICE_STATUS_COLOR.ON_JOB,
                        'device': 'DEV7457866',
                        'sim': '+91-9080706556',
                        'jobDate': '05 November 2018, 11:12',
                        'location': '84/122 sector 8, pratap nagar, Jaipur Rajasthan 302033'
                    });
                    this.state.items[strTime].push({
                        'serviceNumber': 'SERVE004AD',
                        'serviceType' : 'Repair',
                        'companyName' : 'Yusata Infotech Private Limited',
                        'vehicleNumber': 'JH52-14A5',
                        'status': 'Completed',
                        'color': colors.SERVICE_STATUS_COLOR.COMPLETED,
                        'device': 'DEVICE14588ESE',
                        'sim': '+91-1201245636',
                        'jobDate': '10 December 2018, 05:00',
                        'location': '84/122 sector 8, pratap nagar'
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
        return (
            <ScheduleEvent {...item} viewMore={() => { this.refs.modal.setModalVisible(true, item) }}/>
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