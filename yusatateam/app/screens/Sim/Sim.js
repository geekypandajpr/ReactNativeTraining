import React from 'react';
import {
    View,
    FlatList,
    TouchableHighlight,
    TouchableWithoutFeedback,
    BackHandler
} from 'react-native';
import { Card, Button, Text } from 'native-base';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { Toolbar,Activityindication } from '../../components';
import { SimDetails } from './SimDetails';
import SimData from '../../assets/JSONData/SimData';
import { userActions } from '../../redux/actions'
import { SearchBar } from '../../components/SearchBar/SearchBar';

export  class Sim extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            data:[],
            searchvalue : ''
        };
        this.list=[];
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
        this.setState({data:SimData});
        this.list=SimData;
        _Datarender=()=>{
            }
        this.props.onFetchData();
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
            const itemdata=item.MSIDN.toUpperCase();
            const textdata =text.toUpperCase();
            return itemdata.indexOf(textdata)>-1;

        })
        this.setState({data:newdata,searchvalue:text})
    }

    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>
                <Activityindication visible={this.props.user.isLoading}/>
                    <Toolbar title='Sim' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')} />
                    <View style={styles.viewStyle}>
                    {/* <SearchBar onChangeText={(text)=>this.searchFunction(text)}>

                    </SearchBar> */}
                        <FlatList
                            data={this.props.user.data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) =>
                                <TouchableWithoutFeedback
                                    onPress={() => {
                                        this.modalRef.current.setModalVisible(true)
                                    }}>
                                    <Card style={styles.mainCard}>
                                        <View style={styles.First_View}>
                                            <View style={styles.profile_view}>
                                                <MaterialCommunityIcons name="sim" size={45} color="#1f667e" />
                                            </View>

                                        </View>
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
                                            <View style={[styles.Level_Row, { marginBottom: 5 }]}>
                                                <View style={styles.Level_Second}>
                                                    <Text style={styles.Mobile_Style}>{item.Mobile}</Text>
                                                </View>
                                                <View style={styles.jobTypeView}>
                                                    <Text style={styles.jobTypeText}>{item.Provider}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </Card>
                                </TouchableWithoutFeedback>
                            }></FlatList>
                    </View>
                    <SimDetails ref={this.modalRef} />
                </View>
        );
    }
}

function mapStateToProps(state){
    return{
        user : state.SimData
    }
}
function mapDispatchToProps(dispatch){
    return{
        onFetchData:()=>dispatch(userActions.simRequest())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Sim)