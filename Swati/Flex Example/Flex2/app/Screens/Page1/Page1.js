import React from 'react';
import {
    View, Text, Image, ImageBackground, Button
} from 'react-native';
import styles from './Styles';
import { DegreeIcon } from '../../Components/DegreeIcon/Index';
import { DegreeIcon1 } from '../../Components/DegreeIcon1/Index';
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
                    <View style={styles.otherday}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.today}> MON </Text>
                        </View>
                        <View style={styles.image_view}>
                            <Image style={styles.cloud_icon} source={require('../../Assets/Images/sun1.png')}></Image>
                        </View>
                        <View style={styles.weekdaytemp_container}>
                            <Text style={styles.weekday_temp}> 98 </Text>
                            <DegreeIcon1 />
                            <Text style={styles.cent}> C </Text>
                        </View>
                    </View>
                    <View style={styles.otherday}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.today}> TUE </Text>
                        </View>
                        <View style={styles.image_view}>
                            <Image style={styles.cloud_icon} source={require('../../Assets/Images/sun1.png')}></Image>
                        </View>
                        <View style={styles.weekdaytemp_container}>
                            <Text style={styles.weekday_temp}> 88 </Text>
                            <DegreeIcon1 />
                            <Text style={styles.cent}> C </Text>
                        </View>
                    </View>
                    <View style={styles.otherday}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.today}> WED </Text>
                        </View>
                        <View style={styles.image_view}>
                            <Image style={styles.cloud_icon} source={require('../../Assets/Images/sun1.png')}></Image>
                        </View>
                        <View style={styles.weekdaytemp_container}>
                            <Text style={styles.weekday_temp}> 81 </Text>
                            <DegreeIcon1 />
                            <Text style={styles.cent}> C </Text>
                        </View>
                    </View>
                    <View style={styles.otherday}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.today}> THU </Text>
                        </View>
                        <View style={styles.image_view}>
                            <Image style={styles.cloud_icon} source={require('../../Assets/Images/sun1.png')}></Image>
                        </View>
                        <View style={styles.weekdaytemp_container}>
                            <Text style={styles.weekday_temp}> 68 </Text>
                            <DegreeIcon1 />
                            <Text style={styles.cent}> C </Text>
                        </View>
                    </View>
                    <View style={styles.otherday}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.today}> FRI </Text>
                        </View>
                        <View style={styles.image_view}>
                            <Image style={styles.cloud_icon} source={require('../../Assets/Images/sun1.png')}></Image>
                        </View>
                        <View style={styles.weekdaytemp_container}>
                            <Text style={styles.weekday_temp}> 78</Text>
                            <DegreeIcon1 />
                            <Text style={styles.cent}> C </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
export { Page1 } 