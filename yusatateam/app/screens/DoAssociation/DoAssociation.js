import React from 'react';
import { ScrollView, BackHandler, TextInput, KeyboardAvoidingView } from 'react-native';
import { Text, Button, View } from 'native-base';
import { AppLoading } from 'expo';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { serviceActions } from '../../redux/actions';

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
    "ONJOB": '#007aff',
    "COMPLETED": '#5cb85c',
    "RESCHEDULED": '#f0ad4e',
    "CANCELLED": '#d9534f',
};

const STATUS_KEY = "STATUS";
const STATUS_KEY_VALUE = "Change status";
const DEVICE_KEY = "DEVICE";
const DEVICE_KEY_VALUE = "Select device";
const SIM_KEY = "SIM";
const SIM_KEY_VALUE = "Select sim";

export class DoAssociation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            comments: '',
            item: {},
            deviceList : '',
            simList :'',
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

    componentDidMount() {
        var data = 
            {
                "listType": "INSTALL",
                "orderCode": typeCode.SIM_ORDER_CODE,
              }
              var data1 = 
              {
                  "listType": "INSTALL",
                  "orderCode": typeCode.DEVICE_ORDER_CODE
                }
        this.props.onfetchDropDownList(data,data1);
        this.setState({ item: this.props.navigation.state.params.item })
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        const dropdowns = new Map(this.state.dropdowns);
        dropdowns.set(STATUS_KEY, [STATUS_KEY_VALUE, null]);
        dropdowns.set(DEVICE_KEY, [DEVICE_KEY_VALUE, null]);
        dropdowns.set(SIM_KEY, [SIM_KEY_VALUE, null]);
        this.setState({ dropdowns: dropdowns });
    }

    componentWillReceiveProps(nextProps) {
     
        if (this.props.simDeviceData !== nextProps.simDeviceData) {
            if(nextProps.simDeviceData.device.results)
            {
               
                var deviceData = nextProps.simDeviceData.device.results.listInventory;
                var deviceArray=[];
                var deviceObj={};
                for(var i=0;i<deviceData.length;i++)
                {
                    deviceObj["label"]=deviceData[i].orderNumber;
                    deviceArray.push(deviceObj)
                }
                this.setState({ deviceList : deviceArray })
                // alert(JSON.stringify(deviceArray));
            }
            if(nextProps.simDeviceData.sim.results)
            {
                // alert(JSON.stringify(nextProps.simDeviceData.sim.results.listInventory));
                var simData = nextProps.simDeviceData.sim.results.listInventory;
                var simArray=[];
                var simObj={};
                for(var i=0;i<simData.length;i++)
                {
                    simObj["label"]=simData[i].orderNumber;
                    simArray.push(simObj)
                }
                this.setState({ simList : simArray })
                // alert(JSON.stringify(simArray));
            }
            
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
            var item = {
                "device": this.state.dropdowns.get(SIM_KEY)[1],
                "sim": this.state.dropdowns.get(DEVICE_KEY)[1],
                "status": this.state.dropdowns.get(STATUS_KEY)[1],
                "orderType": typeCode.SERVICE_EXECUTE_ORDERTYPE,
                "serviceHeaderId": typeCode.SERVICE_EXECUTE_HEADERID,
            }
            if (this.state.comments !== '') {
                item["comments"] = this.state.comments;
            }
            alert(JSON.stringify(item));
            // this.props.doAssignment(item);
        } else {
            functions.showToast('Please fill all required fields', 'warning');
        }
    }

    /**Function to validate mandatory fields for Add GPS Device API*/
    checkRequiredFields() {
        if (this.state.dropdowns.get(DEVICE_KEY)[1]
            && this.state.dropdowns.get(SIM_KEY)[1]
            && this.state.dropdowns.get(STATUS_KEY)[1]) {
            return true
        }
        return false;
    }

    render() {
        const { goBack } = this.props.navigation;
        const { item } = this.state;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.main_container}>
                    {/* <Activityindication visible={this.props.assignmentData.isLoading} /> */}
                    <Toolbar title='Job Number' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()} />

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
                                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4, color: '#000' }]}>Install</Text>
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
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>20 Nov 2018 12:50</Text>
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
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>Prem</Text>
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
                                                    84/122 sector 8 pratap nagar, jaipur rajasthan </Text>
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
                                            <View style={[styles.status_view, { backgroundColor: STATUS_COLOR['COMPLETED'] }]}>
                                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4, color: '#fff' }]}>Completed</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>Payment mode</Text>
                                        </View>
                                        <View style={styles.middle_view}>
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>:</Text>
                                        </View>
                                        <View style={styles.right_view}>
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>COD</Text>
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
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>6500</Text>
                                        </View>
                                    </View>
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
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>Premsagar Choudhary</Text>
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
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>+918605665320</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.second_view}>

                                    <View style={styles.picker_view}>
                                        <UnderlineText
                                            name="Status"
                                            value={this.state.dropdowns.get(STATUS_KEY)[0]}
                                            isMandatory={true}
                                            upperView={true}
                                            onpress={() => this.openPicker(STATUS_KEY, STATUS, 'Status')}
                                        />
                                    </View>
                                    <View style={styles.picker_view}>
                                        <UnderlineText
                                            name="Device"
                                            value={this.state.dropdowns.get(DEVICE_KEY)[0]}
                                            isMandatory={true}
                                            upperView={true}
                                            onpress={() => this.openPicker(DEVICE_KEY, this.state.deviceList, 'Devices')}
                                        />
                                    </View>
                                    <View style={styles.picker_view}>
                                        <UnderlineText
                                            name="Sim"
                                            value={this.state.dropdowns.get(SIM_KEY)[0]}
                                            isMandatory={true}
                                            upperView={true}
                                            onpress={() => this.openPicker(SIM_KEY, this.state.simList, 'Sims')}
                                        />
                                    </View>
                                    {item.serviceTypeName === 'REPLACE' ?
                                        <View>
                                            <View style={styles.picker_view}>
                                                <UnderlineText
                                                    name="replaceDeviceId"
                                                    value={this.state.dropdowns.get(DEVICE_KEY)[0]}
                                                    isMandatory={true}
                                                    upperView={true}
                                                    onpress={() => this.openPicker(DEVICE_KEY, this.state.deviceList, 'Devices')}
                                                />
                                            </View>

                                            <View style={styles.picker_view}>
                                                <UnderlineText
                                                    name="replaceSimId"
                                                    value={this.state.dropdowns.get(SIM_KEY)[0]}
                                                    isMandatory={true}
                                                    upperView={true}
                                                    onpress={() => this.openPicker(SIM_KEY,this.state.simList, 'Sims')}
                                                />
                                            </View>
                                        </View>
                                        : null}

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

       onfetchDropDownList : (request,request1) => dispatch(serviceActions.serviceDeviceRequest(request,request1)),
        addInventory: (inventoryRequest) => dispatch(serviceActions.executeServiceRequest(inventoryRequest))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoAssociation)