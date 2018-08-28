import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import styles from './style'
import {Icon,Footer,FooterTab,Badge,Button, Container, Header, Content,Left,Body,Right,Title} from 'native-base';

export default class FooterView extends React.Component {
    render() {

      return (
        
          <Footer >
          <FooterTab style={styles.container}>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text style={styles.text}>Camera</Text>
            </Button>
            <Button active badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
}
}
export {FooterView}

