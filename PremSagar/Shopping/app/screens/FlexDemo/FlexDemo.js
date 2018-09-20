import React from 'react';
import {
    View,Text,Image,ImageBackground
} from 'react-native';
import styles from './Styles';
import { DegreeIcon }  from '../../components/DegreeIcon';

export default class FlexDemo extends React.Component {
    render() {
        return (
            <View style={ styles.mainContainer }>
                <ImageBackground style={ styles.upperregion } source={require('../../assets/images/weather_background.png')}>
                    <View style={styles.upperregion_first}>
                        <Text style={styles.today}> TODAY </Text>
                        <View style={styles.temp_container}>
                            <Text style={styles.today_temp}> 35 </Text>
                            <DegreeIcon/>
                            <Text style={styles.today}> C </Text>
                        </View>
                        <Image style={styles.cloud_icon} source={require('../../assets/images/cloud.png')}></Image>
                        <Text style={styles.today}> Sunny </Text>
                    </View>
                    <View style={styles.upperregion_second}></View>
                
                </ImageBackground>
                <View style={ styles.lowerregion }>
                </View>
            </View>

        )
    }
}

export { FlexDemo }