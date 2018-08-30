import React from 'react'; 
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {ScrollView } from 'react-native';


export default class CardWithImage extends React.Component
{
    render(){
        return(
            <View>
                <View>
                   <Image
                    //resizeMode='contain'
                     style = {styles.img}
                     source = {this.props.source} />
                     <Text style= {{textAlign: "center"}}>
                     {this.props.name}
                    </Text> 
                    <Text style= {{textAlign: "center",color : 'red'}}>
                     {this.props.name1}
                    </Text> 
                    <Text style= {{textAlign: "center"}}>
                     {this.props.name2}
                    </Text> 
                </View>
            </View>
            
 );
 }
}

const styles = StyleSheet.create({
    img: {
     width: 150, height: 150, borderRadius: 150,
     alignItems: 'flex-end',
     margin: 30
    },
  });


  export { CardWithImage }