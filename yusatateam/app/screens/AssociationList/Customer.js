import React from 'react';
import { FlatList, BackHandler, TouchableOpacity } from 'react-native';
import { View, Text, List, ListItem, Body, Right } from 'native-base';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import { globalStyles } from '../../styles';
import { Toolbar, Activityindication,HeaderWithSearchbar } from '../../components';
import { userActions } from '../../redux/actions';

export class Customer extends React.Component {
    constructor() {
        super();
        this.state = {
             isLoading: true, 
             customers: null,
            data: null,
            searchValue : ''
         }
         this.onSearchClearPressed = this.onSearchClearPressed.bind(this);
        this.SearchFilterFunction = this.SearchFilterFunction.bind(this);
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
    componentWillReceiveProps(nextProps) {
        if(this.props.customers !== nextProps.customers) {
            this.setState({data: nextProps.customers.data});
            this.arrayList = nextProps.customers.data;
        }
    }
    SearchFilterFunction(text) 
    {
        const newData = this.arrayList.filter(function (item) {
            const itemData = item.name.toUpperCase()
            const textData = text.toUpperCase() 
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            data: newData,         
            searchValue: text
        },
        )
    }
    onSearchClearPressed(){
        this.SearchFilterFunction('');
    }

    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>
                    <Activityindication visible={this.props.customers.isLoading}/> 
                    <HeaderWithSearchbar
                        onChangeText={(text) => this.SearchFilterFunction(text)}
                        onSearchClear={this.onSearchClearPressed}
                        searchValue={this.state.searchValue}
                        title={'Association'}
                        leftIcon='arrow-left'
                        goBack={() => goBack()}/>
                    <FlatList
                        data={this.state.data}
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