import React from 'react';
import { View,Text } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import {Icon} from 'native-base';

export default class IconVertical extends React.Component{
    
    render()
    {

        return(

            
            <View style={styles.container}>

                <View style={styles.iconcontainer }>
                    <Ionicons name={this.props.icon1} 
                             color={this.props.colors} 
                             size={50}
                     />
                   
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>
                        {this.props.text3}
                    </Text>
                </View>
            </View>
        );

    }
}
export {IconVertical}