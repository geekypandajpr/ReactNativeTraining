import React from 'react';
import { View, ScrollView, BackHandler, Linking } from 'react-native';
import { Text, Button,List, ListItem } from 'native-base';
import { AppLoading } from 'expo';
import { Ionicons, MaterialCommunityIcons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import { Toolbar, Activityindication } from '../../../components';
import styles from './Styles';
import { globalStyles, colors } from '../../../styles';
import Status from '../Status';
import { serviceActions } from '../../../redux/actions';

const STATUS_COLOR = {
    "ENTERED": '#0073b7',
    "ACCEPTED": '#5E35A6',
    "ON_JOB": '#007aff',
    "COMPLETED": '#5cb85c',
    "RESCHEDULED": '#f39c12',
    "CANCELLED": '#d9534f'
};

const TYPE_COLOR = {
    "INSTALL"   : "#00a65a",
    "UNINSTALL" : "#00c0ef",
    "REPAIR"    : "#dd4b39",
    "REPLACE"   : "#d81b60"
};

export class ScheduleDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            item: {},
            vehicleArray: [],
            simArray: [],
            deviceArray: [],
            serviceStatus: []
        }
        this.separateList = this.separateList.bind(this);
        this.openStatusModal = this.openStatusModal.bind(this);
        this.statusRef = React.createRef();
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
        this.setState({serviceStatus: this.props.serviceStatus.status});
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
                // deviceArray = item[index].deviceInventory;
                deviceArray.push(item[index].deviceInventory);
                // deviceArray = [...deviceArray, ...item[index].deviceInventory];
            } else if (item[index].simInventory) {
                // simArray = item[index].simInventory;
                simArray.push(item[index].simInventory);
                // simArray = [...simArray, ...item[index].simInventory]
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

    openStatusModal(item) {
        this.statusRef.current.setModalVisible(true, this.state.serviceStatus, item)
    }

    updateStatus(statusReq) { this.props.doStatusUpdate(statusReq); }

    makeCall = (phone) => {
        const url = `tel:${phone}`;
        Linking.canOpenURL(url)
            .then((supported) => {
                if (!supported) {
                    functions.showToast(`Can't handle url: ${url}`, danger);
                } else {
                    return Linking.openURL(url);
                }
            })
            .catch((err) => functions.showToast(err, danger));
    }

    render() {
        const { goBack } = this.props.navigation;
        const item = this.state.item;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={{ flex: 1 }}>
                    <Activityindication visible={this.props.updatedStatusData.isLoading} />

                    <Toolbar title={item.orderNumber}
                        leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()} />

                    <View style={styles.container}>
                        <ScrollView>
                            <View style={styles.view}>

                                <View style={[styles.sub_view, { marginTop: 4 }]}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.title_text, { fontFamily: 'Roboto'}]}>
                                            {item.companyName}
                                        </Text>
                                    </View>
                                    <View style={styles.serviceType}>
                                        <Button transparent
                                            disabled={ item.serviceStatus == 'COMPLETED' || item.serviceStatus == 'CANCELLED' ? true : false }
                                            onPress={()=>this.props.navigation.navigate('DoAssociation',{item})}
                                            style={styles.job_type}>
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', color: colors.PRIMARY }]}>
                                                {item.serviceTypeName}
                                            </Text>
                                        </Button>
                                    </View>
                                </View>

                                <View style={[styles.sub_view, { marginTop: 4 }]}>
                                    <View style={styles.left_view}>
                                        <View style={{marginRight: 5}}>
                                            <MaterialIcons name='location-on' size={24} color={colors.DANGER} />
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto'}]}>
                                                {item.address}
                                            </Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={[styles.sub_view, { marginTop: 4 }]}>
                                    <View style={styles.left_view}>
                                        <View style={{marginRight: 5}}>
                                            <MaterialCommunityIcons name='calendar-clock' size={24} color={colors.PRIMARY} />
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto'}]}>
                                                {item.serviceDate}
                                            </Text>
                                        </View>
                                    </View>
                                </View>

                                {item.serviceStatus == 'COMPLETED' ? 
                                    <View style={[styles.sub_view, { marginTop: 4 }]}>
                                        <View style={styles.left_view}>
                                            <View style={{marginRight: 5}}>
                                                <MaterialCommunityIcons name='calendar-check' size={24} color={colors.SUCCESS} />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto'}]}>
                                                    {item.lastUpdatedOn != null ? item.lastUpdatedOn : '-  -  -'}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                : null
                                }

                                <View style={[styles.sub_view, { marginTop: 4 }]}>
                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>Service status</Text>
                                    </View>
                                    <View style={styles.middle_view}>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>:</Text>
                                    </View>
                                    <View style={styles.right_view}>
                                        <Button transparent
                                            //onPress={() => this.openStatusModal(item)}
                                            style={[
                                                styles.job_type,
                                                { backgroundColor: STATUS_COLOR[item.serviceStatus], borderWidth: 0 }
                                            ]} >
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto',color: '#fff' }]}>
                                                {item.serviceStatus}
                                            </Text>
                                        </Button>
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

                            </View>

                            <View style={[styles.view,{marginTop: 8}]}>
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
                                        <Ionicons name='ios-call' size={24} color={colors.PRIMARY} onPress={()=>this.makeCall(item.customerMobileNo)}/>
                                        <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>
                                            {item.customerMobileNo}
                                        </Text>
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
                                
                                {item.cashOnDelivery == 'N'? null :
                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>Amount</Text>
                                        </View>
                                        <View style={styles.middle_view}>
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>:</Text>
                                        </View>
                                        <View style={styles.right_view}>
                                            <FontAwesome name='rupee' size={14} color='gray' />
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>
                                                {item.amountCollection}
                                            </Text>
                                        </View>
                                    </View>
                                }
                            </View>

                            {this.state.vehicleArray.length !== 0 ?
                                <View style={[styles.view,{marginTop: 8}]}>
                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={[globalStyles.title_text, { fontFamily: 'Roboto', padding: 4 }]}>Vehicles</Text>
                                        </View>
                                    </View>
                                    <List>
                                        {this.state.vehicleArray.map((it, index) =>
                                            // <View style={styles.sub_view} key={index}>
                                            //     <View style={styles.left_view}>
                                            //         <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>
                                            //             {index+1}. {it.vehicleNumber}
                                            //         </Text>
                                            //     </View>
                                            // </View>
                                            <ListItem key={index}>
                                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>
                                                    {it.vehicleNumber}
                                                </Text>
                                            </ListItem>
                                        )}
                                    </List>
                                </View>
                                : null
                            }

                            {this.state.deviceArray.length !== 0 ?
                                <View style={[styles.view,{marginTop: 8}]}>
                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={[globalStyles.title_text, { fontFamily: 'Roboto', padding: 4 }]}>Devices</Text>
                                        </View>
                                    </View>
                                    <List>
                                        {this.state.deviceArray.map((device, index) => 
                                            // <View style={styles.sub_view} key={index}>
                                            //     <View style={styles.left_view}>
                                            //         <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>
                                            //             {index+1}. {device.esn}
                                            //         </Text>
                                            //     </View>
                                            // </View>
                                            <ListItem key={index}>
                                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto'}]}>
                                                    {device.imei}
                                                </Text>
                                            </ListItem>
                                        )}
                                    </List>
                                </View>
                                : null
                            }

                            {this.state.simArray.length !== 0 ?
                                <View style={[styles.view,{marginTop: 8}]}>
                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={[globalStyles.title_text, { fontFamily: 'Roboto', padding: 4 }]}>Sims</Text>
                                        </View>
                                    </View>
                                    <List>
                                        {this.state.simArray.map((sim, index) =>
                                            // <View style={styles.sub_view} key={index}>
                                            //     <View style={styles.left_view}>
                                            //         <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>
                                            //             {index+1}. {sim.mobileNumber}
                                            //         </Text>
                                            //     </View>
                                            // </View>
                                            <ListItem key={index}>
                                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>
                                                    {sim.mobileNumber}
                                                </Text>
                                            </ListItem>
                                        )}
                                    </List>
                                </View>
                                : null
                            }

                            <View style={[styles.view,{marginTop: 8}]}>
                                <View style={styles.button_view}>
                                    <Button style={styles.button}
                                        onPress={() => goBack()}>
                                        <Text style={{ fontFamily: 'Roboto' }}>Close</Text>
                                    </Button>
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                    <Status ref={this.statusRef} updateStatus={(statusReq) => { this.updateStatus(statusReq) }} />
                </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        updatedStatusData: state.updatedStatusData,
        serviceStatus: state.serviceStatus,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        doStatusUpdate: (statusReq) => dispatch(serviceActions.updateStatus(statusReq))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleDetails);