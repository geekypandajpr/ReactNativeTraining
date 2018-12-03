import React from 'react';
import { View, FlatList, Text, BackHandler } from 'react-native';
import { Button, Footer, FooterTab } from 'native-base';
import { AppLoading } from 'expo';

import { JobsComponent, HeaderWithSearchbar } from '../../components';
import styles from './Styles';
import JobDetails from '../Jobs/JobDetails/JobDetails';

export default class OpenJobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isButtonDisable: true,
            map: new Map(),
            isLoading: true,
            searchValue: '',
            datas: [
                {
                    jobNumber: 'JOBS-06NOV2018',
                    jobType: 'Install',
                    companyName: 'Yusata Infotech Private Limited',
                    vehicleNumber: 'JP01-4522',
                    scheduleDate: '05 Nov 2018 20:50',
                    location: '84/122 sector 8 pratap nagar, jaipur',
                },
                {
                    jobNumber: 'JOBS-07NOV2018',
                    jobType: 'Replace',
                    companyName: 'Yusata Infotech Private Limited',
                    vehicleNumber: 'JP01-4522',
                    scheduleDate: '05 Nov 2018 20:50',
                    location: '84/122 sector 8 pratap nagar, jaipur',
                },
                {
                    jobNumber: 'JOBS-08NOV2018',
                    jobType: 'Repair',
                    companyName: 'Yusata Infotech Private Limited',
                    vehicleNumber: 'JP01-4522',
                    scheduleDate: '05 Nov 2018 20:50',
                    location: '84/122 sector 8 pratap nagar, jaipur',
                },
                {
                    jobNumber: 'JOBS-09NOV2018',
                    jobType: 'Uninstall',
                    companyName: 'Yusata Infotech Private Limited',
                    vehicleNumber: 'JP01-4522',
                    scheduleDate: '05 Nov 2018 20:50',
                    location: '84/122 sector 8 pratap nagar, jaipur',
                },
                {
                    jobNumber: 'JOBS-01NOV2018',
                    jobType: 'Install',
                    companyName: 'Yusata Infotech Private Limited',
                    vehicleNumber: 'JP01-4522',
                    scheduleDate: '05 Nov 2018 20:50',
                    location: '84/122 sector 8 pratap nagar, jaipur',
                },
                {
                    jobNumber: 'JOBS-02NOV2018',
                    jobType: 'Replace',
                    companyName: 'Yusata Infotech Private Limited',
                    vehicleNumber: 'JP01-4522',
                    scheduleDate: '05 Nov 2018 20:50',
                    location: '84/122 sector 8 pratap nagar, jaipur',
                },
                {
                    jobNumber: 'JOBS-03NOV2018',
                    jobType: 'Repair',
                    companyName: 'Yusata Infotech Private Limited',
                    vehicleNumber: 'JP01-4522',
                    scheduleDate: '05 Nov 2018 20:50',
                    location: '84/122 sector 8 pratap nagar, jaipur',
                },
                {
                    jobNumber: 'JOBS-04NOV2018',
                    jobType: 'Uninstall',
                    companyName: 'Yusata Infotech Private Limited',
                    vehicleNumber: 'JP01-4522',
                    scheduleDate: '05 Nov 2018 20:50',
                    location: '84/122 sector 8 pratap nagar, jaipur',
                },
                {
                    jobNumber: 'JOBS-05OCT2018',
                    jobType: 'Install',
                    companyName: 'Yusata Infotech Private Limited',
                    vehicleNumber: 'JP01-4522',
                    scheduleDate: '05 Nov 2018 20:50',
                    location: '84/122 sector 8 pratap nagar, jaipur',
                },
                {
                    jobNumber: 'JOBS-05MAY2018',
                    jobType: 'Replace',
                    companyName: 'Yusata Infotech Private Limited',
                    vehicleNumber: 'JP01-4522',
                    scheduleDate: '05 Nov 2018 20:50',
                    location: '84/122 sector 8 pratap nagar, jaipur',
                },
                {
                    jobNumber: 'JOBS-05JUNE2018',
                    jobType: 'Repair',
                    companyName: 'Yusata Infotech Private Limited',
                    vehicleNumber: 'JP01-4522',
                    scheduleDate: '05 Nov 2018 20:50',
                    location: '84/122 sector 8 pratap nagar, jaipur',
                },
                {
                    jobNumber: 'JOBS-05JULY2018',
                    jobType: 'Uninstall',
                    companyName: 'Yusata Infotech Private Limited',
                    vehicleNumber: 'JP01-4522',
                    scheduleDate: '05 Nov 2018 20:50',
                    location: '84/122 sector 8 pratap nagar, jaipur',
                }
            ]
        }
        this.arrayList = [];
        this.jobDetailsRef = React.createRef();
        this.onSearchTextChanged = this.onSearchTextChanged.bind(this);
        this.onSearchClearPressed = this.onSearchClearPressed.bind(this);
        this.onCheckboxPressed = this.onCheckboxPressed.bind(this);
    }

    componentDidMount() {
        this.arrayList = this.state.datas;
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

    onSearchTextChanged(searchValue) {
        this.setState({ searchValue }, function(){
            this.doSearch(searchValue);
        });
    }

    doSearch(searchValue) {
        const newData = this.arrayList.filter(function (item) {
            const itemData = item.jobNumber.toUpperCase()
            const textData = searchValue.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({ datas: newData })
    }

    onSearchClearPressed(){
        this.onSearchTextChanged('');
    }

    onCheckboxPressed(jobNumber) {
        const map = new Map(jobNumber);
        if(map.has(jobNumber))
        {
           map.set(jobNumber,!map.get(jobNumber))
        }
        else{
            map.set(jobNumber);
        }
        this.setState({map:map})
    }

    render() {
        const { goBack } = this.props.navigation;
        return(
            this.state.isLoading === true ? <AppLoading /> :
            <View style={styles.container}>

                <HeaderWithSearchbar
                    onChangeText={(text)=>this.onSearchTextChanged(text)}
                    onSearchClear={this.onSearchClearPressed}
                    searchValue={this.state.searchValue}
                    title={'Open Jobs'}
                    leftIcon='arrow-left'
                    goBack={() => goBack()}/>
                    
                <View style={styles.inner_container}>
                    <FlatList
                        extraData={this.state}
                        data={this.state.datas}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                            <JobsComponent key={index} jobDatas={item}
                                checked={false}
                                onCheckboxPress={this.onCheckboxPressed(item.jobNumber)}
                                viewDetails={()=> {this.jobDetailsRef.current.setModalVisible(true, {})}}
                            />
                        }
                    />
                    { this.state.isButtonDisable ? null :
                        <Footer>
                            <FooterTab>
                                <Button style={styles.button}>
                                    <Text style={styles.buttonText}>Assign Jobs</Text>
                                </Button>
                            </FooterTab>
                        </Footer>
                    }
                </View>

                <JobDetails ref={this.jobDetailsRef} />
            </View>
        )
    }
}

export { OpenJobs }