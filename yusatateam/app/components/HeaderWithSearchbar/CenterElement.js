import React from 'react';
import { Animated, Easing, Platform, StyleSheet } from 'react-native';
import { Body, Title, Item, Input } from 'native-base';
import { AppLoading } from 'expo';

export default class CenterElement extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isLoading: true,
            textInput: props.isSearchActive,
            opacityValue: new Animated.Value(1)
        }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.isSearchActive !== nextProps.isSearchActive) {
            this.animateElements(nextProps.isSearchActive);
        }
    }

    animateElements = (nextIsSearchActive) => {
        Animated.timing(this.state.opacityValue, {
            toValue: 0,
            duration: 112,
            easing: Easing.linear,
            useNativeDriver: Platform.OS === 'android',
        }).start(() => {
            this.setState({ textInput: nextIsSearchActive });
            Animated.timing(this.state.opacityValue, {
                toValue: 1,
                duration: 112,
                easing: Easing.linear,
                useNativeDriver: Platform.OS === 'android',
            }).start();
        })
    }

    render() {
        const { title, onSearchTextChange, searchValue, isSearchActive } = this.props;
        
        const color = isSearchActive ? 'gray' : 'white';

        let content = <Title>{title}</Title>;

        if(this.state.textInput) {
            content = (
                <Item style={{borderBottomWidth: 0}}>
                    <Input placeholder="Search here" autoFocus={true}
                        value={searchValue} onChangeText={onSearchTextChange}/>
                </Item>
            )
        }

        return(
            this.state.isLoading === true ? <AppLoading /> :

            <Body>
                <Animated.View style={[styles.container, {opacity: this.state.opacityValue}]}>
                    {content}
                </Animated.View>
            </Body>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        // alignItems: 'center',
        height: '100%',
        width: '100%',
        // backgroundColor: "green"
    }
})

export { CenterElement }