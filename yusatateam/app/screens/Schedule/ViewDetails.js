import React from 'react';
import {
    Text,
    View,
    Modal,
    TextInput,
    Picker,
    ScrollView
} from 'react-native';
import { Button } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import { MaterialIcons } from '@expo/vector-icons';

export default class ViewDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            item: {},
            vehicle: '',
            device: '',
            sim: '',
            status: ''
        }
    }

    setModalVisible(visible, item) {
        this.setState({ modalVisible: visible, item: item });
    }

    render() {
        const details = this.state.item;
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this.setState({ modalVisible: !this.state.modalVisible }) }}>
                    <View style={styles.modal_container}>
                        <View style={styles.header_view}>
                            <View style={styles.service_num}>
                                <Text style={styles.header_text}>{details.serviceNumber}</Text>
                            </View>
                            <View style={styles.schedule_view}>
                                <MaterialIcons name='schedule' size={20} color='#1766A6' />
                                <Text style={styles.job_text}>{details.jobDate}</Text>
                            </View>
                        </View>
                        <View style={styles.modal_child_container}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={styles.upper_view}>

                                    {/**Status View*/}
                                    <View style={styles.picker_view}>
                                        <Picker
                                            selectedValue={this.state.status}
                                            style={styles.picker}
                                            onValueChange={(itemValue, itemIndex) => this.setState({ status: itemValue })}>
                                            <Picker.Item label="Entered" value="Entered" />
                                            <Picker.Item label="Accepted" value="Accepted" />
                                            <Picker.Item label="Onjob" value="Onjob" />
                                            <Picker.Item label="Completed" value="Completed" />
                                        </Picker>
                                    </View>

                                    {/** Sim Picker View*/}
                                    <View style={styles.picker_view}>
                                        <Picker
                                            selectedValue={this.state.vehicle}
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
                                            selectedValue={this.state.device}
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
                                            selectedValue={this.state.sim}
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

const styles = EStyleSheet.create({
    '$fontFamily' : 'normal',
    modal_container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#00000090',
        flexDirection: 'column',
    },
    modal_child_container: {
        backgroundColor: '#FFFFFF',
        bottom: 0,
        height: '70%',
        width: '100%',
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15
    },
    checkbox_view: {
        flexDirection: 'column'
    },
    header_view: {
        width: '100%',
        height: 50,
        backgroundColor: '#EEEEF0',
        justifyContent: 'center',
        elevation: 5,
        flexDirection: 'row'
    },
    header_text: {
        fontFamily: '$fontFamily',
        color: '#000',
        fontSize: '1rem',
        fontWeight: 'bold',
        margin: 15
    },
    job_text: {
        fontFamily: '$fontFamily',
        color: '#000',
        fontSize: '0.8rem',
        marginRight: 10
    },
    service_num: {
        flex: 1,
        justifyContent: 'center'
    },
    schedule_view :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    status_picker: {
        flex: 1,
        width: '100%',
        height: 35,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginTop: 4,
        marginBottom: 4
    },
    upper_view: {
        flex: 10,
        //backgroundColor: 'red'
    },
    comment_text_view: {
        width: '100%',
        justifyContent: 'flex-start',
    },
    comment_text: {
        fontFamily: '$fontFamily',
        color: '#000',
        fontSize: '1rem'
    },
    comment_box: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_input_view: {
        width: '100%',
        height: 100,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5
    },
    text_input: {
        width: '100%',
        padding: 10
    },
    lower_view: {
        marginTop: 5,
        marginBottom: 5,
        flex: 2,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        //backgroundColor: 'green'
    },
    button_view: {
        justifyContent: 'center'
    },
    submit_button: {
        backgroundColor: '$primaryColor',
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_text: {
        fontFamily: '$fontFamily',
        color: '#fff'
    },
    picker_view: {
        width: '100%',
        height: 35,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5
    },
    picker: {
        height: '100%',
        width: '100%'
    }
})