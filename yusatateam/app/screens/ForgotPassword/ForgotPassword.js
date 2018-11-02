import React from 'react';
import {
    View,
    Image,
    ImageBackground,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';
import styles from './Styles';
import { AppLoading } from 'expo';
import {
    CheckBox,
    Button,
    Text,
    Toast
} from 'native-base';
import { Statusbar } from '../../components';

export default class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false });
    }

    render() {
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :

            <View style={styles.container}>
                <Statusbar backgroundColor={'transparent'} barStyle="light-content" />
            </View>
        )
    }
}

export { ForgotPassword }