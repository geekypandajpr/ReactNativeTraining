import React  from 'react';
import {
    StyleSheet,
    Button,
    Text,
    View,
    TextInput,
    ImageBackground,
    Dimensions,
    Image,
    ScrollView
} from 'react-native';
//import { Card } from 'native-base';

const { height, width } = Dimensions.get('window') ;
class Get extends React.Component
{
    render(){
        return (
            <Text>Hello {this.props.name}</Text>
        );
    }
}

export default class Index extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            name : 'LOGIN FORM'

        }
        this.login=this.login.bind(this);
    }

    login() {
        alert('Content will change from Login Form to Registration page');
        this.setState( {
            name : 'Registration Page'
        })
       
        
    }

    render() {
        return(
            <ImageBackground
                source= {require('./Images/images2.jpg')}
                style={{width: width, height:height}} >
           
                <View style= {styles.container}>
                    <Text
                        style={{fontStyle:'italic',fontWeight:'bold', fontSize:50, color:'red', marginBottom:80}}>
                        {this.state.name}
                    </Text>
                    <Image
                        style={{width:150, height:150, marginBottom: 100 }}
                        source={require('./Images/login_icon1.png')}
                    />
                    <TextInput
                        style={{width:width*0.8, height:50, margin:5}}
                        placeholder="USERNAME" >
                    </TextInput>
                    
                    <TextInput
                        secureTextEntry={true}
                        style={{width:width*0.8, height:50}}
                        placeholder="PASSWORD" >
                    </TextInput>
                    
                    <View style={{width:width*0.5, height:100, marginTop:30}}>
                        <Button  color='#1f667e'
                            style={{height:'100%'}}
                            title={this.state.name} onPress={this.login} />
                       
                    </View>
                   
                </View>
            
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
      //backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
    },
  });