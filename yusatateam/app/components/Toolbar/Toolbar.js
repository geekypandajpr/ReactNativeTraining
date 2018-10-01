import React from 'react';
import { View } from 'react-native';
import {
    Button,
    Header,
    Left,
    Body,
    Right,
    Icon,
    Title
} from 'native-base';
import { AppLoading } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './Styles';
import { Statusbar } from '../../components';

export default class Toolbar extends React.Component {
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
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View>
                <Statusbar backgroundColor={EStyleSheet.value('$primaryColorDark')} barStyle="light-content" />
                <Header style={styles.header}>
                    <Left>
                        <Button transparent>
                            <Icon name={this.props.leftIcon} type={this.props.leftIconType} style={styles.icon} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.title}>
                            {this.props.title}
                        </Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name={this.props.rightIcon} type={this.props.rightIconType} style={styles.icon} />
                        </Button>
                    </Right>
                </Header>
            </View>
        )
    }
}

export { Toolbar }