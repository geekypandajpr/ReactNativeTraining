import React from 'react';
import {
    View,
    FlatList,
    BackHandler,
    Dimensions,
    Text
} from 'react-native';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';

import styles from './styles';
import { Toolbar, GpsDeviceData, Activityindication } from '../../components';
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
            gpsDeviceList: [],
            selected2: '',
            dropdownKey: '',
            pageCount: 10,
            diplayLength: 2,
            loadingMore: false,
            countryList: [],
            refresh: false
        };
        this.page = 0;
        this.list = [];
        this.modalRef = React.createRef();
        this.getDeviceInfo = this.getDeviceInfo.bind(this);
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
        this.fetchDeviceList();
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.deviceInfo.isFetched && this.state.isSearching) {
            this.setState({ deviceInfoData: nextProps.deviceInfo.deviceInfo, isGetDeviceUDID: true })
        }

        if (this.props.gpsDeviceList !== nextProps.gpsDeviceList) {
            if (nextProps.gpsDeviceList.data.results) {
                const listData = nextProps.gpsDeviceList.data.results.data;
                this.setState({ gpsDeviceList: listData });
            }
        }
    }


    fetchDeviceList() {
        var listRequest = {
            "betweenFilter": { "flag": false, "isDate": false, "isOrCondition": false },
            "cFilter": { "flag": false },
            "columnNames": [""],
            "iDisplayLength": -1,
            "iDisplayStart": 0,
            "iSortCol_0": 0,
            "inFilter": { "flag": false },
            "sEcho": 0,
            "sSortDir_0": "",
            "searchColumnNamesWithText": [""]
        }
        this.props.onListFetchData(listRequest);
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

    _onRefresh = () => {
        this.setState({
            refresh: true
        }, function () {
            this.fetchDeviceList();
        });
        this.setState({ refresh: false });
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
                        Calender='barcode-scan' calenderType='MaterialCommunityIcons' onCalenderPress={() => navigate('QrCode')} />

                    <Activityindication visible={this.props.gpsDeviceList.isLoading} />
                    <Activityindication visible={this.props.deviceInfo.isLoading} />

                    {this.state.isGetDeviceUDID ?
                        <DeviceInfo onClose={() => this.setState({ isGetDeviceUDID: false, isSearching: false, deviceUDID: '' })}
                            deviceUDID={this.state.deviceUDID}
                            deviceInfoData={this.state.deviceInfoData}
                        />
                        :
                        <FlatList
                            refreshing={this.state.refresh}
                            onRefresh={this._onRefresh}
                            ListEmptyComponent={this.emptyList}
                            data={this.state.gpsDeviceList}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) =>
                                <GpsDeviceData item={item} />
                            }
                        />

                    }
                </View>
        );
    }

    emptyList() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Roboto', paddingTop: Dimensions.get('window').height * 0.4 }}>
                    No Data Available
                </Text>
            </View>
        )
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