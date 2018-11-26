import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Right, Icon } from 'native-base';
// import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';

export default class RightElement extends React.Component {
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
        const { onSearchPress, onSearchClear, isSearchActive, searchValue } = this.props;
        console.log(isSearchActive);
        
        if(isSearchActive && searchValue.length === 0) {
            return null;
        }

        const iconProps = {};

        if(isSearchActive && searchValue.length > 0) {
            iconProps.name = 'clear';
            iconProps.type = 'MaterialIcons';
            iconProps.color = 'gray';
            iconProps.onPress = onSearchClear;
        } else {
            iconProps.name = 'ios-search';
            iconProps.type = 'Ionicons';
            iconProps.color = 'white';
            iconProps.onPress = onSearchPress;
        }

        return(
            this.state.isLoading === true ? <AppLoading /> :
            
            <Right>
                <Button transparent onPress={iconProps.onPress}>
                    <Icon name={iconProps.name}
                        type={iconProps.type}
                        style={{color: iconProps.color, fontSize: 24, }} />
                </Button>
            </Right>
        )
    }
}

export { RightElement }