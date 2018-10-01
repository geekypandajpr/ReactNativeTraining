import React from 'react';
import { View, StatusBar} from 'react-native';
import {
    Container,
    Header,
    Left,
    Right,
    Button,
    Title,
    Icon,
    Body
} from 'native-base';
import { AppLoading } from 'expo';
import { Statusbar } from '../Statusbar/Statusbar';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class Toolbar extends React.Component {
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
                <Header style={ styles.header }>
                    <Statusbar backgroundColor="#3E4357" barStyle="light-content" />
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={ styles.title }>Header</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
            </View>
        )
    }
}

export { Toolbar }