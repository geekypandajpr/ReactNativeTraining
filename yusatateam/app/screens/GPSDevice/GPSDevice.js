import React from 'react';
import {
    View,
    FlatList,
    BackHandler,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import { Card, Text } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../../styles';
import styles from './styles';
import { Toolbar, GpsDeviceData, SearchBar, Activityindication } from '../../components';
import { gpsDeviceActions } from '../../redux/actions';
import { DeviceInfo } from '../QrCodeScanner/DeviceInfo';

export class GPSDevice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: null,
            deviceUDID: '',
            deviceInfoData: {},
            isGetDeviceUDID: false,
            isSearching: false,
            listValues: [],
            selected2: '',
            dropdownKey: '',
            pageCount: 10,
            loading: false,
            countryList: [],
        };
        this.list = [];
        this.modalRef = React.createRef();
        this.getDeviceInfo = this.getDeviceInfo.bind(this);
    }

    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }

    loadMoreMessages() {
        this.setState({ loading: true })
        this.currentView()
    }


    currentView() {
        var count = this.state.pageCount;
        var filterData = {
            "betweenFilter": {
                "flag": false,
                "isDate": false,
                "isOrCondition": false
            },
            "cFilter": {
                "flag": false
            },
            "columnNames": [
                ""
            ],
            "iDisplayLength": count,
            "iDisplayStart": 0,
            "iSortCol_0": 0,
            "inFilter": {
                "flag": false
            },
            "sEcho": 0,
            "sSortDir_0": "",
            "searchColumnNamesWithText": [
                ""
            ]
        }
        this.props.onListFetchData(filterData);
        this.setState({ pageCount: this.state.pageCount + 10 })
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
        this.currentView()
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.deviceInfo.isFetched && this.state.isSearching) {
            this.setState({ deviceInfoData: nextProps.deviceInfo.deviceInfo, isGetDeviceUDID: true })
        }

        if (this.props.gpsDeviceList !== nextProps.gpsDeviceList) {
            var listData = nextProps.gpsDeviceList.data.results
            if (listData) {
                this.setState({
                    listValues: listData.data
                });
            }
        }

    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    dropdownValue = (value) => {
        this.setState({ dropdownKey: value });
    }

    getDeviceInfo() {
        if (this.state.deviceUDID !== '') {
            this.setState({ isSearching: true });
            this.props.fetchDeviceInfo(this.state.deviceUDID);
        }
    }

    updateList() {
        console.log('Update List');
    }

    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>

                    <Toolbar title='GPS Devices'
                        leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        setting='add-circle-outline' settingType='MaterialIcons' onSettingsPress={() => navigate('GPSDeviceForm', { onGoBack: () => this.updateList() })}
                        Calender='repo-clone' calenderType='Octicons' onCalenderPress={() => navigate('QrCode')} />
                    {
                        this.state.loading ? null :
                            <Activityindication visible={this.props.gpsDeviceList.isLoading} />
                    }

                    <Activityindication visible={this.props.deviceInfo.isLoading} />

                    <SearchBar
                        placeholder={'Search by device UDID'}
                        isDropdown={false}
                        onChangeText={(text) => this.setState({ deviceUDID: text })}
                        value={this.state.deviceUDID}
                        onSearch={this.getDeviceInfo}
                    />
                    {this.state.isGetDeviceUDID ?
                        <DeviceInfo onClose={() => this.setState({ isGetDeviceUDID: false, isSearching: false, deviceUDID: '' })}
                            deviceUDID={this.state.deviceUDID}
                            deviceInfoData={this.state.deviceInfoData}
                        />
                        :
                        <FlatList
                            // initialNumToRender={10}
                            data={this.state.listValues}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) =>
                                <GpsDeviceData
                                    item={item} />
                            }
                            onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
                            onEndReached={(distanceFromEnd) => {
                                if (!this.onEndReachedCalledDuringMomentum) {
                                    this.loadMoreMessages()
                                    this.onEndReachedCalledDuringMomentum = true;
                                }
                            }
                            }
                            onEndReachedThreshold={0.5}
                        />

                    }
                    <View style={{ backgroundColor: "#ffff" }}>
                        {this.props.gpsDeviceList.isLoading && this.state.loading ?
                            <ActivityIndicator size="large" color="black" animating={this.props.gpsDeviceList.isLoading} />
                            : null
                        }
                    </View>
                </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        gpsDeviceList: state.gpsDeviceListData,
        deviceInfo: state.deviceInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onListFetchData: (listRequest) => dispatch(gpsDeviceActions.gpsDeviceList(listRequest)),
        fetchDeviceInfo: (deviceUDID) => dispatch(gpsDeviceActions.getAssociationDeviceInfo(deviceUDID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GPSDevice);