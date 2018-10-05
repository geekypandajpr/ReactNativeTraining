import React from 'react';
import {Text,View,Modal,TextInput,Picker,ScrollView} from 'react-native';
import { Button, CheckBox, Body } from 'native-base';
import styles from './styles'
export default class CompleteSchedule extends React.Component {
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
    setModalVisible(visible) {
        this.setState({ modalVisible: visible});
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
                                <Text style={styles.header_text}>Select Vehicle,Device,Sim</Text>
                            </View>                            
                        </View>
                        <View style={styles.modal_child_container}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={styles.upper_view}>
                                    <View style={styles.picker_view}>
                                    <Button block success>
                                        <Text>Vehicle</Text>
                                    </Button>                                
                                    </View>                              
                                    <View style={styles.picker_view}>
                                        <Button block info>
                                            <Text>Device</Text>
                                        </Button>
                                    </View>
                                    <View style={styles.picker_view}>
                                        <Button block warning>
                                            <Text>Sim</Text>
                                        </Button>
                                    </View> 
                                </View>
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
