import React from 'react';
import {View,Text,ScrollView,FlatList,Button} from 'react-native';
import styles from './styles';
export default class VehicleList extends React.Component {
    constructor() {
        super();
           this.state = {
           data: [
                   {
                       ORDER: 'EVKGLI',
                       ICCID: 'ICCID1',
                       MSIDN: 'MSIDN1',
                       Provider: 'Tata Docomo',
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
                       status: 'DEACTIVATE'
                   },
                   {
                       ORDER: 'HAVCMSV',
                       ICCID: 'ICCID4',
                       MSIDN: 'MSIDN4',
                       Provider: 'IDEA',
                       Mobile: '09085-53379',
                       status: 'DEACTIVATE'
                   }
               ]
           }
       }
       render() {
           return (
               <View style={styles.container}>
               <View style={styles.viewStyle}></View>
                <View style={styles.flatView}>
                   <FlatList 
                       data={this.state.data}
                       keyExtractor={(item, index) => item.toString()}
                       renderItem={({ item, index }) => 
                               <View style={styles.viewList}>
                                   <Button style={styles.button}
                                       title={item.MSIDN}
                                       onPress={alert}
                                       color="#999966"
                                   ></Button>
                               </View>  
                       } ></FlatList>
                 </View>
                </View>
           )
       }
    }
export { VehicleList }