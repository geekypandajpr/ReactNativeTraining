import React from 'react';
import { Text, Modal, View,BackHandler } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Header, Button, Body, Right, Left, List, ListItem } from 'native-base';
import { AppLoading } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';


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
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        this.props.onFetchData();
    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
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
                        <View style={{ flex: 1, backgroundColor: '#00000090', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: '80%', width: '100%', position: 'absolute', bottom: 0 }}>

                                <Header style={styles.Header_Style}>
                                    <Left>
                                        <Button transparent onPress={()=>navigate('GPSDeviceForm')}>
                                            <Feather name = 'arrow-left' size = {26} color = '#fff' ></Feather>
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Text style={{ color: '#fff', fontSize: 18, }}>Company</Text>
                                    </Body>
                                    <Right></Right>
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

const styles = EStyleSheet.create({
    Header_Style: { backgroundColor: '#0073b7' }

})