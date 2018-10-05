import React from 'react';
import {
    View,
    FlatList,
    TouchableHighlight,
    Dimensions,
    Text,
} from 'react-native';
import { Card, Button } from 'native-base';
import styles from './styles';
import { AppLoading } from 'expo';
import { Toolbar } from '../../components';
import { Ionicons, Feather } from '@expo/vector-icons'

export default class Sim extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            data: [
                {
                    ORDER: 'EVKGLI',
                    ICCID: 'ICCID1',
                    MSIDN: 'MSIDN1',
                    Provider: 'Idea',
                    Mobile: '09085-53379',
                    status: 'Activate'
                },
                {
                    ORDER: 'JSCKBK',
                    ICCID: 'ICCID2',
                    MSIDN: 'MSIDN2',
                    Provider: 'Aircel',
                    Mobile: '09085-45090',
                    status: 'Deactivate'
                },
                {
                    ORDER: 'UYGEYUJA',
                    ICCID: 'ICCID3',
                    MSIDN: 'MSIDN3',
                    Provider: 'Airtel',
                    Mobile: '09085-65879',
                    status: 'Activate'
                },
                {
                    ORDER: 'HAVCMSV',
                    ICCID: 'ICCID4',
                    MSIDN: 'MSIDN4',
                    Provider: 'Idea',
                    Mobile: '09085-53379',
                    status: 'Deactivate'
                },
                {
                    ORDER: 'HAVCMSV',
                    ICCID: 'ICCID4',
                    MSIDN: 'MSIDN4',
                    Provider: 'Idea',
                    Mobile: '09085-53379',
                    status: 'Deactivate'
                },
                {
                    ORDER: 'UYGEYUJA',
                    ICCID: 'ICCID3',
                    MSIDN: 'MSIDN3',
                    Provider: 'Aircel',
                    Mobile: '09085-65879',
                    status: 'Activate'
                },
                {
                    ORDER: 'HAVCMSV',
                    ICCID: 'ICCID4',
                    MSIDN: 'MSIDN4',
                    Provider: 'Idea',
                    Mobile: '09085-53379',
                    status: 'Deactivate'
                },

                {
                    ORDER: 'HAVCMSV',
                    ICCID: 'ICCID4',
                    MSIDN: 'MSIDN4',
                    Provider: 'Docomo',
                    Mobile: '09085-53379',
                    status: 'Activate'
                },

                {
                    ORDER: 'UYGEYUJA',
                    ICCID: 'ICCID3',
                    MSIDN: 'MSIDN3',
                    Provider: 'Aircel',
                    Mobile: '09085-65879',
                    status: 'Activate'
                },
                {
                    ORDER: 'HAVCMSV',
                    ICCID: 'ICCID4',
                    MSIDN: 'MSIDN4',
                    Provider: 'Idea',
                    Mobile: '09085-53379',
                    status: 'Deactivate'
                },
            ]

        }
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
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>

                    <Toolbar title='Sim' leftIcon='arrow-left' leftIconType='Feather'
                        onLeftButtonPress={() => navigate('HomeScreen')}
                        rightIcon='settings'
                        rightIconType='MaterialCommunityIcons' />

                    <View style={styles.viewStyle}>
                        <FlatList
                            data={this.state.data}
                            keyExtractor={(item, index) => item.toString()}
                            renderItem={({ item, index }) =>
                                <Card style={styles.mainCard}>

                                    <View style={styles.firstView}>
                                        <TouchableHighlight
                                            style={{
                                                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                                                width: Dimensions.get('window').width * 0.10,
                                                height: Dimensions.get('window').width * 0.10,
                                                backgroundColor: '#1f667e',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginTop: 9,
                                                marginLeft: 7
                                            }}
                                        >
                                            <Text style={styles.indexText}>{index + 1}</Text>
                                        </TouchableHighlight>
                                    </View>

                                    <View style={styles.secondViews}>

                                        <View style={styles.firstRow}>
                                            <View style={styles.secondView}>
                                                <Text style={styles.heading}>
                                                    {item.ORDER}
                                                </Text>
                                            </View>
                                            <View style={styles.status_view}>
                                                <Button style={styles.statusButton}>
                                                    <Text style={styles.status_text}>{item.status}</Text>
                                                </Button>
                                            </View>
                                        </View>

                                        <View style={styles.secondView}>
                                            <Text style={styles.viewHead}> MSIDN : </Text>
                                            <Text style={styles.viewAns}>{item.MSIDN}</Text>
                                        </View>

                                        <View style={styles.secondView}>
                                            <Text style={styles.viewHead}> ICCID : </Text>
                                            <Text style={styles.viewAns}>{item.ICCID}</Text>
                                        </View>

                                        <View style={styles.secondView}>
                                            <View style={styles.secondView}>
                                                <Text style={styles.viewHead}>{item.Mobile}</Text>
                                            </View>

                                            <View>
                                                <Text style={styles.providerStyle} >{item.Provider}</Text>
                                            </View>
                                        </View>

                                    </View>

                                </Card>
                            }></FlatList>

                    </View>
                </View>


        );
    }

}
export { Sim }