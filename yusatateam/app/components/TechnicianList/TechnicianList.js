import React from 'react';
import {
    View,
    Text,
    Button,
    FlatList
} from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Card, } from 'native-base';

import { AppLoading } from 'expo';
import styles from './styles';
import { Toolbar } from '../../components';
import TechnicianData from '../../assets/JSONData/TechnicianData'

export default class TechnicianList extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,

        };
        this.modalRef = React.createRef();
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }
    render() {
        // const { navigate } = this.props.navigation;
        // const { goBack } = this.props.navigation;
        return (

            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>
                    {/* <Toolbar title='Sim' leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        setting='md-settings' settingType='Ionicons' onSettingsPress={() => navigate('Settings')} /> */}

                    <FlatList
                        data={TechnicianData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>


                            <Card style={styles.MainCard}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={styles.Profile_View}></View>
                                </View>

                                <View style={{ flex: 3, marginTop: 5 }}>

                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{flex:1,justifyContent:'center'}}>
                                            <Text style={styles.Text_Style}>{item.Name}</Text>
                                        </View>
                                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                            <Ionicons name='ios-add-circle-outline' size={27}></Ionicons>
                                        </View>
                                    </View>

                                  <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={{ flex: 0.2, justifyContent: 'center' }}>
                                            <Ionicons name='ios-call' size={27} color='#5cb85c' />
                                        </View>
                                        <View style={{ flex: 2,justifyContent:'center' }}>
                                            <Text style={styles.Call_Style}>9829876456</Text>
                                        </View>
                                    </View>

                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={{ flex: 1.2, justifyContent: 'center' }}>
                                            <Text style={styles.Text_Style}>Completed Job</Text>
                                        </View>
                                        <View style={{ flex: 0.1, justifyContent: 'center' }}>
                                            <Text>:</Text>
                                        </View>
                                        <View style={{ flex: 1.2, justifyContent: 'center', marginLeft: 5 }}>
                                            <Text style={styles.View_Style}>{item.Completed}</Text>
                                        </View>
                                    </View>

                                    
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={{ flex: 1.2, justifyContent: 'center' }}>
                                            <Text style={styles.Text_Style}>Total Job</Text>
                                        </View>
                                        <View style={{ flex: 0.1, justifyContent: 'center' }}>
                                            <Text>:</Text>
                                        </View>
                                        <View style={{ flex: 1.2, justifyContent: 'center', marginLeft: 5 }}>
                                            <Text style={styles.View_Style}>{item.Completed}</Text>
                                        </View>
                                    </View>

                                     <View style={{ flex: 1, flexDirection: 'row' }}> 
                                        <View style={{ flex: 0.2, justifyContent: 'center' }}>
                                            <Entypo name='location-pin' size={23} color='red' />
                                        </View>
                                        <View style={{ flex: 2, justifyContent: 'center' }}>
                                            <Text style={styles.call_Style}>{item.Status}</Text>
                                        </View>
                                    </View>

                                    {/* <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={{ flex: 1.2, justifyContent: 'center' }}>
                                            <Text style={styles.Text_Style}>Completed </Text>
                                        </View>
                                        <View style={{ flex: 0.1, justifyContent: 'center' }}>
                                            <Text>:</Text>
                                        </View>
                                        <View style={{ flex: 2, justifyContent: 'center', marginLeft: 5 }}>
                                            <Text style={styles.View_Style}>{item.Completed}</Text>
                                        </View>
                                    </View> */}

                                    

                                    {/*
                                        {/* <View style={{ flex: 1, marginBottom: 2 }}> */}

                                            {/* */}
                                            {/* <View style={{ borderRadius: 7, borderWidth: 1, borderColor: 'white' }}>
                                                <Button style={{ height: 20, }}
                                                    onPress={() => {
                                                        alert
                                                    }}
                                                    title="Add"
                                                    color="#0073b7"

                                                />
                                            </View> */}
                                      
                                    

                                </View>
                            </Card>
                        }></FlatList>


                </View>


        )
    }
}
export { TechnicianList }
