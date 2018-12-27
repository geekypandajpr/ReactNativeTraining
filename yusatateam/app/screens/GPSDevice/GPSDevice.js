import React from 'react';
import {
    View,
    FlatList,
    BackHandler,
    
} from 'react-native';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';

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
            listValues : [],
            selected2: '',
            dropdownKey : '',
            pageCount : 10,
            loading: false,
            countryList : {}
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
        //alert(JSON.stringify(params));
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
            //  alert(JSON.stringify(nextProps.gpsDeviceData))
            var listData = nextProps.searchList.data.results
            // var countryCode = nextProps.gpsDeviceData.countryISD
            if(listData) {
                this.setState({
                    listValues : listData.data,
                    // countryList : countryCode
                });
            }
        }
        
    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    // SearchFilterFunction(text) {
    //     const newData = this.arrayList.filter(function (item) {
    //         const itemData = item.ESN.toUpperCase()
    //         const textData = text.toUpperCase()
    //         return itemData.indexOf(textData) > -1
    //     })
    //     this.setState({
    //         data: newData,
    //         searchValue: text
    //     },
    //     )
    // }

    // onSearchClearPressed() {
    //     this.SearchFilterFunction('');
    // }

    // AlertBox() {
    //     alert('Press Alert Button')
    // }

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
                    <Activityindication visible={this.props.searchList.isLoading}/>
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

                    
                <FlatList
                // initialNumToRender={10}
                  data={this.state.listValues}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) =>
                  <GpsDeviceData onPress={() => navigate('GPSDeviceForm',code)}
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