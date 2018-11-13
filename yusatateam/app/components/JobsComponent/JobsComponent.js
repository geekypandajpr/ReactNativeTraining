import React from 'react';
import {
    View,
    Text,
    Card
} from 'native-base';
import styles from './Styles';

export default class JobsComponent extends React.Component {
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
            <View style={styles.container}>
                <Card>
                    <Text>Hello Prem</Text>
                </Card>
            </View>
        )
    }
}

export { JobsComponent }