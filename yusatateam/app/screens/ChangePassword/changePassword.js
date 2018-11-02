import React from 'react';
import {
    View,
    Modal,
} from 'react-native';
import styles from './styles';
import { Item, Input, Icon, Text, Button } from 'native-base';
export default class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        }
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
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
                    <View style={styles.container}>
                        <View style={styles.sub_container}>
                        <View style={styles.header_view}>
                            <View style={styles.service_num}>
                                <Text style={styles.header_text}>Change Password</Text>
                            </View>
                        </View>
                        <View style={styles.View_Container}>
                            <View>
                                <Item success>
                                    <Input placeholder='Old Password' />
                                    <Icon name='checkmark-circle' />
                                </Item>
                            </View>
                            <View>
                                <Item success>
                                    <Input placeholder='New Password' />
                                    <Icon name='checkmark-circle' />
                                </Item>
                            </View>
                            <View>
                                <Item success>
                                    <Input placeholder='Verify Password' />
                                    <Icon name='checkmark-circle' />
                                </Item>
                            </View>
                            <View style={styles.button_view}>
                                <View style={{ flex: 1, margin : 5 }}>
                                    <Button block danger
                                     onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                        <Text>Cancel</Text>
                                    </Button>
                                </View>
                                <View style={{ flex: 1, margin : 5  }}>
                                    <Button block >
                                        <Text>Submit</Text>
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
export { ChangePassword }