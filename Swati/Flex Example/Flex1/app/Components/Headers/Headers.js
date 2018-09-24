import React, { Component } from "react";
import {Icon} from 'native-base';
import {View,TextInput} from 'react-native';
import styles from './Styles';
//import colors from '../Utils/color';
//import {StackNavigator,TabNavigator} from 'react-navigation';
    
   
export default class Headers extends Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        return (
            <View style={styles.header}>
                    <View style={styles.header_content}>
                        <Icon name={this.props.name} type={this.props.type} style={styles.header_icon} onPress={this.props.onPress}></Icon>
                        <View style={styles.textInputStyle}>
                            <Icon name='search' type='MaterialIcons' style={styles.header_icon}></Icon>
                            <TextInput underlineColorAndroid='transparent' placeholder={this.props.placeholder} style={styles.textInput_content}>
                            </TextInput>
                        </View>
                        <Icon name='facebook-messenger' type='MaterialCommunityIcons' style={styles.header_icon}></Icon>
                    </View>
            </View>
        )
    }
}

export { Headers }

