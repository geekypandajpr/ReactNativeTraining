import React from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import styles from './Styles';
import { Toolbar } from '../../components/Toolbar';
import { FooterWithIcon } from '../../components/Footer';
import { CardWithIcon, CardWithImage } from '../../components/CardView';

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
        heading : 'Exciting Deals and Exchange Offers',
        subHeading : '50%-6% off on All Beverage Items',
        rightIcon : 'ios-arrow-forward',
        rightIconType : 'Ionicons'
    }
]

const IMAGEURL = [ {
        url: '1'
    }
];

export default class Home extends React.Component {
    render() {
        return (
            <View style={ styles.container }>
                <Toolbar
                    leftIcon='ios-menu-outline'
                    leftIconType='Ionicons'
                    headerTitle='btceshop'
                    headerIconList={ HEADERICONLIST }
                />
                <ScrollView>
                    <CardWithIcon cardWithIconList={CARDWITHICON1} />
                    <CardWithImage/>
                    <CardWithIcon cardWithIconList={CARDWITHICON2} />
                    <CardWithImage/>
                </ScrollView>
                <FooterWithIcon footerList={FOOTERLIST} />
            </View>
        )
    }
}

export { Home }