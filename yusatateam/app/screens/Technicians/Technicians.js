import React from 'react';
import { View, FlatList, BackHandler } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import { Toolbar, TechnicianList, Activityindication } from '../../components';
import { userActions } from '../../redux/actions';

export  class Technicians extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (

            <View style={styles.container}>
                <Activityindication visible={this.props.techData.isLoading}/>
                <Toolbar title='Technicians' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                    setting='ios-search' settingType='Ionicons'
                />
                
                <View style={styles.inner_container}>
                    <FlatList
                        data={this.props.techData.data}
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

