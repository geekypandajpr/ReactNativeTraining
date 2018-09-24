import React from 'react';
import {
    View, Text, Image, ImageBackground, Button
} from 'react-native';
import styles from './Styles';
import { DegreeIcon } from '../../Components/DegreeIcon/Index';
import { WeekDayWeather } from '../../Components/WeekDayWeather/Index';
export default class Page1 extends React.Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={styles.mainContainer}>
                <ImageBackground style={styles.upperregion} source={require('../../Assets/Images/weather_background.png')}>
                    <View style={styles.buttonView}>
                        <Button title="next page" onPress={() => this.props.navigation.navigate('Page2')}></Button>
                    </View>
                    <View style={styles.upperregion_first}>
                        <Text style={styles.today}> TODAY </Text>
                        <View style={styles.temp_container}>
                            <Text style={styles.today_temp}> 35 </Text>
                            <DegreeIcon />
                            <Text style={styles.today}> C </Text>
                        </View>
                        <Image style={styles.cloud_icon} source={require('../../Assets/Images/cloud1.png')}></Image>
                        <View style={styles.weather}>
                            <Text style={styles.today}> Sunny </Text>
                        </View>
                    </View>
                    <View style={styles.upperregion_second}>
                        <Text style={styles.location}>MALMO,SWEDEN</Text>
                        <Text style={styles.today}>8:40 PM</Text>
                    </View>
                </ImageBackground>
                <View style={styles.lowerregion}>                   
                    <WeekDayWeather
                        dayName='MON'
                        temp='98' />
                    <WeekDayWeather
                        dayName='TUE'
                        temp='88' />
                    <WeekDayWeather
                        dayName='WED'
                        temp='81' />
                    <WeekDayWeather
                        dayName='THU'
                        temp='68' />
                    <WeekDayWeather
                        dayName='FRI'
                        temp='78' />
                </View>
            </View>
        )
    }
}
export { Page1 } 