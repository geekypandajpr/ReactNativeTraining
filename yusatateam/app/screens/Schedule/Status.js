import React from 'react';
import { View, Modal, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, Button, Header, Body, Right, CheckBox } from 'native-base';
import { AppLoading } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import { colors, typeCode, globalStyles } from '../../styles';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

const STATUSLIST = {
    "ENTERED" : [ { "key": "8670131", "value": "Entered", "code": "ENTERED", "disabled": false },
        { "key": "8670480", "value": "Accepted", "code": "ACCEPTED", "disabled": false },
        { "key": "8670829", "value": "On Job", "code": "ON_JOB", "disabled": false },
        { "key": "8724575", "value": "Completed", "code": "COMPLETED", "disabled": false },
        { "key": "8671178", "value": "Rescheduled", "code": "RESCHEDULED", "disabled": false },
        { "key": "8671527", "value": "Cancelled", "code": "CANCELLED", "disabled": false }],
    "ACCEPTED": [ { "key": "8670131", "value": "Entered", "code": "ENTERED", "disabled": true },
        { "key": "8670480", "value": "Accepted", "code": "ACCEPTED", "disabled": false },
        { "key": "8670829", "value": "On Job", "code": "ON_JOB", "disabled": false },
        { "key": "8724575", "value": "Completed", "code": "COMPLETED", "disabled": false },
        { "key": "8671178", "value": "Rescheduled", "code": "RESCHEDULED", "disabled": false },
        { "key": "8671527", "value": "Cancelled", "code": "CANCELLED", "disabled": false }],
    "ON_JOB": [ { "key": "8670131", "value": "Entered", "code": "ENTERED", "disabled": true },
        { "key": "8670480", "value": "Accepted", "code": "ACCEPTED", "disabled": true },
        { "key": "8670829", "value": "On Job", "code": "ON_JOB", "disabled": false },
        { "key": "8724575", "value": "Completed", "code": "COMPLETED", "disabled": false },
        { "key": "8671178", "value": "Rescheduled", "code": "RESCHEDULED", "disabled": false },
        { "key": "8671527", "value": "Cancelled", "code": "CANCELLED", "disabled": false }],
    "COMPLETED": [ { "key": "8670131", "value": "Entered", "code": "ENTERED", "disabled": true },
        { "key": "8670480", "value": "Accepted", "code": "ACCEPTED", "disabled": true },
        { "key": "8670829", "value": "On Job", "code": "ON_JOB", "disabled": true },
        { "key": "8724575", "value": "Completed", "code": "COMPLETED", "disabled": true },
        { "key": "8671178", "value": "Rescheduled", "code": "RESCHEDULED", "disabled": true },
        { "key": "8671527", "value": "Cancelled", "code": "CANCELLED", "disabled": true }],
    "RESCHEDULED": [ { "key": "8670131", "value": "Entered", "code": "ENTERED", "disabled": true },
        { "key": "8670480", "value": "Accepted", "code": "ACCEPTED", "disabled": false },
        { "key": "8670829", "value": "On Job", "code": "ON_JOB", "disabled": false },
        { "key": "8724575", "value": "Completed", "code": "COMPLETED", "disabled": false },
        { "key": "8671178", "value": "Rescheduled", "code": "RESCHEDULED", "disabled": false },
        { "key": "8671527", "value": "Cancelled", "code": "CANCELLED", "disabled": false }],
    "CANCELLED": [ { "key": "8670131", "value": "Entered", "code": "ENTERED", "disabled": true },
        { "key": "8670480", "value": "Accepted", "code": "ACCEPTED", "disabled": true },
        { "key": "8670829", "value": "On Job", "code": "ON_JOB", "disabled": true },
        { "key": "8724575", "value": "Completed", "code": "COMPLETED", "disabled": true },
        { "key": "8671178", "value": "Rescheduled", "code": "RESCHEDULED", "disabled": true },
        { "key": "8671527", "value": "Cancelled", "code": "CANCELLED", "disabled": true }],

};

export default class Status extends React.Component {
    constructor(props) {
        super(props);
        moment.locale("en");
        this.state = {
            isLoading: true,
            modalVisible: false,
            status: [],
            itemObject: {},
            code: '',
            dataRenewal: '',
            warning: false,
        }
        this.setModalVisible = this.setModalVisible.bind(this);
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false });
    }

    setModalVisible(visible, data, item) {
        this.setState({
            modalVisible: visible,
            // status: data.results ? data.results : [],
            status: STATUSLIST[item.serviceStatus],
            code: item.serviceStatus,
            itemObject: item,
            dataRenewal: ''
        });
    }

    onApply = () => {

        if (this.state.code == 'RESCHEDULED') {
            if (this.state.dataRenewal == '') {
                this.setState({ warning: true });
            }
            else {
                const statusRequest = {
                    "headerId": this.state.itemObject.headerId,
                    "orderCode": typeCode.SERVICE_ORDER_CODE,
                    "serviceDate": this.state.dataRenewal,
                    "status": this.state.code
                };
                this.props.updateStatus(statusRequest);
                this.setState({ modalVisible: false });
            }
            // console.log(this.state.dataRenewal)

        }
        else {
            const statusRequest = {
                "headerId": this.state.itemObject.headerId,
                "orderCode": typeCode.SERVICE_ORDER_CODE,
                "status": this.state.code
            };
            this.props.updateStatus(statusRequest);
            this.setState({ modalVisible: false });
        }


    }

    render() {
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => this.setState({ modalVisible: false })}>
                        <View style={styles.container}>
                            <View style={{ width: '100%' }}>
                                <Header style={styles.Header_Style}>
                                    <Body>
                                        <Text style={[styles.Text_style, { fontFamily: 'Roboto' }]}> Change Status </Text>
                                    </Body>
                                    <Right>
                                        <Button transparent onPress={() => this.setState({ modalVisible: false })}>
                                            <MaterialIcons name='close' size={30} color='#d9534f' />
                                        </Button>
                                    </Right>
                                </Header>
                            </View>
                            <View style={styles.View_Container}>
                                <ScrollView>
                                    {this.state.status.map((item, index) =>
                                        <View style={styles.Small_View} key={index}>
                                            <View style={styles.checkbox_view}>
                                                <CheckBox
                                                    disabled={item.disabled}
                                                    checked={this.state.code === item.code}
                                                    color={!item.disabled ? colors.HEADER_COLOR : '#808080'}
                                                    onPress={() => this.setState({ code: item.code })}
                                                />
                                                <View style={styles.remember_me}>
                                                    <Text style={[styles.text, { fontFamily: 'Roboto', color: !item.disabled ? '#000': '#808080'}]}>
                                                        {item.code}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    )}

                                    { this.state.code === 'RESCHEDULED' ?

                                        <View style={[styles.Small_View, { marginLeft: '3%'}]}>
                                            <View style={styles.checkbox_view}>
                                                <Text style={[styles.text, { fontFamily: 'Roboto'}]}>
                                                    RE-SCHEDULE DATE & TIME
                                                </Text>
                                            </View>
                                            <View style={styles.checkbox_view}>
                                                <DatePicker
                                                    style={{ width: '80%' }}
                                                    date={this.state.dataRenewal}
                                                    mode="datetime"
                                                    placeholder="DD/MM/YYYY hh:mm:ss a"
                                                    // showTime={{ use12Hours: true, format: "hh:mm:ss a" }}
                                                    format="DD/MM/YYYY hh:mm:ss a"
                                                    //minDate=""
                                                    //maxDate=""
                                                    confirmBtnText="Confirm"
                                                    cancelBtnText="Cancel"
                                                    customStyles={{
                                                        dateIcon: {
                                                            position: 'absolute',
                                                            left: 0,
                                                            top: 4,
                                                            marginLeft: 0
                                                        },
                                                        dateInput: {
                                                            marginLeft: 36
                                                        }
                                                        // ... You can check the source to find the other keys.
                                                    }}
                                                    onDateChange={(date) => { this.setState({ dataRenewal: date }) }}
                                                />
                                            </View>
                                            {this.state.dataRenewal ? null :
                                                <View style={styles.checkbox_view}>
                                                    <Text style={{color: 'red', fontSize:9}}>**Re-Schedule date and time not be empty</Text>
                                                </View>
                                            }
                                        </View>
                                        : null
                                    }

                                    <View style={[styles.Small_View,{ padding: 4 }]}>
                                        <View style={[styles.checkbox_view, { justifyContent: 'flex-end' }]}>
                                            <Button full onPress={this.onApply} disabled={this.state.itemObject.serviceStatus == 'COMPLETED' || this.state.itemObject.serviceStatus == 'CANCELLED'}
                                                style={{
                                                    width: 150,
                                                    backgroundColor: this.state.itemObject.serviceStatus == 'COMPLETED' || this.state.itemObject.serviceStatus == 'CANCELLED' ? '#808080': colors.PRIMARY
                                                }} >
                                                <Text style={{ fontFamily: 'Roboto', color: '#fff' }}> Change </Text>
                                            </Button>
                                        </View>
                                    </View>

                                </ScrollView>
                            </View>
                        </View>
                    </Modal>
                </View>
        )
    }
}

export { Status }

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#00000090',
        flexDirection: 'column',
    },
    Header_Style: {
        backgroundColor: '#fff',
        borderBottomColor: '#dcdcdc',
        borderBottomWidth: 1
    },
    View_Container: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '45%',
    },
    Text_style: {
        fontSize: '1.3rem',
        color: '#000',
        fontWeight: '400',
    },
    Small_View: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 6,
        // backgroundColor: 'red'
    },
    checkbox_view: {
        flex: 1,
        width: '95%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: 'red'
    },
    remember_me: {
        marginLeft: 20
    },
    text: {
        color: '#000',
        fontSize: '0.8rem'
    },
})