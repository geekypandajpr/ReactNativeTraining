import React from 'react';
import { Tab, Tabs, ScrollableTab } from 'native-base';
import { View,BackHandler } from 'react-native';
import { Toolbar } from '../../components'
import { AppLoading } from 'expo';
import {JobCompleted,JobPending,JobReschedule,JobSchedule} from './JobTabPages';
import pendingData from '../../assets/JSONData/JobsData/pendingData';
import completedData from '../../assets/JSONData/JobsData/completedData';
import reScheduleData from '../../assets/JSONData/JobsData/reScheduleData';
import scheduleData from '../../assets/JSONData/JobsData/scheduleData';

export default class Jobs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            item : pendingData
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
        if(this.status[i]=='Pending')
        {
            this.setState({item : pendingData});
        }
        if(this.status[i]=='Schedule')
        {
            this.setState({item : scheduleData});
        }
        if(this.status[i]=='Completed')
        {
            this.setState({item : completedData});
        }
        if(this.status[i]=='ReSchedule')
        {
            this.setState({item : reScheduleData});
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
                        leftIcon='arrow-left' leftIconType='Feather'onLeftButtonPress={() => goBack()}
                        setting='md-search' settingType='Ionicons' onSettingsPress={() => navigate('JobSearch', { item: this.state.item })}/>
                    <Tabs 
                    onChangeTab={({ i }) => this.getStatus(i)} 
                    renderTabBar={() => <ScrollableTab />}>
                        <Tab tabStyle={{ backgroundColor: "#0073b7" }} textStyle={{ color: '#C0C0C0' }} activeTabStyle={{ backgroundColor: "#0073b7" }} heading="Pending">
                            <JobPending />
                        </Tab>
                        <Tab tabStyle={{ backgroundColor: "#0073b7" }} textStyle={{ color: '#C0C0C0' }} activeTabStyle={{ backgroundColor: "#0073b7" }} heading="Schedule">
                            <JobSchedule />
                        </Tab>
                        <Tab tabStyle={{ backgroundColor: "#0073b7" }} textStyle={{ color: '#C0C0C0' }} activeTabStyle={{ backgroundColor: "#0073b7" }} heading="Completed">
                            <JobCompleted />
                        </Tab>
                        <Tab tabStyle={{ backgroundColor: "#0073b7" }} textStyle={{ color: '#C0C0C0' }} activeTabStyle={{ backgroundColor: "#0073b7" }} heading="ReSchedule">
                            <JobReschedule />
                        </Tab>
                    </Tabs>
                    
                </View>
        );
    }
}
export { Jobs }