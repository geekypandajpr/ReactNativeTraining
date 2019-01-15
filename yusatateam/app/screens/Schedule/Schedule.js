import React from 'react';
import { Text, View, BackHandler } from 'react-native';
import moment from 'moment';
import { Agenda } from 'react-native-calendars';
import { connect } from 'react-redux';
import { Card } from 'native-base';

import { ScheduleEvent, Toolbar, Activityindication } from '../../components';
import styles from './Styles';
import colors from '../../constants/colors';
import Filter from './Filter/Filter';
import { Status } from './Status';
import { serviceActions } from '../../redux/actions';

var eventList = {
    // '2018-09-16': {selected: true, selectedColor: 'green'},
    // '2018-09-17': {selected: true, selectedColor: 'red'},
    // '2018-09-18': {selected: true, selectedColor: 'green'},
    // '2018-09-30': {selected: true, selectedColor: 'orange'},
}

export class Schedule extends React.Component {
    constructor(props) {
        super(props);
        moment.locale('en');
        this.state = {
            items: {},
            serviceList: [],
            serviceStatus: [],
            date: new Date()
        };
        this.modalRef = React.createRef();
        this.filterRef = React.createRef();
        this.statusRef = React.createRef();
        this.openStatusModal = this.openStatusModal.bind(this);
        this.openFilter = this.openFilter.bind(this);
        this.onFilterApplied = this.onFilterApplied.bind(this);
    }

    renderDay(day, item) {
        return (<View><Text>{day ? day.dateString : 'item'}</Text></View>);
    }

    componentDidMount() {
        this.props.onFetchJobList('all');
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }


    componentWillReceiveProps(nextProps) {
        /**Service List */
        if (this.props.serviceList !== nextProps.serviceList) {
            if (nextProps.serviceList.listData.results) {
                const items = {};
                const list = nextProps.serviceList.listData.results;
                for (var index in list) {
                    var date =  moment(list[index].serviceDate).format('YYYY-MM-DD');
                    if(!items[date]) {
                        items[date] = [];
                        items[date].push(list[index]);
                    } else { items[date].push(list[index]) }
                     
                }
                const newItems = {};
                Object.keys(items).forEach(key => { newItems[key] = items[key] });
                this.setState({ items: newItems, listData: nextProps.serviceList.listData.results });
            }
        }

        /**Service status */
        if (this.props.serviceStatus !== nextProps.serviceStatus) {
            this.setState({ serviceStatus: nextProps.serviceStatus.status });
        }

    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    openFilter() {
        this.filterRef.current.setModalVisible(true);
    }

    openStatusModal(item) {
        this.statusRef.current.setModalVisible(true, this.state.serviceStatus, item.serviceStatus)
    }

    onFilterApplied(item) {
        this.props.onFetchJobList(item)
    }

    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        const items = {
            [moment(new Date(this.state.date)).format('YYYY-MM-DD')]: [],
            ...this.state.items,
        };

        return (
            <View style={styles.container}>
                <Activityindication visible={this.props.serviceList.isLoading} />
                <Toolbar title='Schedule'
                    leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                    setting='add-circle-outline' settingType='MaterialIcons' onSettingsPress={() => navigate('AddJob')}
                    Calender='filter' calenderType='Feather' onCalenderPress={() => this.openFilter()}
                    thirdIconName='history' thirdIconType='MaterialIcons' onThirdIconPress={() => navigate('History')} />

                <Agenda
                    // specify how each date should be rendered. day can be undefined if the item is not first in that day.
                    //renderDay={(day, item) => this.renderDay(day, item)}
                    // the list of items that have to be displayed in agenda
                    items={items}
                    // callback that gets called when items for a certain month should be loaded (month became visible)
                    //loadItemsForMonth={(month) => this.loadItems(month)}
                    onCalendarToggled={(calendarOpened) => { console.log("CalendarOpened=->" + calendarOpened) }}
                    // callback that gets called on day press
                    onDayPress={(day) => this.onDayPress(day)}
                    // callback that gets called on day change
                    onDayChange={(day) => this.onDayChange(day)}
                    // initially selected day
                    selected={moment(new Date()).format('YYYY-MM-DD')}
                    pastScrollRange={100}
                    futureScrollRange={100}
                    // specify how each item should be rendered in agenda
                    renderItem={this.renderItem.bind(this)}
                    // specify how empty date content with no items should be rendered
                    renderEmptyDate={this.renderEmptyDate.bind(this)}
                    // specify your item comparison function for increased performance
                    rowHasChanged={this.rowHasChanged.bind(this)}
                    // markedDates={eventList}
                    hideKnob={false}
                    dayLoading={false}
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
                <Filter ref={this.filterRef} onSelectFilter={(item) => { this.onFilterApplied(item) }} />
                <Status ref={this.statusRef} />

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

    onDayPress(date) {
        this.setState({ date: new Date(date.year, date.month - 1, date.day) });
    }

    onDayChange = (date) => {
        this.setState({ date: new Date(date.year, date.month - 1, date.day) });
    }

    renderItem(item) {
        return (
            <ScheduleEvent item={[item]}
                onStatusChange={() => this.openStatusModal(item)}
                doAssociation={() => this.props.navigation.navigate('DoAssociation')}
                viewMore={() => this.props.navigation.navigate('ScheduleDetails', {item})}
            />
        );
    }

    renderEmptyDate() {
        return (
            <Card style={styles.empty_event_date_view}>
                <View style={styles.empty_date_view}>
                    <Text style={{ fontSize: 15, fontFamily: 'Roboto', color: 'red' }}>No Event</Text>
                </View>
            </Card>
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

function mapStateToProps(state) {
    return {
        serviceList: state.serviceListData,
        serviceStatus: state.serviceStatus,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchJobList: (serviceType) => dispatch(serviceActions.serviceListRequest(serviceType))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);