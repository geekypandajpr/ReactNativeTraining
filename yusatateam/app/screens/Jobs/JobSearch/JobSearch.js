import React from 'react';
import {
    Text,
    View,
    Modal,
    TextInput,
    Picker,
    ScrollView,
    FlatList,
    
} from 'react-native';
import { List, ListItem, Body, Button ,CheckBox} from 'native-base';
import styles from './styles';
import { TouchableWithoutFeedback } from 'react-native';
import { Toolbar, JobsComponent, SearchBar,JobDetailToolbar } from '../../../components';
import { Checkbox } from '../../../components';


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
            data: this.props.navigation.state.params.item,
            dropdownbool: false,
            plans: {},
            checkbox: false,
            selected: "jobNumber",
             map1 : new Map(),
        }
        this.arrayholder = [];
        this.tollbarStatus = '';
        
    }
    componentDidMount() {
        this.arrayholder = this.state.data;
        this.tollbarStatus = this.state.data[0].jobStatus;

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
        if (this.state.selected == 'jobNumber') {
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
        if (this.state.selected == 'scheduleDate') {
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
        if (this.state.selected == 'jobType') {
            const newData = this.arrayholder.filter(function (item) {
                const itemData = item.jobType.toUpperCase()
                const textData = text.toUpperCase()
                console.log(textData);
                console.log(itemData.indexOf(textData));
                return itemData.indexOf(textData) > -1
            })
            this.setState({
                data: newData,
                text: text
            },
            )
        }
        if (this.state.selected == 'completedDate') {
            const newData = this.arrayholder.filter(function (item) {
                const itemData = item.completedDate.toUpperCase()
                const textData = text.toUpperCase()
                console.log(textData);
                console.log(itemData.indexOf(textData));
                return itemData.indexOf(textData) > -1
            })
            this.setState({
                data: newData,
                text: text
            },
            )
        }
        if (this.state.selected == 'servicePerson') {
            const newData = this.arrayholder.filter(function (item) {
                const itemData = item.servicePerson.toUpperCase()
                const textData = text.toUpperCase()
                console.log(textData);
                console.log(itemData.indexOf(textData));
                return itemData.indexOf(textData) > -1
            })
            this.setState({
                data: newData,
                text: text
            },
            )
        }
    }


    toggleCheckbox(id) {
        //console.log('has->'+this.state.map1.has(id))
        let map1 = this.state.map1;
        if(this.state.map1.has(id))
        {
            this.state.map1.delete(id);
            
        }
        else
        {
            this.state.map1.set(id,true);
           
        }
        console.log(this.state.map1.get(id))
        this.setState({map1})
        
    }


    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
      // console.log('hello');
       // console.log('vin'+this.state.map1.has(item.jobNumber));
        return (
            <View style={styles.container}>
                <JobDetailToolbar title='Jobs'
                    leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() =>  navigate('Jobs', { checkData: this.state.checkboxes })}
                    setting='filter' settingType='FontAwesome' onSettingsPress={() => this.setState({ dropdownbool: !this.state.dropdownbool })}
                    selectedValue={this.state.selected}
                    onValueChange={this.onValueChange.bind(this)}
                    status={this.tollbarStatus}
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
                            <View onTouchStart={() => this.setState({ map1: this.state.map1 })}>
                                <CheckBox
                                        checked={this.state.map1.get(item.jobNumber)}
                                        onPress={() => this.toggleCheckbox(item.jobNumber)} 
                                    />
                                </View>
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