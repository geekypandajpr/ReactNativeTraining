import React from 'react';
import {
    Text,
    View,
    Modal,
    TextInput,
    Picker,
    ScrollView,
    FlatList
} from 'react-native';
import { List, ListItem, CheckBox, Body } from 'native-base';
import styles from './styles';
import { Checkbox } from '../../../components';
import { TouchableWithoutFeedback } from 'react-native';
import { Toolbar, JobsComponent, SearchBar } from '../../../components';


export default class JobSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            isLoading: true,
            item: {},
            status: true,
            device: '',
            sim: '',
            status: '',
            data: '',
            data: this.props.navigation.state.params.item,
            dropdownbool: false
        }
        this.arrayholder = [];
    }
    componentDidMount() {
        this.arrayholder = this.state.data;
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
        var searchField;
        //console.log(this.state.status);
        if(this.state.status== 'jobNumber')
        {
          const newData = this.arrayholder.filter(function (item) {
            const itemData = item.jobNumber.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            data: newData,
            text: text
        },
        )
        }
        if(this.state.status== 'scheduleDate')
        {
            const newData = this.arrayholder.filter(function (item) {
                const itemData = item.scheduleDate.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            this.setState({
                data: newData,
                text: text
            },
            )
        }
        if(this.state.status== 'jobType')
        {
            const newData = this.arrayholder.filter(function (item) {
                const itemData = item.jobType.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            this.setState({
                data: newData,
                text: text
            },
            )
        }    
    }

    render() {
        const { goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Toolbar title='Jobs'
                    leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                    setting='filter' settingType='FontAwesome' onSettingsPress={() => this.setState({ dropdownbool: !this.state.dropdownbool })}
                />
                <SearchBar placeholder={'Search jobs'}
                    onChangeText={(text) => this.SearchFilterFunction(text)} />

                {
                    this.state.dropdownbool == false ? null : 
                    <Picker selectedValue={this.state.status} onValueChange={(itemValue) => this.setState({ status: itemValue })}>
                        <Picker.Item label="Job Name" value="jobNumber" />
                        <Picker.Item label="Schedule Date" value="scheduleDate" />
                        <Picker.Item label="Job Type" value="jobType" />
                    </Picker>
                }

                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) =>
                        <List style={styles.list}>
                            <ListItem icon style={styles.listitem}>
                                <Checkbox />
                                <Body style={styles.body}>
                                    <TouchableWithoutFeedback>
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
                                    </TouchableWithoutFeedback>
                                </Body>

                            </ListItem>
                        </List>
                    }
                />

            </View>
        );
    }
}

export { JobSearch }