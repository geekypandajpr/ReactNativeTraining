import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Textarea, Form, Card, CardItem } from 'native-base';
import { Toolbar, Pickers } from '../../../components';
import styles from './styles';
import { globalStyles } from '../../../styles'


const company = [
    { label: 'yusata', value: 'sim1' },
    { label: 'IBM', value: 'sim2' },
    { label: 'Capgemini', value: 'sim3' },
    { label: 'TCS', value: 'sim4' },
    { label: 'Infosys', value: 'sim5' }
];
const vehicle = [
    { label: 'jd0012', value: 'sim1' },
    { label: 'js4898', value: 'sim2' },
    { label: 'fg6172', value: 'sim3' },
    { label: 'kj2938', value: 'sim4' },
    { label: 'he7394', value: 'sim5' }
];
const device = [
    { label: 'jd0012', value: 'sim1' },
    { label: 'js4898', value: 'sim2' },
    { label: 'fg6172', value: 'sim3' },
    { label: 'kj2938', value: 'sim4' },
    { label: 'he7394', value: 'sim5' }
];
const Subscription = [
    { label: 'jd0012', value: 'sim1' },
    { label: 'js4898', value: 'sim2' },
    { label: 'fg6172', value: 'sim3' },
    { label: 'kj2938', value: 'sim4' },
    { label: 'he7394', value: 'sim5' }
];

export default class GPSDeviceForm extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor: '#FFF' }}>
                <Toolbar title='Dashboard'
                    leftIcon='home'
                    setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')} />
                <ScrollView>
                    <Card style={globalStyles.card}>

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
                            <View style={styles.picker_style}>
                                <Pickers
                                    dropdown={company}
                                    style={{ height: 50, width: 200 }}>
                                </Pickers>
                            </View>
                        </View>

                        <View style={styles.View_row}>
                            <View style={styles.flex_one}>
                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Vehicle#</Text>
                            </View>
                            <View style={styles.colon}>
                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                            </View>
                            <View style={styles.picker_style}>
                                <Pickers
                                    dropdown={vehicle}
                                    style={{ height: 50, width: 200 }}>
                                </Pickers>
                            </View>
                        </View>


                        <View style={styles.View_row}>
                            <View style={styles.flex_one}>
                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Device Type</Text>
                            </View>
                            <View style={styles.colon}>
                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                            </View>
                            <View style={styles.picker_style}>
                                <Pickers
                                    dropdown={device}
                                    style={{ height: 50, width: 200 }}>
                                </Pickers>
                            </View>
                        </View>


                        <View style={styles.View_row}>
                            <View style={styles.flex_one}>
                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Subscription Key</Text>
                            </View>
                            <View style={styles.colon}>
                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                            </View>
                            <View style={styles.picker_style}>
                                <Pickers
                                    dropdown={Subscription}
                                    style={{ height: 50, width: 200 }}>
                                </Pickers>
                            </View>
                        </View>

                    </Card>
                </ScrollView>
            </View>
        )
    }
}

export { GPSDeviceForm }