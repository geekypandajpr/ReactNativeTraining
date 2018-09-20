import React from 'react';
import {
    View,
    Text,
    ImageBackground
} from 'react-native';
import styles from './Styles';
import { CardView } from '../../components';

export default class FlexDemo extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.textMainContainer}>
                    <View style={styles.text_container}>
                        <View style={styles.text_child1}>
                            <Text style={styles.total_revenue}>Total revenue</Text>
                            <Text style={styles.digit}>5061.19</Text>
                        </View>
                        <View style={{justifyContent: 'flex-end', flex: 1}}>
                                <View style={styles.buy_btn_view}>
                                    <Text style={styles.buy}>BUY</Text>
                                </View>
                        </View>
                    </View>
                </View>

                <View style={styles.textMainContainer}>
                    <View style={styles.annual_container}>
                        <ImageBackground source={require('../../assets/img/b.jpg')} style={styles.imageView}>
                            <View>
                                <Text style={styles.noise}>The noise exclusive</Text>
                                <Text style={styles.annual}>100% ANNUAL EARNING</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </View>

                <View style={styles.textMainContainer}>
                    <View style={styles.text_container}>
                        <View style={styles.text_child1}>
                            <Text style={styles.twelve}>12.0%</Text>
                            <Text style={styles.text2}>Expected Rate of Return</Text>
                        </View>
                        <View style={styles.text_child2}>
                            <Text style={styles.phaseA}>No. 758 Phase A</Text>
                            <Text style={styles.text2}>30 day repayment</Text>
                        </View>
                    </View>
                </View>
            
                <View style={styles.cardContainer}>
                    <View style={styles.cardview}>
                        <CardView
                            icon='handbag'
                            text1='Wise investment'
                            text2='Investment : 60 days'
                            text3='8.6%'
                            text4='The remaining 3000'
                        />
                    </View>
                    <View style={styles.cardview}>
                        <CardView
                            icon='home'
                            text1='Artificial intelligence'
                            text2='Investment : 120 days'
                            text3='7.5%'
                            text4='The remaining 5600'
                        />
                    </View>
                    <View style={styles.cardview}>
                        <CardView
                            icon='chemistry'
                            text1='Chemical financing'
                            text2='Investment : 180 days'
                            text3='8.2%'
                            text4='The remaining 1600'
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export { FlexDemo };