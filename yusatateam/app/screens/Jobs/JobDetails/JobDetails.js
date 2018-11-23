import React from 'react';
import {
    View,
    ScrollView,
    Modal
} from 'react-native';
import { Text, Header, Left, Body, Right } from 'native-base';
import { AppLoading } from 'expo';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';

import styles from './styles';
import { Statusbar } from '../../../components';
import colors from '../../../constants/colors';

export default class JobDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            modalVisible: false,
            item: {}
        }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false });
    };

    setModalVisible(visible, item) {
        this.setState({ modalVisible: visible, item: item });
    }

    render() {
        const details = this.state.item;
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View style={{ flex: 1 }}>
                {/* <Statusbar backgroundColor={colors.STATUSBAR_COLOR} barStyle="light-content" /> */}
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onDismiss={() => {
                        this.setState({ modalVisible: !this.state.modalVisible })
                    }}
                    onRequestClose={() => {
                        this.setState({ modalVisible: !this.state.modalVisible })
                    }}>
                    <View style={{ flex: 1 }}>
                        <Header style={styles.header}>
                            <Body>
                                <Text style={styles.title}>JOBS20NOV2018</Text>
                            </Body>
                            <Right>
                                <Ionicons name='ios-close' color="#000" size={40} style={{ marginRight: 20 }}
                                    onPress={() => this.setState({ modalVisible: !this.state.modalVisible })} />
                            </Right>
                        </Header>

                        <View style={styles.container}>
                            <ScrollView>
                                <View style={styles.view}>

                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={styles.key_text}>Job number</Text>
                                        </View>
                                        <View style={styles.middle_view}>
                                            <Text style={styles.colon}>:</Text>
                                        </View>
                                        <View style={styles.right_view}>
                                            <Text style={styles.value_text}>JOBS20NOV2018</Text>
                                        </View>
                                    </View>

                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={styles.key_text}>Job type</Text>
                                        </View>
                                        <View style={styles.middle_view}>
                                            <Text style={styles.colon}>:</Text>
                                        </View>
                                        <View style={styles.right_view}>
                                            <View style={styles.job_type}>
                                                <Text style={styles.value_text}>Install</Text>
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

                                <View style={styles.view1}>

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

                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export { JobDetails }