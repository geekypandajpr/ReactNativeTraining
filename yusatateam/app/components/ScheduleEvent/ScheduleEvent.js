import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';
import { Entypo } from '@expo/vector-icons';

const ScheduleEvent = ({item}) => (
    <View style={styles.event_date_view}>
        <View style={styles.text_container}>
            <View style={styles.text_view}>
                <Text style={styles.label_text}>Service#  :  </Text>
                <Text style={styles.value_text}>{item.serviceNumber}</Text>
            </View>
        </View>
        <View style={styles.text_container}>
            <View style={styles.text_view}>
                <Text style={styles.label_text}>Vehicle#  :  </Text>
                <Text style={styles.value_text}>{item.vehicleNumber}</Text>
            </View>
        </View>
        <View style={styles.text_container}>
            <View style={styles.text_view}>
                <Text style={styles.label_text}>Device  :  </Text>
                <Text style={styles.value_text}>{item.device}</Text>
            </View>
        </View>
        <View style={styles.text_container}>
            <View style={styles.text_view}>
                <Text style={styles.label_text}>Sim  :  </Text>
                <Text style={styles.value_text}>{item.sim}</Text>
            </View>
        </View>
        <View style={styles.text_container}>
            <View style={styles.text_view}>
                <Text style={styles.label_text}>Location  :  </Text>
                <Text style={styles.value_text}>{item.location}</Text>
            </View>
            {/* <View style={styles.icon_view}>
                <Entypo name="location-pin" size={20} color="red" />
            </View> */}
        </View>
    </View>
);

export { ScheduleEvent }