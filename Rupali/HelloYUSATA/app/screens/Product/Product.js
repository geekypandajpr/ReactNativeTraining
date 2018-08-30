import React from 'react'; 
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { CardWithIcon, CardWithImage} from '../../components/CardView';
import HeaderIcon from '../../components/Header/Header';
import { FooterTabsIcon } from '../../components/Footer/Footer';

export default class Product extends React.Component
{
    render(){
        return(
            <View style={styles.container}>
            <HeaderIcon />
                 <View style={styles.viewFlex}> 
                    <View style={styles.card}>
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
                </View>
                    

                <View style={styles.viewFlex}>
                  
                   <View style={styles.card}>
                 
                        <CardWithImage
                        source= {require('../../assets/images/anar.jpg')} 
                        name= 'Product Name'
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
                </View>
                <FooterTabsIcon />
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
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
   
    },
    card:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor :'cyan',
        borderRightColor: 'black',
    borderRightWidth: 1,
    }
   
    
    });

export {Product}



