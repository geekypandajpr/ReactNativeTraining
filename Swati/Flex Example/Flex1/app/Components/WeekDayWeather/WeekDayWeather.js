import React from 'react';
import {
    View, Text
} from 'react-native';
import styles from './Styles';
import { DegreeIcon1 } from '../DegreeIcon1/Index';
import { Icons } from '../Icon/Index';

export default class WeekDayWeather extends React.Component{

    render() {
        return (
            <View style={styles.otherday}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.today}> {this.props.dayName} </Text>
                </View>
                <View style={styles.image_view}>
                    { /* <Image style={styles.cloud_icon} source={require('../../Assets/Images/sun1.png')}></Image>*/}
                    <Icons />
                </View>
                <View style={styles.weekdaytemp_container}>
                    <Text style={styles.weekday_temp}> {this.props.temp} </Text>
                    <DegreeIcon1 />
                    <Text style={styles.cent}> C </Text>
                </View>
            </View>

        )
    }
}

export { WeekDayWeather }