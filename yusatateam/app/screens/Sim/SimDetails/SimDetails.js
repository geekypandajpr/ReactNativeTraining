import React from 'react';
import {
    View,
    Modal,
    TextInput
} from 'react-native';
import { Text } from 'native-base';
import styles from './styles';
export default class SimDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        }
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
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
                                <Text style={styles.header_text}>Item12</Text>
                            </View>

                            <View style={styles.schedule_view}>
                                <View style={[styles.Status_Button, { backgroundColor: "#5cb85c" }]} >
                                    <Text style={styles.Status_Style}>Active</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.View_Container}>

                            <View style={{ flexDirection: 'row' }}>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <View >
                                    <Text style={styles.Text_Style}>orderNumber : </Text>
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.View_Style}>ORDER001</Text>
                                </View>
                                </View> 
                            </View>
                            <View style={{ flexDirection: 'row',marginTop:3 }}>
                                <View >
                                    <Text style={styles.Text_Style}>iccid :</Text>
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.View_Style}>iccid252</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row',marginTop:3 }}>
                                <View >
                                    <Text style={styles.Text_Style}>msidn :</Text>
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.View_Style}>msidn1256</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row',marginTop:3 }}>
                                <View >
                                    <Text style={styles.Text_Style}>unitPrice :</Text>
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.View_Style}>1520</Text>
                                </View>
                            </View>
                            <View style={{marginTop:6}}>
                                <View >
                                    <Text style={styles.Text_Style}>itemDescription - </Text>
                                </View>
                                <View >
                                    <Text style={styles.View_Style}>this is device</Text>
                                </View>
                            </View>
                          
                        </View>
                    </View>
                </Modal>
            </View>

        );
    }
}
export { SimDetails }