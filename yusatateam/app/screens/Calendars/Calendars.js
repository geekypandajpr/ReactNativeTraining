import React from 'react';
import { AppLoading } from 'expo';
import { View } from 'react-native';
import { Statusbar, Calendarlist } from '../../components';
import styles from './Styles';
import colors from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { Left, Body, Button, Text, Tab, TabHeading, Tabs, Container, Header, Toast } from 'native-base';

export default class Calendars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            startDate: '',
            endDate: ''
        }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false });
    }

    onEndDateChange(day) {
        if(day.dateString <= this.state.startDate) {
            Toast.show({
                position: 'bottom',
                type: 'danger',
                duration: 3000,
                text: 'End date should be greater than start date',
                buttonText: 'Ok',
            });
        } else {
            this.setState({ endDate: day.dateString });
        }
    }

    onStartDateChange(day) {
        this.setState({ startDate: day.dateString });
    }

    render() {
        const { goBack } = this.props.navigation;
        return(
            this.state.isLoading === true ? <AppLoading /> :
            <View style={{ flex: 1 }}>
                <Statusbar backgroundColor={colors.STATUSBAR_COLOR} barStyle="light-content" />
                <Container>
                    
                    <Header hasTabs style={styles.header}>
                        <Left>
                            <Ionicons name='ios-close' color="#d9534f" size={35} onPress={() => goBack()} style={styles.icon}/>
                        </Left>
                        <Body>
                            <Text style={styles.heading}>Select Date Range</Text>
                        </Body>
                    </Header>

                    <Tabs tabBarUnderlineStyle={{backgroundColor: colors.HEADER_COLOR}}>
                        <Tab heading={
                                <TabHeading>
                                    <View style={styles.tab_view}>
                                        <Text style={styles.from}>From</Text>
                                        <Text style={styles.date}>{this.state.startDate}</Text>
                                    </View>
                                </TabHeading>
                            } >
                            <Calendarlist
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onDayPress={(day) => {this.onStartDateChange(day)} }
                            />
                        </Tab>
                        <Tab heading={
                                <TabHeading>
                                    <View style={styles.tab_view}>
                                        <Text style={styles.from}>To</Text>
                                        <Text style={styles.date}>{this.state.endDate}</Text>
                                    </View>
                                </TabHeading>
                            } >
                            <Calendarlist
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onDayPress={(day) => {this.onEndDateChange(day)} }
                            />
                        </Tab>
                    </Tabs>
                </Container>

                <View style={styles.footer}>
                    <View style={styles.button_view}>
                        <Button style={styles.button} onPress={() => goBack()}>
                            <Text> Submit </Text>
                        </Button>
                    </View>
                </View>

            </View>
        )
    }
}

export { Calendars }