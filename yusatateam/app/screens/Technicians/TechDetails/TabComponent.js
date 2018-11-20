import React from 'react';
import { View, Text } from 'react-native';
import { AppLoading } from 'expo';
import { Container, Tab, Tabs, ScrollableTab, TabHeading } from 'native-base';
import { Toolbar } from '../../../components/Toolbar';
import { TechDetails } from './TechDetails';
import colors from '../../../constants/colors'

export default class TabComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
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
                        setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')}
                    />
                   <Tabs renderTabBar={()=> <ScrollableTab />}>

                       <Tab tabStyle={{ backgroundColor: colors.HEADER_COLOR }} textStyle={{ color: '#C0C0C0' }} 
                            activeTabStyle={{ backgroundColor: colors.HEADER_COLOR }} heading="Week1">
                            <TechDetails />
                        </Tab>

                        <Tab tabStyle={{ backgroundColor: colors.HEADER_COLOR }} textStyle={{ color: '#C0C0C0' }} 
                            activeTabStyle={{ backgroundColor: colors.HEADER_COLOR }} heading="Week2">
                            <TechDetails />
                        </Tab>

                        <Tab tabStyle={{ backgroundColor: colors.HEADER_COLOR }} textStyle={{ color: '#C0C0C0' }} 
                            activeTabStyle={{ backgroundColor: colors.HEADER_COLOR }} heading="Week3">
                            <TechDetails />
                        </Tab>

                        <Tab tabStyle={{ backgroundColor: colors.HEADER_COLOR }} textStyle={{ color: '#C0C0C0' }} 
                            activeTabStyle={{ backgroundColor: colors.HEADER_COLOR }} heading="Week4">
                            <TechDetails />
                        </Tab>

                    </Tabs>


                </View>
        )
    }

}
export { TabComponent }