import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import Index from './app/Index';
import Expo from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build({ 
 
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
     /*} <View style={styles.container}>       
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
    </View>*/
    <Index name={this.state.name} 
           bgImage={this.state.bgImage}
           color={this.state.color}
           onPress={this.onChange}/>
           
    );
  }
}
