import React from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity
} from 'react-native';
import { Icon, Badge } from 'native-base';
import styles from './Styles';

export default class IconWithText extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                currentColor: "#1a4876"
            };
    }
    onClick() {
        this.setState({ currentColor: "red" });
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                    <View style={styles.iconContainer}>
                        <View style={styles.iconBadgeContainer}>
                            <Icon name={this.props.name}
                                type={this.props.type}
                                style={styles.icon}>
                            </Icon>
                            <Badge
                                style={styles.badgetext}>
                                <Text style={{ color: '#fff' }}>
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