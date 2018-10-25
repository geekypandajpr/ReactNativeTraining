import React from 'react';
import { View } from 'react-native';
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
                <View style={styles.Container}>
                    <Button  style={styles.Button_style}>
                        <View style={{ flex: 1, }}>
                            <View style={styles.upper}>
                            <Icon
                                    name={this.props.name}
                                    type={this.props.type}
                                    style={{ fontSize: 30, color: this.props.color }}
                                >
                            </Icon>
                            </View>
                            <View style={styles.lower}>
                            <Text style={[styles.text_Style, { color: this.props.color }]}>
                                    {this.props.text}
                                </Text>
                            </View>
                        </View>
                    </Button>
                </View>

        );
    }
}
export { SquareButton }