import React from 'react';
import { View,Image, Dimensions, TouchableOpacity, Text, ScrollView } from 'react-native';
import styles from './Styles';
import {  Body, CheckBox, Button } from 'native-base';
import {IconWithTextInput} from '../../components/IconWithTextInput';

const _width = Dimensions.get('window').width;

export default class LogIn extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            remember: true
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
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
                              value={this.state.userName}
                              returnKeyType={'next'}
                              keyboardType={'email-address'}
                             // onSubmitEditing={()=>this._focusNextField('pswd')}
                              onChangeText={(userName) => this.setState({ userName })}
                        />   
                        <IconWithTextInput 
                              name='lock'
                              placeHolder='Password'
                             // getRef={(input)=>{this.pswd=input;}}
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
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    remember: !this.state.remember
                                })} >
                                <Body
                                    style={styles.checkboxBody} >
                                    <Text>Remember Me</Text>
                                </Body>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonView}>                           
                            <Button rounded
                                style={styles.button}
                                onPress={()=> navigate('HomeScreen')}>
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
        )
    }
}

export { LogIn }