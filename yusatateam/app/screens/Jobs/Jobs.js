import React from 'react';
import { Tab, Tabs, ScrollableTab,TabHeading } from 'native-base';
import { View, BackHandler,Text} from 'react-native';
import { AppLoading } from 'expo';
import EStylesheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { userActions } from '../../redux/actions';
import { JobCompleted, JobPending, JobReschedule, JobSchedule } from './JobTabPages';
import { Toolbar,Activityindication } from '../../components';
import pendingData from '../../assets/JSONData/JobsData/pendingData';
import completedData from '../../assets/JSONData/JobsData/completedData';
import reScheduleData from '../../assets/JSONData/JobsData/reScheduleData';
import scheduleData from '../../assets/JSONData/JobsData/scheduleData';
import colors from '../../constants/colors';
import JobSearch from './JobSearch/JobSearch1';


export  class Jobs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            x : '23',
            item: [],
            map1 : new Map(),
        },
        this.status = ['Pending', 'Schedule', 'Completed', 'ReSchedule'];
        this.jobsearch = React.createRef();
        this.openSearchPage = this.openSearchPage.bind(this);
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
            this.setState({ item: this.props.PendingData.data });
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
        this.props.onFetchData();
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.navigate('Dashboard');
            return true;
        });
    }

    openSearchPage() {
        this.jobsearch.current.setModalVisible(true, this.state.item);
    }

    selectedValue(map) {
        // for(var key of map.keys()) {
        //     console.log(key);
        // }
        this.setState({map1 : map})
    }

    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={{ flex: 1 }}>
                {/* <Activityindication visible={this.props.PendingData.isLoading}/> */}
                    <Toolbar title='Jobs' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')}
                    />
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
                        
                            <JobPending PendingDataValue={this.props.PendingData.data[0]} isLoading={this.props.PendingData.isLoading}/>
                        </Tab>
                        <Tab heading={
                            <TabHeading style={styles.tabheading}>
                                <View style={styles.tab_view}>
                                    <Text style={styles.TextView}>Schedule</Text>
                                </View>
                            </TabHeading>
                        }>
                            <JobSchedule ScheduleDataValue={this.props.PendingData.data[2]}/>
                        </Tab>
                        <Tab heading={
                            <TabHeading style={styles.tabheading}>
                                <View style={styles.tab_view}>
                                    <Text style={styles.TextView}>Completed</Text>
                                </View>
                            </TabHeading>
                        }>
                            <JobCompleted  CompletedDataValue={this.props.PendingData.data[3]}/>
                        </Tab>
                        <Tab heading={
                            <TabHeading style={styles.tabheading}>
                                <View style={styles.tab_view}>
                                    <Text style={styles.TextView}>ReSchedule</Text>
                                </View>
                            </TabHeading>
                        }>
                            <JobReschedule RescheduleDataValue={this.props.PendingData.data[1]} />
                        </Tab>

                    </Tabs>
                    <JobSearch ref={this.jobsearch} getSelected={(mapvalue) => this.selectedValue(mapvalue)}/>
                </View>
        );
    }
}
function mapStateToProps(state){
    return{
        PendingData : state.JobData
    }
}

function mapDispatchToProps(dispatch){
    return{
        onFetchData: () => dispatch(userActions.jobRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);

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
