import React from 'react';
import { View, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, Button, Header, Body, Right } from 'native-base';

import styles from './styles';
import { UnderlineText } from '../../../components';
import Dropdown from './Dropdown';
import colors from '../../../constants/colors';
import functions from '../../../common/functions'

export default class DashboardFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            data: [],
            regionArray: [],
            companyArray: [],
            companyMap: new Map(),
            regionValue: '',
            companyValue: '',
            companyId: ''
        },
        this.modalRef = React.createRef();
        this.onModalClose = this.onModalClose.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.updateList = this.updateList.bind(this);
        this.openRegionPicker = this.openRegionPicker.bind(this);
        this.openCompanyPicker = this.openCompanyPicker.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.state.flag = 0;
    }

    setModalVisible(visible, data) {
        this.setState({
            modalVisible: visible,
            data: data ? data : []
        }, function () { this.updateList() });
    }

    updateList() {
        const region = this.state.data.regionDetails;
        if(region) {
            const len = region.length;
            const regionArray = [];
            const companyMap = new Map(this.state.companyMap);
            var defaultRegion = '';
            for (var i = 0; i < len; i++) {
                const obj = { "label": region[i].regionName, "value": region[i].regionName };
                regionArray.push(obj);
                if (this.state.data.defaultRegionId === region[i].regionId) { defaultRegion = region[i].regionName }

                const companyArray = region[i].companyDetails;
                const len1 = companyArray.length;
                const company = [];
                for (var j = 0; j < len1; j++) {
                    // const companyObj = Object.assign({ "label": companyArray[j].companyName, "value": companyArray[j].companyId }, companyArray[j] );
                    const companyObj = { "label": companyArray[j].companyName, "value": companyArray[j].companyId };
                    company.push(companyObj);
                    // if (this.state.data.defaultCompanyCode === companyArray[j].companyCode) {
                    //     defaultCompany = companyArray[j].companyName;
                    //     companyId = companyArray[j].companyId;
                    // }
                }
                companyMap.set(region[i].regionName, company);
            }
            this.setState({
                regionArray: regionArray,
                companyMap: companyMap,
                companyArray: companyMap.get(regionArray[0].label),
                regionValue: defaultRegion,
                companyValue: this.state.data.companyName,
                companyId: this.state.data.companyId
            });
        }
    }

    openRegionPicker() {
        this.state.flag = 0;
        this.modalRef.current.setModalVisible(true, 'Region', this.state.regionArray);
    }

    openCompanyPicker() {
        this.state.flag = 1;
        this.modalRef.current.setModalVisible(true, 'Company', this.state.companyArray);
    }

    onModalClose() {
        this.setState({ modalVisible: !this.state.modalVisible });
    }

    onUpdate() {
        if (this.state.companyId !== '') {
            this.props.onRegionUpdate(this.state.companyId);
            this.onModalClose();
        } else {
            functions.showToast('Invalid Credentials', 'danger');
        }
    }

    onValueChange(data) {
        // console.log(data)
        if (this.state.flag === 0) {
            const company = this.state.companyMap.get(data.label);
            this.setState({
                regionValue: data.label,
                companyArray: company,
                companyValue: 'Select company',
                companyId: ''
            });
        } else if (this.state.flag === 1) {
            this.setState({ companyValue: data.label, companyId: data.value });
        }
    }

    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={this.onModalClose}>
                    <View style={styles.container}>
                        <View style={{ width: '100%' }}>
                            <Header style={styles.Header_Style}>
                                <Body>
                                    <Text style={styles.Text_style}> Filter </Text>
                                </Body>
                                <Right>
                                    <Button transparent onPress={this.onModalClose}>
                                        <MaterialIcons name='close' size={30} color='#d9534f' />
                                    </Button>
                                </Right>
                            </Header>
                        </View>
                        <View style={styles.View_Container}>
                            <View style={styles.Small_View}>
                                <UnderlineText
                                    name="Region"
                                    value={this.state.regionValue}
                                    isMandatory={true}
                                    onpress={this.openRegionPicker}
                                />
                            </View>
                            <View style={styles.Small_View}>
                                <UnderlineText
                                    name="Company"
                                    value={this.state.companyValue}
                                    isMandatory={true}
                                    onpress={this.openCompanyPicker}
                                />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#FFFFFF' }}>
                                <View style={{ flex: 5 }}></View>
                                <Right style={{ flex: 4 }}>
                                    <Button full onPress={this.onUpdate}
                                        style={{ width: 150, backgroundColor: colors.HEADER_COLOR }} ><Text> Update </Text></Button>
                                </Right>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Dropdown ref={this.modalRef} selectedValue={(value) => this.onValueChange(value)} />
            </View>
        )
    }
}

export { DashboardFilter }