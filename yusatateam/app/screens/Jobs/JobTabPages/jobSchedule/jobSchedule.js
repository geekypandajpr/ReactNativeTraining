import React from 'react';
import { View, FlatList, TouchableOpacity, CheckBox } from 'react-native';
import { FontAwesome} from '@expo/vector-icons';
import {Text, Card,} from 'native-base';
import styles from './styles';
import JobDetails from '../../JobDetails/JobDetails';
import scheduleData from '../../../../assets/JSONData/JobsData/scheduleData';
import { SearchBar } from '../../../../components';
import {FilterJob} from '../../../../components/FilterJob/FilterJob';
import {Activityindication} from '../../../../components';
import {globalStyles} from '../../../../styles'

export default class JobSchedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.ScheduleDataValue == undefined ? null : this.props.ScheduleDataValue,
            status: 'schedule',
            value : 'jobNumber',
            searchData : [],
        }
        this.arrayholder = [];
        this.jobFilter = React.createRef();
        this.openFilterPage = this.openFilterPage.bind(this);
    };

    componentDidMount() {
        this.arrayholder = this.state.data;
    }

    selectedValue(data) {
        // this.setState({ value: data });
         for(var key of data.keys())
         {
             //console.log(key)
             this.state.searchData.push(key);
             
         }
         //console.log(this.state.searchData)
         //this.setState({searchData});
     }
    openFilterPage() {
        this.state.searchData=[];
        this.jobFilter.current.setModalVisible(true, this.state.status);
    }
    
    SearchFilterFunction(text) {
        
        const val = this.state.searchData;
        var len=this.state.searchData.length;
       // console.log(len)
       if(len==0)
       {
        const newData = this.arrayholder.filter(function (item) {
            itemData  = item["jobNumber"].toUpperCase();
            const textData = text.toUpperCase()
           
            return itemData.indexOf(textData) > -1
        })
        //console.log(newData);
        this.setState({
            data: newData,
            text: text
        },
        )
       }
       else{
        const newData = this.arrayholder.filter(function (item) {
            itemData  = item[val[0]].toUpperCase();
            for(var i=1;i<len;i++)
            {
                //console.log(val[i])
                //console.log(item[val[i]]);
                itemData  =itemData.concat(item[val[i]]).toUpperCase();
            }
            //console.log(itemData)
            const textData = text.toUpperCase()
           
            return itemData.indexOf(textData) > -1
        })
        //console.log(newData);
        this.setState({
            data: newData,
            text: text
        },
        )
       }
    }


    render() {
        // const values = this.props.ScheduleDataValue == undefined ? null : this.props.ScheduleDataValue
      const {isLoading} = this.props;
        return (
            <View style={styles.container}>
            {/* <Activityindication visible={isLoading}/> */}
             <View style={styles.searchView}>
                <View style={{flex :10}}>
                <SearchBar placeholder={'Search By '}
                    onChangeText={(text) => this.SearchFilterFunction(text)}/>
                    </View>
                        <View style={styles.filterIcon}>
                        <TouchableOpacity  onPress={this.openFilterPage}>
                        <FontAwesome name="filter" size={25} color="gray" />
                            </TouchableOpacity>
                        </View>
                    </View>
                <FlatList
                extraData={this.state}
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) =>
                    <Card style={[styles.viewList, globalStyles.card]}>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity onPress={() => this.refs.modal.setModalVisible(true, item)}>

                                    <View style={styles.sub_view}>
                                        <View style={styles.left_sub_view}>
                                            <Text  style={[globalStyles.title_text,{fontFamily: 'Roboto'}]}>{item.jobNumber}</Text>
                                        </View>
                                        <View style={styles.right_sub_view}>
                                            <View style={styles.jobTypeView}>
                                                <Text style={styles.jobTypeText}>{item.jobType}</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto'}]}>Schedule date</Text>
                                        </View>
                                        <View style={styles.middle_view}>
                                            <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>:</Text>
                                        </View>
                                        <View style={styles.right_view}>
                                            <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>{item.scheduleDate}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto'}]}>Customer</Text>
                                        </View>
                                        <View style={styles.middle_view}>
                                            <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>:</Text>
                                        </View>
                                        <View style={styles.right_view}>
                                            <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>{item.contactPerson}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto'}]}>Contact No</Text>
                                        </View>
                                        <View style={styles.middle_view}>
                                            <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>:</Text>
                                        </View>
                                        <View style={styles.right_view}>
                                            <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>{item.contactNumber}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto'}]}>Technician</Text>
                                        </View>
                                        <View style={styles.middle_view}>
                                            <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>:</Text>
                                        </View>
                                        <View style={styles.right_view}>
                                            <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>{item.servicePerson}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.sub_view}>
                                        <View style={styles.location}>
                                            <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>{item.location}</Text>
                                        </View>
                                    </View>

                                </TouchableOpacity>
                            </View>
                        </Card>
                    } >
                </FlatList>
                <FilterJob ref={this.jobFilter} getSelected={(data) => this.selectedValue(data)} />
                <JobDetails ref='modal' />
            </View>
        )
    }
}
export { JobSchedule }
