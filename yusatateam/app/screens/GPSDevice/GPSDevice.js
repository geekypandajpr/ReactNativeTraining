import React from 'react';
import {
    View,
    FlatList,
    BackHandler,
    TextInput
} from 'react-native';
import { Picker, Button } from 'native-base';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import { ToolbarWithDropdown, GpsDeviceData } from '../../components';
import { userActions } from '../../redux/actions';

export class GPSDevice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: null,
            searchValue: '',
            selected2: ''
        };
        this.list = [];
        this.modalRef = React.createRef();
        this.onSearchClearPressed = this.onSearchClearPressed.bind(this);
        this.SearchFilterFunction = this.SearchFilterFunction.bind(this);
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

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        this.props.onFetchData();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.simDatas !== nextProps.simDatas) {
            this.setState({ data: nextProps.simDatas.data });
            this.arrayList = nextProps.simDatas.data;
        }
    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }
    SearchFilterFunction(text) {
        const newData = this.arrayList.filter(function (item) {
            const itemData = item.ORDER.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            data: newData,
            searchValue: text
        },
        )
    }
    onSearchClearPressed() {
        this.SearchFilterFunction('');
    }
    AlertBox() {
        alert('Press Alert Button')
    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    render() {
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>
                    <ToolbarWithDropdown title='GPS Devices' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()} />

                    <View style={styles.top_view}>
                        <View style={styles.dropdown_view}>
                            <View style={styles.dropdown}>
                                <Picker
                                    mode="dropdown"
                                    style={{ width: '100%', height: '100%' }}
                                    placeholder="Select Device"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                //selectedValue={this.state.selected2}
                                // onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Picker.Item label="All" value="key0" />
                                    <Picker.Item label="Company Code" value="key1" />
                                    <Picker.Item label="Company Name" value="key2" />
                                    <Picker.Item label="provider" value="key3" />
                                    <Picker.Item label="UDID" value="key4" />
                                </Picker>
                            </View>
                        </View>

                        <View style={styles.search_view}>
                            <View style={styles.search}>
                                <View style={styles.textinput_view}>
                                    <TextInput
                                        style={styles.text_input}
                                        placeholder='Search here'
                                        underlineColorAndroid="transparent"
                                        returnKeyType='search'
                                        autoFocus={false}
                                        clearButtonMode="while-editing"
                                    // onChangeText={this.props.onChangeText}
                                    />
                                </View>
                                <View style={{ flex: 0.18 }}>
                                    <Button transparent style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Ionicons name="md-search" size={20} color="gray" />
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>

                    <FlatList
                        data={[{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }]}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                            <GpsDeviceData />
                        } />
                </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        simDatas: state.simData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchData: () => dispatch(userActions.simRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GPSDevice);