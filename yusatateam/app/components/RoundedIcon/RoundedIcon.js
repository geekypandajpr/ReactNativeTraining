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
    render() {
        return (
            <View style={styles.main_container}>

                <View>
                    <TouchableHighlight
                        style={{
                            borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height),
                            width: Dimensions.get('window').width * 0.30,
                            height: Dimensions.get('window').width * 0.30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 2,
                            borderColor:'#0073b7'
                        }}
                    >
                        <Icon 
                            name={this.props.name}
                            type={this.props.type}
                            style={styles.Icon_style}
                        >
                        </Icon>
                    </TouchableHighlight>
                </View>

                <View style={{paddingTop: 10 }}>
                    <Text style={styles.Text_Style}>
                    {this.props.text}
                    </Text>
                </View>
            </View>
        );

    }
}
export { RoundedIcon }
