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
export default class Device extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            data: [
                {
                    ORDER: '12VtlF0Lf',
                    IMEI: 'IMEI 100',
                    ESN: 'ESN 100',
                    Manufacturer: 'Hp',
                    status: 'Tested Ok'
                },
                {
                    ORDER: '14VtlF0Lf',
                    IMEI: 'IMEI 101',
                    ESN: 'ESN 101',
                    Manufacturer: 'Dell',
                    status: 'Ready to use'
                },
                {
                    ORDER: '13VtlF0Lf',
                    IMEI: 'IMEI 11',
                    ESN: 'ESN 12',
                    Manufacturer: 'Lenovo',
                    status: 'Defective'
                },
                {
                    ORDER: '12VtlF0Lf',
                    IMEI: 'IMEI 100',
                    ESN: 'ESN 100',
                    Manufacturer: 'Dell',
                    status: 'Tested Ok'
                },
                {
                    ORDER: '14VtlF0Lf',
                    IMEI: 'IMEI 101',
                    ESN: 'ESN 101',
                    Manufacturer: 'Hp',
                    status: 'Ready to use'
                },
                {
                    ORDER: '13VtlF0Lf',
                    IMEI: 'IMEI 11',
                    ESN: 'ESN 12',
                    Manufacturer: 'Lenovo',
                    status: 'Defective'
                },
                {
                    ORDER: '12VtlF0Lf',
                    IMEI: 'IMEI 100',
                    ESN: 'ESN 100',
                    Manufacturer: 'Hp',
                    status: 'Tested Ok'
                },
                {
                    ORDER: '14VtlF0Lf',
                    IMEI: 'IMEI 101',
                    ESN: 'ESN 101',
                    Manufacturer: 'Hp',
                    status: 'Ready to use'
                },
                {
                    ORDER: '13VtlF0Lf',
                    IMEI: 'IMEI 11',
                    ESN: 'ESN 12',
                    Manufacturer: 'Hp',
                    status: 'Defective'
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
        //const { navigate } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>
                    <Toolbar title='Device' leftIcon='arrow-left' leftIconType='Feather' />

                    {/* <Toolbar title='Sim' leftIcon='arrow-left' leftIconType='Feather'
                        onLeftButtonPress={() => navigate('HomeScreen')}
                        rightIcon='settings'
                        rightIconType='MaterialCommunityIcons' /> */}

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
                                                    {item.IMEI}
                                                </Text>
                                            </View>
                                            <View style={styles.status_view}>
                                                <Button bordered style={styles.statusButton}>
                                                    <Text style={styles.status_text}>{item.status}</Text>
                                                </Button>
                                            </View>
                                        </View>

                                        <View style={styles.secondView}>
                                            <Text style={styles.viewHead}> ORDER# : </Text>
                                            <Text style={styles.viewAns}>{item.ORDER}</Text>
                                        </View>

                                        <View style={styles.secondView}>
                                            <View style={styles.secondView}>
                                                <Text style={styles.viewHead}> ESN : </Text>
                                                <Text style={styles.viewAns}>{item.ESN}</Text>
                                            </View>
                                            <View >
                                                <Text style={styles.providerStyle}>
                                                    {item.Manufacturer}
                                                </Text>
                                            </View>
                                        </View>

                                        {/* <View style={styles.secondView}>
                                            <View style={styles.secondView}>
                                                <Text style={styles.viewHead}>{item.Mobile}</Text>
                                            </View>

                                            <View>
                                                <Text style={styles.providerStyle} >{item.Provider}</Text>
                                            </View>
                                        </View> */}

                                    </View>

                                </Card>
                            }></FlatList>

                    </View>
                </View>


        );
    }


}
export { Device }