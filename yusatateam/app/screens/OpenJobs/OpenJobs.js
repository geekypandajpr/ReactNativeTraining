import React from 'react';
import { View, FlatList, Text, BackHandler } from 'react-native';
import { Button, Footer, FooterTab, Header, Left, Right, Body, Title } from 'native-base';
import { Feather, Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';

import { Toolbar, JobsComponent, SearchBar, Statusbar } from '../../components';
import styles from './Styles';
import colors from '../../constants/colors';
import LeftElement from './LeftElement';
import CenterElement from './CenterElement';
import RightElement from './RightElement';

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
            isLoading: true,
            isSearchActive: false,
            searchValue: ''
        }
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

    onSearchPressed = () => {
        this.setState({ isSearchActive: true });
    }

    onSearchTextChanged = (searchValue) => {
        this.setState({ searchValue });
    }

    onSearchClearPressed = () => {
        this.onSearchTextChanged('');
    }

    onSearchClosed = () => {
        this.setState({ isSearchActive: false, searchValue: ''});
    }

    render() {
        const { isSearchActive, searchValue } = this.props;
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return(
            this.state.isLoading === true ? <AppLoading /> :
            <View style={styles.container}>
                <Toolbar title='Jobs' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                    setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')}
                />

               {/* <Statusbar backgroundColor={colors.STATUSBAR_COLOR} barStyle="light-content" />

                <Header>
                    <LeftElement
                        isSearchActive={isSearchActive}
                        onSearchPress={this.onSearchPressed}
                    />
                    <CenterElement
                        title='Open Jobs'
                        isSearchActive={isSearchActive}
                        onSearchPress={this.onSearchPressed}
                        searchValue={searchValue}
                    />
                    <RightElement
                        isSearchActive={this.state.isSearchActive}
                        onSearchPress={this.onSearchPressed}
                        searchValue={this.state.searchValue}
                        onSearchClear={this.onSearchClearPressed}
                    />
                </Header> */}

                <View style={styles.inner_container}>
                    <SearchBar placeholder={'Search jobs'}/>
                    <FlatList
                        data={datas}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                            <JobsComponent jobDatas={item}
                                viewDetails={()=> {console.log('Job details page')}}
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
            </View>
        )
    }
}

export { OpenJobs }