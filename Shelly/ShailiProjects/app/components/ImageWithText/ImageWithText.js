import React from 'React';
import {View,Text,Image} from 'react-native';
import styles from './styles';
export  default class ImagesWithText extends React.Component{
    render()
    {
        return(

            <View style={styles.container}>
                <View style={{flex: 0.8}}>
                    <Image
                        resizeMode='contain'
                        source={this.props.source}
                        style={ styles.image }
                    />
                </View>
                <View style={{flex: 0.2, flexDirection:'column'}}>
                    <Text style={ styles.text }>{this.props.text1}</Text>
                    <Text style={ styles.text }>{this.props.text2}</Text>  
                </View>
            </View>
        )
    }
}

export { ImagesWithText}

