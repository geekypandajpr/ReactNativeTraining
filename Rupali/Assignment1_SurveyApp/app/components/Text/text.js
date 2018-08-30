import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {
  StyleSheet,
  View
} from 'react-native';
export default class text extends Component 
{
  render() {
    return (
    <View>
        <Text 
            style= {{textAlign: "center"}}>
            {this.props.textname}
        </Text> 
      </View>
    );
  }
}


export {text};