import React from 'react';
import {
    View,
    FlatList,
    TouchableHighlight,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
import { Card, Button, Text } from 'native-base';
import styles from './styles';
import { AppLoading } from 'expo';
import { Toolbar } from '../../components';
import { VehicleDetails } from './VehicleDetails/VehicleDetails';
import vehicleData from '../../assets/JSONData/vehicleData';
import { Ionicons} from '@expo/vector-icons';
export default class VehicleList extends React.Component {
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
                    <Toolbar title='Association' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')} />
                    <View style={styles.viewStyle}>
                        <FlatList
                            data={vehicleData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) =>
                                <TouchableWithoutFeedback
                                    onPress={() => {
                                        this.refs.modal.setModalVisible(true, item)
                                    }}>
                                    <Card style={styles.mainCard}>
                                        <View style={styles.Second_View}>
                                            <View style={styles.Margin_Row}>
                                                <View style={styles.Level_Second}>
                                                    <Text style={styles.Header_Style}>{item.ORDER}</Text>
                                                </View>
                                                <View style={[styles.Status_Button, { backgroundColor: item.color }]} >
                                                    <Text style={styles.Status_Style}>{item.status}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.Level_Row}>
                                                <View style={styles.Level_Head}>
                                                    <Text style={styles.Text_Style}>MSIDN</Text>
                                                </View>
                                                <View style={{ flex: 0.1 }}>
                                                    <Text style={styles.Text_Style}> : </Text>
                                                </View>
                                                <View style={styles.Level_Style}>
                                                    <Text style={styles.View_Style}>{item.MSIDN}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.Level_Row}>
                                                <View style={styles.Level_Head}>
                                                    <Text style={styles.Text_Style}>ICCID</Text>
                                                </View>
                                                <View style={{ flex: 0.1 }}>
                                                    <Text style={styles.Text_Style}> : </Text>
                                                </View>
                                                <View style={styles.Level_Style}>
                                                    <Text style={styles.View_Style}>{item.ICCID}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.Level_Row}>
                                                <View style={{ flex: 0.1, justifyContent: 'center' }}>
                                                    <Ionicons name='ios-call' size={27} color='#5cb85c' />
                                                </View>
                                                <View style={styles.Level_Second}>
                                                    <Text style={styles.Mobile_Style}>{item.Mobile}</Text>
                                                </View>
                                                <View style={styles.Provider_View} >
                                                    <Text style={styles.providerStyle}>{item.Provider}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </Card>
                                </TouchableWithoutFeedback>
                            }></FlatList>
                    </View>
                    <VehicleDetails ref='modal' />
                </View>
        );
    }
}
export { VehicleList }