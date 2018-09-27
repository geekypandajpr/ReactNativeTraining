import React from 'react';
import {
    ImageBackground,
    View,
    Text,
    Image
} from 'react-native';
import styles from './Styles';
import { Icon } from 'native-base';


export default class IconWithText extends React.Component {
    render() {
        return (
            <View style={ styles.mainContainer }>
                <View style = {styles.iconContainer}>
                    <Icon name={this.props.name}
                        type={this.props.type}
                        style={styles.icon}>
                    </Icon>
                {/* </View> */}
                {/* <View style = {styles.textContainer}> */}
                    <Text style = {styles.firstTextContainer}>
                        {this.props.text}
                    </Text> 
                </View>
            </View>

        )
    }
}

export { IconWithText }