import React from 'react';
import { Text, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { globalStyles } from '../../styles';
import { MaterialIcons } from '@expo/vector-icons';

export default class DeviceInfo extends React.Component {
    render() {
        const datas = this.props.deviceInfoData
        const deviceInfo = datas.results ? datas.results.deviceInfo : datas;
        return (
            <FlatList
                data={[{ key: 1 }]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) =>
                    <View style={{ flex: 1 }}>
                        <View style={[globalStyles.card, { padding: 8 }]}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.view3}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#000', marginBottom: 5 }}>{this.props.deviceUDID}</Text>
                                </View>
                                {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={this.props.onClose}>
                                        <MaterialIcons name='close' size={24} color='#d9534f' />
                                    </TouchableOpacity>
                                </View> */}
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.view1}>
                                    <Text style={globalStyles.primary_text}>Company name</Text>
                                </View>
                                <View style={styles.view2}>
                                    <Text style={globalStyles.secondary_text}>:</Text>
                                </View>
                                <View style={styles.view3}>
                                    <Text style={globalStyles.secondary_text}>{deviceInfo.companyName}</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.view1}>
                                    <Text style={globalStyles.primary_text}>Driver name</Text>
                                </View>
                                <View style={styles.view2}>
                                    <Text style={globalStyles.secondary_text}>:</Text>
                                </View>
                                <View style={styles.view3}>
                                    <Text style={globalStyles.secondary_text}>{deviceInfo.driverName}</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.view1}>
                                    <Text style={globalStyles.primary_text}>Vehicle #</Text>
                                </View>
                                <View style={styles.view2}>
                                    <Text style={globalStyles.secondary_text}>:</Text>
                                </View>
                                <View style={styles.view3}>
                                    <Text style={globalStyles.secondary_text}>{deviceInfo.vehicleNumber}</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.view1}>
                                    <Text style={globalStyles.primary_text}>Device model</Text>
                                </View>
                                <View style={styles.view2}>
                                    <Text style={globalStyles.secondary_text}>:</Text>
                                </View>
                                <View style={styles.view3}>
                                    <Text style={globalStyles.secondary_text}>{deviceInfo.deviceModel}</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.view1}>
                                    <Text style={globalStyles.primary_text}>Device model name</Text>
                                </View>
                                <View style={styles.view2}>
                                    <Text style={globalStyles.secondary_text}>:</Text>
                                </View>
                                <View style={styles.view3}>
                                    <Text style={globalStyles.secondary_text}>{deviceInfo.deviceModelName}</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.view1}>
                                    <Text style={globalStyles.primary_text}>Department name</Text>
                                </View>
                                <View style={styles.view2}>
                                    <Text style={globalStyles.secondary_text}>:</Text>
                                </View>
                                <View style={styles.view3}>
                                    <Text style={globalStyles.secondary_text}>{deviceInfo.departmentName}</Text>
                                </View>
                            </View>

                            <Button bordered full onPress={this.props.onClose} style={{marginTop: 10}}>
                                <Text>CLOSE</Text>
                            </Button>

                        </View>
                    </View>
                } />
        )
    }
}

const styles = StyleSheet.create({
    view1: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    view2: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    view3: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})
export { DeviceInfo }