import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { Icon, Badge } from 'native-base';
import styles from './Styles';

export default class IconWithText extends React.Component {
    render() {
        return (
            <View style={[styles.mainContainer, { backgroundColor: this.props.backgroundColor }]}>
                    <View style={styles.iconContainer}>
                        <View style={styles.iconBadgeContainer}>
                            <Icon name={this.props.name}
                                type={this.props.type}
                                style={styles.icon}>
                            </Icon>
                            <Badge style={styles.badgeContainer}>
                                <Text style={styles.badgeTextContainer}>
                                    {this.props.badgeText}
                                </Text>
                            </Badge>
                        </View>
                        <View>
                            <Text style={styles.firstTextContainer}>
                                {this.props.text}
                            </Text>
                        </View>
                    </View>
            </View>
        )
    }
}

export { IconWithText }

// {backgroundColor: this.props.badgeBackgroundColor}