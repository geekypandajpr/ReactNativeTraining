import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {IconWithText} from '../../component/Icon/IconWithText/index'

export default class ItemList extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <IconWithText
            IconText={'Offer On Shoes'}></IconWithText>
            <Icon name="search" size={30} color="#900" />
            <Icon name="card" size={30} color="#900" />
        </View>

    );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });