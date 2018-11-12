import React from 'react';
import {
    View,
    FlatList,
    TouchableWithoutFeedback
} from 'react-native';
import styles from './styles';
import { AppLoading } from 'expo';
import { Toolbar, TechnicianList } from '../../components';
import techDatas from '../../assets/JSONData/TechnicianData';
import { TechDetails } from './TechDetails/TechDetails';

export default class Technicians extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };
        //this.modalRef = React.createRef();
    }
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }

    render() {
        // const { navigate } = this.props.navigation;
        // const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View style={styles.container}>
                <Toolbar title='Technicians' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                    setting='md-settings' settingType='Ionicons' 
                />

                <View style={styles.inner_container}>
                    <FlatList
                        data={techDatas}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                        <TechnicianList data={item}/>
                    }/>
                </View>
                {/* <TechDetails ref={this.modalRef}/> */}
            </View>
        );
    }

}
export { Technicians }