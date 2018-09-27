import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import styles from './styles';
import {SearchBar} from '../../components';

export default class vehicleList extends React.Component{
    state = {
        data: [
            {
              ORDER : 'EVKGLI',
              ICCID : 'ICCID1',
              MSIDN : 'MSIDN1',
              Provider : 'Tata Docomo',
              Mobile :'09085-53379',
              status : 'Activate'
            },
            {
                ORDER : 'JSCKBK',
                ICCID : 'ICCID2',
                MSIDN : 'MSIDN2',
                Provider : 'AIRTEL',
                Mobile :'09085-45090',
                status : 'Deactivate'
            },
            {
                ORDER : 'UYGEYUJA',
                ICCID : 'ICCID3',
                MSIDN : 'MSIDN3',
                Provider : 'AIRCEL',
                Mobile :'09085-65879',
                status : 'Activate'
            },
            {
                ORDER : 'HAVCMSV',
              ICCID : 'ICCID4',
              MSIDN : 'MSIDN4',
              Provider : 'IDEA',
              Mobile :'09085-53379',
              status : 'DEACTIVATE'
            }
        ]
    }
alertItemName = (item) => {
    alert(item.MSIDN);
 }
    render()
    {
        return (
            <View style={styles.main}>
             <SearchBar style={styles.search}/>
             <View style={styles.list} > 
            {
               this.state.data.map((item, index) => (
                  <TouchableOpacity
                     key = {item.ORDER}
                     style = {styles.container}
                     onPress={() => this.props.navigation.navigate('Association')}>
                     <Text style = {styles.text}>
                        {item.MSIDN}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
            </View>


        );
    }
}

export {vehicleList}