import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import { Icon, Button } from 'native-base';
import styles from './Styles'
export default class RoundedIcon extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.upper}>
                    <Button transparent
                        style={{
                            borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height),
                            width: Dimensions.get('window').width * 0.30,
                            height: Dimensions.get('window').width * 0.30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 2,
                            borderColor:'#0073b7'
                        }} >
                        <Icon 
                            name={this.props.name}
                            type={this.props.type}
                            style={styles.Icon_style} >
                        </Icon>
                    </Button>
                </View>

                <View style={styles.lower}>
                    <Text style={styles.Text_Style}>
                    {this.props.text}
                    </Text>
                </View>
            </View>
        );

    }
}
export { RoundedIcon }
