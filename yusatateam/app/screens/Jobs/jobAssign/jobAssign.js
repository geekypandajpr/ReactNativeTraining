import React from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Alert,
    Modal
} from 'react-native';
import {Card} from 'native-base';
import styles from './styles';
import { TouchableWithoutFeedback } from 'react-native';
import { Toolbar, SearchBar } from '../../../components';
import Tdata from '../../../assets/JSONData/TechnicianData';


export default class JobAssign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            isLoading: true,
            data: Tdata,
        }  
        this.arrayholder = [];
    }

    componentDidMount() {
        this.arrayholder = this.state.data;
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible});
    }
    SearchFilterFunction(text) {
            const newData = this.arrayholder.filter(function (item) {
                const itemData = item.name.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            this.setState({
                data: newData,
                text: text
            },
            )
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
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onDismiss={() => {
                        this.setState({ modalVisible: !this.state.modalVisible })
                    }}
                    onRequestClose={() => {
                        this.setState({ modalVisible: !this.state.modalVisible })
                    }}>
                    <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={{ height: '100%', width: '100%', position: 'absolute', bottom: 0 }}>
                <SearchBar placeholder={'Search jobs'}
                    onChangeText={(text) => this.SearchFilterFunction(text)} />
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) =>
                        <Card style={styles.viewList}>
                            <View style={{ flex: 2 }}>
                                <TouchableOpacity onPress={this.alertBoxMessage}>

                                    <View style={styles.sub_view}>
                                        <View style={styles.left_sub_view}>
                                            <Text style={styles.jobNumText}>{item.name}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={styles.text}>Status</Text>
                                        </View>
                                        <View style={styles.middle_view}>
                                            <Text>:</Text>
                                        </View>
                                        <View style={styles.right_view}>
                                            <Text style={styles.text1}>{item.status}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={styles.text}>Contact No</Text>
                                        </View>
                                        <View style={styles.middle_view}>
                                            <Text>:</Text>
                                        </View>
                                        <View style={styles.right_view}>
                                            <Text style={styles.text1}>{item.contactNumber}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={styles.text}>Total Jobs</Text>
                                        </View>
                                        <View style={styles.middle_view}>
                                            <Text>:</Text>
                                        </View>
                                        <View style={styles.right_view}>
                                            <Text style={styles.text1}>{item.totalJobs}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={styles.text}>Completed Jobs</Text>
                                        </View>
                                        <View style={styles.middle_view}>
                                            <Text>:</Text>
                                        </View>
                                        <View style={styles.right_view}>
                                            <Text style={styles.text1}>{item.completedJobs}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Card>
                    } >
                </FlatList>  
                </View>
                </View>     
                </Modal>
            </View>
        );
    }
}

export { JobAssign }