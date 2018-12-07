import React from 'react';
import { FlatList, BackHandler, TouchableOpacity } from 'react-native';
import { View, Text, List, ListItem, Body, Right } from 'native-base';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import { globalStyles } from '../../styles';
import { Toolbar, Activityindication } from '../../components';
import { userActions } from '../../redux/actions';

export class Customer extends React.Component {
    constructor() {
        super();
        this.state = { isLoading: true, customers: null };
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
        if(this.props.customers !== nextProps.customers) { this.setState({customers: nextProps.customers}) }
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
                    <Activityindication visible={this.state.customers.isLoading}/> 
                    <Toolbar title='Association' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        setting='ios-search' settingType='Ionicons' />
                    <FlatList
                        data={this.state.customers.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                            <List>
                                <ListItem style={{ height: 100 }}>
                                    <Body >
                                        <View style={{ flex: 1, flexDirection: 'column' }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={[globalStyles.title_text, { fontFamily: 'Roboto' }]} >{item.name}</Text>
                                            </View>

                                            <View style={styles.Secondrow}>
                                                <Ionicons name='ios-call' size={20} color='#5cb85c' style={{ marginRight: 5 }} />
                                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>{item.contactNumber}</Text>
                                            </View>

                                            <View style={styles.Secondrow}>
                                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>{item.address}</Text>
                                            </View>
                                        </View>
                                    </Body>

                                    <Right>
                                        <TouchableOpacity onPress={() => navigate('Association')}>
                                            <View style={styles.Next_page}>
                                                <Ionicons name='ios-arrow-forward' size={27} color='rgba(0,0,0,0.3)' />
                                            </View>
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
        customers : state.customersData
    }
}

function mapDispatchToProps(dispatch){
    return{
        onFetchData: () => dispatch(userActions.cutomerFetchRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customer);