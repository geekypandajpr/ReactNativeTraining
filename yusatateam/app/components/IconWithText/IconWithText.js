import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';

export default class IconWithText extends React.Component 
{  
    render() {
        return (
            <View style={[styles.mainContainer, { backgroundColor:this.props.backgroundColor }]}>
                    <View style = {styles.iconContainer}>
                        {/* <Icon name={this.props.name}
                            type={this.props.type}
                            style={styles.icon}>
                        </Icon> */}
                        <Text style = {styles.firstTextContainer}>
                            {this.props.text}
                        </Text> 
                    </View>
            </View>
        )
    }
}

export { IconWithText }