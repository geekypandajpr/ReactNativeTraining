import React from 'react';
import { View, Image, Dimensions, TouchableOpacity, Text, ScrollView, ImageBackground, BackHandler, Alert } from 'react-native';
import styles from './Styles';
import { Body, CheckBox, Button } from 'native-base';
import { IconWithTextInput, Statusbar } from '../../components';

const _width = Dimensions.get('window').width;

export default class LogIn extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            remember: true
        }
    }
    componentDidMount() {
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
    _focusNextField(id) {
        this[id]._root.focus();
    }

    _logIn(){
        if(this._requiredFields()){
            this.props.navigation.navigate('HomeScreen');
        }
        else{
            Alert.alert('Please fill all the fields');
        }
    }
    _requiredFields() {
        if (this.state.username=='' || this.state.password=='') {
            return false;
        }
        return true;
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={require('../../assets/images/backgroundImage.png')} style={styles.backgroundImage}>
                <View style={styles.mainContainer}>

                    <Statusbar backgroundColor={'#fff'} barStyle="dark-content" />
                    <ScrollView>
                        <View style={styles.imageView}>
                            <Image
                                style={styles.logo}
                                source={require('../../assets/images/YLogAppLogo.png')}>
                            </Image>
                        </View>
                        <View style={styles.credentialContainer}>
                            <IconWithTextInput
                                name='person'
                                placeHolder='User Name'
                                value={this.state.username}
                                returnKeyType={'next'}
                                keyboardType={'email-address'}
                                blurOnSubmit={false}
                                onSubmitEditing={() => this._focusNextField('pswd')}
                                onChangeText={(username) => this.setState({ username })}
                            />
                            <IconWithTextInput
                                name='lock'
                                placeHolder='Password'
                                getRef={(input) => { this.pswd = input; }}                              
                                value={this.state.password}
                                secureTextEntry={true}
                                onChangeText={(password) => this.setState({ password })}
                            />
                            <View style={styles.checkbox}>
                                <CheckBox
                                    checked={this.state.remember}
                                    color='#229954'
                                    onPress={() => this.setState({
                                        remember: !this.state.remember
                                    })}
                                />                               
                                    <Body
                                        style={styles.checkboxBody} >
                                        <Text>Remember Me</Text>
                                    </Body>                                
                            </View>
                            <View style={styles.buttonView}>
                                <Button rounded
                                    style={styles.button}
                                    onPress={this._logIn.bind(this)}>
                                    <View style={{ width: _width * 0.8 }}>
                                        <Text style={styles.buttonText}>
                                            LOGIN
                                    </Text>
                                    </View>
                                </Button>
                            </View>
                        </View>
                        <View style={styles.versionTextView}>
                            <Text style={styles.versionText}>v0.0.1</Text>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>

        )
    }
}

export { LogIn }