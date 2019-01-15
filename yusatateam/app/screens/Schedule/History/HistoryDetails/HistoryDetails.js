import React from 'react';
import { View,   ScrollView, Picker, TextInput,BackHandler } from 'react-native';
import { Text, Header, Button, Body, Right, Left } from 'native-base';
import { AppLoading } from 'expo';
import {Toolbar} from '../../../../components'
import { Ionicons, Entypo, FontAwesome, Feather } from '@expo/vector-icons';
import call from 'react-native-phone-call'
import styles from './styles';
import { globalStyles, colors } from '../../../../styles';

export default class HistoryDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true,item : '',vehicleArray : [] }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }
    componentDidMount() {
        const item = this.props.navigation.state.params.item;
        var arrayList =[];
        for(var i=0;i<item.lineDetailsList.length;i++)
        {
            arrayList.push(item.lineDetailsList[i].vehicleDetails);
        }
        this.setState({ item :item,vehicleArray : arrayList})
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    phoneCall()
    {
        const args = {
            number: this.state.item.customerMobileNo, 
            prompt: false 
          }
           
          call(args).catch(console.error)
    }

    render() {
        const { goBack } = this.props.navigation;
        const { navigate } = this.props.navigation;
        var item =this.state.item;
        return (
            <View style={{flex :1}}>
                 {/* this.state.isLoading === true ? <AppLoading /> : */}
                 <Toolbar title={item.orderNumber} leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}
                        // setting='add-circle-outline' settingType='MaterialIcons' onSettingsPress={() => navigate('Settings')}
                    />
                    <View style={styles.main_container}>
                        <View style={styles.container}>

                            <View style={styles.inner_container}>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <View style={styles.first_view}>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Job type</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <View style={styles.job_type}>
                                                    <Text style={styles.job_type_text}>{item.serviceTypeName}</Text>
                                                </View>
                                            </View>
                                        </View>
                                       
                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Service Name</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <Text style={styles.value_text}>{item.serviceName}</Text>
                                            </View>
                                        </View>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Schedule date</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <Text style={styles.value_text}>{item.serviceDate}</Text>
                                            </View>
                                        </View>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Completed date</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <Text style={styles.value_text}>-  -  -</Text>
                                            </View>
                                        </View>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Technician</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <Text style={styles.value_text}>{item.salePerson}</Text>
                                            </View>
                                        </View>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Company Name</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <View><Entypo name='location-pin' size={24} color='#d9534f' /></View>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={styles.value_text}>
                                                    {item.companyName}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Status</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <View style={styles.status_view}>
                                                    <Text style={styles.status_text}>{item.serviceStatus}</Text>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>COD</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <Text style={styles.value_text}>
                                                {
                                                    item.cashOnDelivery=='Y' ? 'Yes': 'No'
                                                    }
                                                </Text>
                                            </View>
                                        </View>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Amount</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <FontAwesome name='rupee' size={14} color='gray' />
                                                <Text style={styles.value_text}>{item.amountCollection}</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.second_view}>
                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Customer name</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <Text style={styles.value_text}>{item.customerName}</Text>
                                            </View>
                                        </View>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Customer contact</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <Ionicons name='ios-call' size={24} color='#5cb85c'  onPress={() => this.phoneCall()}/>
                                                <Text style={styles.value_text}>{item.customerMobileNo}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    {this.state.vehicleArray.length !== 0 ?
                                <View style={styles.view1}>
                                    <View style={styles.sub_view}>
                                        <View style={styles.left_view}>
                                            <Text style={[globalStyles.title_text, { fontFamily: 'Roboto', padding: 4 }]}>Vehicles</Text>
                                        </View>
                                    </View>
                                    {this.state.vehicleArray.map((it, index) => 
                                        <View style={styles.sub_view} key={index}>
                                            <View style={styles.left_view}>
                                                <Text style={[globalStyles.primary_text, { fontFamily: 'Roboto', padding: 4 }]}>
                                                    {index+1}. {it.vehicleNumber}
                                                </Text>
                                            </View>
                                        </View>
                                    )}
                                </View>
                                : null
                            }

                                    <View style={styles.second_view}>
                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Device</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <Text style={styles.value_text}>1234568</Text>
                                            </View>
                                        </View>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Sim</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <Text style={styles.value_text}>Airtel</Text>
                                            </View>
                                        </View>

                                        <View style={styles.sub_view}>
                                            <View style={styles.left_view}>
                                                <Text style={styles.key_text}>Comments</Text>
                                            </View>
                                            <View style={styles.middle_view}>
                                                <Text style={styles.colon}>:</Text>
                                            </View>
                                            <View style={styles.right_view}>
                                                <Text style={styles.value_text}>Working Good...</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.second_view}>
                                        <View style={styles.button_view}>
                                            <Button style={styles.button}
                                                onPress={() => goBack()}>
                                                <Text>Close</Text>
                                            </Button>
                                        </View>
                                    </View>

                                </ScrollView>
                            </View>
                        </View>
                    </View>
            </View>
        );
    }
}

export { HistoryDetails }