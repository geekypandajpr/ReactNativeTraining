import React from 'react';
import {
    View,
    Modal,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import { Item, Input, Icon, Text, Button, Left, Right } from 'native-base';
import { Entypo } from '@expo/vector-icons'
export default class FilterJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            status : '',
            value : 'scheduleDate',
            selected : ['jobNumber','scheduleDate','jobType','servicePerson','completedDate'],
        }
        this.setModalVisible = this.setModalVisible.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
    }

    setModalVisible(visible,data) {
        this.setState({ modalVisible: visible ,status : data});
    }
    
    onModalClose(key) {
       // console.log(this.state.selected[key])
        this.props.getSelected(this.state.selected[key]);
        this.setState({ modalVisible: !this.state.modalVisible });
    }
    render() {
        return (
            <View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View style={styles.container}>
                        <View style={styles.sub_container}>
                            <View style={styles.header_view}>
                                <Left>
                                    <Text style={styles.header_text}>Filter</Text>
                                </Left>
                                <TouchableOpacity onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                    <Right style={{ alignItems: 'center', justifyContent: 'center',marginRight :5 }}>
                                        <Entypo name="cross" size={32} color="white" />
                                    </Right>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.View_Container}>
                                <View style={{ padding: 5 }}>
                                    <Button full info 
                                     onPress={()=>this.onModalClose(0)}
                                     >
                                        <Text>Job Number</Text>
                                    </Button>
                                </View>
                                <View style={{ padding: 5 }}>
                                    <Button full info
                                   onPress={()=>this.onModalClose(1)}
                                    >
                                        <Text>Schedule Date</Text>
                                    </Button>
                                </View>
                                <View style={{ padding: 5 }}>
                                    <Button full info
                                    onPress={()=>this.onModalClose(2)}
                                    >
                                        <Text>Job Type</Text>
                                    </Button>
                                </View>
                                {
                                    this.state.status == 'Pending' ? null : 
                                    <View style={{ padding: 5 }}>
                                    <Button full info
                                    onPress={()=>this.onModalClose(3)}
                                     >
                                        <Text>Technician Name</Text>
                                    </Button>
                                    </View>
                                }
                                {
                                    this.state.status == 'Pending' || this.state.status == 'schedule' ? null :
                                    <View style={{ padding: 5 }}>
                                    <Button full info
                                     onPress={()=>this.onModalClose(4)}
                                     >
                                        <Text>Completed Date</Text>
                                    </Button>
                                </View>
                                }  

                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

        );
    }
}
export { FilterJob }