import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {IconWithText} from '../Icon/IconWithText';
import styles from './style'
import {Icon,Header,Button,Left,Right,Title,Body} from 'native-base';
export default class HeaderView extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
    render() {
      return (
         
        <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Offer On Shoes</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='search' style={styles.text}  />
            <Icon name='cart' style={styles.text} />
          </Button>
        </Right>
      </Header>
      

    );
}
}
export {HeaderView}

