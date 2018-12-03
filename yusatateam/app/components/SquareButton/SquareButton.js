import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Icon, Text } from 'native-base';
import { AppLoading } from 'expo';

import styles from './Styles';

export default class SquareButton extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: true
        };
    }

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
            <TouchableWithoutFeedback style={styles.Button_style} onPress={this.props.onPress}>
                <View style={styles.container}>
                    <View style={styles.upper}>
                        <Icon
                            name={this.props.name}
                            type={this.props.type}
                            style={{ fontSize: 40, color: this.props.iconColor }} >
                        </Icon>
                    </View>
                    <View style={styles.lower}>
                        <Text style={[styles.text_Style, { color: 'rgba(0,0,0,0.5)', fontFamily: 'Roboto' }]} >
                            {this.props.text}
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
export { SquareButton }