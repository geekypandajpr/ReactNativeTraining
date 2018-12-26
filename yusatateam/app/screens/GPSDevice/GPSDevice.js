import React from 'react';
import {
    View,
    FlatList,
    BackHandler,
} from 'react-native';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';

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

const code = []
export class GPSDevice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: null,
            countryISD : [],
            deviceType: [],
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
        const { params } = this.props.navigation.state;
        code =params
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
            "iDisplayLength": -1,
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
        this.props.onFetchData();
        this.props.onListFetchData(filterData);
    }

    componentWillReceiveProps(nextProps) {  
       // alert(JSON.stringify(this.props.searchList))     
        if(this.props.CountryIsdList !== nextProps.CountryIsdList) {
            this.setState({
                deviceType: nextProps.CountryIsdList.deviceType.results,
                countryISD: nextProps.CountryIsdList.countryISD.results,
            });
           
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
            const itemData = item.ESN.toUpperCase()
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
                        isDropdown={false}
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
                            <GpsDeviceData onPress={() => navigate('GPSDeviceForm',[{code :code},{countrylist : this.state.countryISD },{deviceList : this.state.deviceType }])}/>
                        } />
                </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        //loading : state.CompanyData,
        // CompanyDatas : state.CompanyData.data1,
        Devicetype  : state.CompanyData,
        CountryIsdList: state.CompanyData,
        searchList : state.searchList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onListFetchData : (filterData) => dispatch(userActions.searchCriteria(filterData)),
        onFetchData: () => dispatch(userActions.gpsdeviceRequest())
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GPSDevice);