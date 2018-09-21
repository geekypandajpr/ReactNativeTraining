import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import styles from './Styles';
import {
    SimpleLineIcons,
} from '@expo/vector-icons';

export default class CardView extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.image_view}>
                    <SimpleLineIcons name={this.props.icon} size={24} color="white"></SimpleLineIcons>
                </View>
                <View style={styles.first_child}>
                    <Text style={styles.text1}>{this.props.text1}</Text>
                    <Text style={styles.text2}>{this.props.text2}</Text>
                </View>
                <View style={styles.second_child}>
                    <Text style={styles.text3}>{this.props.text3}</Text>
                    <Text style={styles.text2}>{this.props.text4}</Text>
                </View>
            </View>
        )
    }
}

export { CardView }