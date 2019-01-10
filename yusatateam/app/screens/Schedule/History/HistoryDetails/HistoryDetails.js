import React from 'react';
import { View,   ScrollView, Picker, TextInput } from 'react-native';
import { Text, Header, Button, Body, Right, Left } from 'native-base';
import { AppLoading } from 'expo';
import {Toolbar} from '../../../../components'
import { Ionicons, Entypo, FontAwesome, Feather } from '@expo/vector-icons';

import styles from './styles';

export default class HistoryDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }

    render() {
        const { goBack } = this.props.navigation;
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex :1}}>
                 {/* this.state.isLoading === true ? <AppLoading /> : */}
                 <Toolbar title='JOBS20NOV2018' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        // setting='add-circle-outline' settingType='MaterialIcons' onSettingsPress={() => navigate('Settings')}
                    />
                    <View style={styles.main_container}>
                        <View style={styles.container}>

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
                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Device</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <Text style={styles.value_text}>1234568</Text>
                                            </View>
                                        </View>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Sim</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <Text style={styles.value_text}>Airtel</Text>
                                            </View>
                                        </View>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Comments</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <Text style={styles.value_text}>Working Good...</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.second_view}>
                                        <View style={styles.button_view}>
                                            <Button style={styles.button}
                                                onPress={() => goBack()}>
                                                <Text>Close</Text>
                                            </Button>
                                        </View>
                                    </View>

                                </ScrollView>
                            </View>
                        </View>
                    </View>
            </View>
        );
    }
}

export { HistoryDetails }