import React from 'react';
import { Text, View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Statusbar, ScheduleEvent } from '../../components';
import styles from './Styles';

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

    render() {
        return (
            <View style={styles.container}>
                <Statusbar backgroundColor="#3E4357" barStyle="light-content" />
                <Agenda
                    items={this.state.items}
                    loadItemsForMonth={(month) => this.loadItems(month)}
                    onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
                    onDayPress={(day) => { console.log('day pressed') }}
                    onDayChange={(day) => { console.log('day changed') }}
                    selected={'2018-09-28'}
                    pastScrollRange={100}
                    futureScrollRange={100}
                    renderItem={this.renderItem.bind(this)}
                    renderEmptyDate={this.renderEmptyDate.bind(this)}
                    rowHasChanged={this.rowHasChanged.bind(this)}
                    markedDates={eventList}
                    hideKnob={false}
                    theme={{
                        backgroundColor: '#fff',
                        calendarBackground: '#46A891',
                        agendaKnobColor: '#F96700',
                        textSectionTitleColor: '#fff',
                        selectedDayBackgroundColor: '#F96700',
                        selectedDayTextColor: '#fff',
                        todayTextColor: 'red',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        arrowColor: 'orange',
                        textMonthFontWeight: 'bold',
                        textDayFontSize: 12,
                        textMonthFontSize: 15,
                        textDayHeaderFontSize: 14,
                    }}
                />
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
                        'serviceNumber' : 'A1ask53srP',
                        'vehicleNumber' : 'JP-1522',
                        'device' : 'DL125A',
                        'sim' : '+91-7856801255',
                        'jobDate' : '12/10/2018 14:50',
                        'location' : '84/122 sector 8, pratap nagar, Jaipur 302033'
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
            <ScheduleEvent item={item}/>
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