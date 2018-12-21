import React from 'react';
import { Modal, View, KeyboardAvoidingView, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
// import styles from './styles';
import { Item, Input, Icon, Text, Button, Header, Body } from 'native-base';
import { Float } from '../../../components/Floating/Float';

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
                                <Header style={styles.header}>
                                    <Body><Text>Header</Text></Body>
                                </Header>
                                
                                <FlatList
                                    style={{ backgroundColor: '#fff' }}
                                    ref={"flatList"}
                                    extraData={this.state}
                                    data={[{key: '1'}]}
                                    keyExtractor={this._keyExtractor} 
                                    renderItem={({ item, index }) =>
                                        <View style={{width: 250}}>
                                            <View style={{width: '100%'}}>
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
                                            <View  style={{width: '100%',}}>
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
                                            <View  style={{width: '100%',}}>
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
                                            <View  style={{width: '100%',}}>
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
                                        </View>
                                    } />
                                <TouchableOpacity>
                                    <View style={styles.button}>
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
                    </Modal>
                </KeyboardAvoidingView>   
        )           
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#00000080',
        flexDirection:'column',
    },
    modalView:{
        backgroundColor: '#FFFFFF',
        //height:Dimensions.get('window').height*0.8,
        width: '80%',
        //borderRadius: 10,
        //display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        //flexDirection:'row',
        //opacity:1
    },
    header:{
        backgroundColor:'#1F618D',
        width:"100%",
    },
    textInput:{
        textAlign:'center',
        borderWidth:1,
        borderColor: '#000',
        borderRadius:7,
    },
    button:{
        backgroundColor:'#1F618D',
        width:Dimensions.get('window').width*0.8,
        height:50,
        //height:Dimensions.get('window').height-580,
        alignItems:'center',
        justifyContent:'center'
    },

})
            
            
export {VehicleModal}