import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Index from './app/index';

EStyleSheet.build({
    $textColor: '#0275d8'
});

export default class App extends React.Component {
  
    render() {
          return (
              <Index/>
          );
      }
  }
