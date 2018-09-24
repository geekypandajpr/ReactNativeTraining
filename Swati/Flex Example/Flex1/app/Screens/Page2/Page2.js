import React from 'react';
import { View, TextInput, Image, Text, ScrollView } from 'react-native';
import { Icon } from 'native-base';
import styles from './Styles';
import { Icon_Text_Ver } from '../../Components/Icon_Text_Ver/Index';
import { Icon_Text_Hor } from '../../Components/Icon_Text_Hor/Index';
import { Headers } from '../../Components/Headers/Index';
import { Footers } from '../../Components/Footers/Index';


export default class Page2 extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={styles.mainContainer}>
                <Headers name='chevron-left' type='Entypo'
                    onPress={() => this.props.navigation.navigate('Page3')}
                    placeholder='Scott Christensen' />
                <View style={styles.body}>
                    <ScrollView>
                        <Image style={styles.profileImage1} source={require('../../Assets/Images/profileImage1.png')}></Image>
                        <View style={styles.image_view}>
                            <Image style={styles.profileImage2} source={require('../../Assets/Images/profileImage2.png')}></Image>
                            <Text style={styles.name_text}>Scott Christensen</Text>
                        </View>
                        <View style={styles.optionView}>
                            <Icon_Text_Ver name='account-check' type='MaterialCommunityIcons' text='Friends' styles={styles.iconView1}></Icon_Text_Ver>
                            <Icon_Text_Ver name='briefcase-check' type='MaterialCommunityIcons' text='Following' styles={styles.iconView1}></Icon_Text_Ver>
                            <Icon_Text_Ver name='facebook-messenger' type='MaterialCommunityIcons' text='Message' styles={styles.iconView2}></Icon_Text_Ver>
                            <Icon_Text_Ver name='ios-more' type='Ionicons' text='More' styles={styles.iconView2}></Icon_Text_Ver>
                        </View>
                        <View style={styles.statusText}><Text style={styles.iconView2}>Be nice, the world is a small town.</Text></View>
                        <View style={styles.lineView} />
                        <View>
                            <Icon_Text_Hor name='briefcase' type='SimpleLineIcons' text='Accountant'></Icon_Text_Hor>
                            <Icon_Text_Hor name='home' type='Octicons' text='Lives in Lisbon, Portugal'></Icon_Text_Hor>
                            <Icon_Text_Hor name='school' type='MaterialIcons' text='Studied at University of Pennsylvania'></Icon_Text_Hor>
                            <Icon_Text_Hor name='location' type='EvilIcons' text='From Chicago,Illinois '></Icon_Text_Hor>
                            <Icon_Text_Hor name='medical-bag' type='MaterialCommunityIcons' text='Followed by 53 people'></Icon_Text_Hor>
                        </View>
                    </ScrollView>
                </View>
                <Footers icon1={styles.footerActive_icon}
                    icon2={styles.footer_icon}
                    icon3={styles.footer_icon}
                    icon4={styles.footer_icon}
                    icon5={styles.footer_icon} />
            </View>
        )
    }
}

export { Page2 }