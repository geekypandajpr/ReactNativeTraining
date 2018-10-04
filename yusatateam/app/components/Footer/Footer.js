import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text, Container } from 'native-base';
import {
  StyleSheet,
  View
} from 'react-native';

export default class FooterTabsIcon extends Component {
  render() {
    return (
      <Container>
        <Footer style= {styles.footer}>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
     </Container>
    );
  }
}

const styles = StyleSheet.create({
footer: 
{
  position: 'absolute',
  flex:0.1,
  left: 0,
  right: 0,
  bottom: -10,
  backgroundColor:'green',
  flexDirection:'row',
  height:80,
  alignItems:'center',
}

  });

export {FooterTabsIcon};