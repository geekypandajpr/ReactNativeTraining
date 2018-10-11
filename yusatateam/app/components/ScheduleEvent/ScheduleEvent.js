import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { Button, Text } from 'native-base';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { StatefulButton } from '../../components';
import { DoAssociation } from '../../screens';

export default class ScheduleEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.modalRef = React.createRef();
        this.completeJob = this.completeJob.bind(this);
    }

    completeJob(item) {
        this.modalRef.current.setModalVisible(true, item);
    }

    render() {
        return (
            <View>
                {this.props.item.map((item, index) =>
                    <View style={styles.event_date_view} key={index}>

                        <View style={styles.text_container}>
                            <View style={styles.first_view}>
                                <Text style={styles.label_text}>{item.serviceNumber}</Text>
                            </View>
                            <View style={styles.second_view}>
                                <StatefulButton
                                    label={item.serviceType}
                                    loadingLabel='wait...'
                                    colorAnimation={['transparent', 'transparent', 'transparent']}
                                    onPress={()=>this.completeJob(item)}
                                    styles={{ button: styles.service_type_view, label: styles.service_type }} />
                                {/* <Button transparent style={styles.service_type_view}>
                                    <Text uppercase={false} style={styles.service_type}>{item.serviceType}</Text>
                                </Button> */}
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
                                <View style={[styles.statusButton, { backgroundColor: item.color }]}>
                                    <Text style={styles.status_text}>{item.status}</Text>
                                </View>
                            </View>
                            <View style={styles.second_view}>
                                <TouchableOpacity style={styles.second_view} activeOpacity={0.2} onPress={this.props.viewMore} >
                                    <Text style={styles.view_more}>view more</Text>
                                    <Entypo name='chevron-thin-right' color='gray' size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                )}
                <DoAssociation ref={this.modalRef}/>
            </View>
        )
    }
}

export { ScheduleEvent }