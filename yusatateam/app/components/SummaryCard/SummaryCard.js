import React from 'react';
import {
    View,
} from 'react-native';
import { Text, Icon } from 'native-base';
import styles from './styles';
import { LinearGradient } from 'expo';

export default class SummaryCard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inner_container}>
                    <LinearGradient colors={this.props.colors} style={{flex: 1, borderRadius: 5}}>
                        <View style={{flexDirection: 'row', flex: 1}}>
                            <View style={styles.view1}>
                                <Icon name={this.props.icon} type={this.props.icontype} style={[styles.icon,{color:this.props.iconColor}]}></Icon>
                            </View>
                            <View style={styles.view2}>
                                <View style={styles.heading_view}>
                                    <View style={styles.heading}><Text style={[styles.heading_text, {color:this.props.headingColor}]}>{this.props.heading}</Text></View>
                                    <View style={styles.total}><Text style={styles.total_text}>{this.props.total}</Text></View>
                                </View>
                                <View style={styles.content_view}>
                                    <Text style={styles.text}>{this.props.text1}</Text>
                                    <Text style={styles.text}>{this.props.text2}</Text>
                                </View>
                            </View>
                        </View>
                    </LinearGradient>
                </View>
            </View>
        )
    }
}
export {SummaryCard}
