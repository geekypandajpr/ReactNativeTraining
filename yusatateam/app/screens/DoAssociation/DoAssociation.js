import React from 'react';
import { ScrollView, BackHandler, TextInput, KeyboardAvoidingView, Linking } from 'react-native';
import { Text, Button, View } from 'native-base';
import { AppLoading } from 'expo';
import { Ionicons, MaterialCommunityIcons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { serviceActions } from '../../redux/actions';

import styles from './Styles';
import { globalStyles, colors, typeCode } from '../../styles';
import { Toolbar, UnderlineText, MultiPicker, Activityindication } from '../../components';
import functions from '../../common/functions';

const STATUS_COLOR = {
    "ENTERED"    : '#0073b7',
    "ACCEPTED"   : '#5E35A6',
    "ON_JOB"     : '#007aff',
    "COMPLETED"  : '#5cb85c',
    "RESCHEDULED": '#f39c12',
    "CANCELLED"  : '#d9534f'
};

const TYPE_COLOR = {
    "INSTALL"   : "#00a65a",
    "UNINSTALL" : "#00c0ef",
    "REPAIR"    : "#dd4b39",
    "REPLACE"   : "#d81b60"
};

const DEVICE_LIST_NAME = {
    "INSTALL": "Free Devices",
    "UNINSTALL": "Installed Devices",
    "REPAIR": "Installed Devices",
    "REPLACE": "Installed Devices"
};

const SIM_LIST_NAME = {
    "INSTALL": "Free Sims",
    "UNINSTALL": "Installed Sims",
    "REPAIR": "Installed Sims",
    "REPLACE": "Installed Sims"
}

export class DoAssociation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            comments: '',
            item: '',

            DefectiveDeviceArray: [],
            DefectiveDeviceMap: new Map(),
            DefectiveDeviceName: '',
            SelectedDefectiveDeviceArray: [],

            DefectiveSimArray: [],
            DefectiveSimMap: new Map,
            DefectiveSimName: '',
            SelectedDefectiveSimArray: [],

            ReplaceSimArray: [],
            ReplaceSimMap: new Map(),
            ReplaceSimName: '',
            SelectedReplaceSimArray: [],

            ReplaceDeviceArray: [],
            ReplaceDeviceMap: new Map(),
            ReplaceDeviceName: '',
            SelectedReplaceDeviceArray: []
        }
        this.doAssignment = this.doAssignment.bind(this);
        this.defectiveDeviceRef = React.createRef();
        this.defectiveSimRef = React.createRef();
        this.replaceDeviceRef = React.createRef();
        this.replaceSimRef = React.createRef();
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
        const item = this.props.navigation.state.params.item;
        this.setState({ item: item });

        var FreeSim = {
            "listType": item.serviceTypeName === 'REPAIR' ? "REPAIREMENT" : item.serviceTypeName,
            "orderCode": typeCode.SIM_ORDER_CODE,
        };
        var FreeDevice = {
            "listType": item.serviceTypeName === 'REPAIR' ? "REPAIREMENT" : item.serviceTypeName,
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
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.simDeviceData !== nextProps.simDeviceData) {
            var DefectiveDeviceArray = [];
            var DefectiveDeviceMap = new Map(this.state.DefectiveDeviceMap);

            var DefectiveSimArray = [];
            var DefectiveSimMap = new Map(this.state.DefectiveSimMap);

            var ReplaceSimArray = [];
            var ReplaceSimMap = new Map(this.state.ReplaceSimMap);

            var ReplaceDeviceArray = [];
            var ReplaceDeviceMap = new Map(this.state.ReplaceDeviceMap);

            if (nextProps.simDeviceData.DefectiveDevice.results) {
                var DefectiveDeviceData = nextProps.simDeviceData.DefectiveDevice.results;
                for (let index in DefectiveDeviceData) {
                    const obj = { "label": DefectiveDeviceData[index].code, "value": DefectiveDeviceData[index].key };
                    DefectiveDeviceArray.push(obj);
                    DefectiveDeviceMap.set(DefectiveDeviceData[index].key, DefectiveDeviceData[index].code);
                }
            }

            if (nextProps.simDeviceData.DefectiveSim.results) {
                var DefectiveSimData = nextProps.simDeviceData.DefectiveSim.results;
                for (let index in DefectiveSimData) {
                    const obj = { "label": DefectiveSimData[index].code, "value": DefectiveSimData[index].key };
                    DefectiveSimArray.push(obj);
                    DefectiveSimMap.set(DefectiveSimData[index].key, DefectiveSimData[index].code);
                }
            }

            if (nextProps.simDeviceData.ReplaceDevice.results) {
                var ReplaceDeviceData = nextProps.simDeviceData.ReplaceDevice.results;
                for (let index in ReplaceDeviceData) {
                    const obj = { "label": ReplaceDeviceData[index].code, "value": ReplaceDeviceData[index].key };
                    ReplaceDeviceArray.push(obj);
                    ReplaceDeviceMap.set(ReplaceDeviceData[index].key, ReplaceDeviceData[index].code);
                }
            }

            if (nextProps.simDeviceData.ReplaceSim.results) {
                var ReplaceSimData = nextProps.simDeviceData.ReplaceSim.results;
                for (let index in ReplaceSimData) {
                    const obj = { "label": ReplaceSimData[index].code, "value": ReplaceSimData[index].key };
                    ReplaceSimArray.push(obj);
                    ReplaceSimMap.set(ReplaceSimData[index].key, ReplaceSimData[index].code);
                }
            }

            this.setState({
                DefectiveDeviceArray: DefectiveDeviceArray,
                DefectiveDeviceMap: DefectiveDeviceMap,

                DefectiveSimArray: DefectiveSimArray,
                DefectiveSimMap: DefectiveSimMap,

                ReplaceSimArray: ReplaceSimArray,
                ReplaceSimMap: ReplaceSimMap,

                ReplaceDeviceArray: ReplaceDeviceArray,
                ReplaceDeviceMap: ReplaceDeviceMap
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

    doAssignment() {
        if (this.checkRequiredFields()) {
            if (this.state.item.serviceTypeName == "REPLACE") {
                var selectedArray = [
                    ...this.state.SelectedDefectiveDeviceArray,
                    ...this.state.SelectedDefectiveSimArray,
                    ...this.state.SelectedReplaceDeviceArray,
                    ...this.state.SelectedReplaceSimArray
                ];

                const deviceLen = this.state.SelectedDefectiveDeviceArray.length;
                const simLen = this.state.SelectedDefectiveSimArray.length;
                
                var replace = [];
                for(let i = 0; i < deviceLen; i++) {
                    replace.push({
                        "defectiveDeviceId": this.state.SelectedDefectiveDeviceArray[i],
                        "replaceDeviceId": this.state.SelectedReplaceDeviceArray[i]
                    });
                }

                for(let i = 0; i < simLen; i++) {
                    replace.push({
                        "defectiveSimId": this.state.SelectedDefectiveSimArray[i],
                        "replaceSimId": this.state.SelectedReplaceSimArray[i]
                    });
                }

                var item = {
                    "inventoryId": selectedArray,
                    "replace": replace,
                    "orderType": this.state.item.serviceTypeName,
                    "serviceHeaderId": this.state.item.headerId
                }
            } else {
                var selectedArray = [...this.state.SelectedDefectiveDeviceArray, ...this.state.SelectedDefectiveSimArray];
                var item = {
                    "inventoryId": selectedArray,
                    "orderType": this.state.item.serviceTypeName,
                    "serviceHeaderId": this.state.item.headerId
                }
            }
            if(this.state.comments != '') { item["comment"] = this.state.comments; }
            console.log(JSON.stringify(item));
            // this.props.addInventory(item);
        }
    }

    /**Function to validate mandatory fields for Add GPS Device API*/
    checkRequiredFields() {
        if (this.state.item.serviceTypeName == "REPLACE") {
            if (this.state.SelectedDefectiveDeviceArray.length == 0 && this.state.SelectedDefectiveSimArray.length == 0) {
                functions.showToast('Please select sim/device', 'warning');
                return false;
            }
            if (this.state.SelectedDefectiveDeviceArray.length != 0 &&
                this.state.SelectedDefectiveDeviceArray.length != this.state.SelectedReplaceDeviceArray.length) {
                functions.showToast('Number Defective and Replace device should be equal', 'warning');
                return false;
            }
            else if (this.state.SelectedDefectiveSimArray.length != 0 &&
                this.state.SelectedDefectiveSimArray.length != this.state.SelectedReplaceSimArray.length) {
                functions.showToast('Number Defective and Replace sim should be equal', 'warning');
                return false;
            }
        } else {
            if (this.state.SelectedDefectiveDeviceArray.length == 0 && this.state.SelectedDefectiveSimArray.length == 0) {
                functions.showToast('Please select sim/device', 'warning');
                return false;
            }
        }
        return true;
    }

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

                                    <View style={[styles.sub_view, { marginTop: 4 }]}>
                                        <View style={styles.left_view}>
                                            <Text style={[globalStyles.title_text, { fontFamily: 'Roboto' }]}>
                                                {item.companyName}
                                            </Text>
                                        </View>
                                        <View style={styles.serviceType}>
                                            <Button transparent disabled={true}
                                                style={styles.job_type}>
                                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', color: colors.PRIMARY }]}>
                                                    {item.serviceTypeName}
                                                </Text>
                                            </Button>
                                        </View>
                                    </View>

                                    <View style={[styles.sub_view, { marginTop: 4 }]}>
                                        <View style={styles.left_view}>
                                            <View style={{ marginRight: 5 }}>
                                                <MaterialIcons name='location-on' size={24} color={colors.DANGER} />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>
                                                    {item.address}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={[styles.sub_view, { marginTop: 4 }]}>
                                        <View style={styles.left_view}>
                                            <View style={{ marginRight: 5 }}>
                                                <MaterialCommunityIcons name='calendar-clock' size={24} color={colors.PRIMARY} />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>
                                                    {item.serviceDate}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={[styles.sub_view, { marginTop: 4 }]}>
                                        <View style={styles.left_view}>
                                            <View style={{ marginRight: 5 }}>
                                                <MaterialCommunityIcons name='calendar-check' size={24} color={colors.SUCCESS} />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>
                                                    {item.lastUpdatedOn != null ? item.lastUpdatedOn : '-  -  -'}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={[styles.sub_view, { marginTop: 4 }]}>
                                        <View style={styles.left_view}>
                                            <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>Service status</Text>
                                        </View>
                                        <View style={styles.middle_view}>
                                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', padding: 4 }]}>:</Text>
                                        </View>
                                        <View style={styles.right_view}>
                                            <Button transparent disabled={true}
                                                style={[
                                                    styles.job_type,
                                                    { backgroundColor: STATUS_COLOR[item.serviceStatus], borderWidth: 0 }
                                                ]} >
                                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto', color: '#fff' }]}>
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
                                            <Ionicons name='ios-call' size={24} color={colors.PRIMARY} onPress={()=>this.makeCall(item.customerMobileNo)} />
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

                                    {item.cashOnDelivery == 'N' ? null :
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



                                <View style={styles.second_view}>
                                    <View style={styles.picker_view}>
                                        <UnderlineText
                                            name={DEVICE_LIST_NAME[item.serviceTypeName]}
                                            value={this.state.SelectedDefectiveDeviceArray.length != 0 ? this.state.DefectiveDeviceName : "Select Device"}
                                            isMandatory={true}
                                            upperView={true}
                                            onpress={() =>
                                                this.defectiveDeviceRef.current.setModalVisible(true, DEVICE_LIST_NAME[item.serviceTypeName], this.state.DefectiveDeviceArray)
                                            }
                                        />
                                    </View>
                                    {item.serviceTypeName === 'REPLACE' && this.state.SelectedDefectiveDeviceArray.length != 0 ?
                                        <View style={styles.picker_view}>
                                            <UnderlineText
                                                name="Free Devices"
                                                value={this.state.SelectedReplaceDeviceArray.length != 0 ? this.state.ReplaceDeviceName : "Select Device"}
                                                isMandatory={true}
                                                upperView={true}
                                                onpress={() =>
                                                    this.replaceDeviceRef.current.setModalVisible(true, 'Free Devices', this.state.ReplaceDeviceArray)
                                                }
                                            />
                                        </View>
                                        : null
                                    }
                                </View>

                                <View style={styles.second_view}>
                                    <View style={styles.picker_view}>
                                        <UnderlineText
                                            name={SIM_LIST_NAME[item.serviceTypeName]}
                                            value={this.state.SelectedDefectiveSimArray.length != 0 ? this.state.DefectiveSimName : "Select Sim"}
                                            isMandatory={true}
                                            upperView={true}
                                            onpress={() =>
                                                this.defectiveSimRef.current.setModalVisible(true, SIM_LIST_NAME[item.serviceTypeName], this.state.DefectiveSimArray)
                                            }
                                        />
                                    </View>

                                    {item.serviceTypeName === 'REPLACE' && this.state.SelectedDefectiveSimArray.length != 0 ?
                                        <View style={styles.picker_view}>
                                            <UnderlineText
                                                name="Free Sims"
                                                value={this.state.SelectedReplaceSimArray.length != 0 ? this.state.ReplaceSimName : "Select Sim"}
                                                isMandatory={true}
                                                upperView={true}
                                                onpress={() =>
                                                    this.replaceSimRef.current.setModalVisible(true, 'Free Sims', this.state.ReplaceSimArray)
                                                }
                                            />
                                        </View>
                                        : null
                                    }
                                </View>

                                <View style={styles.second_view}>
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
                    <MultiPicker ref={this.defectiveDeviceRef} multipleValueSelected={(item) => this.selectedDefectiveDevice(item)} />
                    <MultiPicker ref={this.defectiveSimRef} multipleValueSelected={(item) => this.selectedDefectiveSim(item)} />
                    <MultiPicker ref={this.replaceDeviceRef} multipleValueSelected={(item) => this.selectedReplaceDevice(item)} />
                    <MultiPicker ref={this.replaceSimRef} multipleValueSelected={(item) => this.selectedReplaceSim(item)} />

                </View>
        );
    }

    selectedDefectiveDevice = (selecteMap) => {
        var selectedArray = [];
        var selectedName = '';
        for (var [key, value] of selecteMap) {
            if (value) {
                selectedName = selectedName + ", " + this.state.DefectiveDeviceMap.get(key);
                selectedArray.push(key);
            }
        }
        selectedName = selectedName.slice(1);
        this.setState({ SelectedDefectiveDeviceArray: selectedArray, DefectiveDeviceName: selectedName });
    }

    selectedDefectiveSim = (selecteMap) => {
        var selectedArray = [];
        var selectedName = '';
        for (var [key, value] of selecteMap) {
            if (value) {
                selectedName = selectedName + ", " + this.state.DefectiveSimMap.get(key);
                selectedArray.push(key);
            }
        }
        selectedName = selectedName.slice(1);
        this.setState({ SelectedDefectiveSimArray: selectedArray, DefectiveSimName: selectedName });
    }

    selectedReplaceDevice = (selecteMap) => {
        var selectedArray = [];
        var selectedName = '';
        for (var [key, value] of selecteMap) {
            if (value) {
                selectedName = selectedName + ", " + this.state.ReplaceDeviceMap.get(key);
                selectedArray.push(key);
            }
        }
        selectedName = selectedName.slice(1);
        this.setState({ SelectedReplaceDeviceArray: selectedArray, ReplaceDeviceName: selectedName });
    }

    selectedReplaceSim = (selecteMap) => {
        var selectedArray = [];
        var selectedName = '';
        for (var [key, value] of selecteMap) {
            if (value) {
                selectedName = selectedName + ", " + this.state.ReplaceSimMap.get(key);
                selectedArray.push(key);
            }
        }
        selectedName = selectedName.slice(1);
        this.setState({ SelectedReplaceSimArray: selectedArray, ReplaceSimName: selectedName });
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