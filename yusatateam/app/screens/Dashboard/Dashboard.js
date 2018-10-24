import React from 'react';
import {
    View,
    ScrollView
} from 'react-native';
import { Card, Button, Text } from 'native-base';
import styles from './Styles';
import { AppLoading } from 'expo';
import { Toolbar, RoundedIcon, Piechart } from '../../components';
import Swiper from 'react-native-swiper';

export default class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }

    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View style={styles.container}>
                <Toolbar title='Dashboard'
                    leftIcon='home'
                    setting='md-person' settingType='Ionicons' onSettingsPress={() => navigate('Settings')} />
                
                <View style={styles.container}>
                    {/* <ScrollView> */}
                        <View style={styles.upper_view}>
                            <Swiper paginationStyle={{position: 'absolute', bottom: 0}}
                                dot={<View
                                    style={{
                                        backgroundColor:'rgba(0,0,0,.2)',
                                        width: 15,
                                        height: 2,
                                        //borderRadius: 3,
                                        margin: 2
                                    }} />}
                                activeDot={<View
                                    style={{
                                        backgroundColor:'#0073b7',
                                        width: 15,
                                        height: 2,
                                        //borderRadius: 3,
                                        margin: 2
                                    }} />}
                                >
                                <Piechart
                                    heading='Devices'
                                    details={['Total (2000)', 'Installed (200)', 'Tested Ok (100)', 'Ready to use (500)', 'Defective (1000)']}
                                    series={[2000, 400, 700, 500, 400]}
                                    sliceColor={['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800']} 
                                />
                                <Piechart
                                    heading='Sims'
                                    details={['Total (2000)', 'Installed (200)', 'Activated (100)', 'Deactivated (500)']}
                                    series={[2000, 400, 700, 500]}
                                    sliceColor={['#F44336', '#2196F3', '#FFEB3B', '#4CAF50']}
                                />
                                <Piechart
                                    heading='Jobs'
                                    details={['Total jobs (2000)', 'Scheduled (200)', 'Completed (100)', 'Pending (500)', 'Cancelled (1000)']}
                                    series={[2000, 400, 700, 500, 400]}
                                    sliceColor={['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800']}
                                />
                                <Piechart
                                    heading='Technicians'
                                    details={['Total jobs(2000)', "Yash gulati's jobs(200)", "Vivek sharma's jobs(200)", "Sunil's jobs(200)", "Rahul's jobs(200)"]}
                                    series={[2000, 400, 700, 500, 400]}
                                    sliceColor={['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800']}
                                />
                            </Swiper>
                        </View>
                        <View style={styles.lower_view}>
                            <View style={styles.icon_view}>
                                <View style={{flex:1}}>
                                    <RoundedIcon 
                                        name='devices'
                                        type='MaterialIcons'
                                        text='Device'
                                        color='#0073b7'
                                        onPress={() => navigate('Device')}
                                    />
                                </View>
                                <View style={{flex:1}}>
                                    <RoundedIcon 
                                        name='sim'
                                        type='MaterialCommunityIcons'
                                        text='Sim'
                                        color='#0073b7'
                                        onPress={() => navigate('Sim')}
                                    />
                                </View>
                            </View>
                            <View style={styles.icon_view}>
                                <View style={{flex:1}}>
                                    <RoundedIcon 
                                        name='calendar'
                                        type='Foundation'
                                        text='Schedule'
                                        color='#0073b7'
                                        onPress={() => navigate('Schedule')}
                                    />
                                </View>
                                <View style={{flex:1}}>
                                    <RoundedIcon 
                                        name='schedule'
                                        type='MaterialIcons'
                                        text='Jobs'
                                        color='#0073b7'
                                        onPress={() => navigate('Jobs')}
                                    />
                                </View>
                            </View>
                            <View style={styles.icon_view}>
                                <View style={{flex:1}}>
                                    <RoundedIcon 
                                        name='group'
                                        type='FontAwesome'
                                        text='Association'
                                        color='#0073b7'
                                        onPress={() => navigate('VehicleList')}
                                    />
                                </View>
                                <View style={{flex:1}}>
                                    <RoundedIcon 
                                        name='settings'
                                        type='MaterialCommunityIcons'
                                        text='Settings'
                                        color='#0073b7'
                                        onPress={() => navigate('Settings')}
                                    />
                                </View>
                            </View>
                        </View>
                    {/* </ScrollView> */}
                </View>

            </View>
        );
    }

}
export { Dashboard }