import React from 'react';
import {
    View,
    TouchableOpacity,
    BackHandler,
    Alert
} from 'react-native';
import styles from './styles';
import {Piechart} from '../../components'
import {
    IconWithText,
    Toolbar
} from '../../components';
import colors from '../../constants/colors';
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
                    
                    <View style={styles.pie_chart}>
                                <Piechart
                                    piedata={this.state.piedata}
                                    pieSeries={this.state.pieSeries}
                                    pieColors={this.state.pieColor} />
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
                        <TouchableOpacity activeOpacity={0.7}  style={styles.container} onPress={() =>navigate('Customer')} >
                            <IconWithText
                                backgroundColor = {colors.HOMESCREEN.ASSOCIATIONCARD_COLOR}
                                badgeText="05"
                                name='new-message'
                                type='Entypo'
                                styles={styles.iconView}
                                // badgeBackgroundColor = {colors.HOMESCREEN.ASSOCIATIONCARD_COLOR}
                                text='Customer'
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
