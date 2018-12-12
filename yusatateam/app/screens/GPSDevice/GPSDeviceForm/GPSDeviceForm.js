import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Textarea, Form, Card, Button } from 'native-base';
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
            <ScrollView>
            <View style={{ backgroundColor: '#FFF' }}>
                <Toolbar title='Dashboard'
                    leftIcon='home'
                    setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')} />
               
                    <Card style={globalStyles.card}>
                        <View style={styles.View_row}>
                            <View style={styles.flex_one}>
                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Device</Text>
                            </View>
                            <View style={styles.colon}>
                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                            </View>
                            <View style={styles.flex_two}>
                                <Form style={{ width: "95%",justifyContent:'center' }}>
                                    <Textarea rowSpan={1} bordered placeholder="Device" style={{height:35,}} />
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
                                <Pickers dropdown={company}>
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
                                <Pickers dropdown={vehicle} >
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
                                <Pickers dropdown={device}>
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
                                <Pickers dropdown={Subscription} >
                                </Pickers>
                            </View>
                        </View>

                    </Card>

                    
                    <Card style={globalStyles.card}>

                        <View style={styles.View_row}>
                            <View style={styles.flex_one}>
                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Country ISD</Text>
                            </View>
                            <View style={styles.colon}>
                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                            </View>
                            <View style={styles.picker_style}>
                                <Pickers dropdown={company} >
                                </Pickers>
                            </View>
                        </View>

                      <View style={styles.View_row}>
                            <View style={styles.flex_one}>
                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Mobile No.</Text>
                            </View>
                            <View style={styles.colon}>
                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                            </View>
                            <View style={styles.flex_two}>
                                <Form style={{ width: "95%" }}>
                                    <Textarea rowSpan={1} bordered placeholder="Mobile No" style = {{height:35}} />
                                </Form>
                            </View>
                        </View>

                         <View style={styles.View_row}>
                            <View style={styles.flex_one}>
                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Carrier</Text>
                            </View>
                            <View style={styles.colon}>
                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                            </View>
                            <View style={styles.flex_two}>
                                <Form style={{ width: "95%"}}>
                                    <Textarea rowSpan={1} bordered placeholder="Carrier" style = {{height:35}} />
                                </Form>
                            </View>
                        </View>


                        <View style={styles.View_row}>
                            <View style={styles.flex_one}>
                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Balance</Text>
                            </View>
                            <View style={styles.colon}>
                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                            </View>
                            <View style={styles.flex_two}>
                                <Form style={{ width: "95%" }}>
                                    <Textarea rowSpan={1} bordered placeholder="Balance" style = {{height:35}} />
                                </Form>
                            </View>
                        </View>


                         <View style={styles.View_row}>
                            <View style={styles.flex_one}>
                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Data Balance</Text>
                            </View>
                            <View style={styles.colon}>
                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                            </View>
                            <View style={styles.flex_two}>
                                <Form style={{ width: "95%" }}>
                                    <Textarea rowSpan={1} bordered placeholder="Data Balance" style = {{height:35}}/>
                                </Form>
                            </View>
                        </View>

                        <View style={styles.View_row}>
                            <View style={styles.flex_one}>
                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Data Plan</Text>
                            </View>
                            <View style={styles.colon}>
                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                            </View>
                            <View style={styles.flex_two}>
                                <Form style={{ width: "95%" }}>
                                    <Textarea rowSpan={1} bordered placeholder="Data Plan" style = {{height:35}}/>
                                </Form>
                            </View>
                        </View>

                          <View style={styles.View_row}>
                            <View style={styles.flex_one}>
                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Data Renewal</Text>
                            </View>
                            <View style={styles.colon}>
                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                            </View>
                            <View style={styles.flex_two}>
                                <Form style={{ width: "95%" }}>
                                    <Textarea rowSpan={1} bordered placeholder="Data Renewal" style = {{height:35}}/>
                                </Form>
                            </View>
                        </View>
                    </Card>
                    <View style={styles.button_view}>
                                <View style={{ flex: 1, margin : 5 }}>
                                    <Button block danger
                                     onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                        <Text>Cancel</Text>
                                    </Button>
                                </View>
                                <View style={{ flex: 1, margin : 5  }}>
                                    <Button block >
                                        <Text>Submit</Text>
                                    </Button>
                                </View>
                            </View>
                
            </View>
            </ScrollView>
        )
    }
}

export { GPSDeviceForm }