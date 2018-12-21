import React from 'react';
import {
    View,
    Modal,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import { Text,Button, Header, Body, Left, Right, Title,Picker,Item } from 'native-base';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import colors from '../../styles/colors'
import { Entypo } from '@expo/vector-icons'


export default class DashboardFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            selected1 : '',
            selected2 : ''
        }
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    onModalClose() {
        this.setState({ modalVisible: !this.state.modalVisible });
    }
    onValueChange(value) {
        this.setState({
            selected1: value
        });
      }
      onValueChangeData(value) {
        this.setState({
            selected2: value
        });
      }
    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                   <View style={styles.container}>
                        <View style={{ width: '100%' }}>
                            
                        <Header style={styles.Header_Style}>
                        <Body>
                            <Text style={styles.Text_style}>Filter</Text>
                        </Body>
                        <Right>
                            <TouchableHighlight onPress={() => { this.setModalVisible(false) }}>
                                <Entypo name='cross' size={28} color='#fff'></Entypo>
                            </TouchableHighlight>
                        </Right>
                        </Header>
                        </View>
                            <View style={styles.View_Container}>
                                        <View style={styles.pickerView}>
                                            <Picker
                                                    note
                                                    mode="dropdown"
                                                    style={styles.picker}
                                                    selectedValue={this.state.selected1}
                                                    onValueChange={this.onValueChange.bind(this)}
                                                    >
                                                    <Picker.Item label="Wallet" value="key0" />
                                                    <Picker.Item label="ATM Card" value="key1" />
                                                    <Picker.Item label="Debit Card" value="key2" />
                                                    <Picker.Item label="Credit Card" value="key3" />
                                                    <Picker.Item label="Net Banking" value="key4" />
                                            </Picker>
                                        </View>
                                        <View style={styles.pickerView} >
                                            <Picker
                                                    note
                                                    mode="dropdown"
                                                    style={styles.picker}
                                                    selectedValue={this.state.selected2}
                                                    onValueChange={this.onValueChangeData.bind(this)}
                                                    >
                                                    <Picker.Item label="Wallet" value="key0" />
                                                    <Picker.Item label="ATM Card" value="key1" />
                                                    <Picker.Item label="Debit Card" value="key2" />
                                                    <Picker.Item label="Credit Card" value="key3" />
                                                    <Picker.Item label="Net Banking" value="key4" />
                                            </Picker>
                                        </View>
                                        <View style={{flex :1,flexDirection : 'row'}}>
                                        <View style={{flex :5}}></View> 
                                            <Right  style={{flex :4}}>
                                            <Button full info style={{borderRadius: 4,width : 150}}><Text> Update </Text></Button>
                                            </Right>
                                        </View>
                             </View>
                            </View>
                            
                    </Modal>
            </View>
        )
    }
}
export {DashboardFilter}