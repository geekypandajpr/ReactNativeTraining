import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { Button } from 'native-base';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

const ScheduleEvent = (props) => (
    <View style={styles.event_date_view}>

        {/**Servcie Number and Status View*/}
        <View style={styles.text_container}>
            <View style={styles.first_view}>
                <Text style={styles.label_text}>{props.serviceNumber}</Text>
            </View>
            <View style={styles.second_view}>
                <Text style={styles.service_type}>{props.serviceType}</Text>
            </View>
        </View>

        {/**Compnay Name and Vehicle Number*/}
        <View style={styles.text_container}>
            <View style={styles.first_view}>
                <Text style={styles.value_text}>{props.companyName}</Text>
            </View>
            <View style={styles.second_view}>
                <Text style={styles.value_text}>{props.vehicleNumber}</Text>
            </View>
        </View>

        {/**Device View*/}
        <View style={styles.text_container}>
            <View style={styles.first_view}>
                <Text style={styles.value_text}>{props.device}</Text>
            </View>
        </View>

        {/**Sim View*/}
        <View style={styles.text_container}>
            <View style={styles.first_view}>
                <Text style={styles.value_text}>{props.sim}</Text>
            </View>
            <View style={styles.second_view}>
                <Text style={styles.value_text}>Airtel</Text>
            </View>
        </View>

        {/**Schedule Date and Time View*/}
        <View style={styles.text_container}>
            <View style={styles.first_view}>
                <View style={styles.icon_view}>
                    <MaterialIcons name='schedule' color='#1766A6' size={20} />
                </View>
                <View style={styles.first_view}>
                    <Text style={styles.value_text}>{props.jobDate}</Text>
                </View>
            </View>
        </View>

        {/**Address view*/}
        <View style={styles.text_container}>
            <View style={styles.first_view}>
                <View style={styles.icon_view}>
                    <Entypo name='location-pin' color='red' size={20} />
                </View>
                <View style={styles.first_view}>
                    <Text style={styles.value_text}>{props.location}</Text>
                </View>
            </View>
        </View>

        {/**Status Button*/}
        <View style={styles.text_container}>
            <View style={styles.first_view}>
                <Button style={[styles.statusButton, { backgroundColor: props.color }]}>
                    <Text style={styles.status_text}>{props.status}</Text>
                </Button>
            </View>
            <View style={styles.second_view}>
                <TouchableOpacity style={styles.second_view} activeOpacity={0.3} onPress={props.viewMore} >
                    <Text style={styles.view_more}>view more</Text>
                    <Entypo name='chevron-thin-right' color='gray' size={20} />
                </TouchableOpacity>
            </View>
        </View>

    </View>
);

export { ScheduleEvent }