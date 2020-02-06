import React from 'react';
import {
    Text,
    Modal,
    View,
    FlatList,
    Image,
    Dimensions,
    LayoutAnimation,
} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Header, Body, Right, List, ListItem, Title, Left, Button } from 'native-base';
import { AppLoading, BarCodeScanner, Permissions } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SearchBar } from '../SearchBar/SearchBar';
import { globalStyles, colors } from '../../styles';

const _data = [
    { "label": "test", "value": ""},
    { "label": "Test", "value": ""},
    { "label": "TEST", "value": ""},
    { "label": "TEST PREM", "value": ""},
    { "label": "Test prem", "value": ""},
    { "label": "prem test test", "value": ""},
    { "label": "Hello test Prem", "value": ""},
    { "label": "hello134 45212", "value": ""},
    { "label": "4HELLO", "value": ""},
    { "label": "PREM45", "value": ""},
    { "label": "pr41em tes4512t HELLO", "value": ""},
    { "label": "Test te12st 123", "value": ""},
]

export default class GpsDevicePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            modalVisible: false,
            data: [],
            title: '',
            text: '',
            hasCameraPermission: null,
            isOpenQrScanner: false
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

    componentDidMount() {
        this._requestCameraPermission();
    }

    _requestCameraPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted',
        });
    };

    _handleBarCodeRead = result => {
        console.log(result);
        if (result.data !== this.state.text) {
            console.log(result.data);
            LayoutAnimation.spring();
            this.getSearch((result.data).trim());
        }
    };

    onSelectValue(item) {
        this.props.selectedValue(item);
        this.setModalVisible(false, '', []);
    }

    setModalVisible(visible, title, data = []) {
        // this.arrayholder = _data;
        // this.setState({
        //     modalVisible: visible,
        //     data: _data,
        //     title: title,
        //     text: '',
        //     isOpenQrScanner: false
        // });
        this.arrayholder = data;
        this.setState({
            modalVisible: visible,
            data: data,
            title: title,
            text: '',
            isOpenQrScanner: false
        });
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
            text: text,
            isOpenQrScanner: false
        })
    }

    openQRScanner = () => {
        this.setState({
            isOpenQrScanner: true,
        })
    }


    render() {
        const { width } = Dimensions.get('window')
        const qrSize = width * 0.4;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onDismiss={() => {
                            this.setState({ modalVisible: !this.state.modalVisible, isOpenQrScanner: false })
                        }}
                        onRequestClose={() => {
                            this.setState({ modalVisible: !this.state.modalVisible, isOpenQrScanner: false })
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
                                <View style={{
                                    backgroundColor: 'white',
                                    padding: 6,
                                    flexDirection: 'row'
                                }}>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <SearchBar placeholder={'Search here'}
                                            value={this.state.text}
                                            onChangeText={(text) => this.getSearch(text)}
                                        // onSearch={this.getSearch(this.state.searchValue)}
                                        />
                                    </View>
                                    <View style={{ flex: 0.15, justifyContent: 'center', alignItems: 'center' }}>
                                        <Button transparent onPress={() => this.openQRScanner()}
                                            style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                            <MaterialCommunityIcons name="barcode-scan" size={25} color="#808080" />
                                        </Button>
                                    </View>

                                </View>

                                <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                                    {this.state.isOpenQrScanner ?
                                        <View style={{ flex: 1 }}>
                                            {this.state.hasCameraPermission === null ?
                                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text>Requesting for camera permission</Text>
                                                </View>
                                                :
                                                this.state.hasCameraPermission === false ?
                                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                        <Text style> Camera permission is not granted </Text>
                                                    </View>
                                                    :
                                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                        <BarCodeScanner
                                                            onBarCodeRead={this._handleBarCodeRead}
                                                            style={styles.barCode}>
                                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                                <Text style={{ color: '#fff', marginTop: "10%", fontSize: 18 }}>Scan Device UDID or ESN</Text>
                                                                <Image
                                                                    style={{
                                                                        marginTop: "20%",
                                                                        // marginRight: 40,
                                                                        // marginLeft: 40,
                                                                        width: qrSize,
                                                                        height: qrSize,
                                                                    }}
                                                                    source={require('../../../assets/trans.png')}
                                                                />
                                                            </View>
                                                        </BarCodeScanner>
                                                    </View>
                                            }
                                        </View>
                                        :
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
                                    }
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
    },
    barCode: {
        height: "95%",
        width: "95%",
        margin: 5,
    }
})