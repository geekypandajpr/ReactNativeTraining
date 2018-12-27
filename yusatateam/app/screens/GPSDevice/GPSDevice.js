import React from 'react';
import {
    View,
    FlatList,
    BackHandler,
    TouchableOpacity
} from 'react-native';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import { Card, Text } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

import { globalStyles } from '../../styles';
import styles from './styles';
import { ToolbarWithDropdown, GpsDeviceData, SearchBar,Activityindication } from '../../components';
import { userActions } from '../../redux/actions';

const PICKERITEM = [
    { label: "All", value: "key0" },
    { label: "Company Code", value: "key1" },
    { label: "Company Name", value: "key2" },
    { label: "provider", value: "key3" },
    { label: "UDID", value: "key4" }
]

const code = []
export class GPSDevice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: null,
            deviceUDID: '',
            isGetDeviceUDID: false,
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
        // this.onSearchClearPressed = this.onSearchClearPressed.bind(this);
        // this.SearchFilterFunction = this.SearchFilterFunction.bind(this);
    }

    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }

    loadMoreMessages () {
        this.setState({ loading: true })
        this.currentView()
        this.setState({ loading: false})
    }


    currentView() {
        //alert("Hello");
        var count = this.state.pageCount;
        //alert(count)
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
            "iDisplayLength": 10+count,
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
        const { params } = this.props.navigation.state;
        code = params
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
            "iDisplayLength": 10,
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
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        this.props.onListFetchData(filterData);
    }

    componentWillReceiveProps(nextProps) {       
        if(this.props.searchList !== nextProps.searchList) {
            var listData = nextProps.searchList.data.results
            if(listData) {
                this.setState({
                    listValues : listData.data,
                    countryList : nextProps.searchList.countryISD.results
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
            this.setState({isGetDeviceUDID: true});
            this.props.fetchDeviceInfo(this.state.deviceUDID);
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>
                    <ToolbarWithDropdown title='GPS Devices' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()} onSelectvalue={this.dropdownValue} />
                    <Activityindication position="flex-end" visible={this.props.searchList.isLoading}/>
                    <Activityindication visible={this.props.deviceInfo.isLoading}/>
                    <SearchBar
                        placeholder={'Search by device UDID'}
                        isDropdown={false}
                        //pickerItem={PICKERITEM}
                        onChangeText={(text) => this.setState({deviceUDID: text})}
                        value={this.state.deviceUDID}
                        //selectedValue={this.state.selected2}
                        onSearch={this.getDeviceInfo}
                    />
                    {this.state.isGetDeviceUDID ?
                        <DeviceInfo onClose={() => this.setState({ isGetDeviceUDID: false, deviceUDID: '' })}
                            deviceUDID={this.state.deviceUDID}
                            deviceInfoData = {this.props.deviceInfo}
                        />
                        :
                        <FlatList
                        // initialNumToRender={10}
                        data={this.state.listValues}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                            <GpsDeviceData onPress={() => navigate('GPSDeviceForm',[code,this.state.countryList])}
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
        const datas = this.props.deviceInfoData.deviceInfo
        const deviceInfo = datas.results ? datas.results.deviceInfo : datas ;
        return (
            <View style={{flex: 1}}>
                <Card style={[globalStyles.card]}>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 4, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Text style={[globalStyles.primary_text,{fontWeight: '500'}]}>{this.props.deviceUDID}</Text>
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
                            <Text style={globalStyles.secondary_text}>UDID:- {deviceInfo.companyName}</Text>
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