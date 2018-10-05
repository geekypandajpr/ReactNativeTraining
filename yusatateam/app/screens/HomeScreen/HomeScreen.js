import React from 'react';
import {
    View,
    TouchableOpacity,
    BackHandler,
    Alert
} from 'react-native';
import styles from './Styles';
import {
    IconWithText,
    Toolbar
} from '../../components';
import colors from '../../constants/colors';

export default class HomeScreen extends React.Component {
    componentDidMount() {        
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }
    handleBackPress = () => {
        Alert.alert(
            'Exit App',
            'Do you want to exit ?',
            [
              {text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'YES', onPress: () => BackHandler.exitApp()},
            ],
            { cancelable: false })
      
        return true;
    }
    constructor () {
        super()
        this.state = {
           toggle: false 
        }
      }
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
                <Toolbar title='Dashboard' leftIcon='arrow-left' leftIconType='Feather' rightIcon='settings' rightIconType='MaterialCommunityIcons'/>
                <View style={styles.firstContainer}>
                    <View style={styles.simContainer}>
                        <TouchableOpacity activeOpacity = {0.7}   onPress={()=> this.setState({toggle: !this.state.toggle})} onPress={() => navigate('Sim')}>
                            <IconWithText
                                backgroundColor={colors.HOMESCREEN.SIMCARD_COLOR}
                                badgeText= "6"
                                name='sim'
                                type='MaterialCommunityIcons'
                                styles={styles.iconView}
                                text='Sim'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.deviceContainer}>
                        <TouchableOpacity activeOpacity = {0.7} onPress={() => navigate('Sim')}>
                            <IconWithText
                                backgroundColor={colors.HOMESCREEN.DEVICECARD_COLOR}
                                badgeText= "4"
                                name='devices'
                                type='MaterialIcons'
                                styles={styles.iconView}
                                text='Device'
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.secondContainer}>
                    <View style={styles.jobContainer}>
                        <TouchableOpacity activeOpacity = {0.7} onPress={() => navigate('Jobs')}>
                            <IconWithText
                                backgroundColor={colors.HOMESCREEN.JOBSCARD_COLOR}
                                badgeText= "5"
                                name='new-message'
                                type='Entypo'
                                styles={styles.iconView}
                                text='Jobs'
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.scheduleContainer}>
                        <TouchableOpacity activeOpacity = {0.7} onPress={() => navigate('Schedule')}>
                            <IconWithText
                                backgroundColor={colors.HOMESCREEN.SCHEDULECARD_COLOR}
                                badgeText= "2"
                                name='schedule'
                                type='MaterialIcons'
                                styles={styles.iconView}
                                text='Schedule'
                            />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.thirdContainer}>
                    <View style={styles.associationContainer}>
                        <TouchableOpacity activeOpacity = {0.7} onPress={() => navigate('VehicleList')}>
                            <IconWithText
                                backgroundColor={colors.HOMESCREEN.ASSOCIATIONCARD_COLOR}
                                badgeText= "3"
                                name='group'
                                type='FontAwesome'
                                styles={styles.iconView}
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