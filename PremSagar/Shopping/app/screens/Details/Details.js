import React from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import styles from './Styles';
import { Toolbar } from '../../components/Toolbar';
import { FooterWithIcon } from '../../components/Footer';
import { ImageWithText } from '../../components/ImageView';

const HEADERICONLIST= [
    {
        icon : 'ios-search-outline',
        type : 'Ionicons'
    },
    {
        icon : 'ios-cart-outline',
        type : 'Ionicons'
    },
    {
        icon : 'bell',
        type : 'EvilIcons'
    } 
];

const FOOTERLIST = [
    {
        title : 'Home',
        icon  : 'home',
        type  : 'FontAwesome',
        color : '#fc8e51'
    },
    {
        title : 'Profile',
        icon  : 'user-o',
        type  : 'FontAwesome'
    },
    {
        title : 'Wish',
        icon  : 'heart-o',
        type  : 'FontAwesome'
    },
    {
        title : 'My Cart',
        icon  : 'shopping-bag',
        type  : 'FontAwesome'
    },
    {
        title : 'Search',
        icon  : 'search',
        type  : 'FontAwesome'
    }
];

const CLOTHESIMAGEURL = [
    {
        uri: { uri: 'https://images-na.ssl-images-amazon.com/images/I/71Lpb7su5%2BL._UL1500_.jpg' },
        productName : 'Cloths',
        price: 'Under Rs. 6999/-',
        description : 'Description of the product',
        uri1: { uri: 'https://n3.sdlcdn.com/imgs/f/4/u/Nickolas-casual-shoes-Outdoor-Blue-SDL232822095-1-c19ed.jpeg' },
        productName1 : 'Addidas',
        price1: 'Under Rs. 3999/-',
        description1 : 'Description of the product'
    },
    {
        uri: { uri: 'https://i.ebayimg.com/00/s/MTIwMFgxMjAw/z/kMgAAOSweW5VTOCv/$_1.JPG?set_id=880000500F' },
        productName : 'Shirt',
        price: 'Under Rs. 1001/-',
        description : 'Description of the product',
        uri1: { uri: 'https://rukminim1.flixcart.com/image/832/832/jao8uq80/shoe/3/r/q/sm323-9-sparx-white-original-imaezvxwmp6qz6tg.jpeg?q=70' },
        productName1 : 'Addidas',
        price1: 'Under Rs. 5999/-',
        description1 : 'Description of the product'
    },
    {
        uri: { uri: 'https://rukminim1.flixcart.com/image/832/832/jao8uq80/shoe/3/r/q/sm323-9-sparx-white-original-imaezvxwmp6qz6tg.jpeg?q=70' },
        productName : 'Addidas',
        price: 'Under Rs. 2999/-',
        description : 'Description of the product',
        uri1: { uri: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/7021501/2018/7/25/cf46f3e9-fdaa-466a-8800-4600b9d0b8b11532501743593-a-1491532501743367-1_mini.jpg' },
        productName1 : 'Shirt',
        price1: 'Under Rs. 1250/-',
        description1 : 'Description of the product'
    },
    {
        uri: { uri: 'https://images-na.ssl-images-amazon.com/images/I/71KffFmd0qL._UY445_.jpg' },
        productName : 'Product Name',
        price: 'Under Rs. 1999/-',
        description : 'Description of the product',
        uri1: { uri: 'https://images-na.ssl-images-amazon.com/images/I/61cbAQatNlL._UL1500_.jpg' },
        productName1 : 'Addidas',
        price1: 'Under Rs. 999/-',
        description1 : 'Description of the product'
    },
    {
        uri: { uri: 'https://www.shoecarnival.com/dw/image/v2/BBSZ_PRD/on/demandware.static/-/Sites-scvl-master-catalog/default/dwdb32e0cb/96621_187224_1.jpg?sh=400' },
        productName : 'Addidas',
        price: 'Under Rs. 2999/-',
        description : 'Description of the product',
        uri1: { uri: 'https://img.tatacliq.com/images/i3/252Wx374H/MP000000002398464_252Wx374H_20180601142626.jpeg' },
        productName1 : 'T-Shirt',
        price1: 'Under Rs. 1500/-',
        description1 : 'Description of the product'
    }
];

export default class Details extends React.Component {
    render() {
        return (
            <View style={ styles.mainContainer }>
                <Toolbar
                    leftIcon='ios-arrow-back-outline'
                    leftIconType='Ionicons'
                    onPressLeftIcon={() => this.props.navigation.goBack()}
                    headerTitle='Details'
                    headerIconList={ HEADERICONLIST }
                />
                <ScrollView>
                    <View style={ styles.container }>

                        <View style={ styles.titleView }>
                            <Text style={ styles.titleText }>
                                Footwear for Mens & Womens (99 Results)
                            </Text>
                        </View>
                        {CLOTHESIMAGEURL.map((item, index) =>
                            <View style={ styles.imageContainer } key={index}>
                                <View style={ styles.imageView }>
                                    <ImageWithText source={item.uri}
                                        productName={item.productName}
                                        price={item.price}
                                        description={item.description} />
                                </View>
                                <View style={ styles.imageView }>
                                    <ImageWithText source={item.uri1}
                                        productName={item.productName1}
                                        price={item.price1}
                                        description={item.description1} />
                                </View>
                            </View>
                        )}
                    </View>
                </ScrollView>
                <FooterWithIcon footerList={FOOTERLIST} />
            </View>
        )
    }
}

export { Details }