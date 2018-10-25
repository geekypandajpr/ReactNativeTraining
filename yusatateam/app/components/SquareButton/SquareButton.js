import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Icon, Button, Text } from 'native-base';
import styles from './Styles';
import { AppLoading } from 'expo';
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
            // <View style={styles.Container}>
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
                            <Text style={[styles.text_Style, { color: this.props.textColor }]}>
                                {this.props.text}
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            // </View>
        );
    }
}
export { SquareButton }