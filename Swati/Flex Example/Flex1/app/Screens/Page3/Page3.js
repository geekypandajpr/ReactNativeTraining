import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './Styles';
import { Headers } from '../../Components/Headers/Index';
import { Footers } from '../../Components/Footers/Index';
import { Icon } from 'native-base';

export default class Page3 extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={styles.mainContainer}>
                <Headers name='location-arrow' type='FontAwesome' placeholder='Search' />
                <View style={styles.body}>
                    <View style={styles.storyView}>
                        <View style={styles.circle}><Icon name='camera' type='Entypo' style={styles.footerActive_icon}></Icon></View>
                        <View style={styles.circle}><Icon name='camera' type='Entypo' style={styles.footerActive_icon}></Icon></View>
                        <View style={styles.circle}><Icon name='camera' type='Entypo' style={styles.footerActive_icon}></Icon></View>
                        <View style={styles.circle}><Icon name='camera' type='Entypo' style={styles.footerActive_icon}></Icon></View>

                    </View> </View>
                <Footers icon1={styles.footer_icon}
                    icon2={styles.footerActive_icon}
                    icon3={styles.footer_icon}
                    icon4={styles.footer_icon}
                    icon5={styles.footer_icon} />

            </View>
        )
    }
}

export { Page3 }