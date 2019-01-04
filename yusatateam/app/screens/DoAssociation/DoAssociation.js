import React from 'react';
import { View,  Modal,  ScrollView, Picker, TextInput } from 'react-native';
import { Text, Header, Button, Body, Right, Left } from 'native-base';
import { AppLoading } from 'expo';
import { Ionicons, Entypo, FontAwesome, Feather } from '@expo/vector-icons';

import styles from './Styles';

export default class DoAssociation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            isLoading: true,
            item: {},
            comments: '',
            device: '',
            sim: ''
        }
        this.deviceList = [
            {label: 'Device 1', value: ' Device 1'},
            {label: 'Device 2', value: ' Device 2'},
            {label: 'Device 3', value: ' Device 3'},
            {label: 'Device 4', value: ' Device 4'},
            {label: 'Device 5', value: ' Device 5'}
        ];
        this.simList = [
            {label: 'Sim 1', value: ' Sim 1'},
            {label: 'Sim 2', value: ' Sim 2'},
            {label: 'Sim 3', value: ' Sim 3'},
            {label: 'Sim 4', value: ' Sim 4'},
            {label: 'Sim 5', value: ' Sim 5'}
        ];
        this.onClose = this.onClose.bind(this);
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }

    setModalVisible(visible, item={}) {
        this.setState({
            modalVisible: visible,
            item: item
        }, function () {
            this.setState({ status: this.state.item.status });
        });
    }

    onClose() {
        this.setState({ modalVisible: !this.state.modalVisible })
    }

    render() {
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onDismiss={() => {
                        this.setState({ modalVisible: !this.state.modalVisible })
                    }}
                    onRequestClose={() => {
                        this.setState({ modalVisible: !this.state.modalVisible })
                    }} >

                    <View style={styles.main_container}>
                        <View style={styles.container}>

                            <Header style={styles.header}>
                                <Left>
                                    <Button transparent onPress={this.onClose}>
                                        <Feather name='arrow-left' color='#fff' size={24} />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text style={styles.title}>JOBS20NOV2018</Text>
                                </Body>
                                <Right/>
                            </Header>

                            <View style={styles.inner_container}>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <View style={styles.first_view}>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Job type</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <View style={styles.job_type}>
                                                    <Text style={styles.job_type_text}>Install</Text>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Schedule date</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <Text style={styles.value_text}>20 Nov 2018 12:50</Text>
                                            </View>
                                        </View>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Completed date</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <Text style={styles.value_text}>-  -  -</Text>
                                            </View>
                                        </View>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Technician</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <Text style={styles.value_text}>Yash Gulati</Text>
                                            </View>
                                        </View>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Job location</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <View><Entypo name='location-pin' size={24} color='#d9534f' /></View>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={styles.value_text}>
                                                        84/122 sector 8 pratap nagar, jaipur rajasthan
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Status</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <View style={styles.status_view}>
                                                    <Text style={styles.status_text}>Completed</Text>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Payment mode</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <Text style={styles.value_text}>COD</Text>
                                            </View>
                                        </View>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Amount</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <FontAwesome name='rupee' size={14} color='gray' />
                                                <Text style={styles.value_text}>6500</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.second_view}>
                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Customer name</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <Text style={styles.value_text}>Premsagar Choudhary</Text>
                                            </View>
                                        </View>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Customer contact</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <Ionicons name='ios-call' size={24} color='#5cb85c' />
                                                <Text style={styles.value_text}>+918605665320</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.second_view}>

                                        <View style={styles.picker_view}>
                                            <View style={styles.device_picker}>
                                                <Picker
                                                    selectedValue={this.state.device}
                                                    style={styles.picker}
                                                    onValueChange={(itemValue, itemIndex) => this.setState({ device: itemValue })}>
                                                    {this.deviceList.map((item,index) =>
                                                        <Picker.Item key={index} label={item.label} value={item.value} />
                                                    )}
                                                </Picker>
                                            </View>
                                            <View style={styles.device_picker}>
                                                <Picker
                                                    selectedValue={this.state.sim}
                                                    style={styles.picker}
                                                    onValueChange={(itemValue, itemIndex) => this.setState({ sim: itemValue })}>
                                                    {this.simList.map((item,index) =>
                                                        <Picker.Item key={index} label={item.label} value={item.value} />
                                                    )}
                                                </Picker>
                                            </View>
                                        </View>

                                        <View style={styles.left_view}>
                                            <Text style={styles.key_text}>Comments</Text>
                                        </View>

                                        <View style={styles.comment_box}>
                                            <View style={styles.comment_input_view}>
                                                <TextInput
                                                    placeholder='Write comment here...'
                                                    multiline={true}
                                                    underlineColorAndroid='transparent'
                                                    style={styles.comment_text}
                                                    onChangeText={(text) => this.setState({ comments: text })}
                                                    value={this.state.comments}
                                                />
                                            </View>
                                        </View>

                                    </View>

                                    <View style={styles.second_view}>
                                        <View style={styles.button_view}>
                                            <Button style={styles.button}
                                                onPress={() => this.setState({ modalVisible: !this.state.modalVisible })}>
                                                <Text>Close</Text>
                                            </Button>
                                        </View>
                                    </View>

                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export { DoAssociation }