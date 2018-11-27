import React from 'react';
import {
    View,
    Text,
    Modal,
    TouchableHighlight
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { MonthSelectorCalendar } from '../../../components/MonthSelectorCalendar/MonthSelectorCalendar';
export default class Year extends React.Component {
    constructor() {
        super();
        this.state = {
            month:'112018',
            modalVisible: false,
        }
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            <View style={{ marginTop: 22 }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View style={styles.container}>
                        <View style={styles.sub_container}>
                            <MonthSelectorCalendar
                                selectedDate={this.state.month}
                                monthTapped={(date) => this.setState({ month: date })}
                            />
                        </View>
                    </View>
                </Modal>
            </View>

        );
    }
}

export { Year }

const styles = EStyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'rgba(184, 193, 199, 0.5)',
        backgroundColor: '#00000095',
        flexDirection: 'column',
    },
    sub_container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60%',
        width: '100%'
    },
})