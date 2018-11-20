import React from 'react';
import { View, FlatList, TouchableOpacity, CheckBox } from 'react-native';
import { List, Right, Text, Button, Icon, Card } from 'native-base';
import styles from './styles';
import JobDetails from '../../JobDetails/JobDetails';
import pendingData from '../../../../assets/JSONData/JobsData/pendingData';
import colors from '../../../../constants/colors';
import { Ionicons } from '@expo/vector-icons';

export default class JobPending extends React.Component {
    constructor() {
        super();
        this.state = {
            data: pendingData,
            items: [],
            list: '',
            isLoading: true,
            checkbox: false,
            //status: 'pending'
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
                        <Card style={styles.viewList}>
                            <View style={{ flex: 0.3, alignItems: 'flex-start', justifyContent: 'center' }}>
                                <CheckBox
                                    value={this.state.checkbox}
                                    onValueChange={() => this.setState({ checkbox: !this.state.checkbox })}
                                />
                            </View>
                            <View style={{ flex: 2 }}>
                                <TouchableOpacity onPress={() => this.refs.modal.setModalVisible(true, item)} style={{ margin: 10 }}>
                                    <View style={styles.listView}>
                                        <Text style={styles.text}>{item.jobNumber}</Text>
                                        <Text style={styles.text3}>{item.scheduleDate}</Text>
                                    </View>
                                    <View style={styles.listView}>
                                        <View style={styles.sublistView}>
                                            <Text>{item.vehicleNumber}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.listView}>
                                        <Text style={styles.sublistView}>{item.customerName}</Text>
                                        <Text style={styles.text2}>{item.status}</Text>
                                    </View>
                                    <View style={styles.listView}>
                                        <View style={styles.sublistView}>
                                            <Text>{item.customerContact}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.listView}>
                                        <View style={styles.sublistView}>
                                            <Text>{item.location}</Text>
                                        </View>
                                        <Right style={{ flex: 3 }}>
                                            <Button rounded success style={styles.button}>
                                                <Text uppercase={false}>{item.jobType}</Text>
                                            </Button>
                                        </Right>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Card>
                    } >
                </FlatList>
                <View style={styles.button_view}>
                    <Button bordered warning>
                        <Text>Assign</Text>
                    </Button>
                </View>
                <JobDetails ref='modal' />
            </View>
        )
    }
}
export { JobPending }
