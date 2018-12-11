import React from 'react';
import { View, FlatList, TouchableOpacity, BackHandler } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Text, Button, Card, Footer, FooterTab, CheckBox,Form, Item, Picker } from 'native-base';
import styles from './styles';
import { SearchBar, Activityindication } from '../../components';
import { FilterJob } from '../FilterJob/FilterJob';
import { globalStyles } from '../../styles';

export default class GpsDeviceData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.JobDataValue == undefined ? null : this.props.JobDataValue,
            map1: new Map(null),
            value: new Map(),
            text : '',
            status: 'Pending',
            searchData: [],
            isLoading : true,
            selected2: undefined
        }
        this.arrayholder = [];
        this.jobFilter = React.createRef();
        this.openFilterPage = this.openFilterPage.bind(this);
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading : false})
        }, 3000)
        this.arrayholder = this.state.data;
    }
    selectedValue(data) {

        for (var key of data.keys()) {
            this.state.searchData.push(key);
        }
        
    }
    openFilterPage(data) {
        this.state.searchData = [];
        this.jobFilter.current.setModalVisible(true, data);
    }
    onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }
    toggleCheckbox(id) {
        let map1 = this.state.map1;
        if (this.state.map1.has(id)) {
            this.state.map1.delete(id);
        }
        else {
            this.state.map1.set(id, true);
        }
        this.setState({ map1 })
    }

    SearchFilterFunction(text) {
        const val = this.state.searchData;
        var len = this.state.searchData.length;
        if (len == 0) {
            const newData = this.arrayholder.filter(function (item) {
                itemData = item["jobNumber"].toUpperCase();
                const textData = text.toUpperCase()

                return itemData.indexOf(textData) > -1
            })
            this.setState({
                data: newData,
                text: text
            },
            )
        }
        else {
            const newData = this.arrayholder.filter(function (item) {
                itemData = item[val[0]].toUpperCase();
                for (var i = 1; i < len; i++) {
                    itemData = itemData.concat(item[val[i]]).toUpperCase();
                }
                const textData = text.toUpperCase()

                return itemData.indexOf(textData) > -1
            })
            this.setState({
                data: newData,
                text: text
            },
            )
        }
    }


    render() {
        //   alert(this.state.text)
        return (
            <View style={styles.container}>
                <Activityindication visible={this.state.isLoading}/>
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
                <FlatList
                    extraData={this.state}
                    data={this.state.data}
                    keyExtractor={(item, index) => item.jobNumber}
                    renderItem={({ item, index }) =>
                        <Card style={[styles.viewList, globalStyles.card]}>
                            <View style={{ flex: 2 }}>
                                <TouchableOpacity onPress={() => this.refs.modal.setModalVisible(true, item)}>
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
                    } >
                </FlatList>
            </View>
        )
    }
}


export { GpsDeviceData }
