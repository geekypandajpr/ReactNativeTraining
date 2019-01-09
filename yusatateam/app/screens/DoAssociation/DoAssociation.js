import React from 'react';
import { View, ScrollView, BackHandler, TextInput } from 'react-native';
import { Text, Button } from 'native-base';
import { AppLoading } from 'expo';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';

import styles from './Styles';
import { globalStyles, colors } from '../../styles';
import { Toolbar, UnderlineText } from '../../components';

export default class DoAssociation1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            comments: '',
            device: '',
            sim: ''
        }
        this.deviceList = [
            { label: 'Device 1', value: ' Device 1' },
            { label: 'Device 2', value: ' Device 2' },
            { label: 'Device 3', value: ' Device 3' },
            { label: 'Device 4', value: ' Device 4' },
            { label: 'Device 5', value: ' Device 5' }
        ];
        this.simList = [
            { label: 'Sim 1', value: ' Sim 1' },
            { label: 'Sim 2', value: ' Sim 2' },
            { label: 'Sim 3', value: ' Sim 3' },
            { label: 'Sim 4', value: ' Sim 4' },
            { label: 'Sim 5', value: ' Sim 5' }
        ];
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    render() {
        const { goBack } =this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.main_container}>

                    <Toolbar title='Job Number' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}/>

                    <View style={styles.inner_container}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.first_view}>

                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto', padding: 4}]}>Job type</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto', padding: 4}]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <View style={styles.job_type}>
                                            <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto', padding: 4, color: '#000'}]}>Install</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto', padding: 4}]}>Schedule date</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto', padding: 4}]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto', padding: 4}]}>20 Nov 2018 12:50</Text>
                                    </View>
                                </View>

                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto', padding: 4}]}>Completed date</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto', padding: 4}]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto', padding: 4}]}>-  -  -</Text>
                                    </View>
                                </View>

                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto', padding: 4}]}>Technician</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto', padding: 4}]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto', padding: 4}]}>Yash Gulati</Text>
                                    </View>
                                </View>

                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto', padding: 4}]}>Job location</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto', padding: 4}]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <View><Entypo name='location-pin' size={24} color='#d9534f' /></View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto', padding: 4}]}>
                                                84/122 sector 8 pratap nagar, jaipur rajasthan </Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto', padding: 4}]}>Status</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto', padding: 4}]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <View style={styles.status_view}>
                                            <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto', padding: 4, color:'#fff'}]}>Completed</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto', padding: 4}]}>Payment mode</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto', padding: 4}]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto', padding: 4}]}>COD</Text>
                                    </View>
                                </View>

                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto', padding: 4}]}>Amount</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto', padding: 4}]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <FontAwesome name='rupee' size={14} color='gray' />
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto', padding: 4}]}>6500</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.second_view}>
                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto', padding: 4}]}>Customer name</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto', padding: 4}]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto', padding: 4}]}>Premsagar Choudhary</Text>
                                    </View>
                                </View>

                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto', padding: 4}]}>Customer contact</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto', padding: 4}]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <Ionicons name='ios-call' size={24} color='#5cb85c' />
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto', padding: 4}]}>+918605665320</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.second_view}>

                                <View style={styles.picker_view}>
                                    <UnderlineText
                                        name="Status"
                                        value={'Change status'}
                                        // value={this.state.dropdowns.get(VEHICLE_KEY)[0]}
                                        isMandatory={true}
                                        upperView={true}
                                        // onpress={() => this.openPicker(VEHICLE_KEY, this.state.vehicleList, title[1])}
                                    />
                                </View>
                                <View style={styles.picker_view}>
                                    <UnderlineText
                                        name="Device"
                                        value={'Select device'}
                                        // value={this.state.dropdowns.get(VEHICLE_KEY)[0]}
                                        isMandatory={true}
                                        upperView={true}
                                        // onpress={() => this.openPicker(VEHICLE_KEY, this.state.vehicleList, title[1])}
                                    />
                                </View>
                                <View style={styles.picker_view}>
                                    <UnderlineText
                                        name="Sim"
                                        value={'Select sim'}
                                        // value={this.state.dropdowns.get(VEHICLE_KEY)[0]}
                                        isMandatory={true}
                                        upperView={true}
                                        // onpress={() => this.openPicker(VEHICLE_KEY, this.state.vehicleList, title[1])}
                                    />
                                </View>

                                <View style={styles.left_view}>
                                    <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto', padding: 4}]}>Comments</Text>
                                </View>

                                <View style={styles.comment_box}>
                                    <View style={styles.comment_input_view}>
                                        <TextInput
                                            placeholder='Write comment here...'
                                            multiline={true}
                                            underlineColorAndroid='transparent'
                                            style={[styles.comment_text, {fontFamily: 'Roboto'}]}
                                            onChangeText={(text) => this.setState({ comments: text })}
                                            value={this.state.comments}
                                        />
                                    </View>
                                </View>

                            </View>

                            <View style={styles.second_view}>
                                <View style={styles.button_view}>
                                    <Button style={[styles.button,{backgroundColor: colors.HEADER_COLOR}]}
                                        onPress={() => this.setState({ modalVisible: !this.state.modalVisible })}>
                                        <Text style={{fontFamily: 'Roboto'}}>Submit</Text>
                                    </Button>
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                </View>
        );
    }
}

export { DoAssociation1 }