import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {
  StyleSheet,
  View
} from 'react-native';
export default class HeaderIcon extends Component 
{
  render() {
    return (
    <View>
        <Header >
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      </View>
    );
  }
}


export {HeaderIcon};