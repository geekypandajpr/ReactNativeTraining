import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { Button, Text } from 'native-base';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import colors from '../../constants/colors';

const color = colors.SERVICE_STATUS_COLOR;

// const color = {
//     'Entered': colors.SERVICE_STATUS_COLOR.ENTERED,
//     'Accepted': colors.SERVICE_STATUS_COLOR.ACCEPTED,
//     'Onjob': colors.SERVICE_STATUS_COLOR.ON_JOB,
//     'Completed': colors.SERVICE_STATUS_COLOR.COMPLETED,
//     'Reschedule': colors.SERVICE_STATUS_COLOR.RESCHEDULED,
//     'Cancelled': colors.SERVICE_STATUS_COLOR.CANCELLED
// };

function ScheduleEvent(props) {
    const status = props.color;
    return (
        <View style={styles.event_date_view}>

            {/**Servcie Number and Status View*/}
            <View style={styles.text_container}>
                <View style={styles.first_view}>
                    <Text style={styles.label_text}>{props.serviceNumber}</Text>
                </View>
                <View style={styles.second_view}>
                    <View style={styles.service_type_view}>
                        <Text style={styles.service_type}>{props.serviceType}</Text>
                    </View>
                </View>
            </View>

            {/**Compnay Name*/}
            <View style={styles.text_container}>
                <View style={styles.first_view}>
                    <Text style={styles.value_text}>{props.companyName}</Text>
                </View>
            </View>

            {/**Vehicle Number*/}
            <View style={styles.text_container}>
                <View style={styles.first_view}>
                    <Text style={styles.value_text}>{props.vehicleNumber}</Text>
                </View>
            </View>

            {/**Device View*/}
            {/* <View style={styles.text_container}>
    <View style={styles.first_view}>
        <Text style={styles.value_text}>{props.device}</Text>
    </View>
</View> */}

            {/**Sim View*/}
            {/* <View style={styles.text_container}>
    <View style={styles.first_view}>
        <Text style={styles.value_text}>{props.sim}</Text>
    </View>
    <View style={styles.second_view}>
        <Text style={styles.value_text}>Airtel</Text>
    </View>
</View> */}

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
                    <View style={[styles.statusButton, { backgroundColor: color.status }]}>
                        <Text style={styles.status_text}>{props.status}</Text>
                    </View>
                </View>
                <View style={styles.second_view}>
                    <TouchableOpacity style={styles.second_view} activeOpacity={0.2} onPress={props.viewMore} >
                        <Text style={styles.view_more}>view more</Text>
                        <Entypo name='chevron-thin-right' color='gray' size={20} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export { ScheduleEvent }