import React from 'react';
import { Text, View, TouchableOpacity, Modal, } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { ScheduleEvent, Toolbar } from '../../components';
import styles from './Styles';
import moment from 'moment';
import EStyleSheet from 'react-native-extended-stylesheet';

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
                <Toolbar title='Schedule' leftIcon='arrow-left' leftIconType='Feather'/>
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
                                color: '#2d4150',
                            },
                            todayText: {
                                fontSize: 18,
                                color: 'red',
                                marginTop: 0,
                            },
                        },
                        backgroundColor: '#00000010',
                        //calendarBackground: '#46A891',
                        calendarBackground: '#FFFFFF',
                        //agendaKnobColor: '#F96700',
                        agendaKnobColor: EStyleSheet.value('$primaryColor'),
                        textSectionTitleColor: '#000',
                        //selectedDayBackgroundColor: '#F96700',
                        selectedDayBackgroundColor: EStyleSheet.value('$primaryColor'),
                        selectedDayTextColor: '#fff',
                        //textDisabledColor: '#000',
                        todayTextColor: 'red',
                        //dayTextColor: '#2d4150',
                        dayTextColor: '#2d4150',
                        monthTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        arrowColor: 'orange',
                        textMonthFontWeight: 'bold',
                        textDayFontSize: 12,
                        textMonthFontSize: 15,
                        textDayHeaderFontSize: 14
                }}
                />
                <MyModal ref='modal'/>
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
                        'serviceNumber' : 'SERVE001AA',
                        'status': 'Entered',
                        'color': '#1766A6',
                        'vehicleNumber' : 'JP01-1522',
                        'device' : 'DL125A',
                        'sim' : '+91-7856801255',
                        'jobDate' : '05 November 2018 14:50',
                        'location' : '84/122 sector 8, pratap nagar, Jaipur'
                    });
                    this.state.items[strTime].push({
                        'serviceNumber' : 'SERVE002AB',
                        'status': 'Completed',
                        'color': '#47A64A',
                        'vehicleNumber' : 'JP 01-4575',
                        'device' : 'Atlanta',
                        'sim' : '+91-6425500563',
                        'jobDate' : '25 October 2018, 14:50',
                        'location' : '84/122 sector 8, pratap nagar, Jaipur Rajasthan 302033'
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
            <TouchableOpacity activeOpacity={0.5} onPress={() => {this.refs.modal.setModalVisible(true)}} >
                <ScheduleEvent item={item}/>
            </TouchableOpacity>
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

class MyModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={{ marginTop: 22 }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this.setState({modalVisible: !this.state.modalVisible}) }}>
                    <View style={styles.modal_container}>
                        <View style={styles.modal_child_container}>
                            <Text>HelloPrem</Text>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}