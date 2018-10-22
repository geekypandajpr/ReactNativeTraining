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
                        <View style={{ flex: 1}}>
                            <Swiper paginationStyle={{position: 'absolute', bottom: 0}}>
                                <Piechart />
                                <Piechart />
                                <Piechart />
                                <Piechart />
                            </Swiper>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1}}>
                            <View style={{flex:1, flexDirection: 'column'}}>
                                <View style={{flex:1}}>
                                    <RoundedIcon 
                                        name='devices'
                                        type='MaterialIcons'
                                        text='Device'
                                    />
                                </View>
                                <View style={{flex:1}}>
                                    <RoundedIcon 
                                        name='sim'
                                        type='MaterialCommunityIcons'
                                        text='Sim'
                                    />
                                </View>
                            </View>
                            <View style={{flex:1, flexDirection: 'column'}}>
                                <View style={{flex:1}}>
                                    <RoundedIcon 
                                        name='schedule'
                                        type='MaterialIcons'
                                        text='Schedule'
                                    />
                                </View>
                                <View style={{flex:1}}>
                                    <RoundedIcon 
                                        name='new-message'
                                        type='Entypo'
                                        text='Jobs'
                                    />
                                </View>
                            </View>
                            <View style={{flex:1, flexDirection: 'column'}}>
                                <View style={{flex:1}}>
                                    <RoundedIcon 
                                        name='group'
                                        type='FontAwesome'
                                        text='Association'
                                    />
                                </View>
                                <View style={{flex:1}}>
                                    <RoundedIcon 
                                        name='settings'
                                        type='MaterialCommunityIcons'
                                        text='Settings'
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