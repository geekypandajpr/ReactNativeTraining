import React from 'react';
import { View, BackHandler,Text} from 'react-native';
import { Tab, Tabs, ScrollableTab,TabHeading } from 'native-base';
import { AppLoading } from 'expo';
import styles from './styles';
import { connect } from 'react-redux';
import { userActions } from '../../redux/actions';
import { Toolbar,Activityindication ,GpsDeviceData,RoundedIcon,Checkbox } from '../../components';

export  class GPSDevice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            data: null,
            map1 : new Map(),
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
        this.props.onFetchData();
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.navigate('Dashboard');
            return true;
        });
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.PendingData !== nextProps.PendingData) {
            this.setState({data: nextProps.PendingData.data});
            this.arrayList = nextProps.PendingData.data;
        }
    }


    selectedValue(map) {
        this.setState({map1 : map})
    }

    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>
                {/* <Activityindication visible={this.props.PendingData.isLoading}/> */}
                    <Toolbar title='GPS Devices' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')}
                    />
                    <Tabs tabBarUnderlineStyle={{ backgroundColor: '#fff' }}
                        renderTabBar={() => <ScrollableTab />}>

                        <Tab heading={
                            <TabHeading style={styles.tabheading}>
                                <View style={styles.tab_view}>
                                    <Text style={styles.TextView}>Assigned</Text>
                                </View>
                            </TabHeading>
                        }>
                        
                            <GpsDeviceData JobDataValue={this.state.data[0]} isLoading={this.props.PendingData.isLoading}/>
                        </Tab>

                        <Tab heading={
                            <TabHeading style={styles.tabheading}>
                                <View style={styles.tab_view}>
                                    <Text style={styles.TextView}>Not Assigned</Text>
                                </View>
                            </TabHeading>
                        }>
                            <GpsDeviceData JobDataValue={this.state.data[1]}/>
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
        onFetchData: () => dispatch(userActions.jobRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GPSDevice);
