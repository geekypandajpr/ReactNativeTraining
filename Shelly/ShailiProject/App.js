import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './app/screens/home';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build({
    $textColor: '#0275d8',
    $fontSize: '1rem'
});

export default class App extends React.Component {
  
  render() {
        return (
            <Home/>
        );
    }
}

