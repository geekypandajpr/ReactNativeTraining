import React from 'react';
import { View } from 'react-native';
import { Icon, Button, Text } from 'native-base';
import styles from './Styles';
import { LinearGradient, AppLoading } from 'expo';

export default class RoundedIcon extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        };
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
            <View style={styles.container}>
                  <LinearGradient colors={this.props.colors} style={{ borderRadius: 4}}
                    >
                    <Button transparent style={styles.button_Style}
                        onPress={this.props.onPress} >
                        <View style={{ flex: 1 }}>
                            <View style={styles.upper}>
                                <Icon
                                    name={this.props.name}
                                    type={this.props.type}
                                    style={{ fontSize: 30, color: this.props.color }}
                                >
                                </Icon>
                            </View>
                            <View style={styles.lower}>
                                <Text style={[styles.text_Style, { color: this.props.color }]}>
                                    {this.props.text}
                                </Text>
                            </View>
                        
                        </View>
                    </Button>
                </LinearGradient>
            </View>
               
        );

    }
}
export { RoundedIcon }
