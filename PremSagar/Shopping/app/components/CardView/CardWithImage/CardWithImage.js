import React from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
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
            <View style={ styles.container }>
                <Card style={ styles.card }>
                    <CardItem style={ styles.cardItem }>
                        <View style={ styles.headingView }>
                            <Text style={ styles.heading }> {this.props.offerName} </Text>
                        </View>
                        <View style={ styles.subHeadingView }>
                            <Text style={ styles.subHeading }> {this.props.isExpand} </Text>
                        </View>
                    </CardItem>
                    <CardItem style={ styles.cardItem }>
                        <View style={ styles.seperator }></View>
                    </CardItem>
                    <CardItem style={ styles.cardItem }>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {this.props.imageList.map((item, index) =>
                                <View  key={index} style={ styles.productView }>
                                    <View style={ styles.imageView }>
                                        <SquareImage source={item.uri} />
                                    </View>
                                    <View style={ styles.productNameView }>
                                        <Text style={ styles.productNameText }> {item.productName} </Text>
                                    </View>
                                    <View style={ styles.priceView }>
                                        <Text style={ styles.priceText }> {item.price} </Text>
                                    </View>
                                    <View style={ styles.descriptionView }>
                                        <Text style={ styles.descriptionText }> {item.description} </Text>
                                    </View>
                                </View>
                            )}
                        </ScrollView>
                    </CardItem>
                </Card>
            </View>
        )
    }
}

export { CardWithImage }