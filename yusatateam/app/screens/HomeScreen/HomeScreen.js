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

export default class HomeScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
                <Toolbar title='Home' rightIcon='power' rightIconType='MaterialCommunityIcons'/>
                <View style={styles.firstContainer}>
                    <View style={styles.simContainer}>
                        <TouchableOpacity onPress={() => navigate('Sim')}>
                            <IconWithText
                                backgroundColor='#37B4A4'
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
                        <TouchableOpacity onPress={() => navigate('ViewVehicleList')}>
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