import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
export default class SearchBar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style ={styles.search_view}>
                    <View style={styles.icon_view}>
                        <Ionicons  name="md-search" size={20} color="#00000090"/>
                    </View>
                    <View style={styles.textinput_view}>
                        <TextInput
                            style={styles.text_input}
                            placeholder={this.props.placeholder}
                            underlineColorAndroid="transparent"
                            onChangeText={this.props.onChangeText}
                        />
                    </View>
                </View>
            </View>
        );
      }
    }
export { SearchBar }