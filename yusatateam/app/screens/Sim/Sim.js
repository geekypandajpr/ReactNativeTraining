import React from 'react';
import {
    View,
    FlatList,
    TouchableHighlight,
    Dimensions,
  
} from 'react-native';
import { Card,Button,Text } from 'native-base';
import styles from './styles';
import { AppLoading } from 'expo';
import { Toolbar } from '../../components';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons'

export default class Sim extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            data: [
                {
                    ORDER: 'EVKGLI',
                    ICCID: 'ICCID1',
                    MSIDN: 'MSIDN1',
                    Provider: 'Idea',
                    Mobile: '09085-53379',
                    status: 'Activate',
                    color :'green'
                },
                {
                    ORDER: 'JSCKBK',
                    ICCID: 'ICCID2',
                    MSIDN: 'MSIDN2',
                    Provider: 'Aircel',
                    Mobile: '09085-45090',
                    status: 'Deactivate',
                    color:'red'
                },
                {
                    ORDER: 'UYGEYUJA',
                    ICCID: 'ICCID3',
                    MSIDN: 'MSIDN3',
                    Provider: 'Airtel',
                    Mobile: '09085-65879',
                    status: 'Activate',
                    color :'green'
                },
                {
                    ORDER: 'HAVCMSV',
                    ICCID: 'ICCID4',
                    MSIDN: 'MSIDN4',
                    Provider: 'Idea',
                    Mobile: '09085-53379',
                    status: 'Deactivate',
                    color:'red'
                },
                {
                    ORDER: 'HAVCMSV',
                    ICCID: 'ICCID4',
                    MSIDN: 'MSIDN4',
                    Provider: 'Idea',
                    Mobile: '09085-53379',
                    status: 'Deactivate',
                    color:'red'
                },
                {
                    ORDER: 'UYGEYUJA',
                    ICCID: 'ICCID3',
                    MSIDN: 'MSIDN3',
                    Provider: 'Aircel',
                    Mobile: '09085-65879',
                    status: 'Activate',
                    color :'green'
                },
                {
                    ORDER: 'HAVCMSV',
                    ICCID: 'ICCID4',
                    MSIDN: 'MSIDN4',
                    Provider: 'Idea',
                    Mobile: '09085-53379',
                    status: 'Deactivate',
                    color:'red'
                },

                {
                    ORDER: 'HAVCMSV',
                    ICCID: 'ICCID4',
                    MSIDN: 'MSIDN4',
                    Provider: 'Docomo',
                    Mobile: '09085-53379',
                    status: 'Activate',
                    color :'green'
                },

                {
                    ORDER: 'UYGEYUJA',
                    ICCID: 'ICCID3',
                    MSIDN: 'MSIDN3',
                    Provider: 'Aircel',
                    Mobile: '09085-65879',
                    status: 'Activate',
                    color :'green'
                },
                {
                    ORDER: 'HAVCMSV',
                    ICCID: 'ICCID4',
                    MSIDN: 'MSIDN4',
                    Provider: 'Idea',
                    Mobile: '09085-53379',
                    status: 'Deactivate',
                    color:'red'
                },
            ]
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

    render() {
        const { navigate } = this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>

                    <Toolbar title='Sim' leftIcon='arrow-left' leftIconType='Feather' 
                        onLeftButtonPress={() => navigate('HomeScreen')}
                        rightIcon='settings'
                         rightIconType='MaterialCommunityIcons' />

                    <View style={styles.viewStyle}>
                        <FlatList
                            data={this.state.data}
                            keyExtractor={(item, index) => item.toString()}
                            renderItem={({ item, index }) =>
                                <Card style={styles.mainCard}>

                                    <View style={styles.First_View}>
                                        <TouchableHighlight
                                            style={{
                                                // borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                                                // width: Dimensions.get('window').width * 0.13,
                                                // height: Dimensions.get('window').width * 0.13,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                height:56,
                                                width:56,
                                                borderRadius:28,
                                                borderWidth:1,
                                                borderColor:'gray'

                                            }}
                                        >
                                            <MaterialCommunityIcons name="sim" size={48}  color="#1f667e" />
                                            {/* <Text style={styles.indexText}>{index+1}</Text> */}
                                        </TouchableHighlight>
                                    </View>

                                    <View style={styles.Second_View}>

                                        <View style={styles.Margin_Row}>
                                            <View style={styles.Level_Second}>
                                                <Text style={styles.Header_Style}>{item.ORDER}</Text>
                                            </View>
                                            
                                           
                                            <View style={[styles.Active_Button,{backgroundColor:item.color}]} >
                                                <Text style={styles.Active_Style}>{item.status}</Text>
                                            </View>
                                            
                                        </View>

                                        <View style={styles.Level_Row}>
                                            <View style={{ justifyContent: 'flex-start' }}>
                                                <Text style={styles.Text_Style}>MSIDN</Text>
                                            </View>
                                            <View style={{ marginLeft: 3 }}>
                                                <Text style={styles.Text_Style}> : </Text>
                                            </View>
                                            <View style={{justifyContent: 'flex-end',alignItems: 'center'}}>
                                                <Text style={styles.View_Style}>{item.MSIDN}</Text>
                                            </View>
                                        </View>

                                        <View style={styles.Level_Row}>
                                            <View style={{ justifyContent: 'flex-start' }}>
                                                <Text style={styles.Text_Style}>ICCID</Text>
                                            </View>
                                            <View style={{ marginLeft: 3 }}>
                                                <Text style={styles.Text_Style}> : </Text>
                                            </View>
                                            <View style={{ marginLeft: 5,justifyContent: 'flex-end',
                                            alignItems: 'center' }}>
                                                <Text style={styles.View_Style}>{item.ICCID}</Text>
                                            </View>
                                        </View>

                                        <View style={[styles.Level_Row, { marginBottom: 5 }]}>
                                            <View style={styles.Level_Second}>
                                                <Text style={styles.View_Style}>{item.Mobile}</Text>
                                            </View>
                                            <View style={styles.Provider_View} >
                                                <Text style={styles.providerStyle}>{item.Provider}</Text>
                                            </View>
                                        </View>

                                    </View>

                                  

                                </Card>
                            }></FlatList>

                    </View>
                </View>


        );
    }

}
export { Sim }