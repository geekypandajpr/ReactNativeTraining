import React from 'react';
import { View, Text } from 'react-native';
import {
    Container,
    Header,
    Left,
    Right,
    Button,
    Title,
    Icon,
    Body
} from 'native-base';
import {
    Ionicons
} from '@expo/vector-icons';
import { Statusbar } from '../Statusbar/Statusbar';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './Styles';

export default class Toolbar extends React.Component {
    render() {
        return (
            <View>
                <Statusbar backgroundColor={EStyleSheet.value('$primaryColorDark')} barStyle="light-content" />
                <View style={styles.appBar}>
                    {/* <Ionicons name='md-menu' color="#fff" size={20} style={styles.menu_icon}/> */}
                    <Text style={styles.toolbar_text}>{this.props.title}</Text>
                </View>
            </View>
        )
    }
}

export { Toolbar }