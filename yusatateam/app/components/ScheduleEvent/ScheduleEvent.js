import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';
import { Button } from 'native-base';
import { Entypo } from '@expo/vector-icons';

const ScheduleEvent = ({ item }) => (
    <View style={styles.event_date_view}>
        <View style={styles.text_container}>
            <View style={styles.text_view}>
                <Text style={styles.label_text}>{item.serviceNumber}</Text>

            </View>
            <View style={styles.status_view}>
                <Button style={styles.statusButton}>
                    <Text>{item.status}</Text>
                </Button>
            </View>
        </View>
        <View style={styles.text_container}>
            <View style={styles.text_view}>
                <Text style={styles.value_text}>{item.device}</Text>
            </View>
        </View>
        <View style={styles.text_container}>
            <View style={styles.text_view}>
                <Text style={styles.value_text}>{item.sim}</Text>
            </View>
            <View style={styles.status_view}>
                <Text style={styles.value_text}>Airtel</Text>
            </View>
        </View>
        <View style={styles.text_container}>
            <View style={styles.text_view}>
                <Text style={styles.value_text}>{item.jobDate}</Text>
            </View>
        </View>
        <View style={styles.text_container}>
            <View style={styles.text_view}>
                <Entypo name='location-pin' color='red' size={20}/>
                <Text style={styles.value_text}>{item.location}</Text>
            </View>
        </View>
    </View>
);

export { ScheduleEvent }