import React from 'react';
import {
    ImageBackground,
    View,
    Text,
    Image
} from 'react-native';
import styles from './Styles';
import { DegreeIcon }  from '../../components/DegreeIcon';

export default class FlexDemo extends React.Component {
    render() {
        return (
            <View style={ styles.mainContainer }>
            
                <ImageBackground source={require('../../assets/images/weather_background.png')} style={ styles.upperregion}>
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
                    <View style={styles.upperregion_second}>
                      <Text style={styles.city}> Pratap Nagar, Jaipur </Text>
                    </View>
                
                </ImageBackground>
                <View style={ styles.lowerregion }>
                </View>
            </View>

        )
    }
}

export { FlexDemo }