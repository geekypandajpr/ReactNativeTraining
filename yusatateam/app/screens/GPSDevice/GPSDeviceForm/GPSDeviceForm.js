import React from 'react';
import { View, Text } from 'react-native';
import { Textarea, Form, Input, Item } from 'native-base';
import { Toolbar,Pickers } from '../../../components';
import styles from './styles';
import { globalStyles } from '../../../styles'

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
                            <Pickers
                            label1 = "Sim"
                            label2 = "Sim"
                            label3 = "Sim"
                            label4 = "Sim"
                            label5 = "Sim"
                            value1 = "key0"
                            value2 = "key1"
                            value3 = "key2"
                            value4 = "key3"
                            value5 = "key4"

                            >
                                
                            </Pickers>
                        </View>
                    </View>


                </View>
            </View>
        )
    }
}

export { GPSDeviceForm }