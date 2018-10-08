import React from 'react';
import {
    View,
    Image,
    Dimensions,
    ScrollView,
    ImageBackground,
    Alert
} from 'react-native';
import styles from './Styles';
import { AppLoading } from 'expo';
import { CheckBox, Button, Text} from 'native-base';
import { InputWithIcon, Statusbar } from '../../components';

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
            remember: true,
            isLoading: true
        }
    }

    async componentWillMount(){
        await Expo.Font.loadAsync({
            Roboto:require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium:require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
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
            this.state.isLoading === true ? <AppLoading /> :
            // <ImageBackground source={require('../../assets/images/backgroundImage.png')} style={styles.backgroundImage}>
                <View style={styles.mainContainer}>
                    {/* <Statusbar backgroundColor={'#fff'} barStyle="dark-content" /> */}
                    
                    {/* <ScrollView contentContainerStyle={styles.mainContainer}> */}
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
                                    onSubmitEditing={() => this._focusNextField('pswd')}
                                    onChangeText={(username) => this.setState({ username })}
                                />
                            </View>
                             
                            <View style={styles.input_view}>
                                <InputWithIcon
                                    name='lock'
                                    placeholder='Password'
                                    getRef={(input) => { this.pswd = input; }}                              
                                    value={this.state.password}
                                    secureTextEntry={true}
                                    onSubmitEditing={this._logIn.bind(this)}
                                    onChangeText={(password) => this.setState({ password })}
                                />
                            </View>

                            <View style={styles.checkbox}>
                                <View style={{marginLeft:0}}>
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
                                    onPress={this._logIn.bind(this)}>
                                    <Text style={styles.button_text}>  LOGIN </Text>
                                </Button>
                            </View>
                        </View>

                        {/**Version view*/}
                        <View style={styles.lower_view}>
                            <Text style={styles.version_text}>v0.0.1</Text>
                        </View>
                    {/* </ScrollView> */}
                </View>
            // </ImageBackground>

        )
    }
}

export { LogIn }