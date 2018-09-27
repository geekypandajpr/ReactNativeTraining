import React from 'react';
import {
    ImageBackground,
    View,
    Text,
    Image
} from 'react-native';
import styles from './Styles';
import { IconWithText } from '../../components';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={ styles.mainContainer }>
                <View style = {styles.firstContainer}>
                    <View style = {styles.simContainer}>
                        <IconWithText
                            name='sim'
                            type='MaterialCommunityIcons'
                            styles={styles.iconView}
                            text= 'Sim' 
                        />
                    </View>
                    <View style = {styles.deviceContainer}>
                        <IconWithText
                            name='devices'
                            type='MaterialIcons'
                            styles={styles.iconView}
                            text= 'Device' 
                        />
                    </View>
                </View>
                <View style = {styles.secondContainer}>
                    <View style = {styles.jobContainer}>
                        <IconWithText
                            name='new-message'
                            type='Entypo'
                            styles={styles.iconView}
                            text= 'Jobs' 
                        />
                    </View>
                    <View style = {styles.scheduleContainer}>
                        <IconWithText
                            name='schedule'
                            type='MaterialIcons'
                            styles={styles.iconView}
                            text= 'Schedule' 
                        />
                    </View>
                </View>
                <View style = {styles.thirdContainer}>
                    <View style = {styles.associationContainer}>
                        <IconWithText
                            name='group'
                            type='FontAwesome'
                            styles={styles.iconView}
                            text= 'Association' 
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export { HomeScreen }