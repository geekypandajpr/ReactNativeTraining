import React from 'react';
import { View, Modal, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, Button, Header, Body, Right, CheckBox } from 'native-base';
import { AppLoading } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import { colors } from '../../styles';

export default class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            modalVisible: false,
            value: 'ALL'
        }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    onApply = () => {
        this.setState({modalVisible: false});
    }

    render() {
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.setState({ modalVisible: false })}>
                    <View style={styles.container}>
                        <View style={{ width: '100%' }}>
                            <Header style={styles.Header_Style}>
                                <Body>
                                    <Text style={[styles.Text_style,{fontFamily: 'Roboto'}]}> Filter </Text>
                                </Body>
                                <Right>
                                    <Button transparent onPress={() => this.setState({ modalVisible: false })}>
                                        <MaterialIcons name='close' size={30} color='#d9534f' />
                                    </Button>
                                </Right>
                            </Header>
                        </View>
                        <View style={styles.View_Container}>
                            <ScrollView>

                            <View style={styles.Small_View}>
                                <View style={styles.checkbox_view}>
                                    <CheckBox
                                        checked={this.state.value === 'Completed'}
                                        color={colors.HEADER_COLOR}
                                        onPress={() => this.setState({ value: 'Completed' })}
                                    />
                                    <View style={styles.remember_me}>
                                        <Text style={[styles.remember_me_text,{fontFamily: 'Roboto'}]}>Completed</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.Small_View}>
                                <View style={styles.checkbox_view}>
                                    <CheckBox
                                        checked={this.state.value === 'Entered'}
                                        color={colors.HEADER_COLOR}
                                        onPress={() => this.setState({ value: 'Entered' })}
                                    />
                                    <View style={styles.remember_me}>
                                        <Text style={[styles.remember_me_text,{fontFamily: 'Roboto'}]}>Entered</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.Small_View}>
                                <View style={styles.checkbox_view}>
                                    <CheckBox
                                        checked={this.state.value === 'Accepted'}
                                        color={colors.HEADER_COLOR}
                                        onPress={() => this.setState({ value: 'Accepted' })}
                                    />
                                    <View style={styles.remember_me}>
                                        <Text style={[styles.remember_me_text,{fontFamily: 'Roboto'}]}>Accepted</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.Small_View}>
                                <View style={styles.checkbox_view}>
                                    <CheckBox
                                        checked={this.state.value === 'On_Job'}
                                        color={colors.HEADER_COLOR}
                                        onPress={() => this.setState({ value: 'On_Job' })}
                                    />
                                    <View style={styles.remember_me}>
                                        <Text style={[styles.remember_me_text,{fontFamily: 'Roboto'}]}>On Job</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.Small_View}>
                                <View style={styles.checkbox_view}>
                                    <CheckBox
                                        checked={this.state.value === 'Rescheduled'}
                                        color={colors.HEADER_COLOR}
                                        onPress={() => this.setState({ value: 'Rescheduled' })}
                                    />
                                    <View style={styles.remember_me}>
                                        <Text style={[styles.remember_me_text,{fontFamily: 'Roboto'}]}>Rescheduled</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.Small_View}>
                                <View style={styles.checkbox_view}>
                                    <CheckBox
                                        checked={this.state.value === 'Cancelled'}
                                        color={colors.HEADER_COLOR}
                                        onPress={() => this.setState({ value: 'Cancelled' })}
                                    />
                                    <View style={styles.remember_me}>
                                        <Text style={[styles.remember_me_text,{fontFamily: 'Roboto'}]}>Cancelled</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.Small_View}>
                                <View style={[styles.checkbox_view, {justifyContent: 'flex-end'}]}>
                                    <Button full onPress={this.onApply}
                                        style={{ width: 150, backgroundColor: colors.HEADER_COLOR }} >
                                        <Text style={{fontFamily: 'Roboto', color: '#fff'}}> Apply </Text>
                                    </Button>
                                </View>
                            </View>

                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

export { Status }

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#00000090',
        flexDirection: 'column',
    },
    Header_Style: {
        backgroundColor: '#fff',
        borderBottomColor: '#dcdcdc',
        borderBottomWidth: 1
    },
    View_Container: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '40%',
    },
    Text_style: {
        fontSize: '1.3rem',
        color: '#000',
        fontWeight: '400',
    },
    Small_View: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 6
    },
    checkbox_view: {
        flex: 1,
        width: '95%',
        justifyContent: 'flex-start',
        alignItems:'center',
        flexDirection: 'row',
        // backgroundColor: 'red'
    },
    remember_me: {
        marginLeft: 20
    },
    remember_me_text: {
        color: '#000',
        fontSize: '0.8rem'
    },
})