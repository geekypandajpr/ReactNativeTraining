import React from 'react';
import { View, FlatList, BackHandler } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import { Toolbar, TechnicianList, Activityindication,HeaderWithSearchbar } from '../../components';
import { userActions } from '../../redux/actions';

export  class Technicians extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            searchValue : ''
        }
        this.onSearchClearPressed = this.onSearchClearPressed.bind(this);
        this.SearchFilterFunction = this.SearchFilterFunction.bind(this);
    }

    techDetail() {
        this.refs.modal.setModalVisible(true);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        this.props.onFetchData();
    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.techData !== nextProps.techData) {
            this.setState({data: nextProps.techData.data});
            this.arrayList = nextProps.techData.data;
        }
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
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

            <View style={styles.container}>
                <Activityindication visible={this.props.techData.isLoading}/>
                <HeaderWithSearchbar
                        onChangeText={(text) => this.SearchFilterFunction(text)}
                        onSearchClear={this.onSearchClearPressed}
                        searchValue={this.state.searchValue}
                        title={'Technician'}
                        leftIcon='arrow-left'
                        goBack={() => goBack()}/>
                
                <View style={styles.inner_container}>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                        <TechnicianList
                            data={item}
                            viewTodaysJobs={() => navigate('TodaysJobs')}
                            viewDetails={() => navigate('TechDetails')}
                            assignJobs={() => navigate('OpenJobs')}
                        />
                    }/>
                </View>
            </View>
        );
    }

}

function mapStateToProps(state){
    return{
        techData : state.TechnicianData
    }
}

function mapDispatchToProps(dispatch){
    return{
        onFetchData: () => dispatch(userActions.technicianRequest())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Technicians)

