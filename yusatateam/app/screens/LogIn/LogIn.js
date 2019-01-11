import React from 'react';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import { View, Image, BackHandler, ScrollView, TouchableWithoutFeedback, Alert, KeyboardAvoidingView } from 'react-native';
import { CheckBox, Button, Text } from 'native-base';

import { Float, Statusbar, Activityindication } from '../../components';
import { userActions } from '../../redux/actions';
import styles from './Styles';
import functions from '../../common/functions';
import { colors, globalStyles } from '../../styles';

export class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // username: 'admin@readingtonfarms.com',
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

    componentDidMount() {
        /**Get username from Secure Store  */
        functions.getCredentials('USERNAME')
        .then((res) => {
            if(res !== null) { this.setState({ username: res }) }
        })
        .catch((e) => { console.log(e) });

        /**Get password from Secure Store  */
        functions.getCredentials('PASSWORD')
        .then((res) => {
            if(res !== null) { this.setState({ password: res }) }
        })
        .catch((e) => { console.log(e) });

        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        Alert.alert(
            'Exit App',
            'Do you want to exit ?',
            [
                { text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'YES', onPress: () => BackHandler.exitApp() },
            ],
            { cancelable: false })
        return true;
    }

    _focusNextField(id) { this[id]._root.focus(); }

    _doLogin() {
        if (this._checkRequiredFields()) {
            var loginCredentials = {
                "password": this.state.password,
                "userName": this.state.username
            }
            /**Save Remember me value to Secure Store */
            functions.saveCredentials('REMEMBER', this.state.remember.toString());
            this.props.onFetchData(loginCredentials);
        } else {
            functions.showToast('All fields are required', 'warning');
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
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <Activityindication visible={this.props.user.isLoading} />
                    <Statusbar backgroundColor={colors.STATUSBAR_COLOR} barStyle="light-content" />
                    <KeyboardAvoidingView behavior='padding' enabled style={globalStyles.keyboardAvoiding} >
                        <ScrollView keyboardShouldPersistTaps='always'>

                            <View style={styles.container}>

                                <View style={styles.imageView}>
                                    <Image
                                        style={styles.logo}
                                        source={require('../../../assets/logo.png')}>
                                    </Image>
                                </View>

                                <View style={styles.input_view}>
                                    <View style={{ width: '85%' }}>
                                        <Float
                                            placeholder='Username'
                                            value={this.state.username}
                                            isIcon={true}
                                            iconName='person'
                                            iconType="MaterialIcons"
                                            iconColor='gray'
                                            returnKeyType={'next'}
                                            keyboardType={'email-address'}
                                            blurOnSubmit={false}
                                            isMandatory={true}
                                            onSubmitEditing={() => this._focusNextField('password')}
                                            onChangeText={(username) => this.setState({ username })}
                                        />
                                    </View>
                                </View>

                                <View style={styles.input_view}>
                                    <View style={{ width: '85%' }}>
                                        <Float
                                            placeholder='Password'
                                            value={this.state.password}
                                            isIcon={true}
                                            iconName='lock'
                                            iconType="MaterialIcons"
                                            iconColor='gray'
                                            returnKeyType={'go'}
                                            getRef={(input) => { this.password = input; }}
                                            secureTextEntry={true}
                                            blurOnSubmit={false}
                                            isMandatory={true}
                                            onSubmitEditing={this._doLogin}
                                            onChangeText={(password) => this.setState({ password })}
                                        />
                                    </View>
                                </View>

                                <View style={styles.checkbox}>
                                    <View style={styles.checkbox_view}>
                                        <CheckBox
                                            checked={this.state.remember}
                                            color={colors.HEADER_COLOR}
                                            onPress={() => this.setState({
                                                remember: !this.state.remember
                                            })}
                                        />
                                        <View style={styles.remember_me}>
                                            <Text style={[styles.remember_me_text, { fontFamily: 'Roboto' }]}>Remember me</Text>
                                        </View>
                                    </View>
                                    <View style={styles.forgot_view}>
                                        <TouchableWithoutFeedback onPress={() => navigate('ForgotPassword')}>
                                            <Text style={[styles.forgot_text, { fontFamily: 'Roboto' }]}> Forgot password ? </Text>
                                        </TouchableWithoutFeedback>
                                    </View>
                                </View>

                                <View style={styles.button_view}>
                                    <Button
                                        style={[styles.button, { backgroundColor: colors.HEADER_COLOR }]}
                                        onPress={this._doLogin} >
                                        <Text style={[styles.button_text, { fontFamily: 'Roboto' }]}>  LOGIN </Text>
                                    </Button>
                                </View>

                                {/* <View style={[styles.input_view,{flexDirection:'row'}]}>
                                <View style={{flex: 1, justifyContent: "flex-end", alignItems: 'center', flexDirection: 'row'}}>
                                    <Text style={[styles.remember_me_text,{fontFamily:'Roboto',color:'gray'}]}>About Us</Text>
                                </View>
                                <View style={{flex: 0.2, justifyContent: "center", alignItems: 'center', flexDirection: 'row'}}>
                                    <Text style={[styles.remember_me_text,{fontFamily:'Roboto',color:'gray'}]}>|</Text>
                                </View>
                                <View style={{flex: 1, justifyContent: "flex-start", alignItems: 'center', flexDirection: 'row'}}>
                                    <Text style={[styles.remember_me_text,{fontFamily:'Roboto',color:'gray'}]}>Help</Text>
                                </View>
                            </View> */}

                                {/* <View style={styles.input_view}>
                                <View style={{flex: 1, justifyContent: "center", alignItems: 'center', flexDirection: 'row'}}>
                                    <Text style={[styles.remember_me_text,{fontFamily:'Roboto',color:'gray'}]}>Yusata Infotech Pvt. Ltd.</Text>
                                </View>
                            </View> */}

                                <View style={[styles.input_view, {marginTop: 5}]}>
                                    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', flexDirection: 'row' }}>
                                        <Text style={[styles.remember_me_text, { fontFamily: 'Roboto', color: 'gray' }]}>Version#: 1.0</Text>
                                    </View>
                                </View>

                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </View>
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