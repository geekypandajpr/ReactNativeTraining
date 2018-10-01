import React from 'react';
import {
    View,
    Text,
    FlatList,
    Button
}
    from 'react-native';
import styles from './styles';
import { RoundedImage } from '../../components';
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
                    status: 'ACTIVATE'
                },
                {
                    ORDER: 'JSCKBK',
                    ICCID: 'ICCID2',
                    MSIDN: 'MSIDN2',
                    Provider: 'AIRTEL',
                    Mobile: '09085-45090',
                    status: 'DEACTIVATE'
                },
                {
                    ORDER: 'UYGEYUJA',
                    ICCID: 'ICCID3',
                    MSIDN: 'MSIDN3',
                    Provider: 'AIRCEL',
                    Mobile: '09085-65879',
                    status: 'ACTIVATE'
                },
                {
                    ORDER: 'HAVCMSV',
                    ICCID: 'ICCID4',
                    MSIDN: 'MSIDN4',
                    Provider: 'IDEA',
                    Mobile: '09085-53379',
                    status: 'DEACTIVATE'
                },
                {
                    ORDER: 'HAVCMSV',
                    ICCID: 'ICCID4',
                    MSIDN: 'MSIDN4',
                    Provider: 'IDEA',
                    Mobile: '09085-53379',
                    status: 'DEACTIVATE'
                },
                {
                    ORDER: 'UYGEYUJA',
                    ICCID: 'ICCID3',
                    MSIDN: 'MSIDN3',
                    Provider: 'AIRCEL',
                    Mobile: '09085-65879',
                    status: 'ACTIVATE'
                },
                {
                    ORDER: 'HAVCMSV',
                    ICCID: 'ICCID4',
                    MSIDN: 'MSIDN4',
                    Provider: 'IDEA',
                    Mobile: '09085-53379',
                    status: 'DEACTIVATE'
                },
                {
                    ORDER: 'HAVCMSV',
                    ICCID: 'ICCID4',
                    MSIDN: 'MSIDN4',
                    Provider: 'IDEA',
                    Mobile: '09085-53379',
                    status: 'ACTIVATE'
                }
            ]

        }

    }


    render() {
        return (
            <View style={styles.container}>
                <Toolbar
                    title="HOME"
                ></Toolbar>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => item.toString()}
                    renderItem={({ item, index }) =>
                        <View style={styles.listcontainer}>
                            <View style={{ flex: 1 }}>
                                <RoundedImage
                                    source={require('../../../assets/Sim_Image.png')}
                                />
                            </View>


                            <View style={{ flex: 4 }}>



                                <View style={styles.secondView}>
                                    <View style={styles.secondView}>
                                        <Text style={styles.secondHeads}>ICCID : </Text>
                                        <Text style={styles.secondAns}>{item.ICCID}</Text>
                                    </View>
                                    <View style={styles.secondView}>
                                        <Text style={styles.secondHeads}>ORD# : </Text>
                                        <Text style={styles.secondAns}>{item.ORDER}</Text>
                                    </View>
                                </View>

                                <View style={styles.secondView}>
                                    <View style={styles.secondView}>
                                        <Text style={styles.secondHeads}>MSIDN : </Text>
                                        <Text style={styles.secondAns}>{item.MSIDN}</Text>
                                    </View>
                                    <View style={styles.secondView}>
                                        <Text style={styles.secondHeads}>PROVIDER : </Text>
                                        <Text style={styles.secondAns}>{item.Provider}</Text>
                                    </View>
                                </View>

                                <View style={styles.secondView}>
                                    <Text style={styles.secondHeads}>MOBILE : </Text>
                                    <Text style={styles.secondAns}>{item.Mobile}</Text>
                                </View>

                                <View style={styles.secondView}>
                                    <View style={styles.secondView}>
                                    </View>

                                    {
                                        item.status == "ACTIVATE" ?
                                            <Button
                                                title={`${item.status}`}
                                                onPress={alert}
                                                color="#e62e00"
                                            ></Button>
                                            :
                                            <Button
                                                title={`${item.status}`}
                                                onPress={alert}
                                                color="green"
                                            ></Button>
                                    }

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