import React from 'react';
import { View, FlatList, KeyboardAvoidingView } from 'react-native';
import { AppLoading } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import { Toolbar, Float, Pickers } from '../../../components';
import styles from './styles';
import { globalStyles } from '../../../styles'
import { Item, Label, Input, Button, Text, Picker, Icon } from 'native-base';
import DatePicker from 'react-native-datepicker';

const company = [
    { label: 'yusata', value: 'sim1' },
    { label: 'IBM', value: 'sim2' },
    { label: 'Capgemini', value: 'sim3' },
    { label: 'TCS', value: 'sim4' },
    { label: 'Infosys', value: 'sim5' }
];

const deviceType = [
    { label: 'device1', value: 'device1' },
    { label: 'device2', value: 'device2' },
    { label: 'device3', value: 'device3' },
    { label: 'device4', value: 'device4' },
    { label: 'device5', value: 'device5' }
];

const vehicles = [
    { label: 'vehicle1', value: 'vehicle1' },
    { label: 'vehicle2', value: 'vehicle2' },
    { label: 'vehicle3', value: 'vehicle3' },
    { label: 'vehicle4', value: 'vehicle4' },
    { label: 'vehicle5', value: 'vehicle5' }
];

const subskey = [
    { label: 'SubsKeys1', value: 'SubsKeys1' },
    { label: 'SubsKeys2', value: 'SubsKeys2' },
    { label: 'SubsKeys3', value: 'SubsKeys3' },
    { label: 'SubsKeys4', value: 'SubsKeys4' },
    { label: 'SubsKeys5', value: 'SubsKeys5' }
];

const ISD = [
    { label: '+91', value: '+91' },
    { label: '+92', value: '+92' },
    { label: '+93', value: '+93' },
    { label: '+94', value: '+94' },
    { label: '+95', value: '+95' }
];

export default class GPSDeviceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            datarenewal: ''
        }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false });
    }
    render() {
        const { goBack } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View style={{ backgroundColor: '#efefef', flex: 1 }}>
                <Toolbar title='Association' leftIcon='arrow-left' leftIconType='Feather'onLeftButtonPress={() => goBack()} />

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={[{ key: 1 }]}
                    keyboardShouldPersistTaps="always"
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) =>
                        <KeyboardAvoidingView
                            behavior="padding" >
                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <View style={{ backgroundColor: '#fff', alignItems: 'center' }}>
                                    <View style={{ alignItems: 'center', width: '92%' }}>

                                        <View style={{ width: '100%', marginTop: 10 }}>
                                            <Item floatingLabel>
                                                <Icon name='mobile' type='FontAwesome' style={{ fontSize: 30, color: '#000' }} />
                                                <Label style={{ color: 'rgba(0,0,0,0.8)', fontSize: 15 }}>Device</Label>
                                                <Input
                                                    style={{ color: '#000', fontSize: 15 }}
                                                // value={this.props.value}
                                                // keyboardType={this.props.keyboardType}
                                                // returnKeyType={this.props.returnKeyType}
                                                // getRef={this.props.getRef}
                                                // blurOnSubmit={this.props.blurOnSubmit}
                                                // onChangeText={this.props.onChangeText}
                                                // secureTextEntry={this.props.secureTextEntry}
                                                // onSubmitEditing={this.props.onSubmitEditing}
                                                />
                                            </Item>
                                        </View>

                                        <View style={styles.pickerView}>
                                            <Text style={[styles.pickerLabel, { fontFamily: 'Roboto' }]}>Device Type</Text>
                                            <Pickers dropdown={deviceType} />
                                        </View>

                                        <View style={styles.pickerView}>
                                            <Text style={[styles.pickerLabel, { fontFamily: 'Roboto' }]}>Company Name</Text>
                                            <Pickers dropdown={company} />
                                        </View>

                                        <View style={styles.pickerView}>
                                            <Text style={[styles.pickerLabel, { fontFamily: 'Roboto' }]}>Vehicle#</Text>
                                            <Pickers dropdown={vehicles} />
                                        </View>

                                        <View style={styles.pickerView}>
                                            <Text style={[styles.pickerLabel, { fontFamily: 'Roboto' }]}>Subscription Keys</Text>
                                            <Pickers dropdown={subskey} />
                                        </View>

                                    </View>
                                </View>


                                <View style={{ backgroundColor: '#fff', alignItems: 'center', marginTop: 10 }}>
                                    <View style={{ alignItems: 'center', width: '92%' }}>

                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10 }}>
                                            <View style={{ flex: 1 }}>
                                                <View style={{ borderRadius: 0, borderColor: '#dcdcdc', borderBottomWidth: 1, height: 50, justifyContent: 'center' }}>
                                                    <Picker
                                                        mode="dropdown"
                                                        // style={{width: 100}}
                                                        // selectedValue={this.state.language}
                                                        onValueChange={(itemValue, itemIndex) => console.log('ISD')}>
                                                        <Picker.Item label='+91' value='+91' />
                                                        <Picker.Item label='+91' value='+91' />
                                                        <Picker.Item label='+91' value='+91' />
                                                    </Picker>
                                                </View>
                                            </View>
                                            <View style={{ flex: 2.5, marginLeft: 10 }}>
                                                <Float
                                                    placeholder='Mobile#'
                                                    //value={this.state.username}
                                                    returnKeyType={'next'}
                                                    keyboardType={'numeric'}
                                                    blurOnSubmit={false}
                                                    //onSubmitEditing={() => this._focusNextField('password')}
                                                    //onChangeText={(username) => this.setState({ username })}
                                                    inputStyles={{ width: '100%' }}
                                                />
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10 }}>
                                            <View style={{ flex: 1, marginRight: 4 }}>
                                                <Float
                                                    placeholder='Balance'
                                                    //value={this.state.username}
                                                    returnKeyType={'next'}
                                                    keyboardType={'numeric'}
                                                    blurOnSubmit={false}
                                                    //onSubmitEditing={() => this._focusNextField('password')}
                                                    //onChangeText={(username) => this.setState({ username })}
                                                    inputStyles={{ width: '100%' }}
                                                />
                                            </View>
                                            <View style={{ flex: 1, marginLeft: 4 }}>
                                                <Float
                                                    placeholder='Data Balance'
                                                    //value={this.state.username}
                                                    returnKeyType={'next'}
                                                    keyboardType={'numeric'}
                                                    blurOnSubmit={false}
                                                    //onSubmitEditing={() => this._focusNextField('password')}
                                                    //onChangeText={(username) => this.setState({ username })}
                                                    inputStyles={{ width: '100%' }}
                                                />
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
                                            <View style={{ flex: 1, marginRight: 4 }}>
                                                <Float
                                                    placeholder='Data plan'
                                                    //value={this.state.username}
                                                    returnKeyType={'next'}
                                                    keyboardType={'numeric'}
                                                    blurOnSubmit={false}
                                                    //onSubmitEditing={() => this._focusNextField('password')}
                                                    //onChangeText={(username) => this.setState({ username })}
                                                    inputStyles={{ width: '100%' }}
                                                />
                                            </View>
                                            <View style={{ flex: 1, marginLeft: 4, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', marginBottom: 0 }}>
                                                <DatePicker
                                                    style={{ width: '100%' }}
                                                    date={this.state.datarenewal}
                                                    mode="date"
                                                    placeholder="Data renewal"
                                                    format="YYYY-MM-DD"
                                                    //minDate=""
                                                    maxDate="2018-12-13"
                                                    confirmBtnText="Confirm"
                                                    cancelBtnText="Cancel"
                                                    customStyles={{
                                                        dateIcon: {
                                                            position: 'absolute',
                                                            left: 0,
                                                            top: 4,
                                                            marginLeft: 0
                                                        },
                                                        dateInput: {
                                                            marginLeft: 36
                                                        }
                                                        // ... You can check the source to find the other keys.
                                                    }}
                                                    onDateChange={(date) => { this.setState({ datarenewal: date }) }}
                                                />
                                            </View>
                                        </View>

                                        <View style={{ width: '100%', marginTop: 10 }}>
                                            <Float
                                                placeholder='Carrier'
                                                //value={this.state.username}
                                                returnKeyType={'next'}
                                                keyboardType={'email-address'}
                                                blurOnSubmit={false}
                                                //onSubmitEditing={() => this._focusNextField('password')}
                                                //onChangeText={(username) => this.setState({ username })}
                                                inputStyles={{ width: '100%' }}
                                            />
                                        </View>

                                        <View style={styles.button_view}>
                                            <View style={{ flex: 1, marginRight: 2 }}>
                                                <Button block danger>
                                                    <Text style={{ color: '#fff' }}>Cancel</Text>
                                                </Button>
                                            </View>
                                            <View style={{ flex: 1, marginLeft: 2 }}>
                                                <Button block >
                                                    <Text style={{ color: '#fff' }}>Submit</Text>
                                                </Button>
                                            </View>
                                        </View>

                                    </View>
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                    } />
            </View>
        );
    }
}

export { GPSDeviceForm }