import React from 'react';
import { ScrollView, FlatList, BackHandler } from 'react-native';
import { View, Text, Card, Button } from 'native-base';
import { AppLoading } from 'expo';
import { Toolbar } from '../../../components/Toolbar/Toolbar'
import styles from './styles';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import DeviceData from '../../../assets/JSONData/DeviceData'
export default class VehicleDetails extends React.Component {
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
        this.setState({ isLoading: false })
    }

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
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>
                    <Toolbar title='Customer Name' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')} />

                    <View style={styles.inner_container}>
                        <FlatList
                            data={DeviceData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) =>
                                <Card style={styles.card_style}>

                                    <View style={styles.Padding_view}>

                                    <View style={{flexDirection:'row',alignItems:'center'}}>

                                        <View style={styles.View_row}>
                                            <View style={styles.flex_one}>
                                                <Text style={styles.Vehicle_no}>Vehicle No</Text>
                                            </View>
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                 <Text style={styles.Vehicle_num}>JP456789</Text>
                                            </View>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row',alignItems: 'center',justifyContent:'flex-end'}}>
                                                <View style={styles.jobTypeView}>
                                                    <Text style={styles.jobTypeText}>Complete</Text>
                                                </View>
                                        </View>
                                    </View>
                                        <View style={styles.View_row}>
                                            <View style={styles.flex_one}>

                                                <View style={styles.View_row}>
                                                    <View style={styles.flex_one}>
                                                        <Text>Sim</Text>
                                                    </View>
                                                    <View style={styles.Sim_no}>
                                                        <Text >:</Text>
                                                        <Text style={{ marginLeft: 10 }}>2</Text>
                                                    </View>
                                                </View>

                                                <View style={styles.View_row}>
                                                    <View style={styles.flex_one}>
                                                        <Text>Device</Text>
                                                    </View>
                                                    <View style={styles.Sim_no}>
                                                        <Text >:</Text>
                                                        <Text style={{ marginLeft: 10 }}>3</Text>
                                                    </View>
                                                </View>

                                                 <View style={styles.View_row}>
                                                    <View style={styles.flex_one}>
                                                        <Text>Date</Text>
                                                    </View>
                                                    <View style={styles.Sim_no}>
                                                        <Text >:</Text>
                                                        <Text style={{ marginLeft: 10 }}>21/04/1995</Text>
                                                    </View>
                                                </View>
                                            </View>
                                           
                                        </View>
                                        {/* <View style={styles.View_row}>
                                            <View style={styles.flex_one}>
                                                <Text>Date</Text>
                                            </View>
                                            <View style={{ flex: 5, flexDirection: 'row' }}>
                                                <Text >:</Text>
                                                <Text style={{ marginLeft: 6 }}>24/04/2015</Text>
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
export { VehicleDetails }