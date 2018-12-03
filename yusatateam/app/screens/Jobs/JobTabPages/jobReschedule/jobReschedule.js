import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Text, Button, Card, Footer, FooterTab, CheckBox } from 'native-base';
import styles from './styles';
import JobDetails from '../../JobDetails/JobDetails';
import reScheduleData from '../../../../assets/JSONData/JobsData/reScheduleData';
import { SearchBar } from '../../../../components';
import { FilterJob } from '../../../../components/FilterJob/FilterJob';
import JobAssign from '../../jobAssign/jobAssign';


export default class JobReschedule extends React.Component {
    constructor() {
        super();
        this.state = {
            data: reScheduleData,
            selected: 'jobNumber',
            status: 'ReSchedule',
            value: 'jobNumber',
            map1: new Map(),

            //status: 'Reschedule'
        }
        this.arrayholder = [];
        this.jobFilter = React.createRef();
        this.openFilterPage = this.openFilterPage.bind(this);
    };

    componentDidMount() {
        this.arrayholder = this.state.data;
    }

    selectedValue(data) {
        this.setState({ value: data })
    }

    openFilterPage() {
        this.jobFilter.current.setModalVisible(true, this.state.status);
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
        const newData = this.arrayholder.filter(function (item) {
            const itemData = item.jobNumber.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            data: newData,
            text: text
        }
        )
    };
    SearchFilterFunction(text) {
        if (this.state.value == 'jobNumber') {
            const newData = this.arrayholder.filter(function (item) {
                const itemData = item.jobNumber.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            this.setState({
                data: newData,
                text: text
            },
            )
        }
        if (this.state.value == 'scheduleDate') {
            const newData = this.arrayholder.filter(function (item) {
                const itemData = item.scheduleDate.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            this.setState({
                data: newData,
                text: text
            },
            )
        }
        if (this.state.value == 'jobType') {
            const newData = this.arrayholder.filter(function (item) {
                const itemData = item.jobType.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            this.setState({
                data: newData,
                text: text
            },
            )
        }
        if (this.state.value == 'completedDate') {
            const newData = this.arrayholder.filter(function (item) {
                const itemData = item.completedDate.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            this.setState({
                data: newData,
                text: text
            },
            )
        }
        if (this.state.value == 'servicePerson') {
            const newData = this.arrayholder.filter(function (item) {
                const itemData = item.servicePerson.toUpperCase()
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
        return (
            <View style={styles.container}>
                <View style={styles.searchView}>
                    <View style={{ flex: 10 }}>
                        <SearchBar placeholder={'Search By ' + this.state.value}
                            onChangeText={(text) => this.SearchFilterFunction(text)} />
                    </View>
                    <View style={styles.filterIcon}>
                        <TouchableOpacity onPress={this.openFilterPage}>
                            <FontAwesome name="filter" size={25} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    extraData={this.state}
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) =>
                        <Card style={styles.viewList}>
                            <View style={{ flex: 0.3, alignItems: 'flex-start', justifyContent: 'center' }}>
                                <CheckBox
                                    checked={this.state.map1.get(item.jobNumber)}
                                    onPress={() => this.toggleCheckbox(item.jobNumber)}
                                />
                            </View>
                            <View style={{ flex: 2 }}>
                                <TouchableOpacity onPress={() => this.refs.modal.setModalVisible(true, item)}>

                                    <View style={styles.sub_view}>
                                        <View style={styles.left_sub_view}>
                                            <Text style={styles.jobNumText}>{item.jobNumber}</Text>
                                        </View>
                                        <View style={styles.right_sub_view}>
                                            <View style={styles.jobTypeView}>
                                                <Text style={styles.jobTypeText}>{item.jobType}</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={styles.text}>Schedule date</Text>
                                        </View>
                                        <View style={styles.middle_view}>
                                            <Text>:</Text>
                                        </View>
                                        <View style={styles.right_view}>
                                            <Text style={styles.text1}>{item.scheduleDate}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={styles.text}>Customer</Text>
                                        </View>
                                        <View style={styles.middle_view}>
                                            <Text>:</Text>
                                        </View>
                                        <View style={styles.right_view}>
                                            <Text style={styles.text1}>{item.contactPerson}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={styles.text}>Contact No</Text>
                                        </View>
                                        <View style={styles.middle_view}>
                                            <Text>:</Text>
                                        </View>
                                        <View style={styles.right_view}>
                                            <Text style={styles.text1}>{item.contactNumber}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={styles.text}>Technician</Text>
                                        </View>
                                        <View style={styles.middle_view}>
                                            <Text>:</Text>
                                        </View>
                                        <View style={styles.right_view}>
                                            <Text style={styles.text1}>{item.servicePerson}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.sub_view}>
                                        <View style={styles.location}>
                                            <Text style={styles.text1}>{item.location}</Text>
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
export { JobReschedule }
