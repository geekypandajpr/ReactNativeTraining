import React, { Component } from "react";
//import {ImageBackground} from "react-native";
import {Text,        
        Thumbnail,
        View
} from "native-base";
import EStyleSheet from 'react-native-extended-stylesheet';

const styles=EStyleSheet.create({
    imageBackground: {
       width:'100%',
        height:'150',
       // flex:1,
        justifyContent: "center"
    }
})
export default class Image extends React.Component{
    render(){
        return(
            <View>            
            <Thumbnail
                source={require('../../Assets/Images/person.png')}
                style={{alignItems:'center',justifyContent:'center'}}     
            />
            
            <Text 
                style={{alignItems:'center',justifyContent:'center',
                         color:'#ffffff'}}>
                {this.props.text}
            </Text>                    
            </View>
        );
    }
}
