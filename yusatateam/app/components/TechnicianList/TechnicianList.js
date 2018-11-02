import React from 'react';
import {
    View, TouchableHighlight
} from 'react-native';
import { Card, Text } from 'native-base';
//import { Text, Icon } from 'native-base';
import styles from './styles';

export default class TechnicianList extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'gray' }}>
                <Card style={styles.MainCard}>
                    <View style={{ flex: 1,backgroundColor:'red',justifyContent:'center',alignItems:'center' }}>
                    <View style={styles.Profile_View}></View>
                    </View>
                    <View style={{ flex: 3,backgroundColor:'green'}}></View>
                </Card>
                <Card style={styles.MainCard}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 1 }}></View>
                </Card>
            </View>

        )
    }
}
export { TechnicianList }
