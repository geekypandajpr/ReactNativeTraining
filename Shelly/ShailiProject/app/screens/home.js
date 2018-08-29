import React from 'react';
import {View,Text,Button} from 'react-native';
import styles from './styles';
//import {Header} from 'react-native-elements';
import {FotterTab} from '../components/FotterTab';
import {HeaderTab} from '../components/HeaderTab';
import {ImagesWithText} from '../components/ImageWithText';



export default class Home extends React.Component{


    render(){
            return(

                  <View style={styles.parent}>
                      
                      <HeaderTab
                      icons1='menu'
                      type3='Entypo'
                      headerTitle='Shopping'
                      icons2='search'
                      type2='FontAwesome'
                      icons3='arrow-bold-right'
                      type1='Entypo'
                      onpress={ ()=> this.props.navigation.navigate('Details')}
                
                   />

                     <View style={styles.child}>
              

                        <View style={styles.child2}>
                          <ImagesWithText
                            source={require('../assests/images/a.jpg')}
                            text1='min 50% discount'
                            text2='On every product'
                        />
                      </View>

                        <View style={styles.child2}>
                          <ImagesWithText
                            source={require('../assests/images/heels(2).jpg')}
                            text1='min 50% discount'
                            text2='On every product'
                         />
                    </View>
                  </View>



              <View style={styles.child}>
             
                        <View style={styles.child2}>
                          <ImagesWithText
                            source={require('../assests/images/heels(3).jpg')}
                            text1='min 50% discount'
                            text2='On every product'
                          />
                        </View>

                        <View style={styles.child2}>
                          <ImagesWithText
                            source={require('../assests/images/heels(1).jpg')}
                            text1='min 50% discount'
                            text2='On every product'
                          />
                    </View>
                          </View>
                            <FotterTab
                                icon1='home'
                                icon2='camera'
                                icon3='cart'
                                icon4='search'
                                icon5='person'/>
                        </View>

            );
        }
    }

    export {Home}