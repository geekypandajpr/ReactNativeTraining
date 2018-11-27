import React from 'react';
import { Animated, Platform, Easing, StyleSheet } from 'react-native';
import { Button, Left } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { AppLoading } from 'expo';

export default class LeftElement extends React.Component {
    constructor(props, context) {
        super(props,context);
        this.state = {
            isLoading: true,
            leftElement: this.props.leftIcon,
            color: '#fff',
            spinValue: new Animated.Value(0)
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
        //goes to search state
        if(nextProps.isSearchActive && !this.props.isSearchActive) {
            this.animate({ toValue: 1, leftElement: 'arrow-left', color: '#000' });
        }

        //goes to default look
        if(!nextProps.isSearchActive && this.props.isSearchActive) {
            this.animate({ toValue: 0, leftElement: this.props.leftIcon , color: '#fff' });
        }
    }

    animate = ({ toValue, leftElement, color }) => {
        Animated.timing(this.state.spinValue, {
            toValue: 0.5,
            duration: 112,
            easing: Easing.linear,
            useNativeDriver: Platform.OS === 'android',
        }).start(() => {
            this.setState({ leftElement, color });
            Animated.timing(this.state.spinValue, {
                toValue,
                duration: 112,
                easing: Easing.linear,
                useNativeDriver: Platform.OS === 'android'
            }).start();
        })
    }

    render() {
        const { isSearchActive, onSearchClose, goBack } = this.props;

        const spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        const iconProps = {};

        if(isSearchActive) {
            iconProps.onPress = onSearchClose;
        } else {
            iconProps.onPress = goBack;
        }

        return(
            this.state.isLoading === true ? <AppLoading /> :
            
            // <Left>
            //     <Animated.View style={[styles.container, { transform: [{ rotate: spin }]}]}>
            //         <Button transparent onPress={onSearchClose}>
            //             <Feather name={this.state.leftElement} color={this.state.color} size={24}/>
            //         </Button>
            //     </Animated.View>
            // </Left>
            
            <Button transparent onPress={iconProps.onPress}>
                <Feather name={this.state.leftElement} color={this.state.color} size={24}/>
            </Button>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        //backgroundColor: "pink"
    }
})

export { LeftElement }