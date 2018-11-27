import React from 'react';
import { Tab, Tabs, ScrollableTab,TabHeading } from 'native-base';
import { View, BackHandler,Text} from 'react-native';
import { Toolbar } from '../../components'
import { AppLoading } from 'expo';
import { JobCompleted, JobPending, JobReschedule, JobSchedule } from './JobTabPages';
import pendingData from '../../assets/JSONData/JobsData/pendingData';
import completedData from '../../assets/JSONData/JobsData/completedData';
import reScheduleData from '../../assets/JSONData/JobsData/reScheduleData';
import scheduleData from '../../assets/JSONData/JobsData/scheduleData';
import colors from '../../constants/colors'
import EStylesheet from 'react-native-extended-stylesheet'

export default class Jobs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            item: pendingData
        },
            this.status = ['Pending', 'Schedule', 'Completed', 'ReSchedule']
    }
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    };

    getStatus(i, ref, from) {
        // console.log(this.status[i]);
        if (this.status[i] == 'Pending') {
            this.setState({ item: pendingData });
        }
        if (this.status[i] == 'Schedule') {
            this.setState({ item: scheduleData });
        }
        if (this.status[i] == 'Completed') {
            this.setState({ item: completedData });
        }
        if (this.status[i] == 'ReSchedule') {
            this.setState({ item: reScheduleData });
        }
    }
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
                    <Toolbar title='Jobs'
                        leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        setting='md-search' settingType='Ionicons' onSettingsPress={() => navigate('JobSearch', { item: this.state.item })} />
                    <Tabs tabBarUnderlineStyle={{ backgroundColor: '#fff' }}
                        onChangeTab={({ i }) => this.getStatus(i)}
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

const styles = EStylesheet.create({
    tabheading: {
        backgroundColor: colors.HEADER_COLOR
    },
    tab_view: {
        // width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextView: {
        color: '#fff',
        fontSize: '1rem'
    },
    

})
