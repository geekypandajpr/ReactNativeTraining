import React from 'react';
import {View,Text} from 'react-native';
import styles from './styles';
import {Header} from 'react-native-elements';
import {FotterTab} from '../components/FotterTab';
import {ImagesWithText} from '../components/ImageWithText';



export default class Home extends React.Component{

    render(){
            return(

                  <View style={styles.parent}>


                      <Header
                           placement="left"
                            leftComponent={{ icon: 'menu', color: '#fff' }}
                            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                              
                            rightComponent={{ icon: 'search', color: '#fff' }}
                        />
                     <View style={styles.child}>
              

                        <View style={styles.child2}>
                          <ImagesWithText
                            source={require('../images/images.jpg')}
                            text1='min 50% discount'
                            text2='On every product'
                        />
                      </View>

                        <View style={styles.child2}>
                          <ImagesWithText
                            source={require('../images/images.jpg')}
                            text1='min 50% discount'
                            text2='On every product'
                         />
                    </View>
                  </View>



              <View style={styles.child}>
             
                        <View style={styles.child2}>
                          <ImagesWithText
                            source={require('../images/a.jpg')}
                            text1='min 50% discount'
                            text2='On every product'
                          />
                        </View>

                        <View style={styles.child2}>
                          <ImagesWithText
                            source={require('../images/images.jpg')}
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