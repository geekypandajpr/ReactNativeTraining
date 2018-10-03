import React from 'react';
import {
    View,
    Text,
    FlatList,
    Button,
    Image
}
    from 'react-native';
import styles from './styles';
import { RoundedImage } from '../../components';
import { Ionicons,Feather } from '@expo/vector-icons'
import { Toolbar } from '../../components/Toolbar'

export default class Sim extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    ORDER: 'EVKGLI',
                    ICCID: 'ICCID1',
                    MSIDN: 'MSIDN1',
                    Provider: 'IDEA',
                    Mobile: '09085-53379',
                    status: 'Activate'
                },
                {
                    ORDER: 'JSCKBK',
                    ICCID: 'ICCID2',
                    MSIDN: 'MSIDN2',
                    Provider: 'AIRTEL',
                    Mobile: '09085-45090',
                    status: 'Deactivate'
                },
                {
                    ORDER: 'UYGEYUJA',
                    ICCID: 'ICCID3',
                    MSIDN: 'MSIDN3',
                    Provider: 'AIRCEL',
                    Mobile: '09085-65879',
                    status: 'Activate'
                },
                {
                    ORDER: 'HAVCMSV',
                    ICCID: 'ICCID4',
                    MSIDN: 'MSIDN4',
                    Provider: 'IDEA',
                    Mobile: '09085-53379',
                    status: 'Deactivate'
                },
                {
                    ORDER: 'HAVCMSV',
                    ICCID: 'ICCID4',
                    MSIDN: 'MSIDN4',
                    Provider: 'IDEA',
                    Mobile: '09085-53379',
                    status: 'Deactivate'
                },
                {
                    ORDER: 'UYGEYUJA',
                    ICCID: 'ICCID3',
                    MSIDN: 'MSIDN3',
                    Provider: 'AIRCEL',
                    Mobile: '09085-65879',
                    status: 'Activate'
                },
                {
                    ORDER: 'HAVCMSV',
                    ICCID: 'ICCID4',
                    MSIDN: 'MSIDN4',
                    Provider: 'IDEA',
                    Mobile: '09085-53379',
                    status: 'Deactivate'
                },
                
                {
                    ORDER: 'HAVCMSV',
                    ICCID: 'ICCID4',
                    MSIDN: 'MSIDN4',
                    Provider: 'IDEA',
                    Mobile: '09085-53379',
                    status: 'Activate'
                }
            ]

        }

    }


    render() {
        return (
            <View style={styles.container}>
                <Toolbar
                    title="Sim" 
                ></Toolbar>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => item.toString()}
                    renderItem={({ item, index }) =>
                        <View style={styles.listcontainer}>
                            <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                                <RoundedImage
                                    source={require('../../../assets/image5.jpg')}
                                />
                            </View>


                            <View style={{ flex: 4 }}>

                                <View style={styles.secondView}>
                                    <View style={styles.secondView}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>{item.ORDER}</Text>
                                    </View>
                                    <View style={{ height: 35, width: 110, borderRadius: 10, borderWidth: 3, borderColor: 'white' }}>
                                        <Button
                                            title={`${item.status}`}
                                            onPress={alert}
                                            color="#1f667e"
                                        ></Button>
                                    </View>


                                    {/* {
                                        item.status == "Activate" ?
                                        <View style={{borderRadius:8,borderWidth:2,borderColor:'white'}}>
                                            <Button
                                                title={`${item.status}`}
                                                 onPress={alert}
                                                 color="green"
                                             ></Button>
                                        </View>
                                             :
                                            <View style={{borderRadius:8,borderWidth:2,borderColor:'white'}}>
                                             <Button
                                                 title={`${item.status}`}
                                                 onPress={alert}
                                                 color="#e62e00"
                                             ></Button>
                                            </View>
                                    } */}


                                </View>

                                <View style={styles.secondView}>
                                    <Text style={styles.secondHeads}>MSIDN : </Text>
                                    <Text style={styles.secondAns}>{item.MSIDN}</Text>
                                </View>

                                <View style={styles.secondView}>
                                    <Text style={styles.secondHeads}>ICCID : </Text>
                                    <Text style={styles.secondAns}>{item.ICCID}</Text>
                                </View>



                                <View style={styles.secondView}>
                                    <View style={styles.secondView}>
                                        <Text style={styles.secondAns}>{item.Mobile}</Text>
                                    </View>
                                    {/* <View style={{marginLeft:20}}>
                                    <Ionicons name="ios-call" size={16} color="green" />
                                    </View> */}
                                    <View style={{ flex: 1, flexDirection: 'row', marginLeft: 30 }}>
                                        <Text style={styles.secondHeads}>{item.Provider}</Text>
                                    </View>
                                </View>



                            </View>
                        </View>


                    }
                ></FlatList>
            </View>
        );
    }

}
export { Sim }