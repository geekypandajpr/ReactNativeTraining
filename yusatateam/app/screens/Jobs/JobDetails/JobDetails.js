import React from 'react';
import { Text, View, Modal, TextInput } from 'react-native';
import { Button,Icon } from 'native-base';
import styles from './styles';
export default class JobDetails extends React.Component {
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
                                 <View style={{ paddingLeft: 8,paddingTop : 15 }}>
                                    <Icon name='devices' type="MaterialIcons" style={{ fontSize: 25, color: '#7B68EE' }} />
                                </View>
                                <Text style={styles.header_text}>{details.jobNumber}</Text>
                            </View>
                        </View>
                        <View style={styles.modal_child_container}>
                            <View showsVerticalScrollIndicator={false}>
                                <View style={styles.upper_view}>
                                    <View style={styles.picker_view}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text >Job No</Text>
                                            <Text style={{ paddingLeft: 80, color: '#FF6347' }} >{details.jobNumber}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text >Contact Person</Text>
                                            <Text style={{ paddingLeft: 30 }} >{details.contactPerson}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text >Contact No</Text>
                                            <Text style={{ paddingLeft: 55 }} >{details.contactNumber}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text >Job Name</Text>
                                            <Text style={{ paddingLeft: 58 }} >{details.jobName}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text >Job Type</Text>
                                            <Text style={{ paddingLeft: 70 }} >{details.jobType}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text >Job Status</Text>
                                            <Text style={{ paddingLeft: 55 }} >{details.jobStatus}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.picker_view}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text >Service Person </Text>
                                            <Text style={{ paddingLeft: 25 }} >{details.servicePerson}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text >Schedule Date </Text>
                                            <Text style={{ paddingLeft: 30 }} >{details.scheduleDate}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text >Company Name </Text>
                                            <Text style={{ paddingLeft: 20 }} >{details.companyName}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text >COD </Text>
                                            <Text style={{ paddingLeft: 95 }} >{details.cashOnDelivery}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text >Amount</Text>
                                            <Text style={{ paddingLeft: 75 }} >{details.amount}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text >Training </Text>
                                            <Text style={{ paddingLeft: 75 }} >{details.training}</Text>
                                        </View>
                                    </View>
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
                                                value={this.state.text}/>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.lower_view}>
                                    <View style={styles.button_view}>
                                        <Button style={styles.submit_button}
                                            onPress={() => { this.setState({ modalVisible: !this.state.modalVisible }) }}>
                                            <Text style={styles.button_text}>Submit</Text>
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export { JobDetails }
