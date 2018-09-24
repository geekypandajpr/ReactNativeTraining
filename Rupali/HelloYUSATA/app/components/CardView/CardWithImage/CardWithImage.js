import React from 'react'; 
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { Card } from 'native-base';
import styles from './styles';


export default class CardWithImage extends React.Component
{
    render(){
        return(
            <Card style = {styles.mainContainer}>
                <View style = {styles.imageContainer}>
                   <Image 
                        source = {this.props.source} />
                </View>
                <View style = {styles.textContainer}>
                    <Text style = {styles.firstTextContainer}>
                        {this.props.name}
                    </Text> 
                    <Text style = {styles.secondTextContainer}>
                        {this.props.name1}
                    </Text> 
                </View>
                <View style = {styles.iconContainer}>
                    <Image
                        source = {this.props.source1} />
                </View>
            </Card>
            
 );
 }
}
  export { CardWithImage }