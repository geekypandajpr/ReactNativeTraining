import React from 'react';
import { View, FlatList, TouchableOpacity, CheckBox } from 'react-native';
import { List, Right, Text, Button, Icon, Card, Footer, FooterTab } from 'native-base';
import styles from './styles';
import JobDetails from '../../JobDetails/JobDetails';
import scheduleData from '../../../../assets/JSONData/JobsData/scheduleData';
import colors from '../../../../constants/colors';
export default class JobSchedule extends React.Component {
    constructor() {
        super();
        this.state = {
            data: scheduleData,
            items: [],
            list: '',
            checkbox: false
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
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) =>
                        <Card style={styles.viewList}>
                            <View style={{ flex: 1 }}>
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
                <JobDetails ref='modal' />
            </View>
        )
    }
}
export { JobSchedule }
