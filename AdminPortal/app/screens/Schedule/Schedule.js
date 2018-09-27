import React from 'react';
import {
    Text,
    View,
    StatusBar
} from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';


var eventList = {
    // '2018-09-16': {selected: true, selectedColor: 'green'},
    // '2018-09-17': {selected: true, selectedColor: 'red'},
    // '2018-09-18': {selected: true, selectedColor: 'green'},
    // '2018-09-30': {selected: true, selectedColor: 'orange'},
}


const serviceList = [
    {
        serviceNumber: 'A1ask53srP',
        vehicleNumber: 'JP-1522',
        device: 'IMEI1',
        sim: 'ICCID',
        jobDate: '12/10/2018',
        location: '84/122 pratap nagar'
    },
    {
        serviceNumber: 'A1ask53srP',
        vehicleNumber: 'JP-1522',
        device: 'IMEI1',
        sim: 'ICCID',
        jobDate: '12/10/2018',
        location: '84/122 pratap nagar'
    },

]

//const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);

export default class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {}
        };
        this.renderItem = this.renderItem.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <MyStatusBar backgroundColor="#3E4357" barStyle="light-content" />
                <Agenda
                    items={this.state.items}
                    loadItemsForMonth={(month) => this.loadItems(month)}
                    onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
                    onDayPress={(day) => { console.log('day pressed') }}
                    onDayChange={(day) => { console.log('day changed') }}
                    selected={'2018-09-27'}
                    pastScrollRange={100}
                    futureScrollRange={100}
                    renderItem={this.renderItem.bind(this)}
                    //renderDay={(day, item) => {this.renderDay(day, item)}}
                    renderEmptyDate={this.renderEmptyDate.bind(this)}
                    rowHasChanged={this.rowHasChanged.bind(this)}
                    //showWeekNumbers={true}
                    //markingType={'period'}
                    markedDates={eventList}
                    //monthFormat={'yyyy'}
                    //renderKnob={this.renderKnob}
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
                        //dotColor: 'red',
                        //selectedDotColor: '#ffffff',
                        arrowColor: 'orange',
                        //monthTextColor: '#9381D5',
                        //textDayFontFamily: 'monospace',
                        //textMonthFontFamily: 'monospace',
                        //textDayHeaderFontFamily: 'monospace',
                        textMonthFontWeight: 'bold',
                        textDayFontSize: 12,
                        textMonthFontSize: 15,
                        textDayHeaderFontSize: 14,
                    }}
                //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
                />
            </View>
        );
    }

    renderKnob() {
        return (
            <View>
                <Ionicons name="ios-arrow-down" size={30} color="#F96700" />
            </View>
        );
    }

    loadItems(day) {
        //console.log(day)
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!this.state.items[strTime]) {
                    this.state.items[strTime] = [];
                    // const numItems = Math.floor(Math.random() * 5);
                    // for (let j = 0; j < numItems; j++) {
                    //     this.state.items[strTime].push({
                    //         name: 'Item for ' + strTime,
                    //         height: Math.max(50, Math.floor(Math.random() * 150))
                    //     });
                    // }
                    this.state.items[strTime].push({
                        serviceNumber: 'A1ask53srP',
                        vehicleNumber: 'JP-1522',
                        device: 'IMEI1',
                        sim: 'ICCID',
                        jobDate: '12/10/2018',
                        location: '84/122 pratap nagar'
                    });
                }
            }
            //console.log(this.state.items);
            const newItems = {};
            Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
            this.setState({
                items: newItems
            });
        }, 1000);
        // console.log(`Load Items for ${day.year}-${day.month}`);
    }

    renderItem(item) {
        return (
            <View style={styles.event_date_view}>
                <Text style={styles.text}>Service# : {item.serviceNumber}</Text>
                <Text style={styles.text}>Vehicle# : {item.vehicleNumber}</Text>
                <Text style={styles.text}>Device : {item.device}</Text>
                <Text style={styles.text}>Sim : {item.sim}</Text>
                <Text style={styles.text}>Location : {item.location}</Text>
            </View>
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