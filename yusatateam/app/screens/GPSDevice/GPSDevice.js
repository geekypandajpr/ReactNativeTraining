import React from 'react';
import {
    View,
    FlatList,
    TouchableWithoutFeedback,
    TouchableOpacity,
    BackHandler
} from 'react-native';
import { Card, Text,Item,Picker} from 'native-base';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { ToolbarWithDropdown, Activityindication,HeaderWithSearchbar,SearchBar, GpsDeviceData} from '../../components';
import { userActions } from '../../redux/actions';
import { globalStyles } from '../../styles';

export class GPSDevice extends React.Component {
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
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>
                    <ToolbarWithDropdown title='GPS Devices' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        setting='filter' settingType='FontAwesome' onSettingsPress={() => this.AlertBox()}
                    />
                        {/* <View style={styles.searchView}> */}
                            {/* <View style={styles.filterIcon}>
                                <Item picker>
                                <Picker
                                    mode="dropdown"
                                    style={{ width: 50 }}
                                    placeholder="Select Device"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Picker.Item label="All" value="key0" />
                                    <Picker.Item label="Company Code" value="key1" />
                                    <Picker.Item label="Company Name" value="key2" />
                                    <Picker.Item label="provider" value="key3" />
                                    <Picker.Item label="UDID" value="key4" />
                                </Picker>
                                </Item>
                            </View> */}
                        {/* <View>
                            <SearchBar placeholder={'Search here'}
                                value = { this.state.text}
                                onChangeText={(text) => this.SearchFilterFunction(text)} />
                        </View> */}
                {/* </View> */}
                        <FlatList
                            data={[{key:1},{key:2},{key:3},{key:4},{key:5},{key:6}]}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) =>
                                <GpsDeviceData/>
                        }/>
                </View>
        );
    }
}

function mapStateToProps(state){
    return{
        simDatas : state.simData
    }
}

function mapDispatchToProps(dispatch){
    return{
        onFetchData: () => dispatch(userActions.simRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GPSDevice);