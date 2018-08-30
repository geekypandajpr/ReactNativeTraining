import React from 'react';
import {
    View,
} from 'react-native';
import styles from './Styles';
import { Toolbar } from '../../components';

export default class Result extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={ styles.container }>
                <Toolbar
                    leftIcon='ios-arrow-back-outline'
                    leftIconType='Ionicons'
                    onPressLeftIcon={() => this.props.navigation.goBack()}
                    headerTitle='Result'
                />
            </View>
        )
    }
}

export { Result }