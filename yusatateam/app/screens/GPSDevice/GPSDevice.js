import React from 'react';
import {
    View,
    FlatList,
    TouchableWithoutFeedback,
    TouchableOpacity,
    BackHandler
} from 'react-native';
import { Card, Text,Item,Picker} from 'native-base';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { ToolbarWithDropdown, Activityindication,HeaderWithSearchbar,SearchBar} from '../../components';
import { userActions } from '../../redux/actions';
import { globalStyles } from '../../styles';

export class GPSDevice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: null,
            searchValue : '',
            selected2: ''
        };
        this.list=[];
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
        if(this.props.simDatas !== nextProps.simDatas) {
            this.setState({data: nextProps.simDatas.data});
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
    SearchFilterFunction(text) 
    {
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
    onSearchClearPressed(){
        this.SearchFilterFunction('');
    }
    AlertBox(){
        alert('Press Alert Button')
    }

    render() {
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>
                    <Activityindication visible={this.props.simDatas.isLoading}/>
                    <ToolbarWithDropdown title='GPS Devices' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        setting='filter' settingType='FontAwesome' onSettingsPress={() => this.AlertBox()}
                    />
                        <View style={styles.searchView}>
                            <View style={styles.filterIcon}>
                                <Item picker>
                                <Picker
                                    mode="dropdown"
                                    style={{ width: 50 }}
                                    placeholder="Select Device"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Picker.Item label="All" value="key0" />
                                    <Picker.Item label="Company Code" value="key1" />
                                    <Picker.Item label="Company Name" value="key2" />
                                    <Picker.Item label="provider" value="key3" />
                                    <Picker.Item label="UDID" value="key4" />
                                </Picker>
                                </Item>
                            </View>
                        <View style={{ flex: 5 }}>
                            <SearchBar placeholder={'Search By '}
                                value = { this.state.text}
                                onChangeText={(text) => this.SearchFilterFunction(text)} />
                        </View>
                </View>
                    <View style={styles.viewStyle}>
                        <FlatList
                            data={this.state.data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) =>
                            <Card style={[styles.viewList, globalStyles.card]}>
                            <View style={{ flex: 2 }}>
                                <TouchableOpacity >
                                    <View style={styles.sub_view}>
                                        <View style={styles.left_sub_view}>
                                            <Text style={[globalStyles.title_text, { fontFamily: 'Roboto' }]}>Yusata Infotech Pvt Ltd</Text>
                                        </View>
                                        <View style={styles.right_sub_view}>
                                            <View style={styles.jobTypeView}>
                                                <Text style={styles.jobTypeText}>Active</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Provider</Text>
                                        </View>
                                        <View style={styles.middle_view}>
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                                        </View>
                                        <View style={styles.right_view}>
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>{item.provider}</Text>
                                        </View>
                                    </View>
                                            <View style={styles.sub_view}>
                                                <View style={styles.left_view}>
                                                    <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Vehicle No#</Text>
                                                </View>
                                                <View style={styles.middle_view}>
                                                    <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                                                </View>
                                                <View style={styles.right_view}>
                                                    <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>{item.vehicleNo}</Text>
                                                </View>
                                            </View>
                                    
                                            <View style={styles.sub_view}>
                                                <View style={styles.left_view}>
                                                    <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>UDID</Text>
                                                </View>
                                                <View style={styles.middle_view}>
                                                    <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                                                </View>
                                                <View style={styles.right_view}>
                                                    <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>{item.udid}</Text>
                                                </View>
                                            </View>

                                            <View style={styles.sub_view}>
                                                <View style={styles.left_view}>
                                                    <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Transaction Date</Text>
                                                </View>
                                                <View style={styles.middle_view}>
                                                    <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                                                </View>
                                                <View style={styles.right_view}>
                                                    <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>{item.transactionDate}</Text>
                                                </View>
                                            </View>
                                </TouchableOpacity>
                            </View>
                        </Card>
                            }></FlatList>
                    </View>
                </View>
        );
    }
}

function mapStateToProps(state){
    return{
        simDatas : state.simData
    }
}

function mapDispatchToProps(dispatch){
    return{
        onFetchData: () => dispatch(userActions.simRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GPSDevice);