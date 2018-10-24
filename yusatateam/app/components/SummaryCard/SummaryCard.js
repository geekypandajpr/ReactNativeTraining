import React from 'react';
import {
    View,
} from 'react-native';
import { Text, Icon } from 'native-base';
import styles from './styles';
import { LinearGradient } from 'expo';

export default class SummaryCard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inner_container}>
                    <LinearGradient colors={this.props.colors} style={{flex: 1, borderRadius: 5}}>
                        <View style={styles.view1}>
                            <View><Icon name='devices' type='MaterialIcons' style={styles.icon}></Icon></View>
                            <View><Text style={styles.heading}>Device</Text></View>
                        </View>
                        <View style={styles.view2}>
                            <View><Text style={styles.text1}>Total ordered devices:</Text></View>
                            <View><Text style={styles.text2}>100</Text></View>
                        </View>
                    </LinearGradient>
                </View>
            </View>
        )
    }
}
export {SummaryCard}
