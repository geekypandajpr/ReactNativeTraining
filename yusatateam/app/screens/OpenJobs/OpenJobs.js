import React from 'react';
import {
    View,
    FlatList,
    Text,
    BackHandler
} from 'react-native';
import { Button, Footer, FooterTab } from 'native-base';
import { AppLoading } from 'expo';

import { JobsComponent, HeaderWithSearchbar } from '../../components';
import styles from './Styles';
import JobDetails from '../Jobs/JobDetails/JobDetails';

const datas = [
    {
        jobNumber: 'JOBS-05NOV2018',
        jobType: 'Install',
        companyName: 'Yusata Infotech Private Limited',
        vehicleNumber: 'JP01-4522',
        scheduleDate: '05 Nov 2018 20:50',
        location: '84/122 sector 8 pratap nagar, jaipur',
    },
    {
        jobNumber: 'JOBS-05NOV2018',
        jobType: 'Replace',
        companyName: 'Yusata Infotech Private Limited',
        vehicleNumber: 'JP01-4522',
        scheduleDate: '05 Nov 2018 20:50',
        location: '84/122 sector 8 pratap nagar, jaipur',
    },
    {
        jobNumber: 'JOBS-05NOV2018',
        jobType: 'Repair',
        companyName: 'Yusata Infotech Private Limited',
        vehicleNumber: 'JP01-4522',
        scheduleDate: '05 Nov 2018 20:50',
        location: '84/122 sector 8 pratap nagar, jaipur',
    },
    {
        jobNumber: 'JOBS-05NOV2018',
        jobType: 'Uninstall',
        companyName: 'Yusata Infotech Private Limited',
        vehicleNumber: 'JP01-4522',
        scheduleDate: '05 Nov 2018 20:50',
        location: '84/122 sector 8 pratap nagar, jaipur',
    },
    {
        jobNumber: 'JOBS-05NOV2018',
        jobType: 'Install',
        companyName: 'Yusata Infotech Private Limited',
        vehicleNumber: 'JP01-4522',
        scheduleDate: '05 Nov 2018 20:50',
        location: '84/122 sector 8 pratap nagar, jaipur',
    },
    {
        jobNumber: 'JOBS-05NOV2018',
        jobType: 'Replace',
        companyName: 'Yusata Infotech Private Limited',
        vehicleNumber: 'JP01-4522',
        scheduleDate: '05 Nov 2018 20:50',
        location: '84/122 sector 8 pratap nagar, jaipur',
    },
    {
        jobNumber: 'JOBS-05NOV2018',
        jobType: 'Repair',
        companyName: 'Yusata Infotech Private Limited',
        vehicleNumber: 'JP01-4522',
        scheduleDate: '05 Nov 2018 20:50',
        location: '84/122 sector 8 pratap nagar, jaipur',
    },
    {
        jobNumber: 'JOBS-05NOV2018',
        jobType: 'Uninstall',
        companyName: 'Yusata Infotech Private Limited',
        vehicleNumber: 'JP01-4522',
        scheduleDate: '05 Nov 2018 20:50',
        location: '84/122 sector 8 pratap nagar, jaipur',
    },
    {
        jobNumber: 'JOBS-05NOV2018',
        jobType: 'Install',
        companyName: 'Yusata Infotech Private Limited',
        vehicleNumber: 'JP01-4522',
        scheduleDate: '05 Nov 2018 20:50',
        location: '84/122 sector 8 pratap nagar, jaipur',
    },
    {
        jobNumber: 'JOBS-05NOV2018',
        jobType: 'Replace',
        companyName: 'Yusata Infotech Private Limited',
        vehicleNumber: 'JP01-4522',
        scheduleDate: '05 Nov 2018 20:50',
        location: '84/122 sector 8 pratap nagar, jaipur',
    },
    {
        jobNumber: 'JOBS-05NOV2018',
        jobType: 'Repair',
        companyName: 'Yusata Infotech Private Limited',
        vehicleNumber: 'JP01-4522',
        scheduleDate: '05 Nov 2018 20:50',
        location: '84/122 sector 8 pratap nagar, jaipur',
    },
    {
        jobNumber: 'JOBS-05NOV2018',
        jobType: 'Uninstall',
        companyName: 'Yusata Infotech Private Limited',
        vehicleNumber: 'JP01-4522',
        scheduleDate: '05 Nov 2018 20:50',
        location: '84/122 sector 8 pratap nagar, jaipur',
    }
]

export default class OpenJobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
        this.jobDetailsRef = React.createRef();
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

    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return(
            this.state.isLoading === true ? <AppLoading /> :
            <View style={styles.container}>

                <HeaderWithSearchbar
                    title={'Open Jobs'}
                    leftIcon='arrow-left'
                    goBack={() => goBack()}/>
                    
                <View style={styles.inner_container}>
                    <FlatList
                        data={datas}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                            <JobsComponent jobDatas={item}
                                viewDetails={()=> {this.jobDetailsRef.current.setModalVisible(true, {})}}
                            />
                        }
                    />
                    <Footer>
                        <FooterTab>
                            <Button style={styles.button}>
                                <Text style={styles.buttonText}>Assign Jobs</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </View>
                <JobDetails ref={this.jobDetailsRef} />
            </View>
        )
    }
}

export { OpenJobs }