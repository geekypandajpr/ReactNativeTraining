import React  from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {ScrollView, Image, Text } from 'react-native';
import HeaderIcon from '../../components/Header/Header';
import { FooterTabsIcon } from '../../components/Footer/Footer';
import { CardWithIcon, CardWithImage} from '../../components/CardView';

export default class ScrollViewDemo extends React.Component {
    render() {
         return(
            <View>
            <HeaderIcon />
            <ScrollView>
             <View style={styles.container}>
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
                        
            </View>
            </ScrollView>
         <FooterTabsIcon / >

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
        backgroundColor :'grey',
        borderRightColor: 'black',
    borderRightWidth: 1,
    }
   
    
    });
  export {ScrollViewDemo};