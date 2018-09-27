import React from 'react';
import { View,
     Text, 
     ScrollView, 
     FlatList,
    Button} from 'react-native';
import styles from './styles';
import { Ionicons, } from '@expo/vector-icons';
export default class Sims extends React.Component {
    constructor() {
        super();
        this.state = {
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
    }
    render() {
        return (

            <View style={styles.container}>

                   
                       
                        <FlatList
                            data={this.state.data}
                            keyExtractor={(item, index) => item.toString()}
                            renderItem={({ item,index}) =>
                            <View style={styles.listcontainer
                           }>
                            <View style={{flex:1}}>
                            <Text style={styles.indexstyle}>{index+1}</Text>
                            </View>
                           
                            <View style={{flex:2}}>

                                <Text style={{fontWeight:'bold',color:'#e0600098',fontSize:20}}>Sim</Text>

                                <View style={{flex:1,flexDirection:'row'}}>
                                <Text style ={{fontWeight:'bold'}}>ORDER:</Text> 
                                <Text> {item.ORDER}</Text>
                                </View>

                                <View style={{flex:1,flexDirection:'row'}}>
                                <Text style ={{fontWeight:'bold'}}>ICCID:</Text> 
                                <Text> {item.ICCID}</Text>
                                </View>

                                <View style={{flex:1,flexDirection:'row'}}>
                                <Text style ={{fontWeight:'bold'}}>MSIDN:</Text> 
                                <Text>{item.MSIDN}</Text>
                                </View>

                                 <View style={{flex:1,flexDirection:'row'}}>
                                <Text style ={{fontWeight:'bold'}}>PROVIDER:</Text> 
                                <Text>{item.Provider}</Text>
                                </View>

                               
                                <Text style ={{fontWeight:'bold'}}>MOBILE-NO:</Text> 
                                <Text>{item.Mobile}</Text>
                                <Ionicons name="md-checkmark-circle" size={32} color="green" />
                                

                                
                                </View>

                                 <View style={{flex:2}}>
                                <Button style={{width:20}}
                                title={item.status}
                                onPress={alert}
                                color="#e0600080"
                                ></Button>
                                 </View>
                            </View>

                            }
                        ></FlatList>

                        
                    </View>
                   


           

        )
    }
}
export { Sims }