import React from 'react';
import {
    View,
} from 'react-native';
import {Text } from 'native-base';
import styles from './styles';

export default class SummaryCard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.cardView}>
                        <View style={styles.headingView}>
                            <Text> Device</Text>
                        </View>
                        <View style={styles.DetailList}>
                             <Text note style={{marginLeft : 20}}> Total (2000)</Text>
                            <Text note style={{marginLeft : 20}} > Available (100)</Text>
                        </View>
                    </View>
            </View>
        )
    }
}
export {SummaryCard}
