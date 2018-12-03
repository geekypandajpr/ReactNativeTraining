import React from 'react';
import { View, ScrollView, BackHandler } from 'react-native';
import { Text } from 'native-base';

import styles from './styles';
import { StackedBar, Toolbar } from '../../../components';

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
// const colors = [ '#F98866', '#84e184', '#5BC8AC' ];
const colors = ['#9491F8', '#8BB6F3', '#8AD3F3']
const keys  = [ 'Completed', 'Pending', 'Scheduled' ];

export default class TechDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
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

    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            <View style={styles.container}>

                <Toolbar title='Details' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                    setting='ios-search' settingType='Ionicons'
                />

                <ScrollView>
                    <View style={styles.first_view}>
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
                </ScrollView>

            </View >
        );
    }
}
export { TechDetails }