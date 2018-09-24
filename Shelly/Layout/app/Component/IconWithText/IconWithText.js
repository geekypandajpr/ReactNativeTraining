import React from 'react';
import styles from './styles';
import {View,Text, AppRegistry} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default class IconText extends React.Component{

    render()
    {
        return(
        <View style ={styles.container}>
            <View style ={styles.iconcontainer}>
                <Ionicons name={this.props.icon}
                        color={this.props.colour}
                        size={60}
                 />
            </View>
        
            <View style ={styles.textcontainer}>
                <Text style = {styles.text}>
                {this.props.text2}
                </Text>
            </View>
        
        </View>
        
        );
    }
    



} 
export{IconText}