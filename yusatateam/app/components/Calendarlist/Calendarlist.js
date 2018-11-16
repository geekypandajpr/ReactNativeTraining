import React from 'react';
import { AppLoading } from 'expo';
import { View } from 'react-native';
import styles from './Styles';
import colors from '../../constants/colors';
import { CalendarList } from 'react-native-calendars';
import moment from 'moment';

export default class Calendarlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
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

    render() {
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View style={styles.calendar_view}>
                <CalendarList
                    markedDates = {{
                        [this.props.startDate]: {selected: true, selectedColor: '#5cb85c'},
                        [this.props.endDate]: {selected: true, selectedColor: '#d9534f'}
                    }}
                    current={moment(new Date()).format('YYYY-MM-DD')}
                    pastScrollRange={100}
                    futureScrollRange={100}
                    pagingEnabled
                    firstDay={1}
                    onDayPress={this.props.onDayPress}
                    theme={{
                        'stylesheet.calendar.header': {
                            dayHeader: {
                                marginTop: 2,
                                marginBottom: 7,
                                width: 30,
                                textAlign: 'center',
                                fontSize: 14,
                                color: colors.CALENDARS.DAY_HEADER_COLOR,
                            },
                            todayText: {
                                fontSize: 18,
                                color: colors.CALENDARS.TODAY_TEXT_COLOR,
                                marginTop: 0,
                            }
                        },

                        //todayTextColor: 'red',
                        dayTextColor: colors.CALENDARS.DAY_TEXT_COLOR,
                
                        textDayFontSize: 12,
                        textDayHeaderFontSize: 14,
                        //textDayFontFamily
                        // textDayHeaderFontFamily
                        // textMonthFontFamily

                        textMonthFontSize: 15,
                        textMonthFontWeight: 'bold',
                        monthTextColor: colors.CALENDARS.MONTH_TEXT_COLOR,
                        // textMonthFontSize

                        backgroundColor: colors.CALENDARS.BACKGROUND_COLOR,
                        calendarBackground: colors.CALENDARS.CALENDAR_BACKGROUND_COLOR,
                        textSectionTitleColor: colors.CALENDARS.TEXT_SECTION_TITLE_COLOR,
                        selectedDayBackgroundColor: colors.CALENDARS.SELECTED_DAY_BACKGROUND_COLOR,
                        selectedDayTextColor: colors.CALENDARS.SELECTED_DAY_TEXT_COLOR,
                        textDisabledColor: colors.CALENDARS.TEXT_DISABLED_COLOR,
                        arrowColor: colors.CALENDARS.ARROW_COLOR,

                    }}
                    style={{ borderBottomWidth: 1, borderBottomColor: '#000' }}
                //calendarHeight = {100}
                />
            </View>
        )
    }
}

export { Calendarlist }