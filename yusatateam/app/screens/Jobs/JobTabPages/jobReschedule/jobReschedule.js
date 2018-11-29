import React from 'react';
import { View, FlatList, TouchableOpacity} from 'react-native';
import { List, Right, Text, Button, Icon, Card,Footer,FooterTab,CheckBox} from 'native-base';
import styles from './styles';
import JobDetails from '../../JobDetails/JobDetails';
import reScheduleData from '../../../../assets/JSONData/JobsData/reScheduleData';
import { SearchBar } from '../../../../components';
import {FilterJob} from '../../../../components/FilterJob/FilterJob';
import { Ionicons,FontAwesome} from '@expo/vector-icons';

export default class JobReschedule extends React.Component {
    constructor() {
        super();
        this.state = {
            data: reScheduleData,
            items: [],
            list: '',
            selected : 'jobNumber',
            status: 'ReSchedule',
            value : 'jobNumber',

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
        this.setState({value : data})
    }
     openFilterPage() {
        this.jobFilter.current.setModalVisible(true, this.state.status);
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
 
    onValueChange(value) {
        this.setState({
          selected: value
        });
      }

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
                console.log(textData);
                console.log(itemData.indexOf(textData));
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
                console.log(textData);
                console.log(itemData.indexOf(textData));
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
                console.log(textData);
                console.log(itemData.indexOf(textData));
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
        console.log(this.state.value);
        return (
          
            <View style={styles.container}>
             <View style={{flexDirection :'row',height: 50,backgroundColor : '#efefef',justifyContent: 'center',alignItems: 'center'}}>
                <View style={{flex :10}}>
                <SearchBar placeholder={'Search jobs'}
                    onChangeText={(text) => this.SearchFilterFunction(text)} 
                   />
                    </View>
                        <View style={{flex : 1.5,alignItems : 'center',justifyContent : 'center',height: 40,backgroundColor: '#0073b7',borderRadius: 2,marginRight:2}}>
                        <TouchableOpacity  onPress={this.openFilterPage}>
                        <FontAwesome name="filter" size={32} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
               <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) =>
                        <Card style={styles.viewList}>
                            <View style={{ flex: 0.3, alignItems: 'flex-start', justifyContent: 'center' }}>
                                <CheckBox />
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
                <Footer>
                    <FooterTab>
                        <Button style={styles.footerbutton}>
                            <Text style={styles.footerbuttonText}>Assign Jobs</Text>
                        </Button>
                    </FooterTab>
                </Footer>
                <FilterJob ref={this.jobFilter} getSelected={(data) => this.selectedValue(data)} />
                <JobDetails ref='modal' />
            </View>
        )
    }
}
export { JobReschedule }
