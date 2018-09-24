import React from 'react';
import {View,Text} from 'react-native';
import {Icon} from 'native-base';
import styles from './Styles';

export default class Page2 extends React.Component{
    static navigationOptions = {
        header:null,
    };
    render(){
        return(
            <View style={styles.mainContainer}>
            <View style={styles.header}>
            <Icon name='chevron-left' type='Entypo'></Icon>
            </View>
            <View style={styles.body}></View>
                
            </View>
        )
    }
}

export {Page2}