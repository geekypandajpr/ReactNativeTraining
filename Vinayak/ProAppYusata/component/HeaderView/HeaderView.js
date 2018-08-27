import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {IconWithText} from '../Icon/IconWithText/index';
import {Icon} from 'native-base';
export default class HeaderView extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <View style={ styles.leftView }>
                <Icon name={this.props.left} style={styles.icon}/>
            </View>
            <View style={ styles.heading }>
                <Text>{this.props.title}</Text>
            </View>
            <View style={ styles.rightView }>
                <Icon name={this.props.right} style={styles.icon}/>
            </View>
        </View>

    );
}
}
export {HeaderView}

const styles = StyleSheet.create({
    container: {
              backgroundColor: 'orange',
      flexDirection : 'row',
      height: 60,
     
      alignItems:'center',
      margin: 2
    },
    leftView:{
        flex: 0.2
    },
    icon :{
        color: '#000'
    },
    rightView: {
        flex: 0.4,
        justifyContent: 'flex-end'
    },
    heading: {
        flex: 0.4
    }
  });