import React from 'react';
import { View } from 'react-native';
import { AppLoading } from 'expo';
import { Header, Body, Item, Button, Input } from 'native-base';
import { Feather, MaterialIcons } from '@expo/vector-icons';

import styles from './Styles';

export default class SearchHeader extends React.Component {
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
        const { onClose, onClear, placeholder, onSearchTextChange, searchValue } = this.props;
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <Header style={styles.header}>
                <View style={styles.search_view}>
                    <Button transparent onPress={onClose}>
                        <Feather name='arrow-left' color='#000' size={24} />
                    </Button>
                    <Body>
                        <Item style={styles.item}>
                            <Input placeholder={placeholder}
                                value={searchValue}
                                returnKeyType="search"
                                onChangeText={onSearchTextChange}
                            />
                        </Item>
                    </Body>
                    <Button transparent onPress={onClear}>
                        <MaterialIcons name='clear' color='#000' size={24} />
                    </Button>
                </View>
            </Header>
        );
    }
}

export { SearchHeader }