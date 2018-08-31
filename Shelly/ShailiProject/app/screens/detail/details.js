import React from 'react';
import {View,ScrollView} from 'react-native';
import {HeaderTab} from '../../components/HeaderTab';
import styles from './styles';
import {FotterTab} from '../../components/FotterTab';
import { Header, Item, Input, Icon,Button, CheckBox,Body, ListItem,Card,Text, CardItem,Left,
     Right,Container} from "native-base";
import {AppLoading} from 'expo';
import {Checkbox} from '../../components/CheckBoxTab';
import { SearchBar } from 'react-native-elements';
import {cardWthIcon} from '../../components/CardWithIcon';
import Question from '../../assests/Json/Question';



var myVar1;

export default class Details extends React.Component{

constructor(props)
{
    super(props)
    this.state={
        myVar:60000
    }
    //this.myTimer=this.myTimer.bind(this)
}
    myfun()
   {
       console.log('Hello')
       setInterval(console.log('HelloWOrld'), 1000)
        //myVar1=setInterval(console.log('hehe'),1000); 
   }
//    myTimer()
//    {
//        this.setState({myVar:this.state.myVar-1000})

//    }
    render(){

       
         return(
           
            <View style={{flex:1}}>
            <Card style={{flexDirection:'row'}}>
                    <CardItem style= {{flex:0.5}}
                     header button onPress= {this.myfun}>
                    <Text>Start</Text>

                    </CardItem>

                    <CardItem style= {{flex:0.5}}
                     header >
                     
                    <Text>{this.state.myVar}</Text>
                    </CardItem>
                   
                </Card>
                <ScrollView>
                        {Question.map((data,index)=>
                            <Text>({(index+1)}){data.question}</Text>
                       
                        )}
                            
                            
                        
                            
                        
                </ScrollView>
               
</View>                   
            );
        }
    }

    export {Details}