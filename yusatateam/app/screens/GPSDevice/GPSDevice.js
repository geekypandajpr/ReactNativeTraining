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
import { Toolbar, GpsDeviceData, SearchBar,Activityindication } from '../../components';
import { userActions } from '../../redux/actions';

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
            listValues : [],
            selected2: '',
            dropdownKey : '',
            pageCount : 10,
            loading: false,
            countryList : [],
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

    loadMoreMessages () {
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
        this.setState({pageCount : this.state.pageCount+10})
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
        if(nextProps.deviceInfo.isFetched && this.state.isSearching) {
            this.setState({deviceInfoData : nextProps.deviceInfo.deviceInfo, isGetDeviceUDID: true})
        }      

        if(this.props.searchList !== nextProps.searchList) {
            var listData = nextProps.searchList.data.results
            if(listData) {
                this.setState({
                    listValues : listData.data
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
        this.setState({dropdownKey: value});
    }

    getDeviceInfo() {
        if(this.state.deviceUDID !== '') {
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
                        setting='add-circle-outline' settingType='MaterialIcons'
                        onSettingsPress={() => navigate('GPSDeviceForm', { onGoBack: () => this.updateList() })} />
                    {
                        this.state.loading ? null : 
                        <Activityindication  visible={this.props.searchList.isLoading}/>
                    }
                    
                    <Activityindication visible={this.props.deviceInfo.isLoading}/>

                    <SearchBar
                        placeholder={'Search by device UDID'}
                        isDropdown={false}
                        onChangeText={(text) => this.setState({deviceUDID: text})}
                        value={this.state.deviceUDID}
                        onSearch={this.getDeviceInfo}
                    />
                    {   this.state.isGetDeviceUDID ?
                        <DeviceInfo onClose={() => this.setState({ isGetDeviceUDID: false, isSearching: false, deviceUDID: '' })}
                            deviceUDID={this.state.deviceUDID}
                            deviceInfoData = {this.state.deviceInfoData}
                        />
                        :
                        <FlatList
                        // initialNumToRender={10}
                        data={this.state.listValues}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                            <GpsDeviceData
                                item={item}/>   
                                }
                                onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
                                onEndReached = {(distanceFromEnd) => {
                                    if(!this.onEndReachedCalledDuringMomentum)
                                    {
                                        this.loadMoreMessages()
                                        this.onEndReachedCalledDuringMomentum = true;
                                    }
                                }
                            }
                            onEndReachedThreshold={0.5}
                        />
                        
                    }
                    <View style={{backgroundColor : "#ffff"}}>
                    {   this.props.searchList.isLoading && this.state.loading ? 
                        <ActivityIndicator size="large" color="black"  animating={this.props.searchList.isLoading}/>
                        : null
                    }
                    </View>
                </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchList : state.searchList,
        deviceInfo : state.deviceInfo 
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onListFetchData : (filterData) => dispatch(userActions.searchCriteria(filterData)),
        fetchDeviceInfo : (deviceUDID) => dispatch(userActions.getAssociationDeviceInfo(deviceUDID))
    }
}  

export default connect(mapStateToProps, mapDispatchToProps)(GPSDevice);

class DeviceInfo extends React.Component {
    render() {
        const datas = this.props.deviceInfoData
        const deviceInfo = datas.results ? datas.results.deviceInfo : datas ;
        return (
            <View style={{flex: 1}}>
                <Card style={[globalStyles.card]}>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 4, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={[globalStyles.primary_text,{fontWeight: '500'}]}>UDID: {this.props.deviceUDID}</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <TouchableOpacity onPress={this.props.onClose}>
                                <MaterialIcons name='close' size={24} color='#d9534f' />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={globalStyles.primary_text}>Company name</Text>
                        </View>
                        <View style={{flex: 0.2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={globalStyles.secondary_text}>:</Text>
                        </View>
                        <View style={{flex: 2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={globalStyles.secondary_text}>{deviceInfo.companyName}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={globalStyles.primary_text}>Driver name</Text>
                        </View>
                        <View style={{flex: 0.2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={globalStyles.secondary_text}>:</Text>
                        </View>
                        <View style={{flex: 2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={globalStyles.secondary_text}>{deviceInfo.driverName}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={globalStyles.primary_text}>Vehicle #</Text>
                        </View>
                        <View style={{flex: 0.2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={globalStyles.secondary_text}>:</Text>
                        </View>
                        <View style={{flex: 2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={globalStyles.secondary_text}>{deviceInfo.vehicleNumber}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={globalStyles.primary_text}>Device model</Text>
                        </View>
                        <View style={{flex: 0.2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={globalStyles.secondary_text}>:</Text>
                        </View>
                        <View style={{flex: 2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={globalStyles.secondary_text}>{deviceInfo.deviceModel}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={globalStyles.primary_text}>Device model name</Text>
                        </View>
                        <View style={{flex: 0.2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={globalStyles.secondary_text}>:</Text>
                        </View>
                        <View style={{flex: 2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={globalStyles.secondary_text}>{deviceInfo.deviceModelName}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={globalStyles.primary_text}>Department name</Text>
                        </View>
                        <View style={{flex: 0.2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={globalStyles.secondary_text}>:</Text>
                        </View>
                        <View style={{flex: 2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={globalStyles.secondary_text}>{deviceInfo.departmentName}</Text>
                        </View>
                    </View>

                </Card>
            </View>
        )
    }
}