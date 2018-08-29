import React from 'react';
import {View,Text} from 'react-native';
//import {Header} from 'react-native-elements';
import {HeaderTab} from '../../components/HeaderTab';
import styles from './styles';
import {FotterTab} from '../../components/FotterTab';
import {  Content, Card, CardItem, Container} from "native-base";



export default class Details extends React.Component{


    render(){
            return(
               
                <Container>
                    
                    
               
                 
                <View style={styles.parent}>


                        <HeaderTab
                                icons1='arrow-bold-left'
                                type3='Entypo'
                                onPress={ ()=> this.props.navigation.navigate('Home')}
                                headerTitle='Shopping'
                                icons2='search'
                                type2='FontAwesome'
                                icons3='menu'
                                type1='Entypo'
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
                     icon5='person'
                    />

                </View>
               
                </Container>
               
                
               
                
               

                
            );
        }
    }

    export {Details}