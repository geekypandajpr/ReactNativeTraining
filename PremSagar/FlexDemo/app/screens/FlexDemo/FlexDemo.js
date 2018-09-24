import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StatusBar,
    Platform,
} from 'react-native';
import styles from './Styles';
import { CardView, DetailsView, DetailsView1 } from '../../components';
import {
    Ionicons
} from '@expo/vector-icons';


// const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
// const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);

export default class FlexDemo extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>

                <MyStatusBar backgroundColor="#3E4357" barStyle="light-content" />
                <View style={styles.appBar}>
                    <Ionicons name='md-menu' color="#fff" size={20} style={styles.menu_icon}/>
                    <Text style={styles.toolbar_text}>Home</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>

                        <View style={styles.text_container}>
                            <View style={styles.text_child_container}>
                                <Text style={styles.total_revenue}>Total revenue</Text>
                                <Text style={styles.digit}>5061.19</Text>
                            </View>
                            <View style={styles.button_container}>
                                <View style={styles.buy_btn_view}>
                                    <Text style={styles.buy}>Next</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.annual_container}>
                            <DetailsView />
                        </View>
                        <View style={styles.annual_container}>
                            <DetailsView1 />
                        </View>

                        <View style={styles.text_container}>
                            <View style={styles.text_child_container}>
                                <Text style={styles.twelve}>12.0%</Text>
                                <Text style={styles.text2}>Expected Rate of Return</Text>
                            </View>
                            <View style={styles.phase_container}>
                                <Text style={styles.phaseA}>No. 758 Phase A</Text>
                                <Text style={styles.text2}>30 day repayment</Text>
                            </View>
                        </View>


                        <View style={styles.cardview}>
                            <CardView icon='handbag' text1='Wise investment' text2='Investment : 60 days'
                                text3='8.6%' text4='The remaining 3000' />
                        </View>
                        <View style={styles.cardview}>
                            <CardView icon='home' text1='Artificial intelligence' text2='Investment : 120 days' 
                                text3='7.5%' text4='The remaining 5600'  />
                        </View>
                        <View style={styles.cardview}>
                            <CardView icon='chemistry' text1='Chemical financing' text2='Investment : 180 days'
                                text3='8.2%' text4='The remaining 1600' />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export { FlexDemo };