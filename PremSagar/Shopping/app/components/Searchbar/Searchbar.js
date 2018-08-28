import React from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import styles from './Styles';

export default class Searchbar extends React.Component {
    render() {
        return (
            <View style={ styles.container }>
                <SearchBar
                    containerStyle={ styles.searchbar }
                    inputStyle={ styles.input }
                    //onChangeText={someMethod}
                    //onClearText={someMethod}
                    placeholder={this.props.placeholder} />
            </View>            
        )
    }
}

export { Searchbar }