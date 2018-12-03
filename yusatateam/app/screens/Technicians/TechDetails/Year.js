import React from 'react';
import { View, Modal } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import moment from 'moment';

import { MonthSelectorCalendar } from '../../../components';

export default class Year extends React.Component {
    constructor() {
        super();
        moment.locale('en');
        this.state = {
            month: moment(new Date()).format('MMYYYY'),
            modalVisible: false,
        }
        this.selectMonth = this.selectMonth.bind(this);
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    selectMonth(date) {
        this.props.selectedDate(date);
        this.setModalVisible(false);
    }

    render() {
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
                        <View style={styles.sub_container}>
                            <MonthSelectorCalendar
                                selectedDate={this.state.month}
                                monthTapped={(date) => this.selectMonth(date)}
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
        width: '90%'
    },
})