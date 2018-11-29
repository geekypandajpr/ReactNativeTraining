import React from 'react';
import { Tab, Tabs, ScrollableTab, TabHeading } from 'native-base';
import { View, BackHandler, Text } from 'react-native';
import { AppLoading } from 'expo';
import styles from './styles'
import { JobCompleted, JobPending, JobReschedule, JobSchedule } from './JobTabPages';
import { Toolbar } from '../../components';

export default class Jobs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
        }
    }
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    };
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.navigate('Dashboard');
            return true;
        });
    }
    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={{ flex: 1 }}>
                    <Toolbar title='Jobs' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')} />
                    <Tabs tabBarUnderlineStyle={{ backgroundColor: '#fff' }}
                        renderTabBar={() => <ScrollableTab />}>
                        <Tab heading={
                            <TabHeading style={styles.tabheading}>
                                <View style={styles.tab_view}>
                                    <Text style={styles.TextView}>Pending</Text>
                                </View>
                            </TabHeading>
                        }>
                            <JobPending />
                        </Tab>
                        <Tab heading={
                            <TabHeading style={styles.tabheading}>
                                <View style={styles.tab_view}>
                                    <Text style={styles.TextView}>Schedule</Text>
                                </View>
                            </TabHeading>
                        }>
                            <JobSchedule />
                        </Tab>
                        <Tab heading={
                            <TabHeading style={styles.tabheading}>
                                <View style={styles.tab_view}>
                                    <Text style={styles.TextView}>Completed</Text>
                                </View>
                            </TabHeading>
                        }>
                            <JobCompleted />
                        </Tab>
                        <Tab heading={
                            <TabHeading style={styles.tabheading}>
                                <View style={styles.tab_view}>
                                    <Text style={styles.TextView}>ReSchedule</Text>
                                </View>
                            </TabHeading>
                        }>
                            <JobReschedule />
                        </Tab>

                    </Tabs>
                </View>
        );
    }
}
export { Jobs }