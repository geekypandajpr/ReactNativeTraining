import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import {Quiz } from '../Quiz/Quiz';
export default class QuizResult extends React.Component
{
  render(){
      return(
          <View >
              <HeaderIcon />
          </View>
              
);
}
}

const styles = StyleSheet.create({
  score: {
  }
});
export {QuizResult};