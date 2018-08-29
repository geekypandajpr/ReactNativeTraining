import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {FooterView} from '../../component/FooterView';
import {HeaderView} from '../../component/HeaderView'
import {Container, Content} from 'native-base';

export default class ItemList extends React.Component {
    render() {
        // const { navigate } = ;
      return (
        <Container>
            <HeaderView/>
            <Content>
            <Button title="Main Page" onPress={() => this.props.navigation.navigate('MainPage')}/>
            </Content>
            <FooterView/>
        </Container>

    );
}
}
  export {ItemList}