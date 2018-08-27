import React from 'react';
import {
    Footer,
    FooterTab,
    Button,
    Icon,
    Text,
    View,
} from 'native-base';
import { AppLoading } from 'expo';
import styles from './Styles';

export default class FooterWithIcon extends React.Component {
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
                <Footer style={ styles.footer }>
                    <FooterTab style={ styles.footerTab }>
                        {this.props.footerList.map((item, index) =>
                            <Button
                                style={[styles.button, {backgroundColor: item.color}]}
                                key={index}
                                transparent vertical >
                                <Icon
                                    type={ item.type }
                                    name={ item.icon }
                                    style={ styles.icon }
                                />
                                <Text style={ styles.text }> { item.title } </Text>
                            </Button>
                        )}                   
                    </FooterTab>
                </Footer>
            </View>
        )
    }
}

export { FooterWithIcon }