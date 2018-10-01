import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './Styles';

const ScheduleEvent = ({item}) => (
    <View style={styles.event_date_view}>
        <View style={styles.text_container}>
            <View style={styles.text_view}>
                <Text style={styles.label_text}>{item.serviceNumber}</Text>
                
            </View>
            <View style={styles.status_view}>
                {/* <Button title={item.status} onPress={()=>{console.log('button pressed')}}/> */}
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
        </View>
        <View style={styles.text_container}>
            <View style={styles.text_view}>
                <Text style={styles.value_text}>{item.jobDate}</Text>
            </View>
        </View>
        <View style={styles.text_container}>
            <View style={styles.text_view}>
                <Text style={styles.label_text}>Location  :  </Text>
                <Text style={styles.value_text}>{item.location}</Text>
            </View>
        </View>
    </View>
);

export { ScheduleEvent }