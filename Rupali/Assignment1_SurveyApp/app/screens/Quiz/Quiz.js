import React from 'react'; 
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';
import {JSONData} from '../../components/JSONData/JSONData';
import {ScrollView} from 'react-native';
import {HeaderIcon} from '../../components/Header';
import { Card,CardItem } from 'native-base';
import {Checkbox} from '../../components/Checkbox/Checkbox';

export default class Quiz extends React.Component
{
    render(){
        return(
            <View>
                <HeaderIcon />
                <ScrollView style = {{}}>
                <Card style={{flexDirection:'row', flex: .2}}>
                    <CardItem style= {{flex:0.2,backgroundColor: 'cyan' }}
                    button onPress={() => alert("Timer should start")}>
                    <Text>Start</Text>
                    </CardItem>
                    <CardItem style= {{flex:0.8, justifyContent: 'center'}}
                     header button onPress={() => alert("Timer starts")}>
                    <Text>00:00</Text>
                    </CardItem>
                </Card>
                   <Checkbox 
                   />
                   <Checkbox />
                   <Checkbox />
                   <Checkbox />
                   <Checkbox />
                   <Checkbox />
                   <Checkbox />
                   <Checkbox />
                   <Checkbox />
                   <Checkbox />
                </ScrollView>
            </View>
                
 );
 }
}

const styles = StyleSheet.create({
    cardBelowHeader: {
      
        
    }
   
    
    });




export {Quiz}



