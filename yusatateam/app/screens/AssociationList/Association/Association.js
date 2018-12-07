import React from 'react';
import {  FlatList, BackHandler } from 'react-native';
import { View, Text, Card } from 'native-base';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';

import { userActions } from '../../../redux/actions';
import { Toolbar, Activityindication } from '../../../components'
import styles from './styles';
import { globalStyles } from '../../../styles';

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
                            <Card style={[globalStyles.card,{padding: 8}]}>
                            
                                <View style={styles.View_row}>
                                    <View style={styles.flex_one}>
                                        <Text style={[globalStyles.title_text, { fontFamily: 'Roboto' }]}>{item.vehicleno}</Text>
                                    </View>
                                    <View style={styles.status_View}>
                                        <View style={styles.status}>
                                            <Text style={styles.status_text}>{item.status}</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.View_row}>
                                    <View style={styles.flex_one}>
                                        <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto'}]}>Sim</Text>
                                    </View>
                                    <View style={styles.colon}>
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>:</Text>
                                    </View>
                                    <View style={styles.flex_two}>
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>{item.Sim}</Text>
                                    </View>                                       
                                </View>

                                <View style={styles.View_row}>
                                    <View style={styles.flex_one}>
                                        <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto'}]}>Device</Text>
                                    </View>
                                    <View style={styles.colon}>
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>:</Text>
                                    </View>
                                    <View style={styles.flex_two}>
                                        <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>{item.Device}</Text>
                                    </View>                                       
                                </View>

                                { item.status === "Activate" ?
                                    <View style={styles.View_row}>
                                        <View style={styles.flex_one}>
                                            <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto'}]}>Activated on</Text>
                                        </View>
                                        <View style={styles.colon}>
                                            <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>:</Text>
                                        </View>
                                        <View style={styles.flex_two}>
                                            <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>{item.ActivatedDate}</Text>
                                        </View>                                       
                                    </View>
                                :
                                    <View style={styles.View_row}>
                                        <View style={styles.flex_one}>
                                            <Text style={[globalStyles.primary_text,{fontFamily: 'Roboto'}]}>Deactivated on</Text>
                                        </View>
                                        <View style={styles.colon}>
                                            <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>:</Text>
                                        </View>
                                        <View style={styles.flex_two}>
                                            <Text style={[globalStyles.secondary_text,{fontFamily: 'Roboto'}]}>{item.LastActivated}</Text>
                                        </View>                                       
                                    </View>
                                }

                            </Card>
                        }/>
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