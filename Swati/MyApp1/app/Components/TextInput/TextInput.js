import React,{Component} from 'react';
//import {View,Icon,Item,Input,Label} from 'native-base';
import {TextInput,View,StyleSheet} from 'react-native';

export default class TextInputs extends Component{
    render(){
        return(
            <View>           
               <TextInput 
                 style={styles.textInput}
                 placeholder={this.props.placeholder}
                 placeholderTextColor='#fff'
                 underlineColorAndroid='transparent'
                 onChangeText={this.props.onChangeText}>
               </TextInput>            
            </View>
        );
    }
    
}


const styles=StyleSheet.create({
    textInput:{
        borderColor:'#808080',
        borderWidth:1,
        width:180,
        
    }
})