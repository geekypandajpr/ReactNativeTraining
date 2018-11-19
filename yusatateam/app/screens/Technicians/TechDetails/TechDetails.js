import React from 'react';
import {
    View,
    Text,
    Modal,
} from 'react-native';
import { StackedBarChart } from 'react-native-svg-charts';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import styles from './styles';

export default class TechDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            data : [
                {
                    // month: new Date(2015, 0, 1),
                    apples: 3840,
                    bananas: 1920,
                    cherries: 960,
                    dates: 400,
                    oranges: 400,
                },
                {
                    //month: new Date(2015, 1, 1),
                    apples: 1600,
                    bananas: 1440,
                    cherries: 960,
                    dates: 400,
                },
                {
                    //month: new Date(2015, 2, 1),
                    apples: 640,
                    bananas: 960,
                    cherries: 3640,
                    dates: 400,
                },
                {
                    //month: new Date(2015, 3, 1),
                    apples: 3320,
                    bananas: 480,
                    cherries: 640,
                    dates: 400,
                },
            ]
        }
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        const colors = [ '#7b4173', '#a55194', '#ce6dbd' ]
        const keys   = [ 'apples', 'bananas', 'cherries' ]
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

                        <View style={styles.header_view}>
                            <View style={styles.service_num}>
                                <Text style={styles.header_text}>Akash Dhayal</Text>
                            </View>
                        </View>

                        <View style={styles.View_Container}>
                         <StackedBarChart
                                style={{ height: 200,width:'100%' }}
                                keys={keys}
                                colors={colors}
                                data={this.state.data}
                                showGrid={false}
                                contentInset={{ top: 30, bottom: 30 }}
                                
                                   
                            />

                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export { TechDetails }