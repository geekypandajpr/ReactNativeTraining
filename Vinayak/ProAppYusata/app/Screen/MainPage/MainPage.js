import React from 'react';
import { StyleSheet, Text, View,ScrollView ,Image} from 'react-native';
import {FooterView} from '../../component/FooterView';
import {HeaderView} from '../../component/HeaderView';
import styles from './style';
import { SearchBar,Divider } from 'react-native-elements';
import ImageSlider from 'react-native-image-slider';
import MarqueeText from 'react-native-marquee';
import { Left, Right } from 'native-base';
import {ItemCard} from '../../component/Card/ItemCard';
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
                    <View style={styles.view}>
                        <Left><Text>Latest Offers</Text></Left>
                        <Right ><Text style={styles.viewAll}>View All</Text></Right>
                     </View>
                    <Divider style={{ backgroundColor: 'blue',height : 2 }} />  
                    <ItemCard
                            image1={require('../../../Assests/Images/6.jpg')}
                            image2={require('../../../Assests/Images/6.jpg')}
                            image3={require('../../../Assests/Images/6.jpg')}
                            image4={require('../../../Assests/Images/6.jpg')} />
                 <View style={styles.strips}>
                    <MarqueeText marqueeOnStart loop>Offer on Shoes get 50% off and buy one and get one free offer valid till 17th sept</MarqueeText>
                </View>
                 <View style={styles.view}>
                     <Left><Text>Latest Offers</Text></Left>
                    <Right ><Text style={styles.viewAll}>View All</Text></Right>
                 </View>
                <Divider style={{ backgroundColor: 'blue',height : 2 }} />
                <ItemCard
                    image1={require('../../../Assests/Images/6.jpg')}
                    image2={require('../../../Assests/Images/6.jpg')}
                    image3={require('../../../Assests/Images/6.jpg')}
                    image4={require('../../../Assests/Images/6.jpg')}/>   
                 </ScrollView>
                <FooterView/>
        </View>

    );
}
}


  export {MainPage}