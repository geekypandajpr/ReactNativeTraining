import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';

import styles from './styles';

export default class Activityindication extends React.Component {
    render() {
        return (
            <View>
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={this.props.visible}
                    onRequestClose={() => { }}>
                    <View style={[styles.container, {justifyContent: this.props.position}]}>
                        <View style={[styles.outer_circle, { backgroundColor: '#fff' }]} >
                            <ActivityIndicator size="small" color="#000" />
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export{ Activityindication }