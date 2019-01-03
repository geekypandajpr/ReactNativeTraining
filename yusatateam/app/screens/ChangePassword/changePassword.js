import React from 'react';
import {
    View,
    Modal,
    Keyboard
} from 'react-native';
import styles from './styles';
import { Item, Input, Icon, Text, Button,Label } from 'native-base';
import functions from '../../common/functions'
export default class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            text : '',
            newPassword : '',
            verifyPassword : '',
            oldPass : '',
            verifyPass : '',
            buttonPress : true
        }
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible,buttonPress : false,text : '',newPassword : '', verifyPassword : ''});
    }
    submitPress()
    {

        this.setState({buttonPress : true})
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
                            <Item floatingLabel>
                                <Label>Old Password</Label>
                                    <Input 
                                    onChangeText={(text) => this.setState({text : text.trim()})}
                                    value={this.state.text}/>
                                    {
                                        this.state.buttonPress  && this.state.text != ''? 
                                        <Icon style= { this.state.text=="Admin" ? {fontSize: 24, color: 'green'}: {fontSize: 26, color: 'red'}}  name=
                                        { this.state.text=="Admin" ? 'checkmark-circle': 'close-circle'} /> : null
                                    }
                                    
                                </Item>
                            </View>
                            <View>
                            <Item floatingLabel>
                                <Label>New Password</Label>
                                    <Input  
                                    onChangeText={(text) => this.setState({newPassword :text.trim()})}
                                    value={this.state.newPassword}/>
                                    {
                                        this.state.buttonPress && this.state.newPassword != ''  ? 
                                        <Icon style= { this.state.newPassword.length > 5 ? {fontSize: 24, color: 'green'}: {fontSize: 26, color: 'red'}}  name=
                                        { this.state.newPassword.length > 5 ? 'checkmark-circle': 'close-circle'} />
                                        : null
                                    }
                                </Item>
                            </View>
                            <View>
                            <Item floatingLabel>
                                <Label>Verify Password</Label>
                                    <Input 
                                    onChangeText={(text) => this.setState({verifyPassword :text.trim()})}
                                    value={this.state.verifyPassword} />
                                    {
                                        this.state.buttonPress && this.state.verifyPassword != '' ? 
                                        <Icon style= { this.state.verifyPassword==this.state.newPassword ? {fontSize: 24, color: 'green'}: {fontSize: 26, color: 'red'}}  name=
                                        {this.state.verifyPassword==this.state.newPassword ? 'checkmark-circle': 'close-circle'} />
                                        : null
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
                                    <Button block   onPress={() => this.submitPress()}>
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