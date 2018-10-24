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
import {SummaryCard} from '../../components/SummaryCard/SummaryCard'

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
        const detailsData = ['Total (2000)', 'Installed (200)', 'TestedOk (100)', 'ReadyToUse (500)', 'Defective (1000)'];
        const seriesData = [2000, 400, 700, 500, 400];
        const sliceColorData = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800']
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
                                details={detailsData}
                                series={seriesData}
                                sliceColor={sliceColorData} 
                                />
                                <Piechart details={detailsData}
                                series={seriesData}
                                sliceColor={sliceColorData} />
                                <Piechart details={detailsData}
                                series={seriesData}
                                sliceColor={sliceColorData} />
                                <Piechart details={detailsData}
                                series={seriesData}
                                sliceColor={sliceColorData} />
                            </Swiper>
                        </View>
                        <SummaryCard style={{flex : 0.15}}/>
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