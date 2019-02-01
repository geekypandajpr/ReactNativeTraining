import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button, Text, Card } from 'native-base';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { AppLoading } from 'expo';

import styles from './Styles';
import { StatefulButton } from '../../components';
import { colors } from '../../styles';

colorsCode = {
    "ENTERED": '#0073b7',
    "ACCEPTED": '#5E35A6',
    "ON_JOB": '#007aff',
    "COMPLETED": '#5cb85c',
    "RESCHEDULED": '#f0ad4e',
    "CANCELLED": '#d9534f'
};

export default class ScheduleEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
        this.modalRef = React.createRef();
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false });
    }

    render() {
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View>
                {this.props.item.map((item, index) =>
                    <Card style={styles.event_date_view} key={index}>

                        <View style={styles.text_container}>
                            <View style={styles.first_view}>
                                <Text style={[styles.label_text,{fontFamily: 'Roboto'}]}>{item.orderNumber}</Text>
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
                                    <Text uppercase={false} style={[styles.service_type,{fontFamily: 'Roboto'}]}>
                                        {(item.serviceTypeName).charAt(0).toUpperCase() + (item.serviceTypeName).slice(1).toLowerCase()}
                                    </Text>
                                </Button>
                            </View>
                        </View>

                        <View style={styles.text_container}>
                            <View style={styles.first_view}>
                                <Text style={[styles.value_text,{fontFamily: 'Roboto'}]}>{item.companyName}</Text>
                            </View>
                        </View>

                        {/* <View style={styles.text_container}>
                            <View style={styles.first_view}>
                                <Text style={[styles.value_text,{fontFamily: 'Roboto'}]}>{item.headerId}</Text>
                            </View>
                        </View> */}

                        <View style={styles.text_container}>
                            <View style={styles.first_view}>
                                <View style={styles.icon_view}>
                                <MaterialCommunityIcons name='calendar-clock' size={20} color={colors.PRIMARY} />
                                </View>
                                <View style={styles.first_view}>
                                    <Text style={[styles.value_text,{fontFamily: 'Roboto'}]}>{item.serviceDate}</Text>
                                </View>
                            </View>
                        </View>

                        {item.address ?
                            <View style={styles.text_container}>
                                <View style={styles.first_view}>
                                    <View style={styles.icon_view}>
                                        <Entypo name='location-pin' color='red' size={20} />
                                    </View>
                                    <View style={styles.first_view}>
                                        <Text style={[styles.value_text,{fontFamily: 'Roboto'}]}>{item.address}</Text>
                                    </View>
                                </View>
                            </View>
                        :   null
                        }

                        <View style={styles.text_container}>
                            <View style={styles.first_view}>
                                <TouchableOpacity  onPress={this.props.onStatusChange} >
                                    <View style={[styles.statusButton,{backgroundColor: colorsCode[item.serviceStatus]}]}>
                                        <Text style={[styles.value_text,{fontFamily: 'Roboto', color: '#fff'}]}>
                                            {(item.serviceStatus).charAt(0).toUpperCase() + (item.serviceStatus).slice(1).toLowerCase()}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.second_view}>
                                <TouchableOpacity style={styles.second_view} activeOpacity={0.2} onPress={this.props.viewMore} >
                                    <Text style={[styles.view_more,{fontFamily: 'Roboto'}]}>view more</Text>
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