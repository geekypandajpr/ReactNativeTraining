import React from 'react';
import { View, Text,ScrollView } from 'react-native';
import styles from './styles';
import { ImageText } from '../../Component/ImageWithText';
import { IconText } from '../../Component/IconWithText';
import IconVertical from '../../Component/IconVerticalText/IconVerticaltext';
import { Ionicons } from '@expo/vector-icons';

export default class Details extends React.Component {
    render() {
        return (

            <View style={styles.parent}>
            

                <View style={styles.first}>
                    <ImageText
                        source={require('../../assests/Image/profile.jpg')}
                        text1='Sanna bidad 30 year ,london uk  '
                     />
                </View>
     
                <View style={styles.second}>

                    <View style={styles.horizental}>
                        <View style={styles.Vertical}>
                            <IconText
                                icon ="ios-game-controller-b"
                                text2 ='120/80 Sport'
                                colour ="#009999"
                            />
                        </View>

                        <View style={styles.Vertical}>
                            <IconText
                                 icon ="ios-contacts"
                                 text2 ='80/129 Contacts'
                                 colour ="#009999"
                            />
                        </View>
                    </View>

                    <View style={styles.horizental}>
                        <View style={styles.Vertical}>
                            <IconText
                                icon ="ios-clock"
                                text2 ='80/129 Clock'
                                colour ="#009999"
                            />
                        </View>

                        <View style={styles.Vertical}>
                            <IconText
                                icon ="ios-camera"
                                text2 ='80/129 Camera'
                                colour ="#009999"
                            />
                        </View>
                    </View>

                    <View style={styles.horizental}>
                        <View style={styles.Vertical}>
                            <IconText
                                icon ="ios-car"
                                text2 ='90/129 Car'
                                colour ="#009999"
                            />
                        </View>

                        <View style={styles.Vertical}>
                            <IconText
                                icon="ios-aperture"
                                colour="#009999"
                                text2='80/129 Aperture'
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.third}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.vertical_third}>
                            <IconVertical
                                icon1 ="logo-facebook"
                                colors="#3B5998"
                                text3 = "Facebook"
                            />
                        </View>
                        <View style={styles.vertical_third}>
                            <IconVertical
                                icon1 ="logo-google"
                                text3 = "Google"
                                colors="#d34836"
                            />
                        
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.vertical_third}>
                            <IconVertical
                                icon1 ="logo-whatsapp"
                                colors="#33cc33"
                                text3 = "Whatsapp"
                            />
                        </View>
                        <View style={styles.vertical_third}>
                            <IconVertical
                                icon1="logo-youtube"
                                text3 = "Youtube"
                                colors="#ff0000"
                            />
                        </View>
                    </View>

                </View>
                
                 
                 {/* <View style={styles.four}>
                <View style ={{flex:1,justifyContent :"center",alignItems :'center'}}>
                <Ionicons name="ios-closed-captioning" size={45} color ="#301a03"/>
                </View>
                
                <View style ={{flex:1,justifyContent :"center",alignItems :'center'}}>
                <Ionicons name="ios-contact"  size={45} color ="#301a03"/>
                </View>
                <View style ={{flex:1,justifyContent : "center",alignItems :'center'}}>
                <Ionicons active name="ios-home"  size={45} color ="#301a03"/>
                </View>
                <View style ={{flex:1,justifyContent : "center",alignItems :'center'}}>
                <Ionicons name="ios-image"  size={45} color ="#301a03"/>
                </View>
                <View style ={{flex:1,justifyContent : "center",alignItems :'center'}}>
                <Ionicons name="ios-mail"  size={45} color ="#301a03"/>
                </View>
                </View>  */}
                
                
            </View>

            

        );

    }
}

export { Details }