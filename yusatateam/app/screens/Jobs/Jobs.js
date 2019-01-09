import React from 'react';
import { Tab, Tabs, ScrollableTab,TabHeading } from 'native-base';
import { View, BackHandler,Text} from 'react-native';
import { AppLoading } from 'expo';
import styles from './styles'
import { connect } from 'react-redux';
import { userActions } from '../../redux/actions';
import { Toolbar,Activityindication ,JobTabData } from '../../components';
import colors from '../../constants/colors';

export  class Jobs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            repair: null,
            replace : null,
            install : null,
            unInstall : null,
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
       this.props.onFetchInstallData();
       this.props.onFetchUnInstallData();
       this.props.onFetchRepairData();
       this.props.onFetchReplaceData();
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.goBack();
            return true;
        });
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.RepairData !== nextProps.RepairData) {
            this.setState({repair:nextProps.RepairData.repair});
            // this.arrayList = nextProps.InstallData.data;
        }
        if(this.props.InstallData !== nextProps.InstallData) {
         
            this.setState({install: nextProps.InstallData.install});
            // this.arrayList = nextProps.InstallData.data;
        }
        if(this.props.ReplaceData !== nextProps.ReplaceData) {
        //   alert(JSON.stringify(nextProps.ReplaceData.replace))
            this.setState({replace: nextProps.ReplaceData.replace});
            // this.arrayList = nextProps.InstallData.data;
        }
        if(this.props.UnInstallData !== nextProps.UnInstallData) {
            
            this.setState({unInstall: nextProps.UnInstallData.unInstall});
            // this.arrayList = nextProps.InstallData.data;
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
                <View style={{ flex: 1 }}>
                <Activityindication visible={this.props.InstallData.isLoading}/>
                <Activityindication visible={this.props.UnInstallData.isLoading}/>
                <Activityindication visible={this.props.ReplaceData.isLoading}/>
                <Activityindication visible={this.props.RepairData.isLoading}/>
                    <Toolbar title='Schedule Jobs' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')}
                    />
                    <Tabs tabBarUnderlineStyle={{ backgroundColor: '#fff' }}
                        renderTabBar={() => <ScrollableTab />}>

                        <Tab heading={
                            <TabHeading style={styles.tabheading}>
                                <View style={styles.tab_view}>
                                    <Text style={styles.TextView}>Install</Text>
                                </View>
                            </TabHeading>
                        }>
                        
                            <JobTabData 
                            JobDataValue={this.state.install} 
                            />
                        </Tab>

                        <Tab heading={
                            <TabHeading style={styles.tabheading}>
                                <View style={styles.tab_view}>
                                    <Text style={styles.TextView}>Repair</Text>
                                </View>
                            </TabHeading>
                        }>
                            <JobTabData 
                            JobDataValue={this.state.repair}
                            />
                        </Tab>

                        <Tab heading={
                            <TabHeading style={styles.tabheading}>
                                <View style={styles.tab_view}>
                                    <Text style={styles.TextView}>Replace</Text>
                                </View>
                            </TabHeading>
                        }>
                            <JobTabData  
                            JobDataValue={this.state.replace}
                            />
                        </Tab>
                        
                        <Tab heading={
                            <TabHeading style={styles.tabheading}>
                                <View style={styles.tab_view}>
                                    <Text style={styles.TextView}>Un-Install</Text>
                                </View>
                            </TabHeading>
                        }>
                            <JobTabData
                             JobDataValue={this.state.unInstall}
                              />
                        </Tab>

                    </Tabs>
                </View>
        );
    }
}
function mapStateToProps(state){
    return{
        InstallData : state.InstallData,
        RepairData : state.RepairData,
        ReplaceData: state.ReplaceData,
        UnInstallData : state.UnInstallData,
    }
}

function mapDispatchToProps(dispatch){
    return{
        onFetchInstallData: () => dispatch(userActions.installJobRequest()),
        onFetchUnInstallData: () => dispatch(userActions.unInstallJobRequest()),
        onFetchRepairData: () => dispatch(userActions.repairJobRequest()),
        onFetchReplaceData: () => dispatch(userActions.replaceJobRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);

// export {Jobs}
