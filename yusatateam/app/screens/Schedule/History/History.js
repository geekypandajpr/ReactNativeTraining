import React from 'react';
import {
    Text,
    View,
    BackHandler
} from 'react-native';
import moment from 'moment';
import { Agenda } from 'react-native-calendars';
import { ScheduleEvent, Toolbar } from '../../../components';
import styles from './styles';
import JobDetails from '../../Jobs/JobDetails/JobDetails';
import colors from '../../../constants/colors';
import Filter from '../Filter/Filter';
import { connect } from 'react-redux';
import { serviceActions } from '../../../redux/actions';


var eventList = {
    // '2018-09-16': {selected: true, selectedColor: 'green'},
    // '2018-09-17': {selected: true, selectedColor: 'red'},
    // '2018-09-18': {selected: true, selectedColor: 'green'},
    // '2018-09-30': {selected: true, selectedColor: 'orange'},
}

export  class History extends React.Component {
    constructor(props) {
        super(props);
        moment.locale('en');
        this.state = {
            items: {},
            historyData : '',
            createData : '',
            listData :'',
            itemsData: {},
        };
        this.modalRef = React.createRef();
        this.filterRef = React.createRef();
    }

    componentWillReceiveProps(nextProps) {
        // if(this.props.HistoryData !== nextProps.HistoryData) {
          
        // }

        if(this.props.ListData !== nextProps.ListData) {
            if(nextProps.ListData.listData.results) {
                var itemData ={};
                var dateArray =[];
                var data =nextProps.ListData.listData.results;
                for(var i=0;i<data.length;i++)
                {
                    var str = data[i].serviceDate;
                     var res = str.substring(0, 10);
                        for(var j=i;j<data.length;j++)
                        {
                            if(res == data[j].serviceDate.substring(0, 10))
                            {
                               if(res in itemData)
                                {
                                    continue;
                                }
                                else
                                {
                                    dateArray.push(data[j]);
                                    
                                   
                                } 
                            } 
                        }
                        if(!(res in itemData))
                        {
                            itemData[res]=dateArray;
                            dateArray =[];
                        }
                        
                }
        }

        
   
     } 
     this.setState({ListData: nextProps.ListData.listData.results,items : itemData})
    }

    renderDay(day, item) {
        return (<View><Text>{day ? day.dateString: 'item'}</Text></View>);
    }

    componentDidMount() {
        // this.props.onFetchHistory();
        this.props.onFetchJobList('all');
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
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
    
    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        
        return (
            <View style={styles.container}>
                <Toolbar title='History'
                    leftIcon='arrow-left' leftIconType='Feather'onLeftButtonPress={() => goBack()}
                    />
                   
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
                    maxDate={moment(new Date()).format('YYYY-MM-DD')}
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
            </View>
        );
    }

    loadItems(day) {
        setTimeout(() => {
            for (let i = -1; i < 1; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                //console.log('TIME-> '+time);
                const strTime = this.timeToString(time);
                //const strTime = '2019-01-11';
                // console.log('HELLO PREM-> '+strTime);
                if (!this.state.items[strTime]) {
                    this.state.items[strTime] = [];
                    // this.state.items[strTime].push(a)
                }
            }
            const newItems = {};
            Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
            this.setState({
                items: newItems
            });
            // console.log(newItems);
        }, 1000);
    }

    renderItem(item) {
     
        const { navigate } = this.props.navigation;
        return (
            <ScheduleEvent item={[item]}
                serviceChange = {(item) => {}}
                viewMore={() => navigate('HistoryDetails')}/>
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
        // HistoryData : state.serviceHistoryData,
        ListData : state.serviceListData,
    }
}

function mapDispatchToProps(dispatch){
    return{
        // onFetchHistory: () => dispatch(serviceActions.ServiceHistoryRequest())
        onFetchJobList: (serviceType) => dispatch(serviceActions.serviceListRequest(serviceType))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(History);