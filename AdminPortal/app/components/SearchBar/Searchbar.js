import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles'
export default class SearchBar extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    onChangeText={this.props.onChange} />
                <Icon  name='search'  style={styles.icon} type='font-awesome' color='#f50' onPress={() => alert('hello')} /> 
            </View>
        )
    }
}

export {SearchBar}