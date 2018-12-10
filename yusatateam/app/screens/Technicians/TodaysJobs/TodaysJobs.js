import React from 'react';
import { View, BackHandler, FlatList, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';
import { Card, Text } from 'native-base';
import { Entypo } from '@expo/vector-icons';

import { Toolbar } from '../../../components';
import styles from './Styles';
import { globalStyles } from '../../../styles';
import JobDetails from '../../Jobs/JobDetails/JobDetails';

const data = [
    {
        jobNumber: 'JOBS25DEC2018',
        location: '84/122 sector 8 Pratap nagar Jaipur-302033, Rajasthan India',
        jobType: 'Install',
        jobStatus: 'Schedule',
        scheduleDate: '25-12-2018',
        // completedDate: '26-10-2018',
        servicePerson: 'Premsagar',
        contactPerson: 'Prem',
        contactNumber: '+917008845220'
    },
    {
        jobNumber: 'JOBS15DEC2018',
        location: '84/122 sector 8 Pratap nagar Jaipur-302033, Rajasthan India',
        jobType: 'Replace',
        jobStatus: 'Completed',
        scheduleDate: '12-12-2018',
        completedDate: '26-10-2018',
        servicePerson: 'Premsagar',
        contactPerson: 'Shaili Mittal',
        contactNumber: '+917008845220'
    },
    {
        jobNumber: 'JOBS28DEC2018',
        location: '84/122 sector 8 Pratap nagar Jaipur-302033, Rajasthan India',
        jobType: 'Repair',
        jobStatus: 'Pending',
        scheduleDate: '20-12-2018',
        //completedDate: '26-10-2018',
        servicePerson: 'Premsagar',
        contactPerson: 'Vinayak Sharma',
        contactNumber: '+917008845220'
    },
    {
        jobNumber: 'JOBS28DEC2018',
        location: '84/122 sector 8 Pratap nagar Jaipur-302033, Rajasthan India',
        jobType: 'Uninstall',
        jobStatus: 'Onjob',
        scheduleDate: '20-12-2018',
        //completedDate: '26-10-2018',
        servicePerson: 'Premsagar',
        contactPerson: 'Prem',
        contactNumber: '+917008845220'
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
                                    <Text style={[globalStyles.title_text,{fontFamily: 'Roboto'}]}>{item.jobNumber}</Text>
                                </View>
                                <View style={styles.status}>
                                    <View style={[styles.statusView,{ backgroundColor: statusColor[item.jobStatus]}]}>
                                        <Text style={[styles.statusText,{fontFamily:'Roboto'}]}>{item.jobStatus}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.sub_view}>
                                <View style={styles.left_view}>
                                    <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto'}]}>Schedule date</Text>
                                </View>
                                <View style={styles.middle_view}>
                                    <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>:</Text>
                                </View>
                                <View style={styles.right_view}>
                                    <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>{item.scheduleDate}</Text>
                                </View>
                            </View>

                            <View style={styles.sub_view}>
                                <View style={styles.left_view}>
                                    <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto'}]}>Completed date</Text>
                                </View>
                                <View style={styles.middle_view}>
                                    <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>:</Text>
                                </View>
                                <View style={styles.right_view}>
                                    <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>
                                        {item.completedDate != null ? item.completedDate : '-  -  -'}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.sub_view}>
                                <View style={styles.left_view}>
                                    <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto'}]}>Customer name</Text>
                                </View>
                                <View style={styles.middle_view}>
                                    <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>:</Text>
                                </View>
                                <View style={styles.right_view}>
                                    <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>{item.contactPerson}</Text>
                                </View>
                            </View>

                            <View style={styles.sub_view}>
                                <View style={styles.left_view}>
                                    <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto'}]}>Job type</Text>
                                </View>
                                <View style={styles.middle_view}>
                                    <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>:</Text>
                                </View>
                                <View style={styles.right_view}>
                                    <View style={styles.jobTypeView}>
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>{item.jobType}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.sub_view}>
                                <Entypo name='location-pin' size={20} color='#d9534f'/>
                                <View style={{flex: 1}}>
                                    <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>{item.location}</Text>
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