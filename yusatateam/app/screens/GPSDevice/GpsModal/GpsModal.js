import React from 'react';
import { Text, Modal, View, TouchableHighlight, FlatList, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Header, Body, Right, Left, List, ListItem } from 'native-base';
import { AppLoading } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class GpsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            modalVisible: false,
            data: [],
            title: '',
            map: new Map(),
        }
        this.setModalVisible = this.setModalVisible.bind(this);
        this.onSelectValue = this.onSelectValue.bind(this);
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false });
    };

    onSelectValue(item) {
        this.props.selectedValue(item.label);
        this.setModalVisible(false, '' ,[]);
    }

    setModalVisible(visible,  title,data = []) {
        this.setState({ modalVisible: visible, data: data, title: title });
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
                        <View style={styles.container}>
                            <View style={styles.subContainer}>

                                <Header style={styles.Header_Style}>

                                    <Body>
                                        <Text style={styles.Text_style}>{this.state.title}</Text>
                                    </Body>
                                    <Right>
                                        <TouchableHighlight onPress={() => { this.setModalVisible(false) }}>
                                            <Entypo name='cross' size={28} color='#fff'></Entypo>
                                        </TouchableHighlight>
                                    </Right>
                                </Header>

                                <View style={{ flex: 1, backgroundColor: '#efefef' }}>
                                    <FlatList
                                        data={this.state.data}
                                        keyExtractor={(item, index) => index.toString()}
                                        renderItem={({ item, index }) =>
                                            <List>
                                                <TouchableOpacity >
                                                    <ListItem onPress={() => { this.onSelectValue(item) }}>
                                                        <Text>{item.label}</Text>
                                                    </ListItem>
                                                </TouchableOpacity>
                                            </List>
                                        } />
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
    container: {
        flex: 1,
        backgroundColor: '#00000090',
        alignItems: 'center',
        justifyContent: 'center'
    },
    subContainer: {
        height: '80%',
        width: '100%',
        position: 'absolute',
        bottom: 0
    },
    Header_Style:
    {
        backgroundColor: '#0073b7'
    },
    Text_style: {
        fontSize: '1.2rem',
        color: '#fff',
        fontWeight: '500',
    }

})