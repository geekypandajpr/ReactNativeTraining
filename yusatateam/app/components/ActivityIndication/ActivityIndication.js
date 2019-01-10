import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Modal, ActivityIndicator, Dimensions } from 'react-native';

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

const styles = EStyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
         
        backgroundColor: 'transparent'
    },
    outer_circle: {
        marginTop: Dimensions.get('window').height/3,
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10
    }
})