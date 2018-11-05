import React from 'react';
import {
    View, ScrollView
} from 'react-native';
import styles from './styles';
import { Toolbar } from '../../components';
import { TechnicianList } from '../../components/TechnicianList'
export default class Technicians extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Toolbar title='Technician' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                    setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')} />
                <View style={styles.viewStyle}>
                    <TechnicianList colors={['#8C8DF9', '#9491F8', '#A19AF7']}
                        icon='devices'
                        iconColor='#9491F8'
                        icontype='MaterialIcons'
                        heading='DEVICES'
                        headingColor='#f0ad4e'
                        total='2563'
                        text1='Ordered: 100'
                        text2='Installed: 20'
                    />
                    <TechnicianList colors={['#81A6E7', '#8BB6F3', '#A0D2F7']}
                        icon='devices'
                        iconColor='#8BB6F3'
                        icontype='MaterialIcons'
                        heading='DEVICES'
                        headingColor='#f0ad4e'
                        total='2563'
                        text1='Ordered: 100'
                        text2='Installed: 20'
                    />
                    <TechnicianList colors={['#86D0F7', '#8AD3F3', '#9EE1F2']}
                        icon='devices'
                        iconColor='#8AD3F3'
                        icontype='MaterialIcons'
                        heading='DEVICES'
                        headingColor='#f0ad4e'
                        total='2563'
                        text1='Ordered: 100'
                        text2='Installed: 20'
                    />
                    <TechnicianList colors={['#EAC059', '#EDCD68', '#F4DE79']}
                        icon='devices'
                        iconColor='#EAC059'
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
export { Technicians }