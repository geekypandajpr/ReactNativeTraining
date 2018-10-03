import React from 'react';
import {
    View,
    TouchableOpacity,
    BackHandler,Alert
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
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
                <Toolbar title='Home' leftIcon='menu' rightIcon='settings' rightIconType='MaterialCommunityIcons'/>
                <View style={styles.firstContainer}>
                    <View style={styles.simContainer}>
                        <TouchableOpacity onPress={() => navigate('Sim')}>
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
                        <TouchableOpacity onPress={() => navigate('Sim')}>
                            <IconWithText
                                backgroundColor='#0960CA'
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
                        <TouchableOpacity onPress={() => navigate('Jobs')}>
                            <IconWithText
                                backgroundColor='#7AB944'
                                name='new-message'
                                type='Entypo'
                                styles={styles.iconView}
                                text='Jobs'
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.scheduleContainer}>
                        <TouchableOpacity onPress={() => navigate('Schedule')}>
                            <IconWithText
                                backgroundColor='#9381D5'
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
                        <TouchableOpacity onPress={() => navigate('VehicleList')}>
                            <IconWithText
                                backgroundColor='#008e6d'
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