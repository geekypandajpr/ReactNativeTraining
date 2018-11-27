import React from 'react';
import {
    View,
    Animated,
    Easing,
    Platform,
    StyleSheet
} from 'react-native';
import { Header } from 'native-base';
import { AppLoading } from 'expo';

import { Statusbar } from '../Statusbar/Statusbar';
import colors from '../../constants/colors';
import LeftElement from './LeftElement';
import CenterElement from './CenterElement';
import RightElement from './RightElement';

export default class HeaderWithSearchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isSearchActive: false,
            searchValue: '',
            //the primary background default value
            defaultScaleValue: new Animated.Value(1),
            //the white background default value
            searchScaleValue: new Animated.Value(0.01),
            //we will resolve the radius and diameter within onLayout callback
            radius: 0,
            diameter: 0,
            //it'll change zIndex after the animation is complete
            order: 'defaultFirst',
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

    onSearchPressed = () => {
        this.setState({ isSearchActive: true });
        this.onSearchOpenRequested();
    }

    onSearchOpenRequested= () => {
        this.animateBackground(this.state.searchScaleValue, () => {
            //this is what we need to do when the animation is completed
            this.state.defaultScaleValue.setValue(0.01);
            //move default background above the search background (higher zIndex)
            this.setState({ order: 'searchFirst' });
        })
    }

    onSearchClosed = () => {
        this.setState({ isSearchActive: false, searchValue: ''});
        this.onSearchCloseRequested();
    }

    onSearchCloseRequested = () => {
        this.animateBackground(this.state.defaultScaleValue, () => {
            //this is what we need to do when the animation is completed
            this.state.searchScaleValue.setValue(0.01);
            //move default background above the search background (higher zIndex)
            this.setState({ order: 'defaultFirst' });
        })
    }

    onLayout = (event) => {
        const { width, height } = event.nativeEvent.layout;

        //pythagorean
        const radius = Math.sqrt(Math.pow(height, 2) + Math.pow(width, 2));
        let diameter = radius * 2;
        // because there is issue in react native that we can't set scale value to 0, we need to use
        // 0.01 and it means we still see the point even if the scale set to 0.01
        const bgPosition = width - radius;
        // the correct left position of circle background
        // we need circle to be bigger, then we won't see the 0.01 scaled point (because it'll be
        // out of screen)
        const pointSize = diameter * 0.01;
        diameter += pointSize;
        this.setState({
            bgPosition,
            radius: diameter / 2,
            diameter
        })
    }

    animateBackground = (value, onComplete) => {
        Animated.timing(value, {
            toValue: 1,
            duration: 325,
            easing: Easing.bezier(0.0, 0.0, 0.2, 1),
            useNativeDriver: Platform.OS === 'android'
        }).start(onComplete);
    }

    renderAnimatedBackgrounds = () => {
        const {
            diameter,
            bgPosition,
            radius,
            defaultScaleValue,
            searchScaleValue,
            order
        } = this.state;

        const bgStyle = {
            position: 'absolute',
            top: -radius,
            width: diameter,
            height: diameter,
            borderRadius: radius
        };

        const bgSearch = (
            <Animated.View
                key="searchBackground"
                style={[bgStyle, {
                    left: bgPosition,
                    backgroundColor: '#efefef',
                    transform: [{ scale: searchScaleValue }]
                }]}
            />
        );

        const bgDefault = (
            <Animated.View
                key="defaultBackground"
                style={[bgStyle, {
                    left: bgPosition,
                    backgroundColor: colors.HEADER_COLOR,
                    transform: [{ scale: defaultScaleValue }]
                }]}
            />
        );

        let content = null;

        if(order === 'defaultFirst') {
            content = [bgDefault, bgSearch];
        } else {
            content = [bgSearch, bgDefault];
        }

        return (
            <View style={StyleSheet.absoluteFill}>{content}</View>
        )
    }

    onSearchTextChanged = (searchValue) => {
        this.setState({ searchValue });
    }

    onSearchClearPressed = () => {
        this.onSearchTextChanged('');
    }

    render() {
        return(
            this.state.isLoading === true ? <AppLoading /> :
            <View>
               <Statusbar backgroundColor={colors.STATUSBAR_COLOR} barStyle="light-content" />
                <Header onLayout={this.onLayout} style={{backgroundColor: colors.HEADER_COLOR}}>
                    {this.renderAnimatedBackgrounds()}
                    <LeftElement
                        isSearchActive={this.state.isSearchActive}
                        onSearchClose={this.onSearchClosed}
                        goBack={this.props.goBack} //Handle Left Icon onPress
                        leftIcon={this.props.leftIcon} //Left Icon
                    />
                    <CenterElement
                        title={this.props.title}
                        isSearchActive={this.state.isSearchActive}
                        onSearchTextChange={this.onSearchTextChanged}
                        searchValue={this.state.searchValue}
                    />
                    <RightElement
                        isSearchActive={this.state.isSearchActive}
                        onSearchPress={this.onSearchPressed}
                        searchValue={this.state.searchValue}
                        onSearchClear={this.onSearchClearPressed}
                    />
                </Header>
            </View>
        )
    }
}

export { HeaderWithSearchbar }