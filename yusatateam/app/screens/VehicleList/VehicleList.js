import React from 'react';
import { View, ScrollView, FlatList, Button, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import styles from './styles';
import { SearchBar, Toolbar } from '../../components';
import {VehicleDetails} from './VehicleDetails/VehicleDetails'
export default class VehicleList extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    ORDER: 'EVKGLI',
                    ICCID: 'ICCID1',
                    MSIDN: 'MSIDN1',
                    Provider: 'Tata Docomo',
                    Mobile: '09085-53379',
                    status: 'Activate'
                },
                {
                    ORDER: 'JSCKBK',
                    ICCID: 'ICCID2',
                    MSIDN: 'MSIDN2',
                    Provider: 'AIRTEL',
                    Mobile: '09085-45090',
                    status: 'Deactivate'
                },
                {
                    ORDER: 'UYGEYUJA',
                    ICCID: 'ICCID3',
                    MSIDN: 'MSIDN3',
                    Provider: 'AIRCEL',
                    Mobile: '09085-65879',
                    status: 'Activate'
                },
                {
                    ORDER: 'HAVCMSV',
                    ICCID: 'ICCID4',
                    MSIDN: 'MSIDN4',
                    Provider: 'IDEA',
                    Mobile: '09085-53379',
                    status: 'Deactivate'
                },

            ],
            items: [],
            list: '',
            status: true
        }
        this.arrayholder = [];
    };
    componentDidMount() {
        this.arrayholder = this.state.data;
    }
    SearchFilterFunction(text) {

        const newData = this.arrayholder.filter(function (item) {
            const itemData = item.MSIDN.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            data: newData,
            text: text
        }
        )
    }

    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Toolbar title='Association'
                    leftIcon='arrow-left' leftIconType='Feather'onLeftButtonPress={() => goBack()}
                    setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')}/>
                <SearchBar placeholder='Search by vehicle, sim, device'
                    onChangeText={(text) => this.SearchFilterFunction(text)} />
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => item.MSIDN.toString()}
                    renderItem={
                        ({ item, index }) =>
                            <View style={styles.viewList}>
                                <List elevation={5} style={styles.list}>
                                    <View avatar noBorder >
                                        <View>
                                            <TouchableOpacity onPress={() => this.refs.modal.setModalVisible(true, item)}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={styles.text}>{item.ORDER} </Text>
                                                    <Text style={{ flex: 2, padding: 5, color: '#CD5C5C' }}>{item.status}</Text>
                                                </View>
                                                <View style={{paddingBottom :5}}>
                                                <Text style={styles.text1}>{item.MSIDN}</Text>
                                                <Text note >{item.ICCID}    {item.Mobile}     {item.Provider}</Text></View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </List>
                            </View>} >
                </FlatList>
                <VehicleDetails ref='modal' />
            </View>
        )
    }
}
export { VehicleList }