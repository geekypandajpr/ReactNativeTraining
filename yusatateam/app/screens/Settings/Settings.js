import React from 'react';
import {
    View,TouchableOpacity
} from 'react-native';
import {
    List,
    ListItem,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Switch
} from 'native-base';
import { AppLoading } from 'expo';
import styles from './Styles';
import { Toolbar } from '../../components';
import {ChangePassword} from '../ChangePassword/changePassword';

export default class Settings extends React.Component {
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
        this.setState({ isLoading: false });
    }
    render() {
        const { goBack } = this.props.navigation;
        return(
            this.state.isLoading === true ? <AppLoading /> :
            <View style={styles.container}>
                <Toolbar title='Settings' leftIcon='arrow-left' leftIconType='Feather'
                    onLeftButtonPress={() => goBack()}/>
                <List>
                    <ListItem icon>
                        <Left>
                            <Icon active name='ios-alert' type='Ionicons' />
                        </Left>
                        <Body>
                            <Text>General</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon active name='ios-notifications' type='Ionicons'/>
                        </Left>
                        <Body>
                            <Text>Notifications</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                   
                        <Left>
                            <Icon active name='ios-notifications' type='Ionicons'/>
                        </Left>
                        <Body>
                        <TouchableOpacity onPress={() => this.refs.modal.setModalVisible(true)}>
                            <Text>Change Password</Text>
                            </TouchableOpacity>
                        </Body>
                       
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon active name='sync' type='MaterialCommunityIcons'/>
                        </Left>
                        <Body>
                            <Text>Data & sync</Text>
                        </Body>
                    </ListItem>
                </List>
                <ChangePassword ref='modal' />
            </View>
        )
    }
}
export { Settings }