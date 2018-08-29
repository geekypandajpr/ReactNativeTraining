import React from 'react';
import { StyleSheet, Text, View,ScrollView ,Image} from 'react-native';
import {FooterView} from '../../component/FooterView';
import {HeaderView} from '../../component/HeaderView';
import styles from './style';
import { SearchBar } from 'react-native-elements';
import ImageSlider from 'react-native-image-slider';
import MarqueeText from 'react-native-marquee';
export default class MainPage extends React.Component {
    render() {

      return (
            <View style={styles.secondItem}>
            <HeaderView/>
          
            <SearchBar   placeholder='Type Here...' />
            <ScrollView>
            <ImageSlider style={styles.imageslider} images={[
                require('../../../Assests/Images/1.jpeg'),
                require('../../../Assests/Images/3.jpg'),
                require('../../../Assests/Images/5.jpg')]}/>
                  
                    <View style={styles.strips}>
                    <MarqueeText marqueeOnStart loop>Offer on Shoes get 50% off and buy one and get one free offer valid till 17th sept</MarqueeText>
                        </View>
                <View style={styles.card}>
                
                <ScrollView horizontal={true}>
                    <View style={styles.child}>
                    <Image style={styles.image} source={require('../../../Assests/Images/6.jpg')}/>  
                    <Text>Min 50% discount</Text>
                    <Text>On every product</Text>        
                    </View>
                    <View style={styles.child}>
                    <Image style={styles.image} source={require('../../../Assests/Images/6.jpg')}/>  
                    <Text>Min 50% discount</Text>
                    <Text>On every product</Text>        
                    </View>
                    <View style={styles.child}>
                    <Image style={styles.image} source={require('../../../Assests/Images/6.jpg')}/>  
                    <Text>Min 50% discount</Text>
                    <Text>On every product</Text>        
                    </View>
                    <View style={styles.child}>
                    <Image style={styles.image} source={require('../../../Assests/Images/6.jpg')}/>    
                    <Text>Min 50% discount</Text>
                    <Text>On every product</Text>      
                    </View>
                    </ScrollView >
                 </View>
                 <View style={styles.strips}>
                    <MarqueeText marqueeOnStart loop>Offer on Shoes get 50% off and buy one and get one free offer valid till 17th sept</MarqueeText>
                        </View>
                 <View style={styles.card}>
                <ScrollView horizontal={true}>
                    <View style={styles.child}>
                    <Image style={styles.image} source={require('../../../Assests/Images/6.jpg')}/>  
                    <Text>Min 50% discount</Text>
                    <Text>On every product</Text>        
                    </View>
                    <View style={styles.child}>
                    <Image style={styles.image} source={require('../../../Assests/Images/6.jpg')}/>  
                    <Text>Min 50% discount</Text>
                    <Text>On every product</Text>        
                    </View>
                    <View style={styles.child}>
                    <Image style={styles.image} source={require('../../../Assests/Images/6.jpg')}/>  
                    <Text>Min 50% discount</Text>
                    <Text>On every product</Text>        
                    </View>
                    <View style={styles.child}>
                    <Image style={styles.image} source={require('../../../Assests/Images/6.jpg')}/>    
                    <Text>Min 50% discount</Text>
                    <Text>On every product</Text>      
                    </View>
                    </ScrollView >
                 </View>
                
                
            
           </ScrollView>
            <FooterView/>
        </View>

    );
}
}


  export {MainPage}