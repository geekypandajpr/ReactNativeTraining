import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Toolbar, Float, Pickers } from '../../../components';
import styles from './styles';
import { globalStyles } from '../../../styles'
import { Picker, Button } from 'native-base';

const company = [
    { label: 'yusata', value: 'sim1' },
    { label: 'IBM', value: 'sim2' },
    { label: 'Capgemini', value: 'sim3' },
    { label: 'TCS', value: 'sim4' },
    { label: 'Infosys', value: 'sim5' }
];

export default class GPSDeviceForm extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                <Toolbar title='Association'
                    leftIcon='md-arrow-round-back'
                />
                <View style={{ flex: 1, paddingLeft: 10 }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, width: '90%', height: '10%' }}>
                            <Float icons='mobile-phone'
                            name="Device" ></Float>
                        </View>
                       

                        <View style={{flex:1,flexDirection:'row'}}>
                            <View style={styles.flex_picker}>
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

                      <View style={{flex:1,flexDirection:'row'}}>
                            <View style={styles.flex_picker}>
                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Device Type</Text>
                            </View>
                            <View style={styles.colon}>
                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                            </View>
                            <View style={styles.picker_style}>
                                <Pickers dropdown={company} >
                                </Pickers>
                            </View>
                        </View>

                       <View style={{flex:1,flexDirection:'row'}}>
                            <View style={styles.flex_picker}>
                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto' }]}>Subscription key</Text>
                            </View>
                            <View style={styles.colon}>
                                <Text style={[globalStyles.secondary_text, { fontFamily: 'Roboto' }]}>:</Text>
                            </View>
                            <View style={styles.picker_style}>
                                <Pickers dropdown={company} >
                                </Pickers>
                            </View>
                        </View>

                         <View style={{ flex: 1}}>
                            <Text style={styles.title_text}>Company</Text>
                            <Pickers dropdown={company} ></Pickers>
                        </View>
                    </View>

                    <View style={{ flex: 1 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[globalStyles.title_text, { color: 'green' }]}>Sim Details</Text>
                        </View>

                        <View style={styles.View_row}>
                            <View style={styles.flex_one}>
                                <Float name="Mobile No" ></Float>
                            </View>

                            <View style={styles.flex_one}>
                                <Float name="Country ISD" ></Float>
                            </View>
                        </View>
                        <View style={styles.View_row}>
                            <View style={styles.flex_one}>
                                <Float name="Balance" ></Float>
                            </View>
                            <View style={styles.flex_one}>
                                <Float name="Data Balance" ></Float>
                            </View>
                        </View>

                        <View style={{ flex: 1, width: '90%', height: '10%' }}>
                            <Float name="Data Renewal" ></Float>
                        </View>
                        <View style={{ flex: 1, width: '90%', height: '10%' }}>
                            <Float name="Data Plan" ></Float>
                        </View>

                        <View style={{ flex: 1, width: '90%', height: '10%' }}>
                            <Float name="Carrier" ></Float>
                        </View>
                    </View>

                    <View style={styles.button_view}>
                        <View style={{ flex: 1, margin: 5 }}>
                            <Button block danger
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Cancel</Text>
                            </Button>
                        </View>
                        <View style={{ flex: 1, margin: 5 }}>
                            <Button block >
                                <Text>Submit</Text>
                            </Button>
                        </View>
                    </View>
                    

                </View>

            </View>
        );
    }

}
export { GPSDeviceForm }