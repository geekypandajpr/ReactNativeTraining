import React from 'react';
import {
    View,
    Modal
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

                            <View style={{flexDirection:'row'}}>
                                <Text>ItemNumber</Text>
                                <Text note>Item12</Text>
                            </View>
                            <View >
                                <Text>orderNumber</Text>
                                <Text note>ORDER001</Text>
                            </View>
                            <View >
                                <Text>iccid</Text>
                                <Text note>iccid252</Text>
                            </View>
                            <View >
                                <Text>msidn</Text>
                                <Text note>msidn1256</Text>
                            </View>
                            <View >
                                <Text>plan</Text>
                                <Text note>planTest</Text>
                            </View>

                            
                                <View>
                                    <Text>itemDescription :</Text>
                                    <Text note>this is device</Text>
                                </View>
                            

                            <View style={{ flexDirection: 'row' }} >
                                <View>
                                    <Text>+91 85465256555</Text>
                                </View>
                                <View style={styles.Provider_View} >
                                    <Text style={styles.providerStyle}>Airtel</Text>
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