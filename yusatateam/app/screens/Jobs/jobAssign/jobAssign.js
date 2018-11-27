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
import { Toolbar, SearchBar,TechnicianList } from '../../../components';
import techDatas from '../../../assets/JSONData/TechnicianData';


export default class JobAssign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            isLoading: true,
            data: techDatas,
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
                                <TechnicianList
                                    data={item}
                                     onPress={()=>navigate('TabComponent')}
                                    assignJobs={() => navigate('OpenJobs')}
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