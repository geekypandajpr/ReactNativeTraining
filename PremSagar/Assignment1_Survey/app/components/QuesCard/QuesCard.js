import React from 'react';
import { View } from 'react-native';
import {
    Card,
    CardItem,
    Text,
    CheckBox
} from 'native-base';
import { AppLoading } from 'expo';
import styles from './Styles';

export default class QuesCard extends React.Component {
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
                <Card style={ styles.cardView }>

                    <CardItem style={ styles.quesCardItem }>
                        <Text style={ styles.quesText }> {this.props.question} </Text>
                    </CardItem>

                    <CardItem style={ styles.optionCardItemView }>
                        <View style={ styles.checkbox }>
                            <CheckBox checked={false} onPress={this.props.onPress1} />
                        </View>
                        <View style={ styles.textView }>
                            <Text style={ styles.optionText }> {this.props.option1} </Text>
                        </View>
                    </CardItem>

                    <CardItem style={ styles.optionCardItemView }>
                        <View style={ styles.checkbox }>
                            <CheckBox checked={false} onPress={this.props.onPress2} />
                        </View>
                        <View style={ styles.textView }>
                            <Text style={ styles.optionText }> {this.props.option2} </Text>
                        </View>
                    </CardItem>

                    <CardItem style={ styles.optionCardItemView }>
                        <View style={ styles.checkbox }>
                            <CheckBox checked={false} onPress={this.props.onPress3} />
                        </View>
                        <View style={ styles.textView }>
                            <Text style={ styles.optionText }> {this.props.option3} </Text>
                        </View>
                    </CardItem>

                    <CardItem style={ styles.optionCardItemView }>
                        <View style={ styles.checkbox }>
                            <CheckBox checked={false} onPress={this.props.onPress4} />
                        </View>
                        <View style={ styles.textView }>
                            <Text style={ styles.optionText }> {this.props.option4} </Text>
                        </View>
                    </CardItem>

                </Card>
            </View>
        )
    }
}

export { QuesCard }