import React from 'react';
import {View,Text,Image} from 'react-native';
import styles from './styles'
export default class RoundedImage extends React.Component
{
    render()
    {
        return(
            <View style={styles.container}>
           
                <Image style={styles.image}
                    resizeMode='contain'
                    source={this.props.source}
                    
                />
            
            </View>
        );

    }
}
export{RoundedImage}