import React from 'react';
import { View, Image } from 'react-native';
import { styles
 } from './styles';

export default class SquareImage extends React.Component {
    render() {
        return (
            <View>
                <Image resizeMode='contain' style={ styles.image } source={this.props.source} />
            </View>
        )
    }
}

export { SquareImage }