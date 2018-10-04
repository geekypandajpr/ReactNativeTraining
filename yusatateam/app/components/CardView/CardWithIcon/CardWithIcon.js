import React from 'react'; 
import {
    StyleSheet,
    Button,
    Text,
    View,
    TextInput,
    ImageBackground,
    Dimensions,
    Image,
    ScrollView
} from 'react-native';
import { Icon } from 'native-base';


export default class CardWithIcon extends React.Component
{
    render(){
        return(
            <View>
                <View>
                <Image
                     style = {styles.img}
                     source = {this.props.source} />
                     <Text style= {{textAlign: "center"}}>
                     {this.props.name}
                    </Text> 
                    <Text style= {{textAlign: "center"}}>
                     {this.props.name1}
                    </Text> 
                    <Image
                     style = {styles.img}
                     source = {this.props.source} />
                </View>
            </View>
            
 );
 }
}

const styles = StyleSheet.create({
    img: {
        
     width: 50, height: 50, borderRadius: 150,
     alignItems: 'flex-end',
    },
  });

  export { CardWithIcon }