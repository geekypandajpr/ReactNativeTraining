import React from 'react';
import { View, FlatList, TouchableOpacity, BackHandler } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Text, Button, Card, Footer, FooterTab, CheckBox } from 'native-base';
import styles from './styles';
import JobDetails from '../../screens/Jobs/JobDetails/JobDetails'
// import pendingData from '../../../../assets/JSONData/JobsData/pendingData';
import { SearchBar, Activityindication } from '../../components';
import JobAssign from '../../screens/Jobs/jobAssign/jobAssign';
import { FilterJob } from '../FilterJob/FilterJob';
import { globalStyles } from '../../styles';

export default class JobTabData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.JobDataValue == undefined ? null : this.props.JobDataValue,
            map1: new Map(null),
            value: new Map(),
            status: 'Pending',
            searchData: [],
        }
        this.arrayholder = [];
        this.jobFilter = React.createRef();
        this.openFilterPage = this.openFilterPage.bind(this);
    };
    componentDidMount() {
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
        const { isLoading } = this.props;
        //   alert(this.state.data)
        return (
            <View style={styles.container}>
                {/* <Activityindication visible={isLoading}/> */}
                <View style={styles.searchView}>
                    <View style={{ flex: 10 }}>
                        <SearchBar placeholder={'Search By '}
                            onChangeText={(text) => this.SearchFilterFunction(text)} />
                    </View>
                    <View style={styles.filterIcon}>
                        <TouchableOpacity onPress={() => this.openFilterPage(this.state.data[0].jobStatus)}>
                            <FontAwesome name="filter" size={25} color="gray" />
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    extraData={this.state}
                    data={this.state.data}
                    keyExtractor={(item, index) => item.jobNumber}
                    renderItem={({ item, index }) =>
                        <Card style={[styles.viewList, globalStyles.card]}>
                            {
                                item.jobStatus == 'completed' || item.jobStatus == 'schedule' ? null :
                                    <View style={{ flex: 0.3, alignItems: 'flex-start', justifyContent: 'center' }}>
                                        <CheckBox
                                            checked={this.state.map1.get(item.jobNumber)}
                                            onPress={() => this.toggleCheckbox(item.jobNumber)} />
                                    </View>
                            }
                            <View style={{ flex: 2 }}>
                                <TouchableOpacity onPress={() => this.refs.modal.setModalVisible(true, item)}>
                                    <View style={styles.sub_view}>
                                        <View style={styles.left_sub_view}>
                                            <Text style={[globalStyles.title_text, { fontFamily: 'Roboto' }]}>{item.jobNumber}</Text>
                                        </View>
                                        <View style={styles.right_sub_view}>
                                            <View style={styles.jobTypeView}>
                                                <Text style={styles.jobTypeText}>{item.jobType}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Schedule date</Text>
                                        </View>
                                        <View style={styles.middle_view}>
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                                        </View>
                                        <View style={styles.right_view}>
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>{item.scheduleDate}</Text>
                                        </View>
                                    </View>

                                    {
                                        item.jobStatus == 'Pending' || item.jobStatus == 'schedule' || item.jobStatus == 'ReSchedule' ? null :
                                            <View style={styles.sub_view}>
                                                <View style={styles.left_view}>
                                                    <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Completed date</Text>
                                                </View>
                                                <View style={styles.middle_view}>
                                                    <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                                                </View>
                                                <View style={styles.right_view}>
                                                    <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>{item.completedDate}</Text>
                                                </View>
                                            </View>
                                    }

                                    {
                                        item.jobStatus == 'Pending' ? null :
                                            <View style={styles.sub_view}>
                                                <View style={styles.left_view}>
                                                    <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Technician</Text>
                                                </View>
                                                <View style={styles.middle_view}>
                                                    <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                                                </View>
                                                <View style={styles.right_view}>
                                                    <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>{item.servicePerson}</Text>
                                                </View>
                                            </View>
                                    }


                                    {
                                        item.jobStatus == 'completed'  ? null :
                                            <View style={styles.sub_view}>
                                                <View style={styles.left_view}>
                                                    <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Customer</Text>
                                                </View>
                                                <View style={styles.middle_view}>
                                                    <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                                                </View>
                                                <View style={styles.right_view}>
                                                    <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>{item.contactPerson}</Text>
                                                </View>
                                            </View>
                                    }
                                   
                                            <View style={styles.sub_view}>
                                                <View style={styles.left_view}>
                                                    <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Contact No</Text>
                                                </View>
                                                <View style={styles.middle_view}>
                                                    <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                                                </View>
                                                <View style={styles.right_view}>
                                                    <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>{item.contactNumber}</Text>
                                                </View>
                                            </View>
                                    


                                    <View style={styles.sub_view}>
                                        <View style={styles.location}>
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>{item.location}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Card>
                    } >
                </FlatList>
                {
                    this.state.map1.size == 0 ? null :
                        <Footer>
                            <FooterTab>
                                <Button style={styles.footerbutton} onPress={() => this.refs.assign.setModalVisible(true)}>
                                    <Text style={styles.footerbuttonText}>Assign Jobs</Text>
                                </Button>
                            </FooterTab>
                        </Footer>
                }
                <FilterJob ref={this.jobFilter} getSelected={(data) => this.selectedValue(data)} />
                <JobDetails ref='modal' />
                <JobAssign ref='assign' />
            </View>
        )
    }
}


export { JobTabData }
