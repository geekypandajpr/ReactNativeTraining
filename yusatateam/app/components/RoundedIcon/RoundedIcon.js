import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { Icon, Button } from 'native-base';
import styles from './Styles';
import { LinearGradient } from 'expo';
export default class RoundedIcon extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                  <LinearGradient colors={this.props.colors} style={{ borderRadius: 10}}>
                    <Button transparent style={styles. Button_Style}
                    onPress={this.props.onPress}
                    >
                   
                        <View style={{ flex: 1 }}>


                            <View style={styles.upper}>
                                <Icon
                                    name={this.props.name}
                                    type={this.props.type}
                                    style={{ fontSize: 40, color: this.props.color }}
                                >
                                </Icon>
                            </View>

                            <View style={styles.lower}>
                                <Text style={[styles.Text_Style, { color: this.props.color }]}>
                                    {this.props.text}
                                </Text>
                            </View>
                        
                        </View>
                  
                     
                </Button>
                </LinearGradient>
               
            </View>

               
        );

    }
}
export { RoundedIcon }
