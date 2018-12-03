import React from 'react';
import {
    FlatList,
    BackHandler,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
import { View, Text, List, ListItem, CheckBox, Body, Right } from 'native-base';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import styles from './styles';
import { AppLoading } from 'expo';
import { Toolbar } from '../../components';
import { VehicleDetails } from './VehicleDetails/VehicleDetails';
import vehicleData from '../../assets/JSONData/vehicleData';

export default class VehicleList extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
        };

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
                    <View>
                        <Toolbar title='Association' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                            setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')} />
                    </View>
                    <FlatList
                        data={vehicleData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                            <List >
                                <ListItem style={{ height: 90 }}>
                                    <Body >
                                        <View>
                                            <View >
                                                <Text style={styles.Cust_name} >{item.Name}</Text>
                                            </View>

                                            <View style={styles.Secondrow}>
                                                <Ionicons name='ios-call' size={27} color='#5cb85c' />
                                                <Text style={{ margin: 10,color: '#808080' }}>{item.MobileNo}</Text>
                                            </View>
                                           
                                            <View style={styles.Secondrow}></View>
                                                <View style={styles.location}>
                                                    <Text style={{color: '#808080'}}>Kumbha marg,pratap nagar</Text>
                                                </View>
                                                <View style={styles.Next_page}>
                                                    <TouchableOpacity style={styles.Next_page} activeOpacity={0.2} onPress={() => navigate('VehicleDetails')}>
                                                        <Text style={styles.View_more}>view more</Text>
                                                        <Ionicons name='ios-arrow-forward' size={27} color='#808080' />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                         </Body>
                                </ListItem>
                            </List>
                        } />
                </View>
        );
    }
}
export { VehicleList }