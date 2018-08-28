import React from 'react';
import { SearchBar } from 'react-native-elements';
import styles from './Styles';

export default class Searchbar extends React.Component {
    render() {
        return (
            <SearchBar
                containerStyle={ styles.container }
                inputStyle={ styles.input }
                //onChangeText={someMethod}
                //onClearText={someMethod}
                placeholder='Search here'
            />
        )
    }
}

export { Searchbar }