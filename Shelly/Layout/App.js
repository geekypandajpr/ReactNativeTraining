import React from 'react';
import Index from './app/index';
import EStyleSheet from 'react-native-extended-stylesheet';

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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
