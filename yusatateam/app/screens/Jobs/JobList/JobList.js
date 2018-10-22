import React from 'react';
import { View, FlatList, TouchableOpacity, } from 'react-native';
import { List, Right, Text, Button, Icon } from 'native-base';
import styles from './styles';
import JobDetails from '../JobDetails/JobDetails';
export default class JobList extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    'jobNumber': 'VOCT092015',
                    'jobStatus': 'completed',
                    'companyName': 'Yusata infotech Private Limited',
                    'jobType': 'Install',
                    'jobName': 'Job Name',
                    'scheduleDate': '10/10/2018 20:00',
                    'servicePerson': 'Yash Gulati',
                    'contactPerson': 'Mr. Vinayak Sharma',
                    'contactNumber': '+91 8945623622',
                    'cashOnDelivery': 'Yes',
                    'amount': 'Rs. 5000',
                    'training': 'Yes'
                },
                {
                    'jobNumber': 'VOCT092016',
                    'jobStatus': 'completed',
                    'companyName': 'Yusata infotech Private Limited',
                    'jobType': 'Install',
                    'jobName': 'Job Name',
                    'scheduleDate': '10/10/2018 20:00',
                    'servicePerson': 'Yash Gulati',
                    'contactPerson': 'Rahul',
                    'contactNumber': '+91 8945623622',
                    'cashOnDelivery': 'yes',
                    'amount': 'Rs. 5000',
                    'training': 'yes'
                },
                {
                    'jobNumber': 'VOCT092017',
                    'jobStatus': 'completed',
                    'companyName': 'Yusata infotech Private Limited',
                    'jobType': 'Install',
                    'jobName': 'Job Name',
                    'scheduleDate': '10/10/2018 20:00',
                    'servicePerson': 'Yash Gulati',
                    'contactPerson': 'Rahul',
                    'contactNumber': '+91 8945623622',
                    'cashOnDelivery': 'yes',
                    'amount': 'Rs. 5000',
                    'training': 'yes'
                },
                {
                    'jobNumber': 'VOCT092018',
                    'jobStatus': 'completed',
                    'companyName': 'Yusata infotech Private Limited',
                    'jobType': 'Install',
                    'jobName': 'Job Name',
                    'scheduleDate': '10/10/2018 20:00',
                    'servicePerson': 'Yash Gulati',
                    'contactPerson': 'Rahul',
                    'contactNumber': '+91 8945623622',
                    'cashOnDelivery': 'yes',
                    'amount': 'Rs. 5000',
                    'training': 'yes'
                },
            ],
            items: [],
            list: '',
            status: 'completed'
        }
        this.arrayholder = [];
        this.changeTabStatus = this.changeTabStatus.bind(this);
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
    changeTabStatus(tabStatus) {
        this.setState({ status: tabStatus },
            function () {
                console.log(this.state.status)
            });
    }

    render() {
        return (

            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => item.jobNumber.toString()}
                    renderItem={({ item, index }) =>
                        <View style={styles.viewList}>
                            {this.state.status == item.jobStatus ?
                                <List elevation={5} style={styles.list}>
                                    <View avatar noBorder >
                                        <View>
                                            <TouchableOpacity onPress={() => this.refs.modal.setModalVisible(true, item)}>
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
                                        </View>

                                    </View>
                                </List>
                                : null}
                        </View>
                    } >
                </FlatList>
                <JobDetails ref='modal' />
            </View>
        )
    }
}
export { JobList }
