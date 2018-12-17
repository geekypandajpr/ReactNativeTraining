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
import { ToolbarWithDropdown, GpsDeviceData, SearchBar } from '../../components';
import { userActions } from '../../redux/actions';

const PICKERITEM = [
    { label: "All", value: "key0" },
    { label: "Company Code", value: "key1" },
    { label: "Company Name", value: "key2" },
    { label: "provider", value: "key3" },
    { label: "UDID", value: "key4" }
]

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
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>
                    <ToolbarWithDropdown title='GPS Devices' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()} />

                    <SearchBar
                        placeholder={'Search here'}
                        isDropdown={true}
                        pickerItem={PICKERITEM}
                        onChangeText={(text) => this.setState({searchValue: text})}
                        selectedValue={this.state.selected2}
                        onValueChange={this.onValueChange2.bind(this)}
                        onSearch={() => console.log('onSearchPressed')}
                    />

                    <FlatList
                        data={[{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }]}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                            <GpsDeviceData onPress={() => navigate('GPSDeviceForm')}/>
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