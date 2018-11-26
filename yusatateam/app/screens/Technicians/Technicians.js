import React from 'react';
import {
    View,
    FlatList,
    Modal,
    BackHandler
} from 'react-native';
import styles from './styles';
import { Toolbar, TechnicianList } from '../../components';
import techDatas from '../../assets/JSONData/TechnicianData';
import { TechDetails } from './TechDetails/TechDetails';

export default class Technicians extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.modalRef = React.createRef();
        // this.techDetail=this.techDetail.bind(this);
    }
   
    techDetail() {
        this.refs.modal.setModalVisible(true);
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
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
           
                <View style={styles.container}>
                
                    <Toolbar title='Technicians' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')}
                    />

                    <View style={styles.inner_container}>
                        <FlatList
                            data={techDatas}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) =>
                                <TechnicianList
                                    data={item}
                                    onPress={()=>navigate('TabComponent')}
                                    assignJobs={() => navigate('OpenJobs')}
                                />
                            } />
                    </View>
                   {/* <TechDetails ref={'modal'} /> */}
                </View>
        );
    }

}
export { Technicians }