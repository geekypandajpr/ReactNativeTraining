import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {ItemList} from './app/Screen/ItemList';
import {AppRoutes} from './Routes/index'
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build({
  '$TextSize': '1rem'
});
export default class App extends React.Component {
  render() {
    return (
      <AppRoutes/>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    
  },
  
});
