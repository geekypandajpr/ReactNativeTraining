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
                    <View style={styles.container}>
                        <View style={[styles.outer_circle, { backgroundColor: '#fff' }]} >
                            <ActivityIndicator size="large" color="red" />
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export{ Activityindication }