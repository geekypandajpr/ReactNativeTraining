import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { Toolbar, JobsComponent, SearchBar } from '../../components';
import styles from './Styles';

const datas = [
    {
        jobNumber: 'JOBS-05NOV2018',
        jobType: 'Install',
        companyName: 'Yusata Infotech Private Limited',
        vehicleNumber: 'JP01-4522',
        scheduleDate: '05 Nov 2018 20:50',
        location: '84/122 sector 8 pratap nagar, jaipur'
    },
    {
        jobNumber: 'JOBS-05NOV2018',
        jobType: 'Replace',
        companyName: 'Yusata Infotech Private Limited',
        vehicleNumber: 'JP01-4522',
        scheduleDate: '05 Nov 2018 20:50',
        location: '84/122 sector 8 pratap nagar, jaipur'
    },
    {
        jobNumber: 'JOBS-05NOV2018',
        jobType: 'Repair',
        companyName: 'Yusata Infotech Private Limited',
        vehicleNumber: 'JP01-4522',
        scheduleDate: '05 Nov 2018 20:50',
        location: '84/122 sector 8 pratap nagar, jaipur'
    },
    {
        jobNumber: 'JOBS-05NOV2018',
        jobType: 'Uninstall',
        companyName: 'Yusata Infotech Private Limited',
        vehicleNumber: 'JP01-4522',
        scheduleDate: '05 Nov 2018 20:50',
        location: '84/122 sector 8 pratap nagar, jaipur'
    }
]

export default class OpenJobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return(
            <View style={styles.container}>
                <Toolbar title='Jobs' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                    setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')}
                />
                <View style={styles.inner_container}>
                    <SearchBar placeholder={'Search jobs'}/>
                    <FlatList
                        data={datas}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                            <JobsComponent jobDatas={item}/>
                        }
                    />
                </View>
            </View>
        )
    }
}

export { OpenJobs }