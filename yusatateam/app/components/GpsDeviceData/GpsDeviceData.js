import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Card } from 'native-base';
import { AppLoading } from 'expo';

import styles from './styles';
import { globalStyles } from '../../styles';

export default class GpsDeviceData extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
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
        const { onPress, list } = this.props;
        const statusColor = {'Active': '#5cb85c', 'Inactive': '#d9534f'} 
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View style={styles.container}>
                <TouchableOpacity onPress={onPress}>
                    <Card style={[ globalStyles.card, { padding: 10 } ]}>

                        <View style={styles.view}>
                            <View style={styles.title_view}>
                                <Text style={[ globalStyles.title_text, { fontFamily: 'Roboto' } ]}>{list.company}</Text>
                            </View>
                            <View style={styles.status_view}>
                                <View style={styles.status}>
                                    <Text style={[ globalStyles.secondary_text, { fontFamily: 'Roboto', color: statusColor['Active'] } ]}>{list.status}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.view}>
                            <View style={styles.first_view}>
                                <Text style={[ globalStyles.primary_text, { fontFamily: 'Roboto' } ]}>Provider</Text>
                            </View>
                            <View style={styles.middle_view}>
                                <Text style={[ globalStyles.secondary_text, { fontFamily: 'Roboto' } ]}>:</Text>
                            </View>
                            <View style={styles.last_view}>
                                <Text style={[ globalStyles.secondary_text, { fontFamily: 'Roboto' } ]}>{list.provider}</Text>
                            </View>
                        </View>

                        <View style={styles.view}>
                            <View style={styles.first_view}>
                                <Text style={[ globalStyles.primary_text, { fontFamily: 'Roboto' } ]}>ESN</Text>
                            </View>
                            <View style={styles.middle_view}>
                                <Text style={[ globalStyles.secondary_text, { fontFamily: 'Roboto' } ]}>:</Text>
                            </View>
                            <View style={styles.last_view}>
                                <Text style={[ globalStyles.secondary_text, { fontFamily: 'Roboto' } ]}>{list.esn}</Text>
                            </View>
                        </View>

                        <View style={styles.view}>
                            <View style={styles.first_view}>
                                <Text style={[ globalStyles.primary_text, { fontFamily: 'Roboto' } ]}>UDID</Text>
                            </View>
                            <View style={styles.middle_view}>
                                <Text style={[ globalStyles.secondary_text, { fontFamily: 'Roboto' } ]}>:</Text>
                            </View>
                            <View style={styles.last_view}>
                                <Text style={[ globalStyles.secondary_text, { fontFamily: 'Roboto' } ]}>{list.udid}</Text>
                            </View>
                        </View>

                        <View style={styles.view}>
                            <View style={styles.first_view}>
                                <Text style={[ globalStyles.primary_text, { fontFamily: 'Roboto' } ]}>Transaction date</Text>
                            </View>
                            <View style={styles.middle_view}>
                                <Text style={[ globalStyles.secondary_text, { fontFamily: 'Roboto' } ]}>:</Text>
                            </View>
                            <View style={styles.last_view}>
                                <Text style={[ globalStyles.secondary_text, { fontFamily: 'Roboto' } ]}>{list.transaction_data}</Text>
                            </View>
                        </View>

                    </Card>
                </TouchableOpacity>
            </View>
        )
    }
}


export { GpsDeviceData }
