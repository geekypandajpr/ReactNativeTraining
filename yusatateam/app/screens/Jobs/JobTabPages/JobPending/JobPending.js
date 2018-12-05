import React from 'react';
import { View, FlatList, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Text, Button, Card, Footer, FooterTab, CheckBox } from 'native-base';
import styles from './styles';
import JobDetails from '../../JobDetails/JobDetails';
import pendingData from '../../../../assets/JSONData/JobsData/pendingData';
import { SearchBar } from '../../../../components';
import JobAssign from '../../jobAssign/jobAssign';
import { FilterJob } from '../../../../components/FilterJob/FilterJob';
var itemData;

export default class JobPending extends React.Component {
    constructor() {
        super();
        this.state = {
            data: pendingData,
            map1: new Map(null),
            value: new Map(),
            status: 'Pending',
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
       // console.log(this.state.searchData)
        //this.setState({searchData});
    }
    openFilterPage() {
        this.state.searchData=[];
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
        return (
            <View style={styles.container}>
                <View style={styles.searchView}>
                    <View style={{ flex: 10 }}>
                        <SearchBar placeholder={'Search By '}
                            onChangeText={(text) => this.SearchFilterFunction(text)} />
                    </View>
                    <View style={styles.filterIcon}>
                        <TouchableOpacity onPress={this.openFilterPage}>
                            <FontAwesome name="filter" size={25} color="gray" />
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    extraData={this.state}
                    data={this.state.data}
                    keyExtractor={(item, index) => item.jobNumber}
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
export { JobPending }
