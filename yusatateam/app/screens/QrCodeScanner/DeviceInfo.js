import React, { Component } from 'react';
import {  Text, View, TouchableOpacity } from 'react-native';
import {Card} from 'native-base'
import { globalStyles } from '../../styles';
import { MaterialIcons } from '@expo/vector-icons';

export default class  DeviceInfo extends Component {
    render() {
        const datas = this.props.deviceInfoData
        const deviceInfo = datas.results ? datas.results.deviceInfo : datas;
        return (
            <View style={{ flex: 9}}>
                <Card style={[globalStyles.card]}>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 4, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={[globalStyles.primary_text, { fontWeight: '500' }]}>UDID: {this.props.deviceUDID}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <TouchableOpacity onPress={this.props.onClose}>
                                <MaterialIcons name='close' size={24} color='#d9534f' />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={globalStyles.primary_text}>Company name</Text>
                        </View>
                        <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={globalStyles.secondary_text}>:</Text>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={globalStyles.secondary_text}>{deviceInfo.companyName}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={globalStyles.primary_text}>Driver name</Text>
                        </View>
                        <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={globalStyles.secondary_text}>:</Text>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={globalStyles.secondary_text}>{deviceInfo.driverName}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={globalStyles.primary_text}>Vehicle #</Text>
                        </View>
                        <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={globalStyles.secondary_text}>:</Text>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={globalStyles.secondary_text}>{deviceInfo.vehicleNumber}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={globalStyles.primary_text}>Device model</Text>
                        </View>
                        <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={globalStyles.secondary_text}>:</Text>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={globalStyles.secondary_text}>{deviceInfo.deviceModel}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={globalStyles.primary_text}>Device model name</Text>
                        </View>
                        <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={globalStyles.secondary_text}>:</Text>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={globalStyles.secondary_text}>{deviceInfo.deviceModelName}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={globalStyles.primary_text}>Department name</Text>
                        </View>
                        <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={globalStyles.secondary_text}>:</Text>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={globalStyles.secondary_text}>{deviceInfo.departmentName}</Text>
                        </View>
                    </View>

                </Card>
            </View>
        )
    }
}
export {DeviceInfo}