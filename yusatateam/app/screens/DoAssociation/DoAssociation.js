import React from 'react';
import { ScrollView, BackHandler, TextInput, KeyboardAvoidingView } from 'react-native';
import { Text, Button, View } from 'native-base';
import { AppLoading } from 'expo';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { serviceActions } from '../../redux/actions';
import call from 'react-native-phone-call';
import styles from './Styles';
import { globalStyles, colors, typeCode } from '../../styles';
import { Toolbar, UnderlineText, SinglePicker, Activityindication } from '../../components';
import functions from '../../common/functions';

const STATUS = [
    { "label": "Entered", "value": "ENTERED" },
    { "label": "Accepted", "value": "ACCEPTED" },
    { "label": "On-Job", "value": "ONJOB" },
    { "label": "Re-Schedule", "value": "RESCHEDULE" },
    { "label": "Completed", "value": "COMPLETED" },
    { "label": "Cancel", "value": "CANCEL" },
];

const STATUS_COLOR = {
    "ENTERED": '#0073b7',
    "ACCEPTED": '#5E35A6',
    "ON_JOB": '#007aff',
    "COMPLETED": '#5cb85c',
    "RESCHEDULED": '#f0ad4e',
    "CANCELLED": '#d9534f'
};

const DEVICE_LIST_NAME = {
    "INSTALL": "Free Devices",
    "UNINSTALL": "Installed Devices",
    "REPAIR": "Installed Devices",
    "REPLACE": "Installed Devices"
}

const SIM_LIST_NAME = {
    "INSTALL": "Free Sims",
    "UNINSTALL": "Installed Sims",
    "REPAIR": "Installed Sims",
    "REPLACE": "Installed Sims"
}

const STATUS_KEY = "STATUS";
const STATUS_KEY_VALUE = "Change status";
const DEVICE_KEY = "DEVICE";
const DEVICE_KEY_VALUE = "Select device";
const SIM_KEY = "SIM";
const SIM_KEY_VALUE = "Select sim";
const REPLACED_SIM_KEY = "REPLACED SIM";
const REPLACED_SIM_KEY_VALUE = "Select Replaced sim";
const REPLACED_DEVICE_KEY = "REPLACED DEVICE";
const REPLACED_DEVICE_KEY_VALUE = "Select Replaced Device";

export class DoAssociation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            comments: '',
            item: '',
            DefectiveDeviceArray: [],
            DefectiveSimArray: [],
            ReplaceSimArray: [],
            ReplaceDeviceArray: [],
            dropdowns: new Map()
        }
        this.getSelectedValue = this.getSelectedValue.bind(this);
        this.doAssignment = this.doAssignment.bind(this);
        this.singlePickerRef = React.createRef();
        this.flag = '';
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }
    phoneCall() {
        const args = {
            number: this.state.item.customerMobileNo,
            prompt: false
        }
        call(args).catch(console.error)
    }

    componentDidMount() {
        const item = this.props.navigation.state.params.item;
        this.setState({ item: item });

        var FreeSim = {
            "listType": item.serviceTypeName,
            "orderCode": typeCode.SIM_ORDER_CODE,
        };
        var FreeDevice = {
            "listType": item.serviceTypeName,
            "orderCode": typeCode.DEVICE_ORDER_CODE
        };
        var DefectiveSim = FreeSim;
        var DefectiveDevice = FreeDevice;
        var ReplaceSim;
        var ReplaceDevice;
        if (item.serviceTypeName === 'REPLACE') {
            DefectiveSim["replacementDropdown"] = "defectiveitem";
            ReplaceSim = {
                "listType": item.serviceTypeName,
                "orderCode": typeCode.SIM_ORDER_CODE,
            };
            ReplaceSim["replacementDropdown"] = "replacementitem";

            DefectiveDevice["replacementDropdown"] = "defectiveitem";
            ReplaceDevice = {
                "listType": item.serviceTypeName,
                "orderCode": typeCode.DEVICE_ORDER_CODE
            };
            ReplaceDevice["replacementDropdown"] = "replacementitem";
        }
        this.props.onfetchDropDownList(DefectiveSim, ReplaceSim, DefectiveDevice, ReplaceDevice);

        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

        const dropdowns = new Map(this.state.dropdowns);
        dropdowns.set(STATUS_KEY, [STATUS_KEY_VALUE, null]);
        dropdowns.set(DEVICE_KEY, [DEVICE_KEY_VALUE, null]);
        dropdowns.set(SIM_KEY, [SIM_KEY_VALUE, null]);
        dropdowns.set(REPLACED_SIM_KEY, [REPLACED_SIM_KEY_VALUE, null])
        dropdowns.set(REPLACED_DEVICE_KEY, [REPLACED_DEVICE_KEY_VALUE, null])
        this.setState({ dropdowns: dropdowns });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.simDeviceData !== nextProps.simDeviceData) {
            var DefectiveDeviceArray = [];
            var DefectiveSimArray = [];
            var ReplaceSimArray = [];
            var ReplaceDeviceArray = [];

            if (nextProps.simDeviceData.DefectiveDevice.results) {
                var DefectiveDeviceData = nextProps.simDeviceData.DefectiveDevice.results.listInventory;
                for (let index in DefectiveDeviceData) {
                    const obj = { "label": DefectiveDeviceData[index].esn, "value": DefectiveDeviceData[index].itemInvLotId };
                    DefectiveDeviceArray.push(obj);
                }
            }

            if (nextProps.simDeviceData.DefectiveSim.results) {
                var DefectiveSimData = nextProps.simDeviceData.DefectiveSim.results.listInventory;
                for (let index in DefectiveSimData) {
                    const obj = { "label": DefectiveSimData[index].msidn, "value": DefectiveSimData[index].itemInvLotId };
                    DefectiveSimArray.push(obj);
                }
            }

            if (nextProps.simDeviceData.ReplaceDevice.results) {
                var ReplaceDeviceData = nextProps.simDeviceData.ReplaceDevice.results.listInventory;
                for (let index in ReplaceDeviceData) {
                    const obj = { "label": ReplaceDeviceData[index].esn, "value": ReplaceDeviceData[index].itemInvLotId };
                    ReplaceDeviceArray.push(obj);
                }
            }

            if (nextProps.simDeviceData.ReplaceSim.results) {
                var ReplaceSimData = nextProps.simDeviceData.ReplaceSim.results.listInventory;
                for (let index in ReplaceSimData) {
                    const obj = { "label": ReplaceSimData[index].msidn, "value": ReplaceSimData[index].itemInvLotId };
                    ReplaceSimArray.push(obj);
                }
            }

            this.setState({
                DefectiveDeviceArray: DefectiveDeviceArray,
                DefectiveSimArray: DefectiveSimArray,
                ReplaceSimArray: ReplaceSimArray,
                ReplaceDeviceArray: ReplaceDeviceArray
            })
        }

    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    getSelectedValue(item) {
        const dropdowns = new Map(this.state.dropdowns);
        dropdowns.set(this.flag, [item.label, item.value]);
        this.setState({ dropdowns: dropdowns });
    }

    openPicker(key, list, title) {
        this.flag = key;
        this.singlePickerRef.current.setModalVisible(true, title, list);
    }

    doAssignment() {
        if (this.checkRequiredFields()) {
            if (this.state.item.serviceTypeName == "REPLACE") {
                var item = {
                    "inventoryId": [
                        this.state.dropdowns.get(SIM_KEY)[1],
                        this.state.dropdowns.get(DEVICE_KEY)[1],
                        this.state.dropdowns.get(REPLACED_SIM_KEY)[1],
                        this.state.dropdowns.get(REPLACED_DEVICE_KEY)[1],
                    ],
                    "orderType": this.state.item.serviceTypeName,
                    "replace": {
                        "defectiveSimId": this.state.dropdowns.get(SIM_KEY)[1],
                        "defectiveDeviceId": this.state.dropdowns.get(DEVICE_KEY)[1],
                        "replaceSimId": this.state.dropdowns.get(REPLACED_SIM_KEY)[1],
                        "replaceDeviceId": this.state.dropdowns.get(REPLACED_DEVICE_KEY)[1],
                    },
                    "serviceHeaderId": this.state.item.headerId,
                }
            } else {
                var item = {
                    "orderType": this.state.item.serviceTypeName,
                    "inventoryId": [this.state.dropdowns.get(SIM_KEY)[1],
                    this.state.dropdowns.get(DEVICE_KEY)[1]],
                    //"status": this.state.dropdowns.get(STATUS_KEY)[1],
                    "serviceHeaderId": this.state.item.headerId,

                }
            }
            //alert(JSON.stringify(item));
            this.props.addInventory(item);
        } else {
            functions.showToast('Please fill all required fields', 'warning');
        }
    }

    /**Function to validate mandatory fields for Add GPS Device API*/
    checkRequiredFields() {
        if (this.state.item.serviceTypeName == "REPLACE") {
            if (this.state.dropdowns.get(SIM_KEY)[1]
                && this.state.dropdowns.get(DEVICE_KEY)[1]
                && this.state.dropdowns.get(REPLACED_SIM_KEY)[1]
                && this.state.dropdowns.get(REPLACED_DEVICE_KEY)[1]) {
                return true
            }
        } else {
            if (this.state.dropdowns.get(SIM_KEY)[1]
                && this.state.dropdowns.get(DEVICE_KEY)[1]) {
                return true
            }
        }
        return false;
    }

    render() {
        const { goBack } = this.props.navigation;
        const { item } = this.state;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.main_container}>
                    <Activityindication visible={this.props.simDeviceData.isLoading} />
                    <Activityindication visible={this.props.executeServiceData.isLoading} />
                    <Toolbar title={item.orderNumber} leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()} />

                    <View style={styles.inner_container}>
                        <KeyboardAvoidingView behavior='padding' enabled style={globalStyles.keyboardAvoiding}>
                            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='always'>
                                <View style={styles.first_view}>

                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>Job type</Text>
                                        </View>
                                        <View style={styles.middle_view}>
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>:</Text>
                                        </View>
                                        <View style={styles.right_view}>
                                            <View style={styles.job_type}>
                                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4, color: '#000' }]}>{item.serviceTypeName}</Text>
                                            </View>
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
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>-  -  -</Text>
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
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>{item.salePerson}</Text>
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
                                                    {item.companyName} </Text>
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
                                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4, color: '#fff' }]}>{item.serviceStatus}</Text>
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
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>
                                                {item.cashOnDelivery == 'Y' ? 'Yes' : 'No'}
                                            </Text>
                                        </View>
                                    </View>
                                    {item.amountCollection ?
                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>Amount</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>{item.amountCollection}</Text>
                                            </View>
                                        </View>
                                        : null
                                    }
                                </View>

                                <View style={styles.second_view}>
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
                                            <Ionicons name='ios-call' size={24} color='#5cb85c' onPress={() => this.phoneCall()} />
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>{item.customerMobileNo}</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.second_view}>

                                    {/* <View style={styles.picker_view}>
                                        <UnderlineText
                                            name="Status"
                                            value={this.state.dropdowns.get(STATUS_KEY)[0]}
                                            isMandatory={true}
                                            upperView={true}
                                            onpress={() => this.openPicker(STATUS_KEY, STATUS, 'Status')}
                                        />
                                    </View> */}
                                    <View style={styles.picker_view}>
                                        <UnderlineText
                                            name={DEVICE_LIST_NAME[item.serviceTypeName]}
                                            value={this.state.dropdowns.get(DEVICE_KEY)[0]}
                                            isMandatory={true}
                                            upperView={true}
                                            onpress={() => this.openPicker(DEVICE_KEY, this.state.DefectiveDeviceArray, DEVICE_LIST_NAME[item.serviceTypeName])}
                                        />
                                    </View>
                                    <View style={styles.picker_view}>
                                        <UnderlineText
                                            name={SIM_LIST_NAME[item.serviceTypeName]}
                                            value={this.state.dropdowns.get(SIM_KEY)[0]}
                                            isMandatory={true}
                                            upperView={true}
                                            onpress={() => this.openPicker(SIM_KEY, this.state.DefectiveSimArray, SIM_LIST_NAME[item.serviceTypeName])}
                                        />
                                    </View>
                                    {item.serviceTypeName === 'REPLACE' ?
                                        <View>
                                            <View style={styles.picker_view}>
                                                <UnderlineText
                                                    name="Free Devices"
                                                    value={this.state.dropdowns.get(REPLACED_DEVICE_KEY)[0]}
                                                    isMandatory={true}
                                                    upperView={true}
                                                    onpress={() => this.openPicker(REPLACED_DEVICE_KEY, this.state.ReplaceDeviceArray, 'Free Devices')}
                                                />
                                            </View>

                                            <View style={styles.picker_view}>
                                                <UnderlineText
                                                    name="Free Sims"
                                                    value={this.state.dropdowns.get(REPLACED_SIM_KEY)[0]}
                                                    isMandatory={true}
                                                    upperView={true}
                                                    onpress={() => this.openPicker(REPLACED_SIM_KEY, this.state.ReplaceSimArray, 'Free Sims')}
                                                />
                                            </View>
                                        </View>
                                        : null
                                    }

                                    <View style={styles.left_view}>
                                        <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>Comments</Text>
                                    </View>

                                    <View style={styles.comment_box}>
                                        <View style={styles.comment_input_view}>
                                            <TextInput
                                                placeholder='Write comment here...'
                                                multiline={true}
                                                underlineColorAndroid='transparent'
                                                style={[styles.comment_text, { fontFamily: 'Roboto' }]}
                                                onChangeText={(text) => this.setState({ comments: text })}
                                                value={this.state.comments}
                                            />
                                        </View>
                                    </View>

                                </View>

                                <View style={styles.second_view}>
                                    <View style={styles.button_view}>
                                        <Button style={[styles.button, { backgroundColor: colors.HEADER_COLOR }]}
                                            onPress={this.doAssignment}>
                                            <Text style={{ fontFamily: 'Roboto' }}>Submit</Text>
                                        </Button>
                                    </View>
                                </View>

                            </ScrollView>
                        </KeyboardAvoidingView>
                    </View>
                    <SinglePicker ref={this.singlePickerRef} selectedValue={(item) => this.getSelectedValue(item)} />
                </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        simDeviceData: state.simDeviceData,
        executeServiceData: state.executeServiceData
    }
}

function mapDispatchToProps(dispatch) {
    return {

        onfetchDropDownList: (DefectiveSim, ReplaceSim, DefectiveDevice, ReplaceDevice) => dispatch(serviceActions.serviceDeviceRequest(DefectiveSim, ReplaceSim, DefectiveDevice, ReplaceDevice)),
        addInventory: (inventoryRequest) => dispatch(serviceActions.executeServiceRequest(inventoryRequest))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoAssociation)