import React from 'react';
import { View, BackHandler, FlatList, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';
import { Card, Text } from 'native-base';
import { Entypo } from '@expo/vector-icons';

import { Toolbar } from '../../../components';
import styles from './Styles';
import JobDetails from '../../Jobs/JobDetails/JobDetails';

const data = [
    {
        jobNumber: 'JOBS25DEC2018',
        jobLocation: '84/122 sector 8 Pratap nagar Jaipur-302033, Rajasthan India',
        jobType: 'Install',
        status: 'Schedule',
        scheduleDate: '25-12-2018',
        // completedDate: '26-10-2018',
        technician: 'Premsagar',
        customerName: 'Prem',
        customerContact: '+917008845220'
    },
    {
        jobNumber: 'JOBS15DEC2018',
        jobLocation: '84/122 sector 8 Pratap nagar Jaipur-302033, Rajasthan India',
        jobType: 'Replace',
        status: 'Completed',
        scheduleDate: '12-12-2018',
        completedDate: '26-10-2018',
        technician: 'Premsagar',
        customerName: 'Shaili Mittal',
        customerContact: '+917008845220'
    },
    {
        jobNumber: 'JOBS28DEC2018',
        jobLocation: '84/122 sector 8 Pratap nagar Jaipur-302033, Rajasthan India',
        jobType: 'Repair',
        status: 'Pending',
        scheduleDate: '20-12-2018',
        //completedDate: '26-10-2018',
        technician: 'Premsagar',
        customerName: 'Vinayak Sharma',
        customerContact: '+917008845220'
    },
    {
        jobNumber: 'JOBS28DEC2018',
        jobLocation: '84/122 sector 8 Pratap nagar Jaipur-302033, Rajasthan India',
        jobType: 'Uninstall',
        status: 'Onjob',
        scheduleDate: '20-12-2018',
        //completedDate: '26-10-2018',
        technician: 'Premsagar',
        customerName: 'Prem',
        customerContact: '+917008845220'
    }
]

export default class TodaysJobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
        this.jobdetails = React.createRef();
        this.goToDetailsPage = this.goToDetailsPage.bind(this);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }

    goToDetailsPage(item) {
        this.jobdetails.current.setModalVisible(true, item);
    }

    render() {
        const { goBack } = this.props.navigation;
        const statusColor = {'Pending': '#f0ad4e', 'Completed': '#5cb85c', 'Schedule': '#62B1F6', 'Onjob': '#007aff'}
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View style={{flex: 1}}>
                <Toolbar title='Prem' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                    setting='ios-search' settingType='Ionicons'
                />
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) =>
                    <TouchableOpacity onPress={()=>this.goToDetailsPage(item)}>
                        <Card style={styles.card}>

                            <View style={styles.sub_view}>
                                <View style={styles.left_view}>
                                    <Text style={styles.jobNumText}>{item.jobNumber}</Text>
                                </View>
                                <View style={styles.status}>
                                    <View style={[styles.statusView,{ backgroundColor: statusColor[item.status]}]}>
                                        <Text style={styles.statusText}>{item.status}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.sub_view}>
                                <View style={styles.left_view}>
                                    <Text style={styles.key_text}>Schedule date</Text>
                                </View>
                                <View style={styles.middle_view}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.right_view}>
                                    <Text style={styles.value_text}>{item.scheduleDate}</Text>
                                </View>
                            </View>

                            <View style={styles.sub_view}>
                                <View style={styles.left_view}>
                                    <Text style={styles.key_text}>Completed date</Text>
                                </View>
                                <View style={styles.middle_view}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.right_view}>
                                    <Text style={styles.value_text}>
                                        {item.completedDate != null ? item.completedDate : '-  -  -'}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.sub_view}>
                                <View style={styles.left_view}>
                                    <Text style={styles.key_text}>Customer name</Text>
                                </View>
                                <View style={styles.middle_view}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.right_view}>
                                    <Text style={styles.value_text}>{item.customerName}</Text>
                                </View>
                            </View>

                            <View style={styles.sub_view}>
                                <View style={styles.left_view}>
                                    <Text style={styles.key_text}>Job type</Text>
                                </View>
                                <View style={styles.middle_view}>
                                    <Text>:</Text>
                                </View>
                                <View style={styles.right_view}>
                                    <View style={styles.jobTypeView}>
                                        <Text style={styles.value_text}>{item.jobType}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.sub_view}>
                                <Entypo name='location-pin' size={20} color='#d9534f'/>
                                <View style={{flex: 1}}>
                                    <Text style={styles.value_text}>{item.jobLocation}</Text>
                                </View>
                            </View>

                        </Card>
                    </TouchableOpacity>
                }/>
                <JobDetails ref={this.jobdetails}/>
            </View>
        )
    }
}

export { TodaysJobs }