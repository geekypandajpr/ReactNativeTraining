import React from 'react';
import {
    View,
    Image,
    ImageBackground,
    ScrollView
} from 'react-native';
import styles from './Styles';
import { AppLoading } from 'expo';
import { CheckBox, Button, Text, Toast } from 'native-base';
import { InputWithIcon, Statusbar } from '../../components';

export default class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            remember: true,
            isLoading: true
        }
        this._doLogin = this._doLogin.bind(this);
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false });
    }

    _focusNextField(id) {
        this[id]._root.focus();
    }

    _doLogin() {
        if (this._checkRequiredFields()) {
            this.props.navigation.navigate('HomeScreen');
        }
        else {
            Toast.show({
                position: 'bottom',
                type: 'danger',
                duration: 3000,
                text: 'Invalid Credentials',
                buttonText: 'Ok',
            });
        }
    }

    _checkRequiredFields() {
        if (this.state.username == '' || this.state.password == '') {
            return false;
        }
        return true;
    }

    render() {
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <ImageBackground source={require('../../assets/images/backgroundImage.png')}
                    style={styles.backgroundImage}>
                    <ScrollView keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flex: 1 }}>
                        <Statusbar backgroundColor={'transparent'} barStyle="light-content" />
                        <View style={styles.mainContainer}>
                            {/**Logo View*/}
                            <View style={styles.imageView}>
                                <Image
                                    style={styles.logo}
                                    source={require('../../assets/images/YLogAppLogo.png')}>
                                </Image>
                            </View>

                            {/**Login Credentials View*/}
                            <View style={styles.credentialContainer}>
                                <View style={styles.input_view}>
                                    <InputWithIcon
                                        name='person'
                                        placeholder='User Name'
                                        value={this.state.username}
                                        returnKeyType={'next'}
                                        keyboardType={'email-address'}
                                        blurOnSubmit={false}
                                        onSubmitEditing={() => this._focusNextField('password')}
                                        onChangeText={(username) => this.setState({ username })}
                                    />
                                </View>

                                <View style={styles.input_view}>
                                    <InputWithIcon
                                        name='lock'
                                        placeholder='Password'
                                        returnKeyType={'go'}
                                        getRef={(input) => { this.password = input; }}
                                        value={this.state.password}
                                        secureTextEntry={true}
                                        onSubmitEditing={this._doLogin}
                                        onChangeText={(password) => this.setState({ password })}
                                    />
                                </View>

                                <View style={styles.checkbox}>
                                    <View>
                                        <CheckBox
                                            checked={this.state.remember}
                                            color='#229954'
                                            onPress={() => this.setState({
                                                remember: !this.state.remember
                                            })}
                                        />
                                    </View>
                                    <View style={styles.remember_me}>
                                        <Text style={styles.remember_me_text}>Remember me</Text>
                                    </View>
                                </View>

                                <View style={styles.button_view}>
                                    <Button
                                        style={styles.button}
                                        onPress={this._doLogin}>
                                        <Text style={styles.button_text}>  LOGIN </Text>
                                    </Button>
                                </View>
                            </View>

                            {/**Version view*/}
                            <View style={styles.lower_view}>
                                <Text style={styles.version_text}>v0.0.1</Text>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
        )
    }
}

export { LogIn }