import React from 'react'; 
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { CardWithIcon, CardWithImage} from '../../components/CardView';




export default class Home extends React.Component
{
    render(){
        return(
            <View style={styles.container}>
               <View style = {{backgroundColor: 'grey', height: 60, alignItems: 'center'}}>
                    <Text>Exciting Deals and Exchange Offers</Text>
                    <Text>50%-60% off on Bevarages Items.</Text>
                </View>  
                <View style={styles.viewFlex}> 
                    <View style={styles.card}>
                    <Text style= {{color: 'black', textAlign: "left",  margin: 20}}>Latest Offers</Text>
                        <CardWithImage
                        source= {require('../../assets/images/heels5.jpg')} 
                        name= 'Product Name' 
                        name1 = "Under Rs.999/-"
                        name2 = "Category"
                        >
                        </CardWithImage>
                    </View>
                    <View style={styles.card}>
                        <CardWithImage
                        source= {require('../../assets/images/heels5.jpg')} 
                        name= 'Product Name'
                        name1 = "Under Rs.999/-"
                        name2 = "Category">
                        </CardWithImage>
                    </View>
                    <View style={styles.card}>
                    <Text style= {{color: 'orange', textAlign: "right",  margin: 20}}>View All</Text>
                        <CardWithImage
                        source= {require('../../assets/images/heels5.jpg')} 
                        name= 'Product Name'
                        name1 = "Under Rs.999/-"
                        name2 = "Category">
                        </CardWithImage>
                    </View>
                </View>

                  <View style = {{backgroundColor: 'orange', height: 60, alignItems: 'center'}}>
                    <Text >Shop By Category</Text>
                    <Text>Electronics,Mobile,Personal Care, etc.</Text>
              
                </View>  

                <View style={styles.viewFlex}>
                  
                   <View style={styles.card}>
                   <Text style= {{color: 'black', textAlign: "left",  margin: 20}}>Featured Products</Text>
                        <CardWithImage
                        source= {require('../../assets/images/anar.jpg')} 
                        name= 'Anarkali Suit'
                        name1 = "Under Rs.999/-"
                        name2 = "Category">
                        </CardWithImage>
                    </View>
                    <View style={styles.card}>
                        <CardWithImage
                        source= {require('../../assets/images/anar1.jpg')} 
                        name= 'Product Name'
                        name1 = "Under Rs.999/-"
                        name2 = "Category">
                        </CardWithImage>
                    </View>
                    <View style={styles.card}>
                    <Text style= {{color: 'orange', textAlign: "right", margin: 20}}>View All</Text>
                        <CardWithImage
                        source= {require('../../assets/images/anar2.jpg')} 
                        name= 'Product Name'
                        name1 = "Under Rs.999/-"
                        name2 = "Category">
                        </CardWithImage>
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




export {Home}



