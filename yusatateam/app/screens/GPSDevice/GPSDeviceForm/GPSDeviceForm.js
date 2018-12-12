import React from 'react';
import { View, Text } from 'react-native';
import { Textarea, Form, Input, Item } from 'native-base';
import { Toolbar,Pickers } from '../../../components';
import styles from './styles';
import { globalStyles } from '../../../styles'


const sims = [
    {label: 'sim1', value: 'sim1'},
    {label: 'sim2', value: 'sim2'},
    {label: 'sim3', value: 'sim3'},
    {label: 'sim4', value: 'sim4'},
    {label: 'sim5', value: 'sim5'}
];

export default class GPSDeviceForm extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                <Toolbar title='Dashboard'
                    leftIcon='home'
                    setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')} />
                <View style={{ flex: 1, padding: 5 }}>
                    <View style={styles.View_row}>
                        <View style={styles.flex_one}>
                            <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Device</Text>
                        </View>
                        <View style={styles.colon}>
                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                        </View>
                        <View style={styles.flex_two}>
                            <Form style={{ width: "85%" }}>
                                <Textarea rowSpan={1} bordered placeholder="Textarea" />
                            </Form>
                        </View>
                    </View>

                    <View style={styles.View_row}>
                        <View style={styles.flex_one}>
                            <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Company</Text>
                        </View>
                        <View style={styles.colon}>
                            <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                        </View>
                        <View style={styles.flex_two}>
                            <Pickers dropdown={sims}>
                            </Pickers>
                        </View>
                    </View>


                </View>
            </View>
        )
    }
}

export { GPSDeviceForm }