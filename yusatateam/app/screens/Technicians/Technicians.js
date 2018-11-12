import React from 'react';
import {
    View,
    FlatList
} from 'react-native';
import styles from './styles';
import { Toolbar, TechnicianList } from '../../components';
import techDatas from '../../assets/JSONData/TechnicianData';

export default class Technicians extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                        <TechnicianList data={item}/>
                    }/>
                </View>
            </View>
        );
    }

}
export { Technicians }