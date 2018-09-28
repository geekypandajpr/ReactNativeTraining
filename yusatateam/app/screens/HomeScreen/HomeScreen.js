import React from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import styles from './Styles';
import { IconWithText, Statusbar } from '../../components';

export default class HomeScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={ styles.mainContainer }>
                <Statusbar backgroundColor="#3E4357" barStyle="light-content" />
                <View style = {styles.firstContainer}>
                    <View style = {styles.simContainer}>
                        <TouchableOpacity onPress={()=>navigate('Sim')}>
                                <IconWithText
                                    backgroundColor = '#31B08A'
                                    name='sim'
                                    type = 'MaterialCommunityIcons'
                                    styles={styles.iconView}
                                    text= 'Sim' 
                                />
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.deviceContainer}>
                        <TouchableOpacity onPress={()=>navigate('Sim')}>
                                <IconWithText
                                    backgroundColor = '#9772C7'
                                    name='devices'
                                    type='MaterialIcons'
                                    styles={styles.iconView}
                                    text= 'Device' 
                                />
                        </TouchableOpacity>
                    </View>
                </View>
                 <View style = {styles.secondContainer}>
                    <View style = {styles.jobContainer}>
                        <TouchableOpacity onPress={()=>navigate('Jobs')}>
                                <IconWithText
                                    backgroundColor = '#234EAB'
                                    name='new-message'
                                    type='Entypo'
                                    styles={styles.iconView}
                                    text= 'Jobs'
                                />
                        </TouchableOpacity>
                    </View>
            
                    <View style = {styles.scheduleContainer}>
                        <TouchableOpacity onPress={()=>navigate('Schedule')}>
                                <IconWithText
                                    backgroundColor = '#72D654'
                                    name='schedule'
                                    type='MaterialIcons'
                                    styles={styles.iconView}
                                    text= 'Schedule'  
                                />
                        </TouchableOpacity>
                    </View>
                </View>


                 <View style = {styles.thirdContainer}>
                 <View style = {styles.associationContainer}>
                    <TouchableOpacity onPress={()=>navigate('ViewVehicleList')}>
                            <IconWithText
                                backgroundColor = '#FF8533'
                                name='group'
                                type='FontAwesome'
                                styles={styles.iconView}
                                text= 'Association' 
                            />
                    </TouchableOpacity>
                </View>
                </View>


            </View>
        )
    }
}

export { HomeScreen }