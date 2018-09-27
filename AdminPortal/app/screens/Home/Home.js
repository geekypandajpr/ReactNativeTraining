import React from 'react';
import styles from './Styles';
import {View,Text} from 'react-native';

export default class Home extends React.Component{
    render(){
        return(
            <View style={styles.header}>
            <View style={styles.header_content}>
               <Text style={styles.textstyle}>HOME SCREEN</Text>
            </View>
    </View>
        )
    }
}