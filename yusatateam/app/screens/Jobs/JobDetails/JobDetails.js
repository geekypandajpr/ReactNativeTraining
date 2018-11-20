import React from 'react';
import {
    View,
    ScrollView,
    Modal,
    Text
} from 'react-native';
import { Button } from 'native-base';
import styles from './styles';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
export default class JobDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            item: {},
            status: ''
        }
    }
    setModalVisible(visible, item) {
        this.setState({ modalVisible: visible, item: item });
    }


    render() {
        const details = this.state.item;
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({ modalVisible: !this.state.modalVisible });
                    }}>
                    <View style={styles.container}>

                        <View style={styles.header_view}>

                            <View style={styles.service_num}>
                                <Text style={styles.header_text}>{details.jobNumber}</Text>
                            </View>
                            <View style={styles.right_sub_view}>
                                <View style={styles.jobTypeView}>
                                    <Text style={styles.jobTypeText}>{details.jobType}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.View_Container}>

                            <View style={styles.Margin_View}>
                                <View style={styles.Level_Flex}>
                                    <Text style={styles.Order_text}>Schedule Date</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.Order_texts}>{details.scheduleDate}</Text>
                                </View>
                            </View>

                            { details.servicePerson == null ? null : 
                            <View style={styles.Margin_View}>
                                <View style={styles.Level_Flex}>
                                    <Text style={styles.Order_text}>Technician Name</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.Order_texts}>{details.servicePerson}</Text>
                                </View>
                            </View>
                            }

                            <View style={styles.Margin_View}>
                                <View style={styles.Level_Flex}>
                                    <Text style={styles.Order_text}>Customer Name</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.Order_texts}>{details.contactPerson}</Text>
                                </View>
                            </View>

                            { details.completedDate == null ? null : 
                                <View style={styles.Margin_View}>
                                    <View style={styles.Level_Flex}>
                                        <Text style={styles.Order_text}>Completed Date</Text>
                                    </View>
                                    <View style={styles.Column_Flex}>
                                        <Text>:</Text>
                                    </View>
                                    <View style={styles.Text_Flex}>
                                        <Text style={styles.Order_texts}>{details.completedDate}</Text>
                                    </View>
                                </View>
                            }


                            <View style={styles.Margin_View}>
                                <View style={styles.Level_Flex}>
                                    <Text style={styles.Order_text}>JobName</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.Order_texts}>{details.jobName}</Text>
                                </View>
                            </View>

                            <View style={styles.Margin_View}>
                                <View style={styles.Level_Flex}>
                                    <Text style={styles.Order_text}>COD</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.Order_texts}>{details.cashOnDelivery}</Text>
                                </View>
                            </View>

                            <View style={styles.Margin_View}>
                                <View style={styles.Level_Flex}>
                                    <Text style={styles.Order_text}>Training</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.Order_texts}>{details.training}</Text>
                                </View>
                            </View>

                            <View style={styles.Margin_View}>
                                <View style={styles.Level_Flex} >
                                    <Text style={styles.Text_Style}>Amount </Text>
                                </View>
                                <View style={styles.column_price}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.View_price}>
                                    <View style={styles.Rupee_icon}>
                                        <FontAwesome name='rupee' size={18} color='gray' />
                                    </View>
                                    <View style={styles.Text_price}>
                                        <Text style={styles.ViewDescription_Text}>{details.amount}</Text>
                                    </View>
                                </View>
                            </View>


                            <View style={styles.Mobile_Level}>
                                <View style={{ flex: 0.12, justifyContent: 'center' }}>
                                    <Ionicons name='ios-call' size={27} color='#5cb85c' />
                                </View>
                                <View style={{ flex: 2, justifyContent: 'center' }}>
                                    <Text style={styles.View_Style}>{details.contactNumber}</Text>
                                </View>
                            </View>

                            <View style={styles.Mobile_Level}>
                                <View style={{ flex: 0.12, justifyContent: 'center' }}>
                                    <Entypo name='location-pin' size={27} color='#d9534f' />
                                </View>
                                <View style={{ flex: 2, justifyContent: 'center' }}>
                                    <Text style={styles.View_Style}>{details.location}</Text>
                                </View>
                            </View>

                            <View style={styles.close_button}>
                                <Button block success onPress={() => {
                                    this.setState({ modalVisible: !this.state.modalVisible });
                                }}>
                                    <Text style={styles.close_button_Text}>Close</Text>
                                </Button>
                            </View>

                        </View>
                    </View>
                </Modal>
            </View>

        );
    }
}
export { JobDetails }