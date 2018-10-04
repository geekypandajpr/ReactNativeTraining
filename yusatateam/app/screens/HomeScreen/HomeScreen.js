import React from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import styles from './Styles';
import {
    IconWithText,
    Toolbar
} from '../../components';
import { AppLoading } from 'expo';
import colors from '../../constants/colors';

export default class HomeScreen extends React.Component {
    constructor()
    {
        super();   
        this.state =
        {   
          isLoading: true
        }
    };
    async componentWillMount(){
        await Expo.Font.loadAsync({
            Roboto:require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium:require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View style={styles.mainContainer}>
                <Toolbar title='Dashboard' leftIcon='arrow-back' leftIconType='Ionicons' rightIcon='settings' rightIconType='Feather'/>
                <View style={styles.firstContainer}>
                    <View style={styles.simContainer}>
                        <TouchableOpacity activeOpacity={.5} onPress={() => navigate('Sim')}>
                            <IconWithText
                                backgroundColor={colors.SIMCARD_COLOR}
                                name='sim'
                                type='MaterialCommunityIcons'
                                styles={styles.iconView}
                                text='Sim'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.deviceContainer}>
                        <TouchableOpacity activeOpacity={.5} onPress={() => navigate('Sim')}>
                            <IconWithText
                                backgroundColor={colors.DEVICECARD_COLOR}
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
                        <TouchableOpacity activeOpacity={.5} onPress={() => navigate('Jobs')}>
                            <IconWithText
                                backgroundColor={colors.JOBSCARD_COLOR}
                                name='new-message'
                                type='Entypo'
                                styles={styles.iconView}
                                text='Jobs'
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.scheduleContainer}>
                        <TouchableOpacity activeOpacity={.5} onPress={() => navigate('Schedule')}>
                            <IconWithText
                                backgroundColor={colors.SCHEDULECARD_COLOR}
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
                        <TouchableOpacity activeOpacity={.5} onPress={() => navigate('VehicleList')}>
                            <IconWithText
                                backgroundColor={colors.ASSOCIATIONCARD_COLOR}
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