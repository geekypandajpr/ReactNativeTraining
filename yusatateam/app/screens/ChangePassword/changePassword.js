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
            text : '',
            newPassword : '',
            verifyPassword : ''
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
                                <Item >
                                    <Input placeholder='Old Password' 
                                    onChangeText={(text) => this.setState({text})}
                                    value={this.state.text}/>
                                    {
                                        this.state.text == '' ? null :
                                        <Icon style= { this.state.text=="Admin" ? {fontSize: 24, color: 'green'}: {fontSize: 26, color: 'red'}}  name=
                                        { this.state.text=="Admin" ? 'checkmark-circle': 'close-circle'} />
                                    }
                                    
                                </Item>
                            </View>
                            <View>
                                <Item >
                                    <Input placeholder='New Password' 
                                    onChangeText={(text) => this.setState({newPassword :text})}
                                    value={this.state.newPassword}/>
                                    <Icon />
                                </Item>
                            </View>
                            <View>
                                <Item>
                                    <Input placeholder='Verify Password'
                                    onChangeText={(text) => this.setState({verifyPassword :text})}
                                    value={this.state.verifyPassword} />
                                    {
                                        this.state.verifyPassword == '' ? null :
                                        <Icon style= { this.state.verifyPassword==this.state.newPassword ? {fontSize: 24, color: 'green'}: {fontSize: 26, color: 'red'}}  name=
                                    { this.state.verifyPassword==this.state.newPassword ? 'checkmark-circle': 'close-circle'} />
                                    }
                                    
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