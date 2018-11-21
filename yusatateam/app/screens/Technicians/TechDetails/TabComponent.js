import React from 'react';
import { View, Text } from 'react-native';
import { AppLoading } from 'expo';
import { Container, Tab, Tabs, ScrollableTab, TabHeading } from 'native-base';
import { Toolbar } from '../../../components/Toolbar';
import { TechDetails } from './TechDetails';
import { FontAwesome, EvilIcons } from '@expo/vector-icons';
import colors from '../../../constants/colors'
import EStylesheet from 'react-native-extended-stylesheet'

export default class TabComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
        }
    };
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    };

    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={{ flex: 1 }}>
                    <Toolbar title='Details' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        Calender='calendar' calenderType='FontAwesome' onCalenderPress={() => navigate('Settings')}
                        setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')}
                    />
                    <Tabs tabBarUnderlineStyle={{ backgroundColor: '#fff' }}>

                        <Tab heading={

                            <View style={styles.tab_view}>
                                <Text style={styles.Week}>Week1</Text>
                                <Text style={styles.date}>1 to 7</Text>
                            </View>
                        }>
                            <TechDetails />
                        </Tab>

                        <Tab heading={
                            <TabHeading>
                                <View style={styles.tab_view}>
                                    <Text style={styles.Week}>Week2</Text>
                                    <Text style={styles.date}>8 to 14</Text>
                                </View>
                            </TabHeading>
                        }>
                            <TechDetails />
                        </Tab>

                        <Tab heading={
                            <TabHeading>
                                <View style={styles.tab_view}>
                                    <Text style={styles.Week}>Week3</Text>
                                    <Text style={styles.date}>15 to 21</Text>
                                </View>
                            </TabHeading>
                        }>
                            <TechDetails />
                        </Tab>

                        <Tab heading={
                            <TabHeading>
                                <View style={styles.tab_view}>
                                    <Text style={styles.Week}>Week4</Text>
                                    <Text style={styles.date}>22 to 28</Text>
                                </View>
                            </TabHeading>
                        }>
                            <TechDetails />
                        </Tab>

                        <Tab heading={
                            <TabHeading>
                                <View style={styles.tab_view}>
                                    <Text style={styles.Week}>Week5</Text>
                                    <Text style={styles.date}>29 to 31</Text>
                                </View>
                            </TabHeading>
                        }>
                            <TechDetails />
                        </Tab>

                    </Tabs>


                </View>
        )
    }

}
export { TabComponent }


const styles = EStylesheet.create({
    tab_view: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.HEADER_COLOR,
        justifyContent: 'center',
        alignItems: 'center'

    },
    Week: {
        color: '#fff',
        fontSize: '1rem'
    },
    date: {
        color: '#fff',
        fontSize: '0.7rem'
    }

})
