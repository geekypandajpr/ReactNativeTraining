import React from 'react';
import {View,ScrollView,FlatList,Button,TouchableOpacity,} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import styles from './styles';
import {SearchBar} from '../../component/SearchBar';
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
                  
               ],
               items : [],
               list : '',
               status : true
           }
           this.arrayholder = [] ;
       };
       componentDidMount() {
              this.arrayholder = this.state.data ; }
        SearchFilterFunction(text){
            
            const newData = this.arrayholder.filter(function(item){
                const itemData = item.MSIDN.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
                this.setState({
                    data: newData,
                    text: text
                }
            )
    
        }
       render() {
        
           return (
               <View style={styles.container}>
                    <View style={styles.search}>
                        <SearchBar searchItem={(text) => this.SearchFilterFunction(text)} />
                    </View>
                 <ScrollView style={styles.list}>
                   <FlatList 
                    data={this.state.data}
                       keyExtractor={(item, index) => item.MSIDN.toString()}
                       renderItem={
                           ({ item, index }) => 
                               <View style={styles.viewList}>
                                  <List>
                                    <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={require('../../../assets/user.png')} />
                                    </Left>
                                    <Body>
                                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('DeviceSimItem',{data: item})}>
                                        <Text>{item.MSIDN}</Text>
                                        <Text note>{item.status}</Text>
                                        </TouchableOpacity>
                                    </Body>
                                    <Right>
                                        <Text note>3:43 pm</Text>
                                    </Right>
                                    </ListItem>
                                </List>  
                               </View>  } >
                       </FlatList> 
                 </ScrollView>
                </View>
           )
       }
    }
export { VehicleList }