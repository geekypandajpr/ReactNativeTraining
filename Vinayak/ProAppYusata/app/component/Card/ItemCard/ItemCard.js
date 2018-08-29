import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image  } from 'react-native';
import {Icon} from 'native-base';
import styles from './style'
import ImageSlider from 'react-native-image-slider';

export default class ItemCard extends React.Component {
    render() {
      return (
        <View style={styles.card}>
                <ScrollView horizontal={true}>
                    <View style={styles.child}>
                    <Image style={styles.image} source={this.props.image1}/>  
                    <Text>Min 50% discount</Text>
                    <Text>On every product</Text>        
                    </View>
                    <View style={styles.child}>
                    <Image style={styles.image} source={this.props.image2}/>  
                    <Text>Min 50% discount</Text>
                    <Text>On every product</Text>        
                    </View>
                    <View style={styles.child}>
                    <Image style={styles.image} source={this.props.image3}/>  
                    <Text>Min 50% discount</Text>
                    <Text>On every product</Text>        
                    </View>
                    <View style={styles.child}>
                    <Image style={styles.image} source={this.props.image4}/>    
                    <Text>Min 50% discount</Text>
                    <Text>On every product</Text>      
                    </View>
                    </ScrollView >
                 </View>
                

    );
}
}
export {ItemCard}

