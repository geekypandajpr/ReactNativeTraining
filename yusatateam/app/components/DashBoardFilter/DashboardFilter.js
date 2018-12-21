import React from 'react';
import {
    View,
    Modal,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import { Text, Button, Header, Body, Left, Right, Title, Picker, Item } from 'native-base';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import { UnderlineText } from '../../components'
import colors from '../../styles/colors'
import { Entypo } from '@expo/vector-icons'
import company from '../../assets/JSONData/GpsDevice/CompanyData';
import {GpsModal} from '../../screens/GPSDevice/GpsModal/GpsModal'

const companyList = [];
const COMPANY_KEY = 'COMPANY';
const REGION_KEY = 'REGION';
export default class DashboardFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            selected1: '',
            selected2: '',
            flag: '',
            map: new Map(),
        },
        this.modalRef = React.createRef();
        this.OnValueSelect = this.OnValueSelect.bind(this);
        this.openPicker = this.openPicker.bind(this);
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    onModalClose() {
        this.setState({ modalVisible: !this.state.modalVisible });
    }
  
    OnValueSelect(value) {
        // if (this.state.flag === 'COMPANY') {
        //     this.setState({ company: value });
        const newMap = new Map(this.state.map);
        newMap.set(this.state.flag, value);
        this.setState({ map: newMap })
    }

    openPicker(keys,list,title) {
        this.setState({ flag: keys });
        this.modalRef.current.setModalVisible(true,title,list);
    }
    componentDidMount() {

        const newMap = new Map(this.state.map);
        newMap.set(REGION_KEY, "Select Region");
        newMap.set(COMPANY_KEY, "Select Company");


        this.setState({ map: newMap })
    }
    setModalVisible(visible,  title,data = []) {
        for(var j=0;j<data.length;j++)
        {
            var values = data[j].companyName;
            companyList.push(values)
        }
        this.setState({ modalVisible: visible, data: companyList, title: title });
    }
    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View style={styles.container}>
                        <View style={{ width: '100%' }}>
                            <Header style={styles.Header_Style}>
                                <Body>
                                    <Text style={styles.Text_style}> DashBoard Filter</Text>
                                </Body>
                                <Right>
                                    <TouchableHighlight onPress={() => { this.setModalVisible(false) }}>
                                        <Entypo name='cross' size={28} color='#fff'></Entypo>
                                    </TouchableHighlight>
                                </Right>
                            </Header>
                        </View>
                        <View style={styles.View_Container}>
                        <View style={styles.Small_View}>
                            <UnderlineText
                                name="Region"
                                value={this.state.map.get(REGION_KEY)}
                                isMandatory={true}
                                onpress={() => this.openPicker(REGION_KEY,company,"Region")}
                            />
                        </View>
                        <View style={styles.Small_View}>
                            <UnderlineText
                                name="Company"
                                value={this.state.map.get(COMPANY_KEY)}
                                isMandatory={true}
                            onpress={() => this.openPicker(COMPANY_KEY,company,"Company")}
                            />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#FFFFFF' }}>
                            <View style={{ flex: 5 }}></View>
                            <Right style={{ flex: 4 }}>
                                <Button full info style={{ borderRadius: 4, width: 150 }}><Text> Update </Text></Button>
                            </Right>
                        </View>
                    </View>
                        </View>
                       


                </Modal>
                <GpsModal ref={this.modalRef} selectedValue={(value) => this.OnValueSelect(value)} />
            </View>
        )
    }
}
export { DashboardFilter }