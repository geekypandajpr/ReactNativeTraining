import React from 'react';
import {
    View,
    ScrollView
} from 'react-native';
import styles from './Styles';
import { Toolbar } from '../../components/Toolbar';
import { FooterWithIcon } from '../../components/Footer';
import { CardWithIcon, CardWithImage } from '../../components/CardView';
import { Searchbar } from '../../components/Searchbar';

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

const CARDWITHICON1 = [
    {
        cardColor : '#000',
        leftIcon : 'important-devices',
        leftIconType : 'MaterialIcons',
        heading : 'Exciting Deals and Exchange Offers',
        subHeading : '50%-6% off on All Beverage Items',
        rightIcon : 'ios-arrow-forward',
        rightIconType : 'Ionicons'
    }
];

const CARDWITHICON2 = [
    {
        cardColor : '#fd9a61',
        leftIcon : 'important-devices',
        leftIconType : 'MaterialIcons',
        heading : 'Shop By Categories',
        subHeading : 'Electronic, Mobile, Personal care etc. ',
        rightIcon : 'ios-arrow-forward',
        rightIconType : 'Ionicons'
    }
]

const SHOESIMAGEURL = [
    {
        uri: { uri: 'https://n3.sdlcdn.com/imgs/f/4/u/Nickolas-casual-shoes-Outdoor-Blue-SDL232822095-1-c19ed.jpeg' },
        productName : 'Addidas',
        price: 'Under Rs. 999/-',
        description : 'Description of the product'
    },
    {
        uri: { uri: 'https://rukminim1.flixcart.com/image/832/832/jao8uq80/shoe/3/r/q/sm323-9-sparx-white-original-imaezvxwmp6qz6tg.jpeg?q=70' },
        productName : 'Addidas',
        price: 'Under Rs. 999/-',
        description : 'Description of the product'
    },
    {
        uri: { uri: 'https://images-na.ssl-images-amazon.com/images/I/61cbAQatNlL._UL1500_.jpg' },
        productName : 'Addidas',
        price: 'Under Rs. 999/-',
        description : 'Description of the product'
    },
    {
        uri: { uri: 'https://www.shoecarnival.com/dw/image/v2/BBSZ_PRD/on/demandware.static/-/Sites-scvl-master-catalog/default/dwdb32e0cb/96621_187224_1.jpg?sh=400' },
        productName : 'Addidas',
        price: 'Under Rs. 999/-',
        description : 'Description of the product'
    }
];

const CLOTHESIMAGEURL = [
    {
        uri: { uri: 'https://images-na.ssl-images-amazon.com/images/I/71Lpb7su5%2BL._UL1500_.jpg' },
        productName : 'Cloths',
        price: 'Under Rs. 999/-',
        description : 'Description of the product'
    },
    {
        uri: { uri: 'https://i.ebayimg.com/00/s/MTIwMFgxMjAw/z/kMgAAOSweW5VTOCv/$_1.JPG?set_id=880000500F' },
        productName : 'Shirt',
        price: 'Under Rs. 999/-',
        description : 'Description of the product'
    },
    {
        uri: { uri: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/7021501/2018/7/25/cf46f3e9-fdaa-466a-8800-4600b9d0b8b11532501743593-a-1491532501743367-1_mini.jpg' },
        productName : 'Shirt',
        price: 'Under Rs. 999/-',
        description : 'Description of the product'
    },
    {
        uri: { uri: 'https://images-na.ssl-images-amazon.com/images/I/71KffFmd0qL._UY445_.jpg' },
        productName : 'Shirt',
        price: 'Under Rs. 999/-',
        description : 'Description of the product'
    },
    {
        uri: { uri: 'https://img.tatacliq.com/images/i3/252Wx374H/MP000000002398464_252Wx374H_20180601142626.jpeg' },
        productName : 'Shirt',
        price: 'Under Rs. 999/-',
        description : 'Description of the product'
    }
];

export default class Home extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={ styles.container }>
                <Toolbar
                    leftIcon='ios-menu-outline'
                    leftIconType='Ionicons'
                    headerTitle='btceshop'
                    headerIconList={ HEADERICONLIST }
                />
                <Searchbar />

                {/* <View style={ styles.coloredView }></View>
                <View style= { styles.sliderView }>
                    <View style={ styles.slider }></View>
                </View> */}
                <ScrollView>
                    <CardWithIcon cardWithIconList={CARDWITHICON1}
                        onPress={() => navigate('Details')}/>
                    <CardWithImage
                        offerName='Latest Offers'
                        isExpand='View All'
                        imageList={SHOESIMAGEURL} />
                    <CardWithIcon cardWithIconList={CARDWITHICON2}
                        onPress={() => navigate('Details')}/>
                    <CardWithImage
                        offerName='Featured Products'
                        isExpand='View All'
                        imageList={CLOTHESIMAGEURL}/>
                </ScrollView>
                <FooterWithIcon footerList={FOOTERLIST} />
            </View>
        )
    }
}

export { Home }