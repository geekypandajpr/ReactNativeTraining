import React from 'react';
import {View,TextInput,Button,Text} from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
export default class SearchBar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <View style ={styles.searchIcon}>
                <View style={styles.borderSearch}>
                <TextInput placeholder="Vehicle,Sim,Device" underlineColorAndroid="transparent" onChangeText={this.props.searchItem}/>
                </View>
                <View style={styles.icon}>
                <Ionicons  name="md-search" size={32} color="orange" onPress={this.props.click} />
                </View>
            </View>


            </View>
        );
      }
    }
export { SearchBar }