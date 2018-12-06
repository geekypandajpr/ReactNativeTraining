import React from 'react';
import { Tab, Tabs, ScrollableTab, TabHeading } from 'native-base';
import { connect } from 'react-redux';
import { userActions } from '../../redux/actions'
import { View, BackHandler, Text } from 'react-native';
import { AppLoading } from 'expo';
import styles from './styles'
import { JobCompleted, JobPending, JobReschedule, JobSchedule } from './JobTabPages';
import { Toolbar } from '../../components';

export  class Jobs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
        }
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
         this.props.onFetchData();
       //this.arrayholder = this.state.data;
        
    }
    
    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }
    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        //alert(this.props.PendingData.data)
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


function mapStateToProps(state){
    return{
        PendingData : state.JobData
    }
}
function mapDispatchToProps(dispatch){
    return{
        onFetchData:()=>dispatch(userActions.jobRequest())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Jobs)