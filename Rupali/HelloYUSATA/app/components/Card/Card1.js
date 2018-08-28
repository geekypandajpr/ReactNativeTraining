import React from 'react'; 
import {
    StyleSheet,
    Button,
    Text,
    View,
    TextInput,
    ImageBackground,
    Dimensions,
    Image,
    ScrollView
} from 'react-native';
import CardImage from '../../Images/CardImages/CardImage';
import IconTextIcon from '../Card/IconTextIcon';
import { Card } from 'native-base';



export default class Card1 extends React.Component
{
    render(){
        return(
            <View style={styles.container}>

            {/* <View style = {{backgroundColor: 'grey'}}>
                    <IconTextIcon
                       // source={require('../../Images/desktopicon.png')}
                        name = 'Exciting Deals and Exchange Offers'
                        name1 = '50%-60% off on Bevarages Items.'
                        //source={require('../../Images/arrowright.png')}
                    ></IconTextIcon>
            </View> */}

               <View style = {{backgroundColor: 'grey', height: 60, alignItems: 'center'}}>
                    <Text>Exciting Deals and Exchange Offers</Text>
                    <Text>50%-60% off on Bevarages Items.</Text>
                </View>  
                <View style={styles.viewFlex}> 
                    <View style={styles.card}>
                    <Text style= {{color: 'black', textAlign: "left",  margin: 20}}>Latest Offers</Text>
                        <CardImage 
                        source= {require('../../Images/heels5.jpg')} 
                        name= 'Product Name' 
                        name1 = "Under Rs.999/-"
                        name2 = "Category"
                        >
                        </CardImage>
                    </View>
                    <View style={styles.card}>
                        <CardImage 
                        source= {require('../../Images/heels5.jpg')} 
                        name= 'Product Name'
                        name1 = "Under Rs.999/-"
                        name2 = "Category">
                        </CardImage>
                    </View>
                    <View style={styles.card}>
                    <Text style= {{color: 'orange', textAlign: "right",  margin: 20}}>View All</Text>
                        <CardImage 
                        source= {require('../../Images/heels5.jpg')} 
                        name= 'Product Name'
                        name1 = "Under Rs.999/-"
                        name2 = "Category">
                        </CardImage>
                    </View>
                </View>

                {/* <View style = {{backgroundColor: 'orange'}}>
                    <IconTextIcon
                      //  source={require('../../Images/mouseicon.png')}
                        name = 'Shop By Category'
                        name1 = 'Electronics,Mobile,Personal Care, etc.'
                       // source={require('../../Images/arrowright.png')}
                    ></IconTextIcon>
                </View> */}



                  <View style = {{backgroundColor: 'orange', height: 60, alignItems: 'center'}}>
                    <Text >Shop By Category</Text>
                    <Text>Electronics,Mobile,Personal Care, etc.</Text>
              
                </View>  

                <View style={styles.viewFlex}>
                  
                   <View style={styles.card}>
                   <Text style= {{color: 'black', textAlign: "left",  margin: 20}}>Featured Products</Text>
                        <CardImage 
                        source= {require('../../Images/anar.jpg')} 
                        name= 'Anarkali Suit'
                        name1 = "Under Rs.999/-"
                        name2 = "Category">
                        </CardImage>
                    </View>
                    <View style={styles.card}>
                        <CardImage 
                        source= {require('../../Images/anar1.jpg')} 
                        name= 'Product Name'
                        name1 = "Under Rs.999/-"
                        name2 = "Category">
                        </CardImage>
                    </View>
                    <View style={styles.card}>
                    <Text style= {{color: 'orange', textAlign: "right", margin: 20}}>View All</Text>
                        <CardImage 
                        source= {require('../../Images/anar2.jpg')} 
                        name= 'Product Name'
                        name1 = "Under Rs.999/-"
                        name2 = "Category">
                        </CardImage>
                    </View>
                </View>
            </View>
                
 );
 }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    
    
    
    },
    viewFlex :
    {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
   
    },
    card:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor :'cyan'
    }
   
    
    });








