import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base';

export default class IconWithText extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <Icon name="menu" style={{}} type='Entypo'>
            <Text>{this.props.IconText}</Text>
            </Icon>
        </View>
    );
}
}
export {IconWithText}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
     
    },
  });