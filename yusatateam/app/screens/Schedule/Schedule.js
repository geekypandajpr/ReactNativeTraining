import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Modal,
    BackHandler,
    TextInput,
    Picker,
    ScrollView
} from 'react-native';
import { Button } from 'native-base';
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
                <MyModal ref='modal' />
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
                        'status': 'Entered',
                        'color': '#1766A6',
                        'vehicleNumber': 'JP01-1522',
                        'device': 'DL125A',
                        'sim': '+91-7856801255',
                        'jobDate': '05 November 2018 14:50',
                        'location': '84/122 sector 8, pratap nagar, Jaipur'
                    });
                    this.state.items[strTime].push({
                        'serviceNumber': 'SERVE002AB',
                        'status': 'Completed',
                        'color': '#47A64A',
                        'vehicleNumber': 'JP 01-4575',
                        'device': 'Atlanta',
                        'sim': '+91-6425500563',
                        'jobDate': '25 October 2018, 14:50',
                        'location': '84/122 sector 8, pratap nagar, Jaipur Rajasthan 302033'
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
            <TouchableOpacity activeOpacity={0.5} onPress={() => { this.refs.modal.setModalVisible(true) }} >
                <ScheduleEvent item={item} />
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
                    onRequestClose={() => { this.setState({ modalVisible: !this.state.modalVisible }) }}>
                    <View style={styles.modal_container}>
                        <View style={styles.modal_child_container}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={styles.upper_view}>

                                    {/**Header View*/}
                                    <View style={styles.header_view}>
                                        <View style={styles.service_num}>
                                            <Text style={styles.header_text}>SERVE001AA</Text>
                                        </View>
                                        <View style={styles.status_picker}>
                                            <Picker
                                                //selectedValue={this.state.language}
                                                style={styles.picker}
                                                onValueChange={(itemValue, itemIndex) => this.setState({ status: itemValue })}>
                                                <Picker.Item label="Entered" value="Entered" />
                                                <Picker.Item label="Accepted" value="Accepted" />
                                                <Picker.Item label="Onjob" value="Onjob" />
                                                <Picker.Item label="Completed" value="DevCompletedice4" />
                                            </Picker>
                                        </View>
                                    </View>

                                    {/** Sim Picker View*/}
                                    <View style={styles.picker_view}>
                                        <Picker
                                            //selectedValue={this.state.language}
                                            style={styles.picker}
                                            onValueChange={(itemValue, itemIndex) => this.setState({ vehicle: itemValue })}>
                                            <Picker.Item label="Vehicle1" value="Vehicle1" />
                                            <Picker.Item label="Vehicle2" value="Vehicle2" />
                                            <Picker.Item label="Vehicle3" value="Vehicle3" />
                                            <Picker.Item label="Vehicle4" value="Vehicle4" />
                                        </Picker>
                                    </View>


                                    {/** Device Picker View*/}
                                    <View style={styles.picker_view}>
                                        <Picker
                                            //selectedValue={this.state.language}
                                            style={styles.picker}
                                            onValueChange={(itemValue, itemIndex) => this.setState({ device: itemValue })}>
                                            <Picker.Item label="Device1" value="Device1" />
                                            <Picker.Item label="Device2" value="Device2" />
                                            <Picker.Item label="Device3" value="Device3" />
                                            <Picker.Item label="Device4" value="Device4" />
                                        </Picker>
                                    </View>

                                    {/** Sim Picker View*/}
                                    <View style={styles.picker_view}>
                                        <Picker
                                            //selectedValue={this.state.language}
                                            style={styles.picker}
                                            onValueChange={(itemValue, itemIndex) => this.setState({ sim: itemValue })}>
                                            <Picker.Item label="Sim1" value="Sim1" />
                                            <Picker.Item label="Sim2" value="Sim2" />
                                            <Picker.Item label="Sim3" value="Sim3" />
                                            <Picker.Item label="Sim4" value="Sim4" />
                                        </Picker>
                                    </View>

                                    {/**Comment box*/}
                                    <View style={styles.comment_text_view}>
                                        <Text style={styles.comment_text}>Comment</Text>
                                    </View>
                                    <View style={styles.comment_box}>
                                        <View style={styles.text_input_view}>
                                            <TextInput
                                                placeholder='Write comment here...'
                                                multiline={true}
                                                underlineColorAndroid='transparent'
                                                style={styles.text_input}
                                                onChangeText={(text) => this.setState({ text })}
                                                value={this.state.text}
                                            />
                                        </View>
                                    </View>
                                </View>

                                {/**Button View*/}
                                <View style={styles.lower_view}>
                                    <View style={styles.button_view}>
                                        <Button style={styles.submit_button}>
                                            <Text style={styles.button_text}>Submit</Text>
                                        </Button>
                                    </View>
                                </View>

                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}