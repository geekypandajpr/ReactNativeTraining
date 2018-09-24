import React from 'react';
import {
    View, Text
} from 'react-native';
import { Icon } from 'native-base';
import styles from './Styles';
export default class Icon_Text_Hor extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.horizontal_view}>
                <View style={styles.icon_view}>
                    <Icon name={this.props.name}
                        type={this.props.type}
                        style={styles.icon}>
                    </Icon>
                </View>
                <View style={styles.text_view}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
            </View>
        )
    }
}
export { Icon_Text_Hor } 