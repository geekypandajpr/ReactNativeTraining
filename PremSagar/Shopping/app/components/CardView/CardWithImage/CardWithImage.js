import React from 'react';
import { View, Text } from 'react-native';
import {
    Card,
    CardItem
} from 'native-base';
import { AppLoading } from 'expo';

import styles from './Styles';
import { SquareImage } from '../../ImageView';

export default class CardWithImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    async componentWillMount(){
        await Expo.Font.loadAsync({
            Roboto:require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium:require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }

    render() {
        return (
            this.state.isLoading === true ? <AppLoading/> :
            <View>
                <Card>
                    <CardItem style={ styles.cardItem }>
                        <View style={ styles.headingView }>
                            <Text style={ styles.heading }> Latest Offers</Text>
                        </View>
                        <View style={ styles.subHeadingView }>
                            <Text style={ styles.subHeading }> View All </Text>
                        </View>
                    </CardItem>
                    <CardItem style={ styles.cardItem }>
                        <View style={ styles.seperator }></View>
                    </CardItem>
                    <CardItem style={ styles.cardItem }>
                        {/* {this.props.imageList.map((item, index) =>  */}
                        <View style={ styles.imageView }>
                            <SquareImage source={require('../../../images/shoes1.jpg')} />
                        </View>
                        <View style={ styles.imageView }>
                            <SquareImage source={require('../../../images/shoes2.jpg')} />
                        </View>
                        {/* )} */}
                    </CardItem>
                    <CardItem style={ styles.cardItem }>
                        {/* {this.props.imageList.map((item, index) =>  */}
                        <View style={ styles.imageView }>
                            <SquareImage source={require('../../../images/shoes3.jpg')} />
                        </View>
                        <View style={ styles.imageView }>
                            <SquareImage source={require('../../../images/shoes4.jpg')} />
                        </View>
                        {/* )} */}
                    </CardItem>
                </Card>
            </View>
        )
    }
}

export { CardWithImage }