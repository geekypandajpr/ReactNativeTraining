import React from 'react';
import {View,ScrollView,FlatList,Button,TouchableOpacity,BackHandler} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import styles from './styles';
import {SearchBar, Toolbar} from '../../components';
import DeviceSimItem from '../../screens/DeviceSimItem/DeviceSimItem';
export default class DeviceList extends React.Component {
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
              this.arrayholder = this.state.data ;
              BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
             }
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
    
        componentWillUnmount() {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        }
    
        handleBackPress=()=>{
            return true;
        }
       render() {
        const { navigate } = this.props.navigation;
           return (
               <View style={styles.container}>
                    <Toolbar title='Association' leftIcon='arrow-left' leftIconType='Feather' 
                    onLeftButtonPress={() => navigate('HomeScreen')}
                    rightIcon='settings'
                    rightIconType='MaterialCommunityIcons'/>
                    <SearchBar placeholder='Search by vehicle, sim, device'
                        onChangeText={(text) => this.SearchFilterFunction(text)} />
                    <FlatList 
                        data={this.state.data}
                       keyExtractor={(item, index) => item.MSIDN.toString()}
                       renderItem={
                           ({ item, index }) => 
                               <View style={styles.viewList}>
                                  <List>
                                    <ListItem avatar>
                                    <Body>
                                    <TouchableOpacity  onPress={() => this.refs.modal.setModalVisible(true)}>
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
                       <DeviceSimItem ref='modal' />
                </View>
           )
       }
    }
export { DeviceList }