import React,{Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Header,SearchBar} from 'react-native-elements';
import {FotterTab} from '../../components/FotterTab';



export default class Details extends React.Component
{
        render()
        {
            return(
                
                <View style={styles.parent}>

                <Header
                           placement="left"
                           leftComponent={{ icon: 'menu', color: '#fff' }}
                           centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                              
                           rightComponent={{ icon: 'search', color: '#fff' }}
                        />


                        <SearchBar
                                
                                lightTheme
                                searchIcon={{ size: 42 }}
                                placeholder='Search'
                                placeholderTextColor="black"
                               
                                
                         />
                        

                 <View style={styles.child}></View>

                    
                
                    <View style={styles.child}>
                   
                 
        

                        <View style={styles.child2}>
                        <Text>hii</Text>
                        </View>

                         <View style={styles.child2}>
                        <Text>hii</Text>
                            </View>

                        <View style={styles.child2}>
                        <Text>hii</Text>
                        
                        
                    </View>
                </View>


                    <View style = {{backgroundColor: 'orange', height: 40, alignItems: 'center'}}>
                    <Text >Shop By Category</Text>
                    <Text>Electronics,Mobile,Personal Care, etc.</Text>
              
                </View>
                {/* <View styles={{flex:0.5}}>
                <Text>offers</Text></View> */}
                <View style={styles.child}>
       
                    <View style={styles.child2}>
                    <Text>hii</Text>
                    
                    </View>

                    <View style={styles.child2}>
                    <Text>hii</Text>
                    </View>

                    <View style={styles.child2}>
                    <Text>hii</Text>
                    </View>

             </View>
             <FotterTab
               icon1='home'
               icon2='camera'
               icon3='cart'
               icon4='search'
               icon5='person'/>
         </View>
          
          
      
            )

        }   
}

export {Details}