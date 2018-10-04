import React from 'react';
import { Tab, Tabs, ScrollableTab } from 'native-base';
import { View, BackHandler } from 'react-native';
import { VehicleList } from '../VehicleList/VehicleList';
import { DeviceSimItem } from '../DeviceSimItem/DeviceSimItem';
import {ListAccordingToStatus} from './ListAccordingToStatus';
import {Toolbar} from '../../components'
import { AppLoading } from 'expo';
export default class Jobs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            tabStatus : 'Activated'
        },
        this.status = ['Activate','Deactivate','Activate','Deactivate','Activate','Deactivate']
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
                <Tabs onChangeTab={({ i, ref, from })=> this.getStatus(i,ref,from)} renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="Entered">
                        <ListAccordingToStatus ref = "modal"/>
                    </Tab>
                    <Tab heading="Accepted">
                        <ListAccordingToStatus  ref = "modal"/>
                    </Tab>
                    <Tab heading="Onjob">
                        <ListAccordingToStatus  ref = "modal"/>
                    </Tab>
                    <Tab heading="Completed">
                        <ListAccordingToStatus  ref = "modal"/>
                    </Tab>
                    <Tab heading="Reschedule">
                        <ListAccordingToStatus  ref = "modal"/>
                    </Tab>
                    <Tab heading="Cancelled">
                        <ListAccordingToStatus  ref = "modal"/>
                    </Tab>
                </Tabs>
            </View>
        );
    }
}

export { Jobs }