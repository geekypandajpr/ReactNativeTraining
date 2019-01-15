import React from 'react';
import { View, ScrollView, BackHandler } from 'react-native';
import { Text, Button } from 'native-base';
import { AppLoading } from 'expo';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';

import { Toolbar } from '../../../components';
import styles from './Styles';
import { globalStyles, colors } from '../../../styles';

const STATUS_COLOR = {
    "ENTERED": '#0073b7',
    "ACCEPTED": '#5E35A6',
    "ONJOB": '#007aff',
    "COMPLETED": '#5cb85c',
    "RESCHEDULED": '#f0ad4e',
    "CANCELLED": '#d9534f',
};

export default class ScheduleDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            item: {},
            vehicleArray: [],
            simArray: [],
            deviceArray: []
        }
        this.separateList = this.separateList.bind(this);
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false });
    };

    componentDidMount() {
        const item = this.props.navigation.state.params.item;
        this.separateList(item);
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    separateList(list) {
        const item = list.lineDetailsList;
        var vehicleArray = [];
        var simArray = [];
        var deviceArray = [];
        for (var index in item) {
            if (item[index].vehicleDetails) {
                vehicleArray.push(item[index].vehicleDetails);
            } else if (item[index].deviceInventory) {
                deviceArray = item[index].deviceInventory;
            } else if (item[index].simInventory) {
                simArray = item[index].simInventory;
            }
        }
        this.setState({ item: list, vehicleArray: vehicleArray, simArray: simArray, deviceArray: deviceArray });
    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    render() {
        const { goBack } = this.props.navigation;
        const item = this.state.item;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={{ flex: 1 }}>
                    <Toolbar title={item.orderNumber}
                        leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()} />

                    <View style={styles.container}>
                        <ScrollView>
                            <View style={styles.view}>

                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>Company Name</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>{item.companyName}</Text>
                                    </View>
                                </View>

                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>Job type</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <View style={styles.job_type}>
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4, color: colors.HEADER_COLOR }]}>{item.serviceTypeName}</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>Service name</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>{item.serviceName}</Text>
                                    </View>
                                </View>

                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>Schedule date</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>{item.serviceDate}</Text>
                                    </View>
                                </View>

                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>Completed date</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>
                                            {item.completedDate != null ? item.completedDate : '-  -  -'}
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>Technician</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>
                                            {item.salePerson}
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>Job location</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <View><Entypo name='location-pin' size={24} color='#d9534f' /></View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>
                                                {item.address}
                                            </Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>Status</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <View style={[styles.status_view, { backgroundColor: STATUS_COLOR[item.serviceStatus] }]}>
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4, color: '#fff' }]}>
                                                {item.serviceStatus}
                                            </Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>COD</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>{item.cashOnDelivery}</Text>
                                    </View>
                                </View>

                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>Amount</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <FontAwesome name='rupee' size={14} color='gray' />
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>{item.amountCollection}</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={styles.view1}>
                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>Customer name</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>{item.customerName}</Text>
                                    </View>
                                </View>

                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>Customer contact</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <Ionicons name='ios-call' size={24} color='#5cb85c' />
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>{item.customerMobileNo}</Text>
                                    </View>
                                </View>

                                <View style={styles.sub_view}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>Training</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>{item.training}</Text>
                                    </View>
                                </View>
                            </View>

                            {this.state.vehicleArray.length !== 0 ?
                                <View style={styles.view1}>
                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={[globalStyles.title_text, { fontFamily: 'Roboto', padding: 4 }]}>Vehicles</Text>
                                        </View>
                                    </View>
                                    {this.state.vehicleArray.map((it, index) => 
                                        <View style={styles.sub_view} key={index}>
                                            <View style={styles.left_view}>
                                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>
                                                    {index+1}. {it.vehicleNumber}
                                                </Text>
                                            </View>
                                        </View>
                                    )}
                                </View>
                                : null
                            }

                            {this.state.deviceArray.length !== 0 ?
                                <View style={styles.view1}>
                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={[globalStyles.title_text, { fontFamily: 'Roboto', padding: 4 }]}>Devices</Text>
                                        </View>
                                    </View>
                                    {this.state.deviceArray.map((device, index) => 
                                        <View style={styles.sub_view} key={index}>
                                            <View style={styles.left_view}>
                                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>
                                                    {index+1}. {device.imei}
                                                </Text>
                                            </View>
                                        </View>
                                    )}
                                </View>
                                : null
                            }

                            {this.state.simArray.length !== 0 ?
                                <View style={styles.view1}>
                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={[globalStyles.title_text, { fontFamily: 'Roboto', padding: 4 }]}>Sims</Text>
                                        </View>
                                    </View>
                                    {this.state.simArray.map((sim, index) => 
                                        <View style={styles.sub_view} key={index}>
                                            <View style={styles.left_view}>
                                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>
                                                    {index+1}. {sim.mobileNumber}
                                                </Text>
                                            </View>
                                        </View>
                                    )}
                                </View>
                                : null
                            }

                            <View style={styles.view1}>
                                <View style={styles.button_view}>
                                    <Button style={styles.button}
                                        onPress={() => goBack()}>
                                        <Text style={{ fontFamily: 'Roboto' }}>Close</Text>
                                    </Button>
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                </View>
        );
    }
}

export { ScheduleDetails }