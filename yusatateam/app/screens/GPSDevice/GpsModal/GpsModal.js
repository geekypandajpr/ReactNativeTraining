import React from 'react';
import { Modal, TouchableHighlight, View, Alert } from 'react-native';
import { Toolbar } from '../../../components/Toolbar';
import colors from '../../../styles/colors';
import { Text, Header, Button, Body, Right, Left,List,ListItem } from 'native-base';
import { AppLoading } from 'expo';
import { globalStyles } from '../../../styles'

export default class GpsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            modalVisible: false,
        }
        this.setModalVisible = this.setModalVisible.bind(this);
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false });
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onDismiss={() => {
                            this.setState({ modalVisible: !this.state.modalVisible })
                        }}
                        onRequestClose={() => {
                            this.setState({ modalVisible: !this.state.modalVisible })
                        }}>
                        <View style={{ flex: 1, backgroundColor: '#00000090' }}>
                            <View style={{ height: '80%', width: '100%', position: 'absolute', bottom: 0 }}>
                                <Header style={colors.HEADER_COLOR}>
                                    <Left></Left>
                                    <Body>
                                        <Text style={globalStyles.title_text}>Company</Text>
                                    </Body>
                                    <Right>
                                    </Right>
                                </Header>
                                <View style={{ flex: 1, backgroundColor: '#efefef' }}>
                                    <List>
                                        <ListItem>
                                            <Text>Yusata Infotech</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text>Capgemini</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text>Infotech</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text>IBM</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text>Tata</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text>Simon Mignolet</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text>Simon Mignolet</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text>Simon Mignolet</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text>Simon Mignolet</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text>Simon Mignolet</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text>Simon Mignolet</Text>
                                        </ListItem>
                                        
                                        


                                    </List>
                                </View>
                            </View>
                        </View>

                    </Modal>
                </View >


        );
    }
}
export { GpsModal }