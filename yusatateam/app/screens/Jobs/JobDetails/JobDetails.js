import React from 'react';
import { View, ScrollView, FlatList, TouchableOpacity, } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text ,Button} from 'native-base';
import styles from './styles';
import { AppLoading } from 'expo';
import DeviceSimItem from '../../DeviceSimItem/DeviceSimItem'
export default class jobDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                 {
                    'jobNumber' : 'VOCT092015',
                    'jobStatus' : 'completed',
                    'companyName' : 'Yusata infotech',
                    'jobType' : 'Install',
                    'jobName' : 'Job Name',
                    'scheduleDate' : '10/10/2018 20:00',
                    'servicePerson' : 'Yash Gulati',
                    'contactPerson' : 'Mr. Vinayak Sharma',
                    'contactNumber' : '+91 8945623622',
                    'cashOnDelivery' : 'yes',
                    'amount' : 'Rs. 5000',
                    'training' : 'yes'
                },
                {
                    'jobNumber' : 'VOCT092016',
                    'jobStatus' : 'completed',
                    'companyName' : 'Yusata infotech',
                    'jobType' : 'Install',
                    'jobName' : 'Job Name',
                    'scheduleDate' : '10/10/2018 20:00',
                    'servicePerson' : 'Yash Gulati',
                    'contactPerson' : 'Rahul',
                    'contactNumber' : '+91 8945623622',
                    'cashOnDelivery' : 'yes',
                    'amount' : 'Rs. 5000',        
                    'training' : 'yes'
                },
                {
                    'jobNumber' : 'VOCT092017',
                    'jobStatus' : 'completed',
                    'companyName' : 'Yusata infotech',
                    'jobType' : 'Install',
                    'jobName' : 'Job Name',
                    'scheduleDate' : '10/10/2018 20:00',
                    'servicePerson' : 'Yash Gulati',
                    'contactPerson' : 'Rahul',
                    'contactNumber' : '+91 8945623622',
                    'cashOnDelivery' : 'yes',
                    'amount' : 'Rs. 5000',          
                    'training' : 'yes'
                },
                {
                    'jobNumber' : 'VOCT092018',
                    'jobStatus' : 'completed',
                    'companyName' : 'Yusata infotech',
                    'jobType' : 'Install',
                    'jobName' : 'Job Name',
                    'scheduleDate' : '10/10/2018 20:00',
                    'servicePerson' : 'Yash Gulati',
                    'contactPerson' : 'Rahul',
                    'contactNumber' : '+91 8945623622',
                    'cashOnDelivery' : 'yes',
                    'amount' : 'Rs. 5000',
                    'training' : 'yes'
                },
            ],
            items: [],
            list: '',
            status: 'completed'
        }
        this.arrayholder = [];
        this.changeTabStatus = this.changeTabStatus.bind(this);
    };
    componentDidMount() {
        this.arrayholder = this.state.data;
    }
    SearchFilterFunction(text) {

        const newData = this.arrayholder.filter(function (item) {
            const itemData = item.jobNumber.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            data: newData,
            text: text
        }
        )

    };
    changeTabStatus(tabStatus){
        this.setState({status: tabStatus},
            function(){
                console.log(this.state.status)
        });
    }

    render() {
        return (

            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => item.jobNumber.toString()}
                    renderItem={({ item, index }) =>
                        <View style={styles.viewList}>
                            {this.state.status == item.jobStatus ?
                                 <List style={{ 
                                 backgroundColor : 'white',
                                //  borderRadius : 20,
                                 margin : 15,
                                 marginBottom : 0}}>
                                 <View avatar noBorder >
                                 <View>
                         <TouchableOpacity onPress={() => this.refs.modal.setModalVisible(true,item)}>
                                    <View style={{flexDirection :'row',flex :1}}> 
                                        <Text style={styles.text}>{item.jobNumber}</Text>
                                        <Text style={{alignItems :'center',justifyContent :'center',flex :5}}>{item.scheduleDate}</Text> 
                                    </View>
                                 <View style={{flexDirection :'row',flex :1}}>
                                    <Text style={{flex : 8,paddingLeft : 15}}>{item.contactPerson}</Text> 
                                    <Text style={{color : '#CD853F',alignItems :'flex-end',justifyContent :'flex-end',flex :3}}>{item.jobStatus}</Text>
                                 </View>
                                 <View style={{flex :1,flexDirection :'row'}}>
                                     <View style={{flex : 8,paddingLeft : 15}}>
                                        <Text>{item.companyName}</Text>   
                                        <Text>{item.contactNumber}</Text>
                                     </View>
                                         <Right style={{flex :3}}>
                                            <Button rounded  success style={{height : 20,marginRight :10}}>
                                                 <Text uppercase={false}>{item.jobType}</Text>
                                            </Button>
                                         </Right>
                                 </View>   
                            </TouchableOpacity>
                                 </View>
                                
                                 </View>
                             </List>
                                : null}
                        </View>
                    } >
                </FlatList>
                <DeviceSimItem ref='modal' />
            </View>
        )
    }
}
export { jobDetails }
