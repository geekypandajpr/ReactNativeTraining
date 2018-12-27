import React from 'react';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import { View, Image, ImageBackground, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { CheckBox, Button, Text } from 'native-base';
import { InputWithIcon, Statusbar, Activityindication } from '../../components';
import { userActions } from '../../redux/actions';
import styles from './Styles';
import functions from '../../common/functions';

export class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'admin@readingtonfarms.com',
            password: 'Admin@123',
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

    _focusNextField(id) { this[id]._root.focus(); }

    _doLogin() {
        if(this._checkRequiredFields()) {
            var loginCredentials = {
                "password": this.state.password,
                "userName": this.state.username
            }
            this.props.onFetchData(loginCredentials);
        } else {
            functions.showToast('All fields are required', 'danger');
        }
    }

    _checkRequiredFields() {
        if (this.state.username === '' || this.state.password === '') { return false; } 
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
                        <Activityindication visible={this.props.user.isLoading}/>
                        <View style={styles.imageView}>
                            <Image
                                style={styles.logo}
                                source={require('../../assets/images/YLogAppLogo.png')}>
                            </Image>
                        </View>

                        <View style={styles.input_view}>
                            <InputWithIcon
                                name='person'
                                iconType="MaterialIcons"
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
                                iconType="MaterialIcons"
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
                                onPress={this._doLogin} >
                                <Text style={styles.button_text}>  LOGIN </Text>
                            </Button>
                        </View>

                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.loginData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchData: (loginCredentials) => dispatch(userActions.loginRequest(loginCredentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);