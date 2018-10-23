import React from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import styles from './Styles';
import {
    IconWithText,
    Toolbar
} from '../../components';
import colors from '../../constants/colors';

export default class HomeScreen extends React.Component {
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
                <Toolbar title='Dashboard' leftIcon='home'
                    setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')}/>
                    
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
                <View style={styles.thirdContainer}>
                    <View style={styles.associationContainer}>
                        <TouchableOpacity activeOpacity={0.7}  style={styles.container} onPress={() =>navigate('VehicleList')} >
                            <IconWithText
                                backgroundColor = {colors.HOMESCREEN.ASSOCIATIONCARD_COLOR}
                                badgeText="143"
                                name='group'
                                type='FontAwesome'
                                styles={styles.iconView}
                                // badgeBackgroundColor = {colors.HOMESCREEN.JOBSCARD_COLOR}
                                text='Association'
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export { HomeScreen }