import React from 'react';
import { View, Modal } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Text, Button, Header, Body, Right } from 'native-base';

import styles from './styles';
import { UnderlineText } from '../../../components';
import { GpsModal } from '../../../screens/GPSDevice/GpsModal/GpsModal'
import colors from '../../../constants/colors';

export default class DashboardFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            data: [],
            regionArray: [],
            companyArray: [],
            companyMap: new Map(),
            regionValue: 'Select region',
            companyValue: 'Select company'
        },
        this.modalRef = React.createRef();
        this.onModalClose = this.onModalClose.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.updateList = this.updateList.bind(this);
        this.openRegionPicker = this.openRegionPicker.bind(this);
        this.openCompanyPicker = this.openCompanyPicker.bind(this);
        this.state.flag = 0;
    }

    setModalVisible(visible, data) {
        this.setState({ modalVisible: visible, data: data }, function(){ this.updateList() });
    }

    updateList() {
        const region = this.state.data;
        const len = region.length;
        const regionArray = [];
        const companyMap = new Map(this.state.companyMap);
        for(var i = 0; i < len; i++) {
            const obj = { "label": region[i].regionName, "value": region[i].regionName };
            regionArray.push(obj);

            const companyArray = region[i].companyDetails;
            const len1 = companyArray.length;
            const company = [];
            for(var j = 0; j < len1; j++) {
                const companyObj = { "label":  companyArray[j].companyId, "value": companyArray[j].companyName};
                company.push(companyObj);
            }
            companyMap.set(region[i].regionName, company);
        }
        this.setState({ regionArray: regionArray, companyMap: companyMap, companyArray: companyMap.get(regionArray[0].label)});
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

    onValueChange(value) {
        if(this.state.flag === 0) {
            const company = this.state.companyMap.get(value);
            this.setState({ regionValue: value, companyArray: company, companyValue: 'Select compnay' });
        } else if(this.state.flag === 1) {
            this.setState({ companyValue: value });
        }
    }

    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={ this.onModalClose }>
                    <View style={styles.container}>
                        <View style={{ width: '100%' }}>
                            <Header style={styles.Header_Style}>
                                <Body>
                                    <Text style={styles.Text_style}> Filter </Text>
                                </Body>
                                <Right>
                                    <Button transparent onPress={this.onModalClose}>
                                        <Entypo name='cross' size={30} color='#000'></Entypo>
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
                                    <Button full onPress={this.onModalClose}
                                        style={{ width: 150, backgroundColor: colors.HEADER_COLOR }}
                                    ><Text> Update </Text></Button>
                                </Right>
                            </View>
                        </View>
                    </View>
                </Modal>
                <GpsModal ref={this.modalRef} selectedValue={(value) => this.onValueChange(value)} />
            </View>
        )
    }
}

export { DashboardFilter }