import React from 'react';
import {
    View,
    Text,
    Modal,
    Button
} from 'react-native';
import styles from './styles';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';

export default class TechDetails extends React.Component {
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
                                <Text style={styles.header_text}>Akash Dhayal</Text>
                            </View>
                            
                        </View>

                        <View style={styles.View_Container}>

                            <View style={styles.Margin_View}>
                                <View style={styles.Level_Flex}>
                                    <Text style={styles.Text_Style}>Total Jobs </Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.View_Style}>10</Text>
                                </View>
                            </View>

                            <View style={styles.Margin_View}>
                                <View style={styles.Level_Flex} >
                                    <Text style={styles.Text_Style}>Completed Jobs</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.View_Style}>5</Text>
                                </View>
                            </View>

                            <View style={styles.Margin_View}>
                                <View style={styles.Level_Flex} >
                                    <Text style={styles.Text_Style}>In Progress Jobs</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.View_Style}>1</Text>
                                </View>
                            </View>

                            <View style={styles.Margin_View}>
                                <View style={styles.Level_Flex} >
                                    <Text style={styles.Text_Style}>Pending Jobs</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.Text_Flex}>
                                    <Text style={styles.View_Style}>4</Text>
                                </View>
                            </View>

                            <View style={styles.Margin_View}>
                                <View style={styles.Level_Flex} >
                                    <Text style={styles.Text_Style}>Status</Text>
                                </View>
                                <View style={styles.Column_Flex}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.status}>
                                    <Text style={styles.status_text}>On Job</Text>
                                    <Entypo name='location-pin' size={20} color='#d9534f' />
                                </View>
                            </View>

                            <View style={styles.Mobile_Level}>
                                <View style={{ flex: 0.15, justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Ionicons name='ios-call' size={27} color='#5cb85c' />
                                </View>
                                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text style={styles.View_Style}>85465256555</Text>
                                </View>

                            </View>
                            
                            <View style={styles.Button_View}>
                                <Button
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}
                                    title="Assign Job"
                                    color="#0073b7"
                                />
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

export { TechDetails }