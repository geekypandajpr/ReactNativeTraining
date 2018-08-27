import React from 'react';
import {
    View,
    Text
} from 'react-native';
import {
    Card,
    CardItem,
    Icon
} from 'native-base';
import { AppLoading } from 'expo';
import styles from './Styles';


export default class CardWithIcon extends React.Component {
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
            this.state.isLoading === true ? <AppLoading /> :
            <View>
                {this.props.cardWithIconList.map((item, index) =>
                    <Card style={{ backgroundColor: item.cardColor }} key={index}>
                        <CardItem style={[styles.cardItem, {backgroundColor: item.cardColor}]}>
                            <View style={ styles.leftIcon }>
                                <Icon
                                    name={ item.leftIcon }
                                    type={ item.leftIconType }
                                    style={styles.icon}
                                />
                            </View>
                            <View style={ styles.headingView }>
                                <Text style={ styles.heading }> { item.heading } </Text>
                                <Text style={ styles.subHeading }> { item.subHeading } </Text>
                            </View>
                            <View style={ styles.rightIcon }>
                                <Icon
                                    name={ item.rightIcon }
                                    type={ item.rightIconType }
                                    style={styles.icon}
                                />
                            </View>
                        </CardItem>
                    </Card>
                )}
            </View>
        )
    }
}

export { CardWithIcon }