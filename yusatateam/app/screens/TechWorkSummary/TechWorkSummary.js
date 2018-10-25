import React from 'react';
import {
    View,
} from 'react-native';
import { Card, Text } from 'native-base';
import styles from './styles';
import { AppLoading } from 'expo';
import { Toolbar } from '../../components';
import { TechnicianList } from '../../components/TechnicianList'
export default class TechWorkSummary extends React.Component {
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }

    render() {
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>

                    <Toolbar title='Device' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')} />

                    <View style={styles.viewStyle}>
                        <TechnicianList colors={['#b7ffb5', '#84e184', '#51ae56']}
                            icon='devices'
                            iconColor='green'
                            icontype='MaterialIcons'
                            heading='DEVICES'
                            headingColor='#f0ad4e'
                            total='2563'
                            text1='Ordered: 100'
                            text2='Installed: 20'
                        />
                        <TechnicianList colors={['#b7ffb5', '#84e184', '#51ae56']}
                            icon='devices'
                            iconColor='green'
                            icontype='MaterialIcons'
                            heading='DEVICES'
                            headingColor='#f0ad4e'
                            total='2563'
                            text1='Ordered: 100'
                            text2='Installed: 20'
                        />
                        <TechnicianList colors={['#b7ffb5', '#84e184', '#51ae56']}
                            icon='devices'
                            iconColor='green'
                            icontype='MaterialIcons'
                            heading='DEVICES'
                            headingColor='#f0ad4e'
                            total='2563'
                            text1='Ordered: 100'
                            text2='Installed: 20'
                        />
                        <TechnicianList colors={['#b7ffb5', '#84e184', '#51ae56']}
                            icon='devices'
                            iconColor='green'
                            icontype='MaterialIcons'
                            heading='DEVICES'
                            headingColor='#f0ad4e'
                            total='2563'
                            text1='Ordered: 100'
                            text2='Installed: 20'
                        />


                    </View>
                </View>
        );
    }

}
export { TechWorkSummary }