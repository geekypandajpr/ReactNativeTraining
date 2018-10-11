import React from 'react';
import {
    View,
    FlatList,
    TouchableHighlight,
    Dimensions,
} from 'react-native';
import { Card, Text } from 'native-base';
import styles from './styles';
import { AppLoading } from 'expo';
import { Toolbar } from '../../components';
import DeviceData from '../../assets/JSONData/DeviceData'
import { Octicons,FontAwesome } from '@expo/vector-icons'
import { DeviceDetails } from './DeviceDeatails'

export default class Device extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
        };
        this.modalRef = React.createRef();
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
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>

                    <Toolbar title='Device' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')} />

                    <View style={styles.viewStyle}>
                        <FlatList
                            data={DeviceData}
                            keyExtractor={(item, index) => item.toString()}
                            renderItem={({ item, index }) =>
                            <TouchableHighlight
                            onPress={() => {
                                this.modalRef.current.setModalVisible(true)
                            }}>
                                <Card style={styles.mainCard}>

                                    <View style={styles.First_View}>
                                        <TouchableHighlight
                                            style={{
                                                // borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                                                // width: Dimensions.get('window').width * 0.13,
                                                // height: Dimensions.get('window').width * 0.13,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                height: 54,
                                                width: 54,
                                                borderRadius: 27,
                                                borderWidth: 1,
                                                borderColor: 'gray'

                                            }}
                                        >
                                            <FontAwesome name="mobile-phone" size={54} color="#1f667e"
                                             justifyContent="center" alignItems="center" />
                                        </TouchableHighlight>
                                    </View>

                                    <View style={styles.Second_View}>

                                        <View style={styles.Margin_Row}>
                                            <View style={styles.Level_Second}>
                                                <Text style={styles.Header_Style}>{item.IMEI}</Text>
                                            </View>

                                            <View style={[styles.Status_Button, { backgroundColor: item.color }]} >
                                                <Text style={styles.Status_Style}>{item.status}</Text>
                                            </View>
                                        </View>

                                        <View style={styles.Level_Row}>
                                            <View style={styles.Level_Head}>
                                                <Text style={styles.Text_Style}>ORDER#</Text>
                                            </View>
                                            <View style={{flex:0.1 }}>
                                                <Text style={styles.Text_Style}> : </Text>
                                            </View>
                                            <View style={styles.Level_Style}>
                                                <Text style={styles.View_Style}>{item.ORDER}</Text>
                                            </View>
                                        </View>

                                        <View style={styles.Level_Row}>
                                            <View style={styles.Level_Head}>
                                                <Text style={styles.Text_Style}>ESN</Text>
                                            </View>
                                            <View style={{ flex:0.1 }}>
                                                <Text style={styles.Text_Style}> : </Text>
                                            </View>
                                            <View style={styles.Level_Style}>
                                                <Text style={styles.View_Style}>{item.ESN}</Text>
                                            </View>
                                        </View>

                                        <View style={[styles.Level_Row, { marginBottom: 5 }]}>
                                            <View style={styles.Level_Second}>
                                                <Text style={styles.modal_style}>{item.Model}</Text>
                                            </View>
                                            <View style={styles.Provider_View} >
                                                <Text style={styles.providerStyle}>{item.Manufacturer}</Text>
                                            </View>
                                        </View>

                                    </View>

                                </Card>
                                </TouchableHighlight>
                            }></FlatList>
                    </View>
                    <DeviceDetails ref={this.modalRef}/>
                </View>
        );
    }

}
export { Device }