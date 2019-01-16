import React from 'react';
import {  View, Text, BackHandler } from 'react-native';
import { AppLoading } from 'expo';
import moment from 'moment';
import EStylesheet from 'react-native-extended-stylesheet';
import { Tab, Tabs, ScrollableTab, TabHeading } from 'native-base';

import {colors} from '../../../styles'
import { Toolbar } from '../../../components/Toolbar';
import { TechDetails } from './TechDetails';
import Year from './Year';

export default class TabComponent extends React.Component {
    constructor() {
        super();
        moment.locale('en');
        this.state = {
            isLoading: true,
            selectedMonth: moment(new Date()).format('MMM'),
            currentTab: 0
        };
        this.modalRef = React.createRef();
        this.techDetail = this.techDetail.bind(this);
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    };

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

    techDetail() {
        this.modalRef.current.setModalVisible(true);
    }

    onMonthSelect(date) {
        this.setState({selectedMonth: moment(date).format('MMM')})
    }

    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={{ flex: 1 }}>
                    <Toolbar title='Details' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        Calender='calendar' calenderType='FontAwesome' onCalenderPress={this.techDetail}
                        setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')}
                    />

                    <Tabs tabBarUnderlineStyle={{ backgroundColor: '#fff' }} onChangeTab={({ i }) => this.setState({ currentTab: i })}
                        renderTabBar={() => <ScrollableTab  style={{backgroundColor: colors.HEADER_COLOR}} />} >

                        <Tab heading={
                            <TabHeading style={styles.tabheading}>
                                <View style={styles.tab_view}>
                                    <Text style={styles.Week}>Week 1</Text>
                                    <Text style={styles.date}>1 {this.state.selectedMonth} to 7 {this.state.selectedMonth}</Text>
                                </View>
                            </TabHeading>}
                        >
                            <TechDetails />
                        </Tab>

                        <Tab heading={
                            <TabHeading style={styles.tabheading}>
                                <View style={styles.tab_view}>
                                    <Text style={styles.Week}>Week 2</Text>
                                    <Text style={styles.date}>8 {this.state.selectedMonth} to 14 {this.state.selectedMonth}</Text>
                                </View>
                            </TabHeading>
                        }>
                            <TechDetails />
                        </Tab>

                        <Tab heading={
                            <TabHeading style={styles.tabheading}>
                                <View style={styles.tab_view}>
                                    <Text style={styles.Week}>Week 3</Text>
                                    <Text style={styles.date}>15 {this.state.selectedMonth} to 21 {this.state.selectedMonth}</Text>
                                </View>
                            </TabHeading>
                        }>
                            <TechDetails />
                        </Tab>

                        <Tab heading={
                            <TabHeading style={styles.tabheading}>
                                <View style={styles.tab_view}>
                                    <Text style={styles.Week}>Week 4</Text>
                                    <Text style={styles.date}>22 {this.state.selectedMonth} to 28 {this.state.selectedMonth}</Text>
                                </View>
                            </TabHeading>
                        }>
                            <TechDetails />
                        </Tab>
                    </Tabs>
                    <Year ref={this.modalRef} selectedDate={(date) => this.onMonthSelect(date)}/>
                </View>
        )
    }

}
export { TabComponent }

const styles = EStylesheet.create({
    tabheading: {
        backgroundColor: 'transparent'
    },
    tab_view: {
        height: '100%',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Week: {
        color: '#fff',
        fontSize: '1rem'
    },
    date: {
        color: '#fff',
        fontSize: '0.7rem'
    }

})
