import React from 'react';
import { View } from 'react-native';
import { Icon } from 'native-base';
import styles from './Styles';

export default class Footers extends React.Component {
    render(){
        return (
            <View style={styles.footer}>
            <View style={styles.footer_container}>
                <Icon name='list-alt' type='FontAwesome' style={this.props.icon1}></Icon>
                <Icon name='youtube-tv' type='MaterialCommunityIcons' style={this.props.icon2}></Icon>
                <Icon name='home' type='Feather' style={this.props.icon3}></Icon>
                <Icon name='notifications-none' type='MaterialIcons' style={this.props.icon4}></Icon>
                <Icon name='ios-menu' type='Ionicons' style={this.props.icon5}></Icon>
            </View>
        </View>
        )
    }
}
export { Footers }