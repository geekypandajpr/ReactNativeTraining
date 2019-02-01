import React from 'react';
import { Text, Modal, View, TouchableHighlight, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Header, Body, Right, List, ListItem, Button, Footer, FooterTab } from 'native-base';
import { AppLoading } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';

import { SearchBar } from '../SearchBar/SearchBar';
import { colors } from '../../styles';

export default class MultiPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            modalVisible: false,
            data: [],
            title: '',
            text: '',
            selected: new Map()
        }
        this.setModalVisible = this.setModalVisible.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

    onSubmit() {
        this.props.multipleValueSelected(this.state.selected);
        this.setState({ modalVisible: false });        
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
                                        {/* <TouchableHighlight onPress={() => { this.setModalVisible(false) }}>
                                            <MaterialIcons name='close' size={28} color='#fff' />
                                        </TouchableHighlight> */}
                                    </Right>
                                </Header>
                                <View style={{ backgroundColor: 'white' }}>
                                    <SearchBar placeholder={'Search here '}
                                        value={this.state.text}
                                        onChangeText={(text) => this.getSearch(text)}
                                    />
                                </View>

                                <View style={{ flex: 1, backgroundColor: '#efefef' }}>
                                    <FlatList
                                        data={this.state.data}
                                        extraData={this.state}
                                        keyExtractor={this._keyExtractor}
                                        renderItem={this._renderItem}
                                    />
                                </View>

                                <Footer>
                                    <FooterTab style={{backgroundColor: colors.PRIMARY}}>
                                        <Button transparent onPress={this.onSubmit}>
                                            <Text style={{fontSize: 16, color: '#fff', fontFamily: 'Roboto'}}>
                                                Select
                                            </Text>
                                        </Button>
                                    </FooterTab>
                                </Footer>

                            </View>
                        </View>
                    </Modal>
                </View >
        );
    }

    _keyExtractor = (item, index) => item.value;

    _onPressItem = (id) => {
        // updater functions are preferred for transactional updates
        this.setState((state) => {
            // copy the map rather than modifying state.
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id)); // toggle
            return { selected };
        });
    };

    _renderItem = ({ item, index }) => (
        <MyListItem
            id={item.value}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected.get(item.value)}
            title={item.label}
        />
    );
}

class MyListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        const textColor = this.props.selected ? colors.PRIMARY : "#000000";
        const fontWeight = this.props.selected ? '500': '200';
        return (
            <List>
                <ListItem button={true} onPress={this._onPress}>
                    <Text style={{ color: textColor, fontFamily: 'Roboto', fontWeight: fontWeight }}>{this.props.title}</Text>
                </ListItem>
            </List>
        );
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
    Header_Style: {
        backgroundColor: '#0073b7'
    },
    Text_style: {
        fontSize: '1.2rem',
        color: '#fff',
        fontWeight: '500',
    }
})