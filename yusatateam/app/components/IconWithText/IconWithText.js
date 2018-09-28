import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './Styles';
import { Icon } from 'native-base';


export default class IconWithText extends React.Component 
{  
    render() {
        return (
            <View style={[styles.mainContainer, { backgroundColor:this.props.backgroundColor }]}>
                    <View style = {styles.iconContainer}>
                        <Icon name={this.props.name}
                            type={this.props.type}
                            style={styles.icon}>
                        </Icon>
                        <Text style = {styles.firstTextContainer}>
                            {this.props.text}
                        </Text> 
                    </View>
            </View>
        )
    }
}

export { IconWithText }