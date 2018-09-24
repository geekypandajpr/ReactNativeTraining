import React from 'react';
import {
    View, Text
} from 'react-native';
import { Icon } from 'native-base';
import styles from './Styles';
export default class Icon_Text_Ver extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <View style={styles.icon_view}>
                    <Icon name={this.props.name}
                        type={this.props.type}
                        style={styles.icon}
                        style={this.props.styles}>
                    </Icon>
                </View>
                <Text style={this.props.styles}>{this.props.text}</Text>
            </View>
        )
    }
}
export { Icon_Text_Ver } 