import React from 'react';
import { Text, Modal, View, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Header, Body, Right, List, ListItem, Title, Left, Button } from 'native-base';
import { AppLoading } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SearchBar } from '../SearchBar/SearchBar';
import { globalStyles, colors } from '../../styles';

export default class SinglePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            modalVisible: false,
            data: [],
            title: '',
            text: ''
        }
        this.setModalVisible = this.setModalVisible.bind(this);
        this.onSelectValue = this.onSelectValue.bind(this);
        this.arrayholder = [];
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
        this.props.selectedValue(item);
        this.setModalVisible(false, '', []);
    }

    setModalVisible(visible, title, data = []) {
        this.arrayholder = data;
        this.setState({ modalVisible: visible, data: data, title: title, text: '' });
    }

    getSearch(text) {
        const newData = this.arrayholder.filter(function (item) {
            // alert(JSON.stringify(item))
            itemData = item.label.toUpperCase();
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            data: newData,
            text: text
        })
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

                                <Header style={globalStyles.dropdownHeader}>
                                    <Body>
                                        <Title style={globalStyles.dropdownHeaderText}>{this.state.title}</Title>
                                    </Body>
                                    <Right>
                                        <Button transparent onPress={() => { this.setModalVisible(false) }}>
                                            <MaterialIcons name='close' size={28} color={colors.DROPDOWN_ICON_COLOR} />
                                        </Button>
                                    </Right>
                                </Header>
                                <View style={{ backgroundColor: 'white', padding: 6 }}>
                                    <SearchBar placeholder={'Search here'}
                                        value={this.state.text}
                                        onChangeText={(text) => this.getSearch(text)}
                                    // onSearch={this.getSearch(this.state.searchValue)}
                                    />
                                </View>

                                <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                                    <FlatList
                                        data={this.state.data}
                                        keyExtractor={(item, index) => index.toString()}
                                        ListEmptyComponent={this.emptyList}
                                        renderItem={({ item, index }) =>
                                            <List>
                                                <ListItem onPress={() => { this.onSelectValue(item) }}>
                                                    <Text style={{ fontFamily: 'Roboto' }}>{item.label}</Text>
                                                </ListItem>
                                            </List>
                                        } />
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View >
        );
    }

    emptyList() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Roboto', paddingTop: 50 }}>No Data Available</Text>
            </View>
        )
    }
}

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
    Text_style: {
        // fontSize: '1.2rem',
        color: '#7b7987',
        paddingLeft: 5,
        fontWeight: 'bold',
    }
})