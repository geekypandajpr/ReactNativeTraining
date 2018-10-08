import React from 'react';
import {
    View,
    TouchableOpacity,
    BackHandler,
    Alert,
    TouchableHighlight,
    TextInput,
    Text

} from 'react-native';
import styles from './Styles';
import {
    IconWithText,
    Toolbar
} from '../../components';
import colors from '../../constants/colors';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                currentColor1: colors.HOMESCREEN.SIMCARD_COLOR,
                currentColor2: colors.HOMESCREEN.DEVICECARD_COLOR,
                currentColor3: colors.HOMESCREEN.JOBSCARD_COLOR,
                currentColor4: colors.HOMESCREEN.SCHEDULECARD_COLOR,
                currentColor5: colors.HOMESCREEN.ASSOCIATIONCARD_COLOR,
            };
    }
    simClick() 
    {
        this.setState({
            currentColor1: "#00ced1"
        });
        const { navigate } = this.props.navigation;
        navigate('Sim')
        
    }
    deviceClick() 
    {
        this.setState({
            currentColor2: "#ff9f95"
        });
        const { navigate } = this.props.navigation;
        navigate('Sim')
    }
    jobsClick() 
    {
        this.setState({
            currentColor3: "#817c8b"
        });
        const { navigate } = this.props.navigation;
        navigate('Jobs')
    }
    scheduleClick() 
    {
        this.setState({
            currentColor4: "#bbc89c"
        });
        const { navigate } = this.props.navigation;
        navigate('Schedule')

    }
    associationClick() 
    {
        this.setState({
            currentColor5: "#2b6cc4"
        });
        const { navigate } = this.props.navigation;
        navigate('VehicleList')
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <Toolbar title='Dashboard' leftIcon='home' rightIcon='settings' rightIconType='MaterialCommunityIcons' />
                <View style={styles.firstContainer}>
                    <View style={styles.simContainer}>
                        <TouchableOpacity activeOpacity={0.7} style={[styles.container, { backgroundColor: this.state.currentColor1 }]} onPress={this.simClick.bind(this)} >
                            <IconWithText
                                badgeText="6"
                                name='sim'
                                type='MaterialCommunityIcons'
                                styles={[styles.iconView, this.state.toggle && styles.textInputAlt]}
                                text='Sim'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.deviceContainer}>
                        <TouchableOpacity activeOpacity={0.7} style={[styles.container, { backgroundColor: this.state.currentColor2 }]} onPress={this.deviceClick.bind(this)} >
                            <IconWithText
                                badgeText="4"
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
                        <TouchableOpacity activeOpacity={0.7} style={[styles.container, { backgroundColor: this.state.currentColor3 }]} onPress={this.jobsClick.bind(this)} >
                            <IconWithText
                                badgeText="5"
                                name='new-message'
                                type='Entypo'
                                styles={styles.iconView}
                                text='Jobs'
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.scheduleContainer}>
                        <TouchableOpacity activeOpacity={0.7} style={[styles.container, { backgroundColor: this.state.currentColor4 }]} onPress={this.scheduleClick.bind(this)} >
                            <IconWithText
                                badgeText="2"
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
                        <TouchableOpacity activeOpacity={0.7} style={[styles.container, { backgroundColor: this.state.currentColor5 }]} onPress={this.associationClick.bind(this)} >
                            <IconWithText
                                badgeText="3"
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