import React from 'react';
import { StyleSheet, Text, View,ScrollView ,Image} from 'react-native';
import {FooterView} from '../../component/FooterView';
import {HeaderView} from '../../component/HeaderView';
import styles from './style'

export default class SecondItemList extends React.Component {
    render() {

      return (
        //    <Text>Hello Vinayak
        //       </Text>
         
        <View style={styles.secondItem}>
            <HeaderView/>
            
            <ScrollView >
                <View style={styles.container}>
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
                 </View>
                 <View style={styles.container}>
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
                 </View>
                 <View style={styles.container}>
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
                 </View>
                 <View style={styles.container}>
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
                 </View>
            </ScrollView >
           
            <FooterView/>
        </View>

    );
}
}


  export {SecondItemList}