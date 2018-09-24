import React from 'react';
import styles from './styles';
import { View, Image, Text,Button} from 'react-native';
export default class ImageText extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        resizeMode='contain'
                        source={this.props.source}
                        style={styles.image}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {this.props.text1}
                    </Text>
                </View>
                <View style={styles.textbox}>
                <Button
                  onPress = {alert}
                    title="My Account"
                    color= "#80ff80"
        
                    />
                </View>

            </View>
        );
    }
}

export { ImageText }