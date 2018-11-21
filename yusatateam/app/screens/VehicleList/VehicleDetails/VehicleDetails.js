import React from 'react';
import {
    View,
    Modal,
    Text,
    ScrollView
} from 'react-native';
import { Button } from 'native-base';
import styles from './styles';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
export default class VehicleDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            item: {},
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
                                    <Text style={styles.header_text}>{details.ORDER}</Text>
                                </View>
                                <View style={styles.right_sub_view}>
                                    <View style={styles.jobTypeView}>
                                        <Text style={styles.jobTypeText}>{details.status}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.View_Container}>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <View style={styles.Margin_View}>
                                        <View style={styles.Level_Flex}>
                                            <Text style={styles.Order_text}>MSIDN No</Text>
                                        </View>
                                        <View style={styles.Column_Flex}>
                                            <Text>:</Text>
                                        </View>
                                        <View style={styles.Text_Flex}>
                                            <Text style={styles.Order_texts}>{details.MSIDN}</Text>
                                        </View>
                                    </View>                                   
                                        <View style={styles.Margin_View}>
                                            <View style={styles.Level_Flex}>
                                                <Text style={styles.Order_text}>ICCID No</Text>
                                            </View>
                                            <View style={styles.Column_Flex}>
                                                <Text>:</Text>
                                            </View>
                                            <View style={styles.Text_Flex}>
                                                <Text style={styles.Order_texts}>{details.ICCID}</Text>
                                            </View>
                                        </View>                                
                                    <View style={styles.Margin_View}>
                                        <View style={styles.Level_Flex}>
                                            <Text style={styles.Order_text}>Provider</Text>
                                        </View>
                                        <View style={styles.Column_Flex}>
                                            <Text>:</Text>
                                        </View>
                                        <View style={styles.Text_Flex}>
                                            <Text style={styles.Order_texts}>{details.Provider}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.Mobile_Level}>
                                        <View style={{ flex: 0.2, justifyContent: 'center' }}>
                                            <Ionicons name='ios-call' size={27} color='#5cb85c' />
                                        </View>
                                        <View style={{ flex: 2, justifyContent: 'center' }}>
                                            <Text style={styles.View_Style}>{details.Mobile}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.close_button}>
                                        <Button block success onPress={() => {
                                            this.setState({ modalVisible: !this.state.modalVisible });
                                        }}>
                                            <Text style={styles.close_button_Text}>Close</Text>
                                        </Button>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
    
                    </Modal>
                </View>
        );
    }
}
export { VehicleDetails }