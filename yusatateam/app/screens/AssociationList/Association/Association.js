import React from 'react';
import {  FlatList, BackHandler } from 'react-native';
import { View, Text, Card } from 'native-base';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';

import { userActions } from '../../../redux/actions';
import { Toolbar, Activityindication } from '../../../components'
import styles from './styles';

export class Association extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            vehiclesDatas: null
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

    componentWillReceiveProps(nextProps) {
        if(this.props.vehicle !== nextProps.vehicle) { this.setState({vehiclesDatas: nextProps.vehicle}) }
    }

    componentDidMount() {
        const cutomer = {
            "name": "Premsagar Choudhary"
        }
        this.props.onFetchData(cutomer);
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
                    <Activityindication visible={this.state.vehiclesDatas.isLoading}/>
                    <Toolbar title='Customer Name' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        setting='ios-search' settingType='Ionicons' />

                    <View style={styles.inner_container}>
                        <FlatList
                            data={this.state.vehiclesDatas.data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) =>
                                <Card style={styles.card_style}>

                                    <View style={styles.Padding_view}>

                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                            <View style={styles.View_row}>
                                                {/* <View style={styles.flex_one}>
                                                <Text style={styles.Vehicle_no}>Vehicle No</Text>
                                            </View> */}
                                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                                    <Text style={styles.Vehicle_num}>{item.vehicleno}</Text>
                                                </View>
                                            </View>

                                            <View style={styles.status_View}>
                                                <View style={styles.jobTypeView}>
                                                    <Text style={styles.jobTypeText}>{item.status}</Text>
                                                </View>
                                            </View>

                                        </View>
                                        <View style={styles.View_row}>
                                            <View style={styles.flex_one}>

                                                <View style={styles.View_row}>
                                                    <View style={styles.flex_one}>
                                                        <Text style={styles.text}>Sim</Text>
                                                    </View>
                                                    <View style={styles.Sim_no}>
                                                        <Text >:</Text>
                                                        <Text style={styles.text1}>{item.Sim}</Text>
                                                    </View>
                                                </View>

                                                <View style={styles.View_row}>
                                                    <View style={styles.flex_one}>
                                                        <Text style={styles.text}>Device</Text>
                                                    </View>
                                                    <View style={styles.Sim_no}>
                                                        <Text >:</Text>
                                                        <Text style={styles.text1}>{item.Device}</Text>
                                                    </View>
                                                </View>
                                                {item.status === "Activate" ?
                                                    <View style={styles.View_row}>
                                                        <View style={styles.flex_one}>
                                                            <Text style={styles.text}>Actived On</Text>
                                                        </View>
                                                        <View style={styles.Sim_no}>
                                                            <Text >:</Text>
                                                            <Text style={styles.text1}>{item.ActivatedDate}</Text>
                                                        </View>
                                                    </View>
                                                    :
                                                    <View style={styles.View_row}>
                                                        <View style={styles.flex_one}>
                                                            <Text style={styles.text}>Deactived On</Text>
                                                        </View>
                                                        <View style={styles.Sim_no}>
                                                            <Text >:</Text>
                                                            <Text style={styles.text1}>{item.LastActivated}</Text>
                                                        </View>
                                                    </View>
                                                }
                                            </View>
                                        </View>
                                    </View>
                                </Card>
                            }></FlatList>
                    </View>
                </View>
        );
    }
}

function mapStateToProps(state){
    return{
        vehicle : state.vehicleData
    }
}

function mapDispatchToProps(dispatch){
    return{
        onFetchData: (cutomer) => dispatch(userActions.vehicleFetchRequest(cutomer))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Association);