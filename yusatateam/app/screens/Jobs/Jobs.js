import React from 'react';
import { Tab, Tabs, ScrollableTab } from 'native-base';
import { View } from 'react-native';
import { Toolbar } from '../../components'
import { AppLoading } from 'expo';
import JobList from './JobList/JobList';
import {JobSearch} from './JobSearch/JobSearch'
export default class Jobs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
        },
            this.status = ['completed', 'Deactivate', 'completed', 'Deactivate', 'completed', 'Deactivate']
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
        //console.log(i);
        this.refs.modal.changeTabStatus(this.status[i])
    }
    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={{ flex: 1 }}>
                    <Toolbar title='Jobs' 
                        leftIcon='arrow-left' leftIconType='Feather'onLeftButtonPress={() => goBack()}
                        setting='md-search' settingType='Ionicons' onSettingsPress={() => this.refs.modal.setModalVisible(true)}/>
                    <Tabs onChangeTab={({ i, ref, from }) => this.getStatus(i, ref, from)} renderTabBar={() => <ScrollableTab />}>
                        <Tab tabStyle={{ backgroundColor: "#0073b7" }} textStyle={{ color: '#C0C0C0' }} activeTabStyle={{ backgroundColor: "#0073b7" }} heading="Pending">
                            <JobList ref="modal" />
                        </Tab>
                        <Tab tabStyle={{ backgroundColor: "#0073b7" }} textStyle={{ color: '#C0C0C0' }} activeTabStyle={{ backgroundColor: "#0073b7" }} heading="Schedule">
                            <JobList ref="modal" />
                        </Tab>
                        <Tab tabStyle={{ backgroundColor: "#0073b7" }} textStyle={{ color: '#C0C0C0' }} activeTabStyle={{ backgroundColor: "#0073b7" }} heading="Completed">
                            <JobList ref="modal" />
                        </Tab>
                        <Tab tabStyle={{ backgroundColor: "#0073b7" }} textStyle={{ color: '#C0C0C0' }} activeTabStyle={{ backgroundColor: "#0073b7" }} heading="ReSchedule">
                            <JobList ref="modal" />
                        </Tab>
                    </Tabs>
                    <JobSearch ref='modal' />
                </View>
        );
    }
}
export { Jobs }