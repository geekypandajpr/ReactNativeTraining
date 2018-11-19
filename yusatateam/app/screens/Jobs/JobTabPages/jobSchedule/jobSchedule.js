import React from 'react';
import { View, FlatList, TouchableOpacity, } from 'react-native';
import { List, Right, Text, Button, Icon, Card } from 'native-base';
import styles from './styles';
import JobDetails from '../../JobDetails/JobDetails';
import scheduleData from '../../../../assets/JSONData/JobsData/scheduleData';
export default class JobSchedule extends React.Component {
    constructor() {
        super();
        this.state = {
            data: scheduleData,
            items: [],
            list: '',
           // status: 'schedule'
        }
        this.arrayholder = [];
        //this.changeTabStatus = this.changeTabStatus.bind(this);
    };
    componentDidMount() {
        this.arrayholder = this.state.data;
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
    // changeTabStatus(tabStatus) {
    //     this.setState({ status: tabStatus },
    //         function () {
    //             console.log(this.state.status)
    //         });
    // }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => item.jobNumber.toString()}
                    renderItem={({ item, index }) =>
                        <View style={styles.viewList}>
                            
                                        <Card  style={styles.mainCard}> 
                                            <TouchableOpacity onPress={() => this.refs.modal.setModalVisible(true, item)} style={{margin : 10}}>
                                                <View style={styles.listView}>
                                                    <Text style={styles.text}>{item.jobNumber}</Text>
                                                    <Text style={styles.text3}>{item.scheduleDate}</Text>
                                                </View>
                                                <View style={styles.listView}>                                                
                                                    <Text  style={styles.sublistView}>{item.contactPerson}</Text>
                                                    <Text style={styles.text2}>{item.jobStatus}</Text>
                                                </View>
                                                <View style={styles.listView}>                                                  
                                                    <View style={styles.sublistView}>
                                                        <Text>{item.contactNumber}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.listView}>                                           
                                                    <View style={styles.sublistView}>
                                                        <Text>{item.companyName}</Text>
                                                    </View>
                                                    <Right style={{ flex: 3 }}>
                                                        <Button rounded success style={styles.button}>
                                                            <Text uppercase={false}>{item.jobType}</Text>
                                                        </Button>
                                                    </Right>
                                                </View>
                                            </TouchableOpacity>
                                        </Card>
                                
                        </View>
                    } >
                </FlatList>
                <JobDetails ref='modal' />
            </View>
        )
    }
}
export { JobSchedule }
