import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import { Icon } from 'native-base';
import styles from './Styles'
export default class RoundedIcon extends React.Component {

    measure(event) {
        console.log('event peroperties: ', event);
        console.log(event.nativeEvent.layout.x+" "+ event.nativeEvent.layout.y);
        // this.setState({
        //     x: event.nativeEvent.layout.x,
        //     y: event.nativeEvent.layout.y,
        //     width: event.nativeEvent.layout.width,
        //     height: event.nativeEvent.layout.height
        // })
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.upper}>
                    <TouchableHighlight onPress={this.props.onPress}
                        style={{
                            borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height)/2,
                            width: Dimensions.get('screen').width * 0.2,
                            height: Dimensions.get('screen').width * 0.2,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 2,
                            borderColor: this.props.color
                        }} >
                        <Icon 
                            name={this.props.name}
                            type={this.props.type}
                            style={{fontSize: Math.round(Dimensions.get('window').width*0.2 + Dimensions.get('window').height)*0.2/4,
                                color: this.props.color}} >
                        </Icon>
                    </TouchableHighlight>
                </View>

                <View style={styles.lower}>
                    <Text style={[styles.Text_Style, { color: this.props.color}]}>
                    {this.props.text}
                    </Text>
                </View>
            </View>
        );

    }
}
export { RoundedIcon }
