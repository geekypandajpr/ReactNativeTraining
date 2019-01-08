import React from 'react';
import { View, KeyboardAvoidingView, FlatList, BackHandler } from 'react-native';
import { Item, Label, Input, Button, Text, Icon } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { AppLoading } from 'expo';

import { Toolbar, Float, UnderlineText, Activityindication } from '../../../components';
import styles from './styles';

export default class AddJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            company: 'select company',
            vehicle: 'select vehicle',
            service: 'service type',
            technician: 'select technician',
            location: ''
        }
    };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false });
    }

    componentDidMount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    render() {
        const { goBack } = this.props.navigation;
        const { navigate } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={{ backgroundColor: '#fff', flex: 1 }}>
                    <Toolbar title='Create Service' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                    />

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={[{ key: 1 }]}
                        keyboardShouldPersistTaps="always"
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>

                            <KeyboardAvoidingView behavior='padding'>

                                <View style={{ flexDirection: 'column', flex: 1 }}>
                                    <View style={styles.Sub_View}>
                                        <View style={styles.Width_View}>

                                            <View style={styles.Small_View}>
                                                <UnderlineText
                                                    name="Company"
                                                    upperView={true}
                                                    value={this.state.company}
                                                    isMandatory={true}
                                                //onpress={alert("hello")}
                                                />
                                            </View>


                                            <View style={styles.Small_View}>
                                                <View style={{ flex: 1.4 }}>
                                                    <UnderlineText
                                                        name="Vehicle #"
                                                        value={this.state.vehicle}
                                                        isMandatory={true}
                                                        upperView={true}
                                                    //onpress={alert("hello")}
                                                    />
                                                </View>

                                            </View>

                                            <View style={styles.Small_View}>
                                                <UnderlineText
                                                    name="Service Type"
                                                    isMandatory={true}
                                                    upperView={true}
                                                    value={this.state.service}
                                                //onpress={alert("hello")}
                                                />
                                            </View>

                                            <View style={styles.Small_View}>
                                                <UnderlineText
                                                    name="Technician"
                                                    upperView={true}
                                                    value={this.state.technician}
                                                    isMandatory={true}
                                                //onpress={alert("hello")}
                                                />
                                            </View>

                                            <View style={styles.Small_View}>
                                                <Float
                                                    placeholder='Location'
                                                    value={this.state.location}
                                                    returnKeyType={'next'}
                                                    keyboardType={'numeric'}
                                                    blurOnSubmit={false}
                                                    isMandatory={true}
                                                    onChangeText={(text) => this.setState({ balance: text })}
                                                    inputStyles={{ width: '100%' }}
                                                />
                                            </View>

                                            <View style={[styles.Small_View, { flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }]}>

                                                <Text style={[styles.createVehicle, { marginBottom: 10 }]}>Schdule date and Time</Text>

                                                <View style={styles.Date_picker}>
                                                    <DatePicker
                                                        style={{ width: '100%' }}
                                                        date={this.state.dataRenewal}
                                                        mode="date"
                                                        placeholder="DD/MM/YYYY"
                                                        format="DD/MM/YYYY"
                                                        //minDate=""
                                                        //maxDate=""
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
                                                        onDateChange={(date) => { this.setState({ dataRenewal: date }) }}
                                                    />
                                                </View>
                                            </View>

                                            <View style={styles.button_view}>
                                                <View style={{ flex: 1, marginRight: 1 }}>
                                                    <Button block style={{ backgroundColor: '#d9534f' }}
                                                        onPress={alert("hello")}>
                                                        <Text style={{ color: '#fff', fontFamily: 'Roboto' }}>Cancel</Text>
                                                    </Button>
                                                </View>
                                                <View style={{ flex: 1, marginLeft: 1 }}>
                                                    <Button block style={{ backgroundColor: '#5cb85c' }}
                                                        onPress={alert("hello")}>
                                                        <Text style={{ color: '#fff', fontFamily: 'Roboto' }}>Submit</Text>
                                                    </Button>
                                                </View>
                                            </View>

                                        </View>
                                    </View>
                                </View>
                                {/* </View> */}
                            </KeyboardAvoidingView>
                        } />



                </View>
        );
    }

    onCancel = () => {
        // this.props.navigation.state.params.onGoBack();
        this.props.navigation.goBack();
    }
}

export { AddJob }

