import React from 'react';
import {View,Text,Button} from 'react-native';
import styles from './styles';
export default class SearchBar extends React.Component {
    render() {
        let data = [{ value: 'Banana', }, { value: 'Mango', }, { value: 'Pear',}];
        return (
            <View  style={styles.container}>
                 <TextInput
                    style={styles.input}
                    placeholder="Search"
                    onChangeText={this.props.onChange} />
            </View>
        );
      }
    }
export { SearchBar }