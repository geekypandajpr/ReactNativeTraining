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
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';
import { Toolbar, Activityindication } from '../../components';
import { SimDetails } from './SimDetails';
import { userActions } from '../../redux/actions';
import { globalStyles } from '../../styles';

export class Sim extends React.Component {
    constructor(props) {
        super(props);
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
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>
                    <Activityindication visible={this.props.simDatas.isLoading}/>
                    <Toolbar title='Sim' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        setting='ios-search' settingType='Ionicons'/>
                    <View style={styles.viewStyle}>
                        <FlatList
                            data={this.props.simDatas.data}
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
                                                    <Text style={[globalStyles.title_text,{fontFamily: 'Roboto'}]}>{item.ORDER}</Text>
                                                </View>
                                                <View style={[styles.Status_Button, { backgroundColor: item.color }]} >
                                                    <Text style={[styles.Status_Style,{fontFamily: 'Roboto'}]}>{item.status}</Text>
                                                </View>
                                            </View>
                                            
                                            <View style={styles.Level_Row}>
                                                <View style={styles.Level_Head}>
                                                    <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto'}]}>MSIDN</Text>
                                                </View>
                                                <View style={{ flex: 0.2 }}>
                                                    <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}> : </Text>
                                                </View>
                                                <View style={styles.Level_Style}>
                                                    <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>{item.MSIDN}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.Level_Row}>
                                                <View style={styles.Level_Head}>
                                                    <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto'}]}>ICCID</Text>
                                                </View>
                                                <View style={{ flex: 0.2 }}>
                                                    <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}> : </Text>
                                                </View>
                                                <View style={styles.Level_Style}>
                                                    <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>{item.ICCID}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.Level_Row}>
                                                <View style={styles.Level_Second}>
                                                    <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>{item.Mobile}</Text>
                                                </View>
                                                <View style={styles.jobTypeView}>
                                                    <Text style={[styles.jobTypeText,{fontFamily: 'Roboto'}]}>{item.Provider}</Text>
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
        simDatas : state.simData
    }
}

function mapDispatchToProps(dispatch){
    return{
        onFetchData: () => dispatch(userActions.simRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sim);