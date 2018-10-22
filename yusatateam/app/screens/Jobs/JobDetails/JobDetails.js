import React from 'react';
import {
    View,
    Modal,
    Button,
    Text
} from 'react-native';
import styles from './styles';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
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
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View style={styles.container}>

                        <View style={styles.header_view}>

                            <View style={styles.service_num}>
                                <Text style={styles.header_text}>{details.jobNumber}</Text>
                            </View>
                            <View style={styles.schedule_view}>
                                <View style={[styles.Status_Button, { backgroundColor: "#5cb85c" }]} >
                                    <Text style={styles.Status_Style}>{details.jobType}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.View_Container}>

                             <View style={styles.Margin_View}>
                                <View style={styles.Level_Flex}>
                                    <Text style={styles.Order_text}>Contact Person</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.Order_texts}>{details.contactPerson}</Text>
                                </View>
                            </View>

                            <View style={styles.Margin_View}>
                                <View style={styles.Level_Flex}>
                                    <Text style={styles.Text_Style}>Job Status</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.View_Style}>{details.jobStatus}</Text>
                                </View>
                            </View>

                            <View style={styles.Margin_View}>
                                <View style={styles.Level_Flex} >
                                    <Text style={styles.Text_Style}>Service Person</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.View_Style}>{details.servicePerson}</Text>
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

                            <View style={styles.Margin_View}>
                                <View style={styles.Level_Flex} >
                                    <Text style={styles.Text_Style}>Schedule Date</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.View_Style}>{details.scheduleDate}</Text>
                                </View>
                            </View>

                            <View style={styles.Mobile_Level}>
                                <View style={{ flex: 0.3,justifyContent:'center' }}>
                                    <Ionicons name='ios-call' size={27} color='#5cb85c' />
                                </View>
                                <View style={{ flex:2,justifyContent:'center' }}>
                                    <Text style={styles.View_Style}>{details.contactNumber}</Text>
                                </View>
                                <View style={styles.Provider_View} >
                                    <Text style={styles.providerStyle}>{details.jobName}</Text>
                                </View>
                            </View>

                            <View style={{ marginTop:6 }}>
                                <View style={{justifyContent:'center'}}>
                                    <Text style={styles.Text_Style}>Item Description - </Text>
                                </View>
                                <View style={{justifyContent:'center'}} >
                                    <Text style={styles.ViewDescription_Text} >This is device,used for purpose of installation
                                    in the vehicle device install after test </Text>
                                </View>
                            </View>
                            <View style={styles.Button_View}>
                                <View style={{ flex: 1 }}></View>
                                <View style={styles.Button_Style}>
                                    <Button
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}
                                        title="Close"
                                        color="#0073b7"

                                    />
                                </View>
                            </View>

                        </View>
                    </View>
                </Modal>
            </View>

        );
    }
}
export { JobDetails }