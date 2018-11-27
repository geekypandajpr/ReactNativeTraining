import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Right, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
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
        
        // if(isSearchActive && searchValue.length === 0) {
        //     return null;
        // }

        const iconProps = {};

        if(isSearchActive) {
            iconProps.name = 'close';
            iconProps.color = '#000';
            iconProps.onPress = onSearchClear;
        } else {
            iconProps.name = 'search';
            iconProps.color = 'white';
            iconProps.onPress = onSearchPress;
        }

        return(
            this.state.isLoading === true ? <AppLoading /> :
            
            // <Right style={styles.right}>
                // <Button onPress={iconProps.onPress}>
                //     <Icon name={iconProps.name}
                //         type={iconProps.type}
                //         style={{color: iconProps.color, fontSize: 24, }} />
                // </Button>
            // </Right>
            <Button transparent onPress={iconProps.onPress}>
                <MaterialIcons name={iconProps.name} color={iconProps.color} size={24}/>
            </Button>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        // backgroundColor: "pink"
    },
    right: {
        // justifyContent: 'center',
        // alignItems: 'center',
        height: '100%',
        // width: '100%',
        // backgroundColor: "red"
    }
})

export { RightElement }