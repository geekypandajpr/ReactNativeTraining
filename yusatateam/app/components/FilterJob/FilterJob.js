import React from 'react';
import { View, Modal, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Text, Button, Left, Right, CheckBox, ListItem, Body } from 'native-base';
import { Entypo } from '@expo/vector-icons'
export default class FilterJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            status: '',
            value: 'scheduleDate',
            selected: ['jobNumber', 'scheduleDate', 'jobType', 'servicePerson', 'completedDate'],
            map1: new Map(),
        }
        this.setModalVisible = this.setModalVisible.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
    }

    setModalVisible(visible, data) {
        this.setState({ modalVisible: visible, status: data });
    }
    toggleCheckbox(id) {
        let map1 = this.state.map1;
        if (this.state.map1.has(id)) {
            this.state.map1.delete(id);

        }
        else {
            this.state.map1.set(id, true);

        }
        this.setState({ map1 })

    }

    onModalClose() {

        this.props.getSelected(this.state.map1);
        this.setState({ modalVisible: !this.state.modalVisible });
    }
    render() {
        return (
            <View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View style={{flex : 2}}></View>
                    <View style={styles.container}>
                        <View style={styles.sub_container}>
                            <View style={styles.header_view}>
                                <Left>
                                    <Text style={styles.header_text}>Filter</Text>
                                </Left>
                                <TouchableOpacity onPress={() => this.onModalClose()}>
                                    <Right style={{ alignItems: 'center', justifyContent: 'center', marginRight: 5 }}>
                                        <Entypo name="cross" size={32} color="white" />
                                    </Right>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.View_Container}>
                                <ListItem>
                                    <CheckBox
                                        checked={this.state.map1.get('jobNumber')}
                                        onPress={() => this.toggleCheckbox('jobNumber')}
                                    />
                                    <Body>
                                        <Text>Job Number</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <CheckBox
                                        checked={this.state.map1.get('scheduleDate')}
                                        onPress={() => this.toggleCheckbox('scheduleDate')}
                                    />
                                    <Body>
                                        <Text>Schedule Date</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <CheckBox
                                        checked={this.state.map1.get('jobType')}
                                        onPress={() => this.toggleCheckbox('jobType')}
                                    />
                                    <Body>
                                        <Text>Job Type</Text>
                                    </Body>
                                </ListItem>
                                {
                                    this.state.status == 'Pending' ? null :
                                        <ListItem>
                                            <CheckBox
                                                checked={this.state.map1.get('servicePerson')}
                                                onPress={() => this.toggleCheckbox('servicePerson')}
                                            />
                                            <Body>
                                                <Text>Technician Name</Text>
                                            </Body>
                                        </ListItem>
                                }
                                {
                                    this.state.status == 'Pending' || this.state.status == 'schedule' ? null :
                                        <ListItem>
                                            <CheckBox
                                                checked={this.state.map1.get('completedDate')}
                                                onPress={() => this.toggleCheckbox('completedDate')}
                                            />
                                            <Body>
                                                <Text>Completed Date</Text>
                                            </Body>
                                        </ListItem>
                                }
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
export { FilterJob }