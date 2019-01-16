import React from 'react';
import {
    View,
    TouchableOpacity,
    BackHandler,
    Alert,
    Text
} from 'react-native';
import styles from './styles';
import {
    Toolbar,
    Barchart,
    IconWithText
} from '../../components';
import { colors } from '../../styles';
import { AppLoading } from 'expo';

export default class SalesDashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            pieColor: ['#FD6260', '#B19DFF', '#02B8AB', '#F3C814'],
            pieSeries: [400, 200, 100, 100],
            piedata: [
                { value: 50, label: 'Total Sims', color: '#FD6260' },
                { value: 40, label: 'Installed', color: '#B19DFF' },
                { value: 25, label: 'Activated', color: '#02B8AB' },
                { value: 25, label: 'Deactivated', color: '#F3C814' }
            ],
        }

    }
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        Alert.alert(
            'Exit Confirmation',
            'Do you want to exit ?',
            [
                { text: 'No', onPress: () => {}},
                { text: 'YES', onPress: () => BackHandler.exitApp()},
            ],
            { cancelable: false }
        ) // works best when the goBack is async
        return true;
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
               <View style={styles.mainContainer}>
                   <Toolbar title='Sales Dashboard' leftIcon='home'
                    setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')}/>
                    
                   <View style={{flex :1, flexDirection :'row'}}>
                        <View style={{flex :1,backgroundColor : 'lightgreen',justifyContent : 'center',alignItems :'center'}}>
                        <Text style={{color : 'white',fontSize : 50,margin : 10}}>4</Text>
                        <Text style={{color : 'white',fontSize : 20,marginBottom : 10}}>Waiting Order</Text>
                        </View>
                        <View style={{flex :1,backgroundColor : '#F4A460',justifyContent : 'center',alignItems :'center'}}>
                        <Text style={{color : 'white',fontSize : 50,margin : 10}}>3</Text>
                        <Text style={{color : 'white',fontSize : 20,marginBottom : 10}}>Low stock</Text>
                        </View>
                        <View style={{flex :1,backgroundColor : '#FA8072',justifyContent : 'center',alignItems :'center'}}>
                        <Text style={{color : 'white',fontSize : 50,margin : 10}}>2</Text>
                        <Text style={{color : 'white',fontSize : 20,marginBottom : 10}}>Out of stock</Text>
                        </View>
                   </View>
                   <View style={styles.lower_view}>
                        <View style={styles.summary_view}>
                                <Barchart />
                            </View>
                        </View>
                            
                            <View style={{height : 50, flexDirection :'row',flex :1}}>
                                <View style={{flex :1,justifyContent : 'center',alignItems :'center'}}>
                                    <Text style={{color : 'lightblue',fontSize : 50,margin : 10}}>$502</Text>
                                    <Text style={{color : 'black',fontSize : 20}}>Total sales</Text>
                                 </View>
                                 <View style={{backgroundColor : 'lightgray',flex :0.01,marginBottom :10,marginTop :20}}></View>
                                <View style={{flex :1,justifyContent : 'center',alignItems :'center'}}> 
                                    <Text style={{color : 'lightblue',fontSize : 50,margin : 10}}>$65</Text>
                                    <Text style={{color : 'black',fontSize : 20}}>Total tax</Text>
                                </View>
                            </View>

                            <View style={styles.firstContainer}>
                    <View style={styles.simContainer}>
                        <TouchableOpacity activeOpacity= {0.7} style={styles.container} onPress={() =>navigate('Sim')} >
                            <IconWithText
                                backgroundColor = {colors.HOMESCREEN.SIMCARD_COLOR}
                                badgeText="06"
                                name='sim'
                                type='MaterialCommunityIcons'
                                styles={styles.iconView}
                                // badgeBackgroundColor = {colors.HOMESCREEN.SCHEDULECARD_COLOR}
                                text='Sim'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.deviceContainer}>
                        <TouchableOpacity activeOpacity={0.7}  style={styles.container} onPress={() =>navigate('Device')} >
                            <IconWithText
                                backgroundColor = {colors.HOMESCREEN.DEVICECARD_COLOR}
                                badgeText="40"
                                name='devices'
                                type='MaterialIcons'
                                styles={styles.iconView}
                                // badgeBackgroundColor = {colors.HOMESCREEN.SCHEDULECARD_COLOR}
                                text='Device'
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.secondContainer}>
                    <View style={styles.jobContainer}>
                        <TouchableOpacity activeOpacity={0.7}  style={styles.container} onPress={() =>navigate('Jobs')} >
                            <IconWithText
                                backgroundColor = {colors.HOMESCREEN.JOBSCARD_COLOR}
                                badgeText="05"
                                name='new-message'
                                type='Entypo'
                                styles={styles.iconView}
                                // badgeBackgroundColor = {colors.HOMESCREEN.ASSOCIATIONCARD_COLOR}
                                text='Jobs'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.scheduleContainer}>
                        <TouchableOpacity activeOpacity={0.7}  style={styles.container} onPress={() =>navigate('Schedule')} >
                            <IconWithText
                                backgroundColor = {colors.HOMESCREEN.SCHEDULECARD_COLOR}
                                badgeText="02"
                                name='schedule'
                                type='MaterialIcons'
                                styles={styles.iconView}
                                // badgeBackgroundColor = {colors.HOMESCREEN.SIMCARD_COLOR}
                                text='Schedule'
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                </View>
        );
    }
}

export { SalesDashboard }
