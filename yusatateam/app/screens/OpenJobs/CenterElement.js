import React from 'react';
import { Body, Title } from 'native-base';
import { AppLoading } from 'expo';

export default class CenterElement extends React.Component {
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
            
            <Body>
                <Title>Jobs</Title>
            </Body>
        )
    }
}

export { CenterElement }