import React from 'react';
import { Modal, View, KeyboardAvoidingView, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Text, Picker, Form } from 'native-base';
import { Float } from '../../../components';

var department = ["Department", "Department1", "Department2", "Department4", "Department5"]
var VehicleType = ["Vehicle Type", "Type1", "Type2", "Type3", "Type4", "Type5"]

export default class VehicleModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            selected: "Vehicle type",
            list:[]
        }
    }
    setModalVisible(visible,list) {
        this.setState({ modalVisible: visible,list:list });
    }
    
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false });
    }
    onValueChanges(value) {
        this.setState({
            selected: value
        });
    }

    render() {
        return (
            this.state.isLoading === true ? <AppLoading /> :

                <KeyboardAvoidingView
                    behavior="height">
                    <Modal
                        ref={"myModal"}
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            this.setState({ modalVisible: !this.state.modalVisible });
                        }}
                        onDismiss={() => {
                            this.setState({ modalVisible: !this.state.modalVisible });
                        }}>

                        <View style={styles.container}>
                            <View style={styles.modalView}>
                                <View style={styles.header_view}>
                                    <Text style={styles.header_text}>Create Vehicle</Text>
                                </View>
                                <FlatList
                                    style={{ backgroundColor: '#fff' }}
                                    ref={"flatList"}
                                    extraData={this.state}
                                    data={[{ key: '1' }]}
                                    keyExtractor={this._keyExtractor}
                                    renderItem={({ item, index }) =>
                                        <View style={{ width:Dimensions.get('window').width*0.9 }}>
                                            <View style={{ width: '100%' }}>
                                                <Float
                                                    placeholder='Vehicle Number'
                                                    //value={this.state.username}
                                                    returnKeyType={'next'}
                                                    keyboardType={'numeric'}
                                                    blurOnSubmit={false}
                                                    isMandatory={false}
                                                    //onSubmitEditing={() => this._focusNextField('password')}
                                                    //onChangeText={(username) => this.setState({ username })}
                                                    inputStyles={{ width: '100%' }}
                                                />
                                            </View>
                                            <View style={{ width: '100%', }}>
                                                <Float
                                                    placeholder='Odometer'
                                                    //value={this.state.username}
                                                    returnKeyType={'next'}
                                                    keyboardType={'numeric'}
                                                    blurOnSubmit={false}
                                                    isMandatory={false}
                                                    //onSubmitEditing={() => this._focusNextField('password')}
                                                    //onChangeText={(username) => this.setState({ username })}
                                                    inputStyles={{ width: '100%' }}
                                                />
                                            </View>
                                            <View style={{ width: '100%', }}>
                                                <Float
                                                    placeholder='Vin#'
                                                    //value={this.state.username}
                                                    returnKeyType={'next'}
                                                    keyboardType={'numeric'}
                                                    blurOnSubmit={false}
                                                    isMandatory={false}
                                                    //onSubmitEditing={() => this._focusNextField('password')}
                                                    //onChangeText={(username) => this.setState({ username })}
                                                    inputStyles={{ width: '100%' }}
                                                />
                                            </View>
                                            <View style={{ width: '100%', marginTop: 10 }}>
                                                <Form>
                                                    <Picker
                                                        note
                                                        mode="dropdown"
                                                        style={{ width: '100%', color: 'rgba(0,0,0,0.6)' }}
                                                        selectedValue={this.state.selected}
                                                        onValueChange={this.onValueChanges.bind(this)}
                                                    >
                                                        {VehicleType.map((item, index) =>
                                                            <Picker.Item label={item} value={item} key={index} />
                                                        )}
                                                    </Picker>
                                                </Form>
                                            </View>

                                            <View style={{ width: '100%', marginTop: 10 }}>
                                                <Form>
                                                    <Picker
                                                        note
                                                        mode="dropdown"
                                                        style={{ width: '100%', color: 'rgba(0,0,0,0.6)' }}
                                                        selectedValue={this.state.selected}
                                                        onValueChange={this.onValueChange.bind(this)}
                                                    >
                                                        {VehicleType.map((item, index) =>
                                                            <Picker.Item label={item} value={item} key={index} />
                                                        )}
                                                    </Picker>
                                                </Form>
                                            </View>

                                        </View>
                                    } />
                                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>

                                    <TouchableOpacity onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>
                                        <View style={styles.button}>
                                            <Text style={{
                                                color: '#FFFFFF',
                                                fontSize: 14,
                                                fontStyle: 'normal',
                                                fontWeight: 'bold'
                                            }}>CANCEL</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>
                                        <View style={[styles.button, { marginLeft: 20 }]}>
                                            <Text style={{
                                                color: '#FFFFFF',
                                                fontSize: 14,
                                                fontStyle: 'normal',
                                                fontWeight: 'bold'
                                            }}>SUBMIT</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                    </Modal>
                </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#00000080',
    },
    modalView: {
        backgroundColor: '#FFFFFF',
        //height:Dimensions.get('window').height*0.8,
        width: '95%',
        //borderRadius: 10,
        //display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        //flexDirection:'row',
        //opacity:1
    },

    textInput: {
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 7,
    },
    button: {
        backgroundColor: '#1F618D',
        width: Dimensions.get('window').width * 0.4,
        height: 40,
        //height:Dimensions.get('window').height-580,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header_view: {
        width: '100%',
        height: 50,
        backgroundColor: '#EEEEF0',
        justifyContent: 'center',
        elevation: 5,
        flexDirection: 'row'
    },
    header_text: {

        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 15
    },

})

export { VehicleModal }