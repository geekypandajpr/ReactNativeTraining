import React from 'react';
import { FlatList, BackHandler, TouchableOpacity } from 'react-native';
import { View, Text, List, ListItem, Body, Right } from 'native-base';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { Toolbar,Activityindication } from '../../components';
import { userActions } from '../../redux/actions';
import vehicleData from '../../assets/JSONData/customerData';

export  class VehicleList extends React.Component {
    constructor() {
        super();
        this.state = { isLoading: true };
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
        this.props.onFetchData();
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
                 <Activityindication visible={this.props.vehicleData.isLoading}/>
                    <View>
                        <Toolbar title='Association' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                            setting='ios-search' settingType='Ionicons' />
                    </View>
                    <FlatList
                        data={this.props.vehicleData.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                            <List>
                                <ListItem style={{ height: 100 }}>
                                    <Body >
                                        <View style={{flex:1, flexDirection: 'column'}}>
                                            <View style={{flex:1}}>
                                                <Text style={[styles.Cust_name,{ fontFamily: 'Roboto'}]} >{item.Name}</Text>
                                            </View>

                                            <View style={styles.Secondrow}>
                                                <Ionicons name='ios-call' size={20} color='#5cb85c' style={{marginRight: 5}}/>
                                                <Text style={[styles.text, { fontFamily: 'Roboto'}]}>{item.MobileNo}</Text>
                                            </View>
                                           
                                            <View style={styles.Secondrow}>
                                                <Text style={[styles.text, { fontFamily: 'Roboto'}]}>84/122 sector 8, pratap nagar jaipur Rajasthan</Text>
                                            </View>
                                        </View>
                                    </Body>

                                    <Right>
                                        <TouchableOpacity style={styles.Next_page} activeOpacity={0.2}
                                            onPress={() => navigate('VehicleDetails')}>
                                            {/* <Text style={styles.view_more_text}>view more</Text> */}
                                            <Ionicons name='ios-arrow-forward' size={27} color='gray' />
                                        </TouchableOpacity>
                                    </Right>

                                </ListItem>
                            </List>
                        } />
                </View>
        );
    }
}
function mapStateToProps(state){
    return{
        vehicleData : state.simData
    }
}

function mapDispatchToProps(dispatch){
    return{
        onFetchData: () => dispatch(userActions.jobRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleList);