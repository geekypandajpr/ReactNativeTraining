import React from 'react';
import { Button, Left } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { AppLoading } from 'expo';

export default class LeftElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }

    render() {
        return(
            this.state.isLoading === true ? <AppLoading /> :
            
            <Left>
                <Button transparent>
                    <Feather name='arrow-left' color={'white'} size={24}/>
                </Button>
            </Left>
        )
    }
}

export { LeftElement }