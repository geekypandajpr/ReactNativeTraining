import React from 'react';
import { View, FlatList, TouchableOpacity, CheckBox,TouchableWithoutFeedback } from 'react-native';
import { List, Right, Text, Button, Icon, Card, Footer, FooterTab } from 'native-base';
import styles from './styles';
import JobDetails from '../../JobDetails/JobDetails';
import pendingData from '../../../../assets/JSONData/JobsData/pendingData';
import { Checkbox } from '../../../../components';
import JobAssign from '../../jobAssign/jobAssign'



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
    render() {
        
        return (
            <View style={styles.container}>
               <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) =>
                        <Card style={styles.viewList}>
                            <View style={{ flex: 0.3, alignItems: 'flex-start', justifyContent: 'center' }}>
                                <Checkbox />
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
                <Footer>
                    <FooterTab>
                        <Button style={styles.footerbutton} onPress={ () => this.refs.assign.setModalVisible(true)}>
                            <Text style={styles.footerbuttonText}>Assign Jobs</Text>
                        </Button>
                        
                    </FooterTab>
                </Footer>
                <JobDetails ref='modal' />
                <JobAssign ref='assign'/>
            </View>
        )
    }
}
export { JobPending }
