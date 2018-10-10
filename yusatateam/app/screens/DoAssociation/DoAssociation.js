import React from 'react';
import {
    Text,
    View,
    Modal,
    TextInput,
    Picker,
    ScrollView
} from 'react-native';
import { Button } from 'native-base';
import styles from './Styles';
import { AppLoading } from 'expo';
import { MaterialIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

export default class DoAssociation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            isLoading: true,
            item: {},
            status: '',
            device: '',
            sim: ''
        }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }

    setModalVisible(visible, item) {
        this.setState({
            modalVisible: visible,
            item: item
        }, function () {
            this.setState({ status: this.state.item.status });
        });
    }

    render() {
        const details = this.state.item;
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this.setState({ modalVisible: !this.state.modalVisible }) }}>
                    <View style={styles.modal_container}>

                        {/**Header View*/}
                        <View style={styles.header_view}>
                            <View style={styles.service_num}>
                                <Text style={styles.header_text}>{details.serviceNumber}</Text>
                            </View>
                            <View style={styles.schedule_view}>
                                <MaterialIcons name='schedule' size={20} color='#1766A6' />
                                <Text style={styles.job_text}>{details.jobDate}</Text>
                            </View>
                        </View>

                        {/**Child View*/}
                        <View style={styles.modal_child_container}>
                            <ScrollView showsVerticalScrollIndicator={false}>

                                {/**Company Name*/}
                                <View style={styles.main_view}>
                                    <View style={styles.first_view}>
                                        <Text style={styles.value_text}>{details.companyName}</Text>
                                    </View>
                                </View>


                                {/**Vehicle View*/}
                                <View style={styles.main_view}>
                                    <View style={styles.first_view}>
                                        <View style={styles.icon_view}>
                                            <MaterialCommunityIcons name='van-utility' color='#d9534f' size={24} />
                                        </View>
                                        <View style={styles.icon_text_view}>
                                            <Text style={styles.value_text}>{details.vehicleNumber}</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.addres_view}>
                                    <Text style={styles.address_header_text}>Contact:</Text>
                                    <Text style={styles.address_text}>{details.contactPerson}</Text>
                                    <Text style={styles.address_text}>{details.contactMobilenumber}</Text>
                                    <Text style={styles.address_text}>{details.location}</Text>
                                </View>

                                {/**Status and Service type View*/}
                                <View style={styles.main_view}>
                                    <View style={styles.first_view}>
                                        <View style={styles.status_picker}>
                                            <Picker
                                                selectedValue={this.state.status}
                                                style={styles.picker}
                                                onValueChange={(itemValue, itemIndex) => this.setState({ status: itemValue })}>
                                                <Picker.Item label="Entered" value="Entered" />
                                                <Picker.Item label="Accepted" value="Accepted" />
                                                <Picker.Item label="Onjob" value="Onjob" />
                                                <Picker.Item label="Completed" value="Completed" />
                                            </Picker>
                                        </View>
                                    </View>
                                    <View style={styles.second_view}>
                                        <View style={styles.service_type_view}>
                                            <Text style={styles.service_type_text}>{details.serviceType}</Text>
                                        </View>
                                    </View>
                                </View>

                                {/**Device View*/}
                                <View style={styles.main_view}>
                                    <View style={styles.first_view}>
                                        <View style={styles.status_picker}>
                                            <Picker
                                                selectedValue={this.state.device}
                                                style={styles.picker}
                                                onValueChange={(itemValue, itemIndex) => this.setState({ device: itemValue })}>
                                                <Picker.Item label="Device1" value="Device1" />
                                                <Picker.Item label="Device2" value="Device2" />
                                                <Picker.Item label="Device3" value="Device3" />
                                                <Picker.Item label="Device4" value="Device4" />
                                            </Picker>
                                        </View>
                                    </View>
                                </View>

                                {/**Sim View*/}
                                <View style={styles.main_view}>
                                    <View style={styles.first_view}>
                                        <View style={styles.status_picker}>
                                            <Picker
                                                selectedValue={this.state.sim}
                                                style={styles.picker}
                                                onValueChange={(itemValue, itemIndex) => this.setState({ sim: itemValue })}>
                                                <Picker.Item label="Sim1" value="Sim1" />
                                                <Picker.Item label="Sim2" value="Sim2" />
                                                <Picker.Item label="Sim3" value="Sim3" />
                                                <Picker.Item label="Sim4" value="Sim4" />
                                            </Picker>
                                        </View>
                                    </View>
                                </View>

                                {/**Comment Box*/}
                                <View style={styles.comment_view}>
                                    <Text style={styles.value_text}>Comment</Text>
                                    <View style={styles.comment_box}>
                                        <View style={styles.comment_input_view}>
                                            <TextInput
                                                placeholder='Write comment here...'
                                                multiline={true}
                                                underlineColorAndroid='transparent'
                                                style={styles.comment_text}
                                                onChangeText={(text) => this.setState({ text })}
                                                value={this.state.text}
                                            />
                                        </View>
                                    </View>
                                </View>

                                {/**Close Button*/}
                                <View style={styles.button_view}>
                                    <Button style={styles.submit_button}
                                        onPress={() => { this.setState({ modalVisible: !this.state.modalVisible }) }}>
                                        <Text style={styles.button_text}>Close</Text>
                                    </Button>
                                    <Button style={styles.submit_button}
                                        onPress={() => { this.setState({ modalVisible: !this.state.modalVisible }) }}>
                                        <Text style={styles.button_text}>Submit</Text>
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

export { DoAssociation }