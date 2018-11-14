import React from 'react';
import { 
    View,
    Text,
    ActivityIndicator
    } from 'react-native';
import styles from './styles';

export default class Activityindication extends React.Component {
    render() {
        return (
            <View style={styles.container}>
              
              <View style={[styles.Outer_circle, { backgroundColor: '#F8F8F8' }]} >
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
            </View>
        );
    }
}
export{ Activityindication}