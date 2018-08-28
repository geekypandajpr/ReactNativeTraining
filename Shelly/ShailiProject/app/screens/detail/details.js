import React from 'react';
import {View} from 'react-native';
import {Header} from 'react-native-elements';



export default class Details extends React.Component{


    render(){
            return(

                  <View>
                      <Header
                           placement="left"
                           leftComponent={{ icon: 'menu', color: '#fff' }}
                           centerComponent={{ text: 'Details', style: { color: '#fff' } }}
                              
                           rightComponent={{ icon: 'search', color: '#fff' }}
                        />
                         </View>

            );
        }
    }

    export {Details}