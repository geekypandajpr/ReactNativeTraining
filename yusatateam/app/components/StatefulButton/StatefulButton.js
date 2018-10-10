import React from 'react';
import { ActivityIndicator, Animated, TouchableWithoutFeedback } from 'react-native';
import styles from './Styles';
import { Text } from 'native-base';
import { AppLoading } from 'expo';

export default class StatefulButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            appLoading: true
        }
        this.colorValue = new Animated.Value(0);
        this.onPress = this.onPress.bind(this);
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ appLoading: false });
    }

    render() {
        const colorAnimation = this.colorValue.interpolate({
            inputRange: [0, 50, 100],
            outputRange: this.props.colorAnimation
        });

        return(
            this.state.appLoading === true ? <AppLoading /> :
            <TouchableWithoutFeedback onPress={this.onPress}>
                <Animated.View style={[
                    styles.button_container,
                    this.props.noDefaultStyles ? '' : styles.button,
                    this.props.styles ? this.props.styles.button : '',
                    {
                        backgroundColor : colorAnimation
                    }
                ]}>
                {
                    this.state.isLoading && 
                    <ActivityIndicator size="small" color="red" style={{marginRight: 4}}/>
                }
                <Text uppercase={false} style={this.props.styles.label}>
                    {this.state.isLoading ? this.props.loadingLabel : this.props.label}
                </Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }

    onPress() {
        this.changeColor();
        //this.props.onPress();
    }

    changeColor() {
        this.setState({ isLoading : true });
        this.colorValue.setValue(0);
        Animated.timing(this.colorValue, {
            toValue: 100,
            duration: 500
        }).start(() => {
            this.setState({ isLoading : false }, function() {
                this.props.onPress();
            });
        });
    }
}

export { StatefulButton }