import React from 'react';
import styles from './Styles';
import { View, Text } from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View styles={styles.container}>
                <Text>Home Screen</Text>
            </View>
        )
    }
}

export { Home }