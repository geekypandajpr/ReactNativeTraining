import React from 'react';
import { View} from 'react-native';
import styles from './Styles';
import { AppLoading } from 'expo';
import {
    Button,
    Item,
    Input,
    Label,
    Text
} from 'native-base';
import { Statusbar, InputWithIcon } from '../../components';
import { Feather } from '@expo/vector-icons';
import colors from '../../constants/colors';

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

    onEmailChange(text) {
        this.setState({ email: text })
    }

    doSubmit() {

    }

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