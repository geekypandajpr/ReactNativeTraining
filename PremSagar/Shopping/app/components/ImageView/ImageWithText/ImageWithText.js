import React from 'react';
import {
    View,
    Image,
    Text

} from 'react-native';
import styles from './Styles';

export default class ImageWithText extends React.Component {
    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.imageView }>
                    <Image resizeMode='contain' style={ styles.image } source={this.props.source} />
                </View>
                <View style={ styles.textView }>
                    <Text style={ styles.text }> {this.props.productName } </Text>
                    <Text style={ styles.text1 }> {this.props.price} </Text>
                    <Text style={ styles.text }> {this.props.description} </Text>
                </View>
                {/* <View style={ styles.textView }>
                    <Text style={ styles.text1 }> {this.props.price} </Text>
                </View>
                <View style={ styles.textView }>
                    <Text style={ styles.text }> {this.props.description} </Text>
                </View> */}
            </View>
        )
    }
}

export { ImageWithText };