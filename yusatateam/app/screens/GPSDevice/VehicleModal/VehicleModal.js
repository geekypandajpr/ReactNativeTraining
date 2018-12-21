import React from 'react';
import { Modal, View, KeyboardAvoidingView, FlatList } from 'react-native';
import styles from './styles';
import { Item, Input, Icon, Text, Button } from 'native-base';
import { Float } from '../../../components/Floating/Float'
export default class VehicleModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        }
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
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
        return (
            this.state.isLoading === true ? <AppLoading /> :
               
                    
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <View style={styles.container}>
                                <View style={styles.sub_container}>
                                    <View style={styles.header_view}>
                                        <View style={styles.service_num}>
                                            <Text style={styles.header_text}>ADD VEHICLE</Text>
                                        </View>
                                    </View>
                                    <KeyboardAvoidingView behavior="height" >
                                    <View style={styles.View_Container}>
                                        <View >
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
                                        <View  >
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
                                        <View  >
                                            <Float
                                                placeholder='vin#'
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
                                    </KeyboardAvoidingView>
                                </View>
                            </View>
                        </Modal>
                    
            
                    );
                }
            }
            
            
export {VehicleModal}

