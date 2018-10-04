import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';
import { Button } from 'native-base';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

const ScheduleEvent = ({ item }) => (
    <View style={styles.event_date_view}>

        {/**Servcie Number and Status View*/}
        <View style={styles.text_container}>
            <View style={styles.text_view}>
                <Text style={styles.label_text}>{item.serviceNumber}</Text>
            </View>
            <View style={styles.status_view}>
                <Text style={styles.service_type}>{item.serviceType}</Text>
            </View>
        </View>

        {/**Compnay Name and Vehicle Number*/}
        <View style={styles.text_container}>
            <View style={styles.text_view}>
                <Text style={styles.value_text}>{item.companyName}</Text>
            </View>
            <View style={styles.status_view}>
                <Text style={styles.value_text}>{item.vehicleNumber}</Text>
            </View>
        </View>

        {/**Device View*/}
        <View style={styles.text_container}>
            <View style={styles.text_view}>
                <Text style={styles.value_text}>{item.device}</Text>
            </View>
        </View>

        {/**Sim View*/}
        <View style={styles.text_container}>
            <View style={styles.text_view}>
                <Text style={styles.value_text}>{item.sim}</Text>
            </View>
            <View style={styles.status_view}>
                <Text style={styles.value_text}>Airtel</Text>
            </View>
        </View>

        {/**Schedule Date and Time View*/}
        <View style={styles.text_container}>
            <View style={styles.text_view}>
                <View style={styles.icon_view}>
                    <MaterialIcons name='schedule' color='#1766A6' size={20} />
                </View>
                <View style={styles.text_view}>
                    <Text style={styles.value_text}>{item.jobDate}</Text>
                </View>
            </View>
        </View>

        {/**Address view*/}
        <View style={styles.text_container}>
            <View style={styles.text_view}>
                <View style={styles.icon_view}>
                    <Entypo name='location-pin' color='red' size={20} />
                </View>
                <View style={styles.text_view}>
                    <Text style={styles.value_text}>{item.location}</Text>
                </View>
            </View>
        </View>

        {/**Status Button*/}
        <View style={styles.text_container}>
            <View style={styles.text_view}>
                <Button style={[styles.statusButton, { backgroundColor: item.color }]}>
                    <Text style={styles.status_text}>{item.status}</Text>
                </Button>
            </View>
            <View style={styles.status_view}>
                <Entypo name='chevron-thin-right' color='gray' size={20} />
            </View>
        </View>

    </View>
);

export { ScheduleEvent }