import React from 'react';
import {
    View,TouchableHighlight
} from 'react-native';
import { Text, Icon } from 'native-base';
import styles from './styles';
import { LinearGradient } from 'expo';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default class TechnicianList extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inner_container}>
                    <LinearGradient colors={this.props.colors} style={{flex: 1, borderRadius: 5} }>
                        <View style={{flexDirection: 'row', flex: 1}}>
                             <TouchableHighlight  activeOpacity={0.2} 
                     onPress={this.props.onPress}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 60,
                            width: 60,
                            borderRadius: 30,
                            
                            marginTop : 20,
                            marginLeft : 5,
                            backgroundColor : 'white'
                        }} >
                        <Icon 
                            name={this.props.icon}
                            type={this.props.icontype}
                            style={{fontSize: 40,
                                color: this.props.iconColor}} >
                        </Icon>
                                </TouchableHighlight>
                            <View style={styles.view2}>
                                <View style={styles.content_view}>
                                    <Text style={styles.text}>{this.props.text1}</Text>
                                    <Text note style={styles.textnote}>{this.props.text2}</Text>
                                </View>
                            </View>


                            <View style={{flex :4 , flexDirection :'row',alignItems : 'center',justifyContent :'center'}}>
                                <View style={styles.Rupee_icon}>
                                    <FontAwesome name='rupee' size={44} color='#fff' />
                                </View>
                                <View style={{flex :3}}>
                                    <Text style={styles.text_money}>1520</Text>
                                </View>
                                </View>


                        </View>
                    </LinearGradient>
                </View>
            </View>
        )
    }
}
export {TechnicianList}
