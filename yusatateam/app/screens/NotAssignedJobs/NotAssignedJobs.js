import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { Toolbar } from '../../components';
import styles from './Styles';

export default class NotAssignedJobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return(
            <View style={styles.container}>
                <Toolbar title='Technicians' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                    setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')}
                />
                <View style={styles.inner_container}>
                    <FlatList
                        data={[{'key': 1}]}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                            <View><Text>Hello</Text></View>
                        } />
                </View>
            </View>
        )
    }
}

export { NotAssignedJobs }