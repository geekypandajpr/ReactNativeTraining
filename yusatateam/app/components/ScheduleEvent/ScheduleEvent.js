import React from 'react';
import { View, StatusBar } from 'react-native';
import styles from './Styles';

const ScheduleEvent = ({item}) => (
    <View style={styles.event_date_view}>
        <Text style={}>Service# : {item.serviceNumber}</Text>
        <Text style={}>Vehicle# : {item.vehicleNumber}</Text>
        <Text style={}>Device : {item.device}</Text>
        <Text style={}>Sim : {item.sim}</Text>
        <Text style={}>Location : {item.location}</Text>
    </View>
);

export { ScheduleEvent }