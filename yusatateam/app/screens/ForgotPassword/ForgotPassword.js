import React from 'react';
import { View, BackHandler } from 'react-native';
import { AppLoading } from 'expo';
import { Button, Item, Input, Label, Text } from 'native-base';
import { Feather } from '@expo/vector-icons';

import { Statusbar } from '../../components';
import colors from '../../constants/colors';
import styles from './Styles';

export default class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isButtonEnabled: true,
            email: ''
        }
        this.onEmailChange = this.onEmailChange.bind(this);
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false });
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    onEmailChange(text) {
        this.setState({ email: text }, function() {
            if(this.state.email !== '') { this.setState({ isButtonEnabled: false }) }
            else { this.setState({ isButtonEnabled: true }) }
        })
        console.log(this.state.isButtonEnabled);
    }

    doSubmit() {}

    render() {
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :

            <View style={{ flex: 1 }}>
                <Statusbar backgroundColor={colors.STATUSBAR_COLOR} barStyle="light-content" />
                <View style={styles.container}>

                    <View style={styles.appBar}>
                        <Feather name='arrow-left' color="#000" size={24} onPress={() => goBack()}/>
                    </View>

                    <View style={styles.forgot_view}>
                        <Text style={styles.forgot_text}>Forgot Password ?</Text>
                    </View>

                    <View style={styles.input_view}>
                        <Item floatingLabel>
                            <Label style={{color:'gray', fontSize: 15}}>Email</Label>
                            <Input
                                style={{color:'#000', fontSize: 15}}
                                value={this.state.email}
                                keyboardType={'email-address'}
                                returnKeyType={'go'}
                                onChangeText={(text) => this.onEmailChange(text)}
                                secureTextEntry={false}
                                onSubmitEditing={this.doSubmit}
                            />
                        </Item>
                    </View>

                    <View style={styles.button_view}>
                        <Button disabled={this.state.isButtonEnabled}
                            style={styles.button}
                            onPress={this.doSubmit} >
                            <Text>Submit</Text>
                        </Button>
                    </View>

                </View>
            </View>
        )
    }
}

export { ForgotPassword }