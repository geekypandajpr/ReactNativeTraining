import React, { Component } from 'react';
import { Text,StyleSheet } from 'react-native';

export default class Text1 extends Component {
    render() {
        return (
            <Text style={styles.textstyle}>{this.props.text}</Text>
        )
    }
}

const styles = StyleSheet.create({
    textstyle: {
        fontSize: 20,
        color: '#000',
        fontWeight:'bold',
        //fontFamily:'normal'
    }
})