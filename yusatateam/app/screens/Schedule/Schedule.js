import React from 'react';
import {
    Text,
    View,
    BackHandler
} from 'react-native';
import moment from 'moment';
import { Agenda } from 'react-native-calendars';

import { ScheduleEvent, Toolbar } from '../../components';
import styles from './Styles';
import JobDetails from '../Jobs/JobDetails/JobDetails';
import colors from '../../constants/colors';
import Filter from './Filter/Filter';
import {Status} from './Status';
import { connect } from 'react-redux';
import { serviceActions } from '../../redux/actions';

var eventList = {
    // '2018-09-16': {selected: true, selectedColor: 'green'},
    // '2018-09-17': {selected: true, selectedColor: 'red'},
    // '2018-09-18': {selected: true, selectedColor: 'green'},
    // '2018-09-30': {selected: true, selectedColor: 'orange'},
}

export  class Schedule extends React.Component {
    constructor(props) {
        super(props);
        moment.locale('en');
        this.state = {
            items: {},
            historyData : '',
            createData : '',
            listData :''
        };
        this.modalRef = React.createRef();
        this.filterRef = React.createRef();
        this.statusRef = React.createRef();
    }

    renderDay(day, item) {
        return (<View><Text>{day ? day.dateString: 'item'}</Text></View>);
    }

    componentDidMount() {
        this.props.onFetchJobList();
        // this.props.onFetchCreateJob();
        this.props.onFetchJobHistory();
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    
    componentWillReceiveProps(nextProps) {
        if(this.props.CreateData !== nextProps.CreateData) {
            this.setState({createData:nextProps.CreateData.createData});
            // this.arrayList = nextProps.InstallData.data;
        }
        if(this.props.ListData !== nextProps.ListData) {
         
         if(nextProps.ListData.listData.results)
         {
            // alert(JSON.stringify(nextProps.ListData.listData.results.serviceList))
            this.setState({listData:nextProps.ListData.listData.results.serviceList});
         }
            
            // this.arrayList = nextProps.InstallData.data;
        }
        if(this.props.HistoryData !== nextProps.HistoryData) {
            this.setState({historyData:  nextProps.HistoryData.historyData});
            // this.arrayList = nextProps.InstallData.data;
        }
    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    openFilter = () => {
        this.filterRef.current.setModalVisible(true);
    }
    openStatus = () => {
        this.statusRef.current.setModalVisible(true)
    }
    
    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Toolbar title='Schedule'
                    leftIcon='arrow-left' leftIconType='Feather'onLeftButtonPress={() => goBack()}
                    setting='add-circle-outline' settingType='MaterialIcons' onSettingsPress={() => navigate('AddJob')}
                    Calender='filter' calenderType='Feather' onCalenderPress={() =>this.openFilter()}
                    thirdIconName='history' thirdIconType='MaterialIcons' onThirdIconPress={() => navigate('History')}/>
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
                    displayLoadingIndicator={false}
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
                <Filter ref={this.filterRef} />
                <Status ref={this.statusRef} />
                
            </View>
        );
    }

    loadItems(day) {
        setTimeout(() => {
            for(let j=0;j<this.state.listData.length;j++)
            {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                //console.log('TIME-> '+time);
                const strTime = this.timeToString(time);
                //const strTime = '2018-12-07';
                // console.log('HELLO PREM-> '+strTime);
                if (!this.state.items[strTime]) {
                    this.state.items[strTime] = [];
                    this.state.items[strTime].push(this.state.listData[i]);
                   
                }
            }
            const newItems = {};
            Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
            this.setState({
                items: newItems
            });
        }}, 1000);
    
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
                serviceChange ={() =>this.openStatus()}
                doAssociation={() => this.props.navigation.navigate('DoAssociation')}
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

// export { Schedule }

function mapStateToProps(state){
    return{
        CreateData : state.createJobData,
        ListData : state.serviceListData,
        HistoryData: state.serviceHistoryData,
    }
}

function mapDispatchToProps(dispatch){
    return{
        onFetchJobList: () => dispatch(serviceActions.serviceListRequest()),
        onFetchJobHistory: () => dispatch(serviceActions.ServiceHistoryRequest()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);