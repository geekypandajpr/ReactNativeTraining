import React from 'react';
import {
    View,
    FlatList,
    TouchableWithoutFeedback,
    BackHandler
} from 'react-native';
import { Card, Text } from 'native-base';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons'
import styles from './styles';
import { Toolbar } from '../../components';
import DeviceData from '../../assets/JSONData/DeviceData'
import { DeviceDetails } from './DeviceDeatails';
import {  SearchBar } from '../../components/SearchBar/SearchBar'
import { userActions } from '../../redux/actions';

export  class Device extends React.Component {
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

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        var req = {"orderCode " : "device"}
        this.props.onFetchData(req);
    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }
    searchFunction(text){
        const newdata = this.list.filter(function(item){
            const itemdata=item.ESN.toUpperCase();
            const textdata =text.toUpperCase();
            return itemdata.indexOf(textdata)>-1;
        })
        this.setState({data:newdata,searchValue:text})
    }

    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>

                    <Toolbar title='Device' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')} />
                        {/* <SearchBar onChangeText = {(text)=>this.searchFunction(text)}
                        ></SearchBar> */}
                    <View style={styles.viewStyle}>
                        <FlatList
                            data={this.state.data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) =>
                                <TouchableWithoutFeedback
                                    onPress={() => {
                                        this.modalRef.current.setModalVisible(true)
                                    }}>
                                    <Card style={styles.mainCard}>

                                        <View style={styles.First_View}>
                                            <View style={styles.profile_view}>
                                                <FontAwesome name="mobile-phone" size={56} color="#1f667e" ju
                                                ></FontAwesome>
                                            </View>

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
                                                <View style={{ flex: 0.1 }}>
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
                                                <View style={{ flex: 0.1 }}>
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
                                                <View style={styles.jobTypeView}>
                                                    <Text style={styles.jobTypeText}>{item.Manufacturer}</Text>
                                                </View>
                                            </View>

                                        </View>

                                    </Card>
                                </TouchableWithoutFeedback>

                            }></FlatList>
                    </View>
                    <DeviceDetails ref={this.modalRef} />
                </View>
        );
    }

}
function mapStateToProps(state){
    DeviceDatas : state.DeviceDatas
}

function mapDispatchToProps(dispatch){
    return{ 
        onFetchData:(req)=>{userActions.deviceRequest(req)}
      }
}
export default connect(mapStateToProps,mapDispatchToProps)(Device)