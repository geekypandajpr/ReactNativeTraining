import React from 'react';
import {
    View,
    Modal,
    Button,
    Text
} from 'react-native';
import styles from './styles';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
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

                             <View style={styles.Margin_View}>
                                <View style={styles.Level_Flex}>
                                    <Text style={styles.Order_text}>Order#</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.Order_texts}>order252</Text>
                                </View>
                            </View>

                            <View style={styles.Margin_View}>
                                <View style={styles.Level_Flex}>
                                    <Text style={styles.Text_Style}>Iccid </Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.View_Style}>iccid252</Text>
                                </View>
                            </View>

                            <View style={styles.Margin_View}>
                                <View style={styles.Level_Flex} >
                                    <Text style={styles.Text_Style}>Msidn</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.View_Style}>msidn1256</Text>
                                </View>
                            </View>

                            <View style={styles.Margin_View}>
                                <View style={styles.Level_Flex} >
                                    <Text style={styles.Text_Style}>Price </Text>
                                </View>
                                <View style={styles.column_price}>
                                    <Text>:</Text>
                                </View>

                                <View style={styles.View_price}>
                                <View style={styles.Rupee_icon}>
                                    <FontAwesome name='rupee' size={18} color='gray' />
                                </View>
                                <View style={styles.Text_price}>
                                    <Text style={styles.ViewDescription_Text}>1520</Text>
                                </View>
                                </View>
                            </View>

                            <View style={styles.Margin_View}>
                                <View style={styles.Level_Flex} >
                                    <Text style={styles.Text_Style}>Plan </Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.View_Style}>plantext</Text>
                                </View>
                            </View>

                            <View style={styles.Mobile_Level}>
                                <View style={{ flex: 0.3,justifyContent:'center' }}>
                                    <Ionicons name='ios-call' size={27} color='#5cb85c' />
                                </View>
                                <View style={{ flex:2,justifyContent:'center' }}>
                                    <Text style={styles.View_Style}>85465256555</Text>
                                </View>
                                <View style={styles.Provider_View} >
                                    <Text style={styles.providerStyle}>lenovo</Text>
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
                </Modal>
            </View>

        );
    }
}
export { SimDetails }