import React from 'react';
import { View, FlatList, Alert,  Modal } from 'react-native';
import { AppLoading } from 'expo';
import styles from './styles';
import { TechnicianList, SearchHeader } from '../../../components';
import techDatas from '../../../assets/JSONData/TechnicianData';



export default class JobAssign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            isLoading: true,
            data: techDatas,
            searchValue: ''
        }  
        this.arrayholder = [];
        this.setModalVisible = this.setModalVisible.bind(this);
        this.onSearchTextChange = this.onSearchTextChange.bind(this);
        this.onClose = this.onClose.bind(this);
        this.searchText = this.searchText.bind(this);
        this.onClear = this.onClear.bind(this);
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
        this.arrayholder = this.state.data;
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible});
    }

    searchText(text) {
        const newData = this.arrayholder.filter(function (item) {
            const itemData = item.name.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        });
        this.setState({
            data: newData,
            text: text
        });
    }

    onSearchTextChange(searchValue) {
        this.setState({searchValue}, function() {
            this.searchText(searchValue);
        });
    }

    onClear() {
        this.onSearchTextChange('');
    }

    onClose() {
        this.setState({ modalVisible: false });
    }

    alertBoxMessage()
    {
        Alert.alert(
            'Jobs Assign',
            'Do you really want to Assign the jobs',
            [
              {text: 'NO', onPress: () => console.log('NO Pressed'), style: 'cancel'},
              {text: 'YES', onPress: () => console.log('YES Pressed')},
            ],
            { cancelable: false }
          );
    }

    render() {
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onDismiss={() => {
                        this.setState({ modalVisible: !this.state.modalVisible })
                    }}
                    onRequestClose={() => {
                        this.setState({ modalVisible: !this.state.modalVisible })
                    }}>
                    <View style={styles.container}>
                        <View style={{ flex: 1 }}>
                            <SearchHeader
                                searchValue={this.state.searchValue}
                                onClose={this.onClose}
                                onClear={this.onClear}
                                placeholder="Search here"
                                onSearchTextChange={(text) => this.onSearchTextChange(text)}
                            />
                            <FlatList
                                extraData={this.state}
                                data={this.state.data}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) =>
                                    <TechnicianList
                                        key={index}
                                        data={item}
                                        assignJobs={this.alertBoxMessage}
                                    />
                                } />
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export { JobAssign }