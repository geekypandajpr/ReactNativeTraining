import React from 'react';
import { View, ScrollView, BackHandler } from 'react-native';
import { Text } from 'native-base';
import moment from 'moment';

import styles from './styles';
import { StackedBar, Toolbar } from '../../../components';
import Year from './Year';

const data = [
    {   
        label: 'Mon',
        Completed: 15,
        Pending : 5,
        Scheduled: 5,
    },
    {
        label: 'Tue',
        Completed: 12,
        Pending: 6,
        Scheduled: 3,
    },
    {   
        label: 'Wed',
        Completed: 10,
        Pending: 3,
        Scheduled: 9,
    },
    {   
        label: 'Thr',
        Completed: 9,
        Pending: 4,
        Scheduled: 5,
    },
    {   
        label: 'Fri',
        Completed: 12,
        Pending: 6,
        Scheduled: 4,
    },
    {   
        label: 'Sat',
        Completed: 11,
        Pending: 5,
        Scheduled: 6,
    },
    {   
        label: 'Sun',
        Completed: 8,
        Pending: 4,
        Scheduled: 6,
    },
];
//colors : [ '#03B9A2', '#747C7F', '#37464B' ],
const colors = [ '#F98866', '#84e184', '#5BC8AC' ];
// const colors = ['#9491F8', '#8BB6F3', '#8AD3F3']
const keys  = [ 'Completed', 'Pending', 'Scheduled' ];

export default class TechDetails extends React.Component {
    constructor(props) {
        super(props);
        moment.locale('en');
        this.state = {
            isLoading: true,
            selectedMonth: moment(new Date()).format('MMM')
        }
        this.modalRef = React.createRef();
        this.openCalendar = this.openCalendar.bind(this);
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

    onMonthSelect(date) {
        this.setState({selectedMonth: moment(date).format('MMM')})
    }

    openCalendar() {
        this.modalRef.current.setModalVisible(true);
    }

    render() {
        const week=['1','2','3','4','5','6', '7', '8', '9', '10', '11']
        const { goBack } = this.props.navigation;

        return (
            <View style={styles.container}>

                <Toolbar title='Details' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                    setting='calendar' settingType='FontAwesome' onSettingsPress={this.openCalendar}
                />

                <ScrollView>
                    {week.map((item, index) => 
                        <View style={styles.first_view} key={index}>
                            <View style={styles.view}>
                                <View style={styles.date_view}>
                                    <Text style={styles.date}>01 NOV 2018 - 07 NOV 2018</Text>
                                </View>
                            </View>
                            <StackedBar
                                data={data}
                                colors={colors}
                                keys={keys}
                            />
                        </View>
                     )}
                </ScrollView>

                <Year ref={this.modalRef} selectedDate={(date) => this.onMonthSelect(date)}/>
            </View >
        );
    }
}
export { TechDetails }