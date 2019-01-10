import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button, Text, Card } from 'native-base';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

import styles from './Styles';
import { StatefulButton } from '../../components';

export default class ScheduleEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.modalRef = React.createRef();
    }

    render() {
        return (
            <View>
                {this.props.item.map((item, index) =>
                    <Card style={styles.event_date_view} key={index}>

                        <View style={styles.text_container}>
                            <View style={styles.first_view}>
                                <Text style={styles.label_text}>{item.serviceNumber}</Text>
                            </View>
                            <View style={styles.second_view}>
                                {/* <StatefulButton
                                    label={item.serviceType}
                                    loadingLabel='wait...'
                                    colorAnimation={['transparent', 'transparent', 'transparent']}
                                    onPress={()=>this.completeJob(item)}
                                    styles={{ button: styles.service_type_view, label: styles.service_type }} /> */}
                                <Button transparent style={styles.service_type_view} 
                                    onPress={this.props.doAssociation}>
                                    <Text uppercase={false} style={styles.service_type}>{item.serviceType}</Text>
                                </Button>
                            </View>
                        </View>

                        <View style={styles.text_container}>
                            <View style={styles.first_view}>
                                <Text style={styles.value_text}>{item.companyName}</Text>
                            </View>
                        </View>

                        <View style={styles.text_container}>
                            <View style={styles.first_view}>
                                <Text style={styles.value_text}>{item.vehicleNumber}</Text>
                            </View>
                        </View>

                        <View style={styles.text_container}>
                            <View style={styles.first_view}>
                                <View style={styles.icon_view}>
                                    <MaterialIcons name='schedule' color='#1766A6' size={20} />
                                </View>
                                <View style={styles.first_view}>
                                    <Text style={styles.value_text}>{item.jobDate}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.text_container}>
                            <View style={styles.first_view}>
                                <View style={styles.icon_view}>
                                    <Entypo name='location-pin' color='red' size={20} />
                                </View>
                                <View style={styles.first_view}>
                                    <Text style={styles.value_text}>{item.location}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.text_container}>
                            <View style={styles.first_view}>
                            <TouchableOpacity  onPress={this.props.serviceChange} >
                                <View style={[styles.statusButton, { backgroundColor: item.color }]}>
                                    <Text style={styles.status_text}>{item.status}</Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.second_view}>
                                <TouchableOpacity style={styles.second_view} activeOpacity={0.2} onPress={this.props.viewMore} >
                                    <Text style={styles.view_more}>view more</Text>
                                    <Entypo name='chevron-thin-right' color='gray' size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </Card>
                )}
            </View>
        )
    }
}

export { ScheduleEvent }