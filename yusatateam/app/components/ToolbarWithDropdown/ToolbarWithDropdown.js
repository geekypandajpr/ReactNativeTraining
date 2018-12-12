import React from 'react';
import { View } from 'react-native';
import {
    Button,
    Header,
    Left,
    Body,
    Right,
    Icon,
    Title,
    Item,
    Picker
} from 'native-base';
import { AppLoading } from 'expo';
import styles from  './styles';
import { Statusbar } from '../../components';
import colors from '../../constants/colors';

export default class ToolbarWithDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: true ,
            selected2: ''
        }
    }
    onValueChange2(value) {
        this.setState({
          selected2: value
        });
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
            <View >
                <Statusbar backgroundColor={colors.STATUSBAR_COLOR} barStyle="light-content" />
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={this.props.onLeftButtonPress}>
                            <Icon name={this.props.leftIcon} type={this.props.leftIconType} style={styles.iconLeft} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={[styles.title,{fontFamily: 'Roboto'}]}>
                            {this.props.title}
                        </Title>
                    </Body>
                    <Right>
                    <Item picker>
                                <Picker
                                    mode="dropdown"
                                    style={{ width: 10,color : 'white',backgroundColor : '#0073b7'}}
                                    placeholder="Select Device"
                                    // placeholderStyle={{ color: "white" }}
                                    // placeholderIconColor="white"
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Picker.Item label="All" value="key0" />
                                    <Picker.Item label="Assigned" value="key1" />
                                    <Picker.Item label="Not Assigned" value="key2" />
                                </Picker>
                                <Icon name='arrow-dropdown-circle'  style={{ color: "white", fontSize: 25 }} />
                                </Item>
                    </Right>
                </Header>
            </View>
        )
    }
}

export { ToolbarWithDropdown }