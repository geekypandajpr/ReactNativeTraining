import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {IconWithText} from '../Icon/IconWithText/index';
import {Icon} from 'native-base';
export default class FooterView extends React.Component {
    render() {
      return (
        <View style={styles.container}>

            <View style={ styles.rightView }>
            <Icon name={this.props.home} style={{}} type={this.props.homeType}></Icon>
            </View>
            <View style={ styles.rightView }>
            <Icon name={this.props.percentage} style={{}} type={this.props.percentageType}></Icon>
            </View>
            <View style={ styles.rightView }>
                <Icon name={this.props.bag} style={styles.icon} type={this.props.bagType}/>
            </View>
            <View style={ styles.rightView }>
                <Icon name={this.props.search} style={styles.icon} type={this.props.searchType}/>
            </View>
            <View style={ styles.rightView }>
                <Icon name={this.props.user} style={styles.icon} type={this.props.userType}/>
            </View>
            
        </View>

    );
}
}
export {FooterView}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      backgroundColor: 'grey',
      flexDirection : 'row',
    },
  });