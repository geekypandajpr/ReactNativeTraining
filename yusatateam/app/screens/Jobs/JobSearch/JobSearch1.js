import React from 'react';
import { Text, View, FlatList, Modal } from 'react-native';
import { List, ListItem, Body, CheckBox, Header, Button, Item, Input } from 'native-base';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import { SearchBar, JobDetailToolbar } from '../../../components';
import colors from '../../../constants/colors';

export default class JobSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            isLoading: true,
            item: {},
            status: true,
            status: '',
            //data: this.props.navigation.state.params.item,
            data: [],
            dropdownbool: false,
            plans: {},
            checkbox: false,
            selected: "jobNumber",
            map: new Map(),
            tollbarStatus: '',
            searchValue: ''
        }
        this.arrayholder = [];
        this.setModalVisible = this.setModalVisible.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
        
    }

    setModalVisible(visible, item = []) {
        this.state.map.clear();
        this.setState({
            modalVisible: visible,
            data: item,
            tollbarStatus: item[0].jobStatus
        }, function() {
            this.arrayholder = this.state.data;
        })
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }

    SearchFilterFunction(text) {
        var key = this.state.selected;
        const newData = this.arrayholder.filter(function (item) {
            const itemData = item[key].toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            data: newData,
            text: text
        },
        )
    }


    toggleCheckbox(id) {
        let map = this.state.map;
        if (this.state.map.has(id)) {
            this.state.map.delete(id);
        }
        else {
            this.state.map.set(id, true);
        }
        this.setState({ map })
    }

    onSearchTextChange(searchValue) {
        this.setState({searchValue});
    }

    onModalClose() {
        this.props.getSelected(this.state.map);
        this.setState({ modalVisible: !this.state.modalVisible });
    }

    render() {

        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({ modalVisible: !this.state.modalVisible })
                    }}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.container}>
                            <JobDetailToolbar title='Jobs'
                                leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={this.onModalClose}
                                setting='filter' settingType='FontAwesome' onSettingsPress={() => this.setState({ dropdownbool: !this.state.dropdownbool })}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                                status={this.state.tollbarStatus}
                            />
                            <SearchBar placeholder={'Search jobs'}
                                onChangeText={(text) => this.SearchFilterFunction(text)} />

                            <FlatList
                                extraData={this.state}
                                data={this.state.data}
                                keyExtractor={(item, index) => item.jobNumber}
                                renderItem={({ item, index }) =>

                                    <List style={styles.list}>
                                        <ListItem icon style={styles.listitem}>
                                            <View onTouchStart={() => this.setState({ map: this.state.map })}>
                                                <CheckBox
                                                    checked={this.state.map.get(item.jobNumber)}
                                                    onPress={() => this.toggleCheckbox(item.jobNumber)}
                                                />
                                            </View>
                                            <Body style={styles.body}>
                                                <View>
                                                    <View style={styles.first_view}>
                                                        <View style={{ flex: 1 }}>
                                                            <Text style={styles.job_num}>{item.jobNumber}</Text>
                                                        </View>
                                                        <View style={styles.job_type_view}>
                                                            <View style={styles.job_type}>
                                                                <Text style={styles.sub_text}>{item.jobType}</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View>
                                                        <Text style={styles.sub_text}> {item.scheduleDate} </Text>
                                                        <Text style={styles.sub_text}> {item.location} </Text>
                                                    </View>
                                                </View>
                                            </Body>

                                        </ListItem>
                                    </List>
                                }
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export { JobSearch }