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
import { InputWithIcon, Statusbar, StatefulButton } from '../../components';

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
            this.props.navigation.navigate('Dashboard');
        } else {
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
        const { navigate } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <ImageBackground style={styles.backgroundImage} source={require('../../assets/images/LoginScreenBG.jpg')} >
                    <Statusbar backgroundColor={'transparent'} barStyle="light-content" />
                    <ScrollView style={styles.scrollView} contentContainerStyle={{flex:1}}>
                        <View style={styles.container}>

                            <View style={styles.imageView}>
                                <Image
                                    style={styles.logo}
                                    source={require('../../assets/images/YLogAppLogo.png')}>
                                </Image>
                            </View>
                            <View style={styles.input_view}>
                                <InputWithIcon
                                    name='person'
                                    iconColor='#fff'
                                    placeholder='Username'
                                    value={this.state.username}
                                    returnKeyType={'next'}
                                    keyboardType={'email-address'}
                                    blurOnSubmit={false}
                                    onSubmitEditing={() => this._focusNextField('password')}
                                    onChangeText={(username) => this.setState({ username })}
                                    inputStyles={{width: '85%'}}
                                />
                            </View>

                            <View style={styles.input_view}>
                                <InputWithIcon
                                    name='lock'
                                    iconColor='#FFF'
                                    placeholder='Password'
                                    returnKeyType={'go'}
                                    getRef={(input) => { this.password = input; }}
                                    value={this.state.password}
                                    secureTextEntry={true}
                                    onSubmitEditing={this._doLogin}
                                    onChangeText={(password) => this.setState({ password })}
                                    inputStyles={{width: '85%'}}
                                />
                            </View>

                             <View style={styles.checkbox}>
                                <View style={styles.checkbox_view}>
                                    <CheckBox
                                        checked={this.state.remember}
                                        color='#229954'
                                        onPress={() => this.setState({
                                            remember: !this.state.remember
                                        })}
                                    />
                                    <View style={styles.remember_me}>
                                        <Text style={styles.remember_me_text}>Remember me</Text>
                                    </View>
                                </View>
                                <View style={styles.forgot_view}>
                                    <TouchableWithoutFeedback onPress={() => navigate('ForgotPassword')}>
                                        <Text style={styles.forgot_text}> Forgot password ? </Text>
                                    </TouchableWithoutFeedback>                                   
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
                    </ScrollView>
            </ImageBackground>
        )
    }
    signUp() {
        alert('hello');
    }
}

export { LogIn }



/* <StatefulButton 
    label='Login'
    loadingLabel='loading...'
    colorAnimation={['#229954', '#8BC34A', '#229954']}
    onPress={this.signUp}
    styles={{button: styles.animated_button, label: styles.button_text}}/> 
*/