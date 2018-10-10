import React from 'react';
import { Tab, Tabs, ScrollableTab } from 'native-base';
import { View, BackHandler } from 'react-native';
import JobDetails from './JobDetails/JobDetails';
import {Toolbar} from '../../components'
import { AppLoading } from 'expo';
 class Jobs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
           
        },
        this.status = ['completed','Deactivate','completed','Deactivate','completed','Deactivate']
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    };
    getStatus(i,ref,from){
        //console.log(i);
        this.refs.modal.changeTabStatus(this.status[i])

    };
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        return true;
    }

    render() {
        const { navigate }=this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View style={{flex:1}}>
              <Toolbar title='Jobs' leftIcon='arrow-left' leftIconType='Feather'
                    onLeftButtonPress={() => navigate('HomeScreen')}
                    rightIcon='settings'
                    rightIconType='MaterialCommunityIcons' />
                <Tabs  onChangeTab={({ i, ref, from })=> this.getStatus(i,ref,from)} renderTabBar={() => <ScrollableTab />}>
                    <Tab tabStyle={{ backgroundColor: "#0073b7" }} textStyle={{color : '#C0C0C0'}} activeTabStyle={{ backgroundColor: "#0073b7" }} heading="Pending">
                        <JobDetails ref = "modal"/>
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: "#0073b7" }} textStyle={{color : '#C0C0C0'}} activeTabStyle={{ backgroundColor: "#0073b7" }} heading="Schedule">
                        <JobDetails  ref = "modal"/>
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: "#0073b7" }} textStyle={{color : '#C0C0C0'}} activeTabStyle={{ backgroundColor: "#0073b7" }} heading="Completed">
                        <JobDetails  ref = "modal"/>
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: "#0073b7" }} textStyle={{color : '#C0C0C0'}} activeTabStyle={{ backgroundColor: "#0073b7" }} heading="ReSchedule">
                        <JobDetails  ref = "modal"/>
                    </Tab>
                </Tabs>
            </View>
        );
    }
}

export { Jobs }