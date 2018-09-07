import React from 'react';
import {View,FlatList,Button} from 'react-native';
import {HeaderTab} from '../../components/HeaderTab';
import styles from './styles';
import {FotterTab} from '../../components/FotterTab';
import { Header, Item, Input, Icon, CheckBox,Body, ListItem,Card,Text, CardItem,Left,
     Right,Container} from "native-base";
import {AppLoading} from 'expo';
import {Checkbox} from '../../components/CheckBoxTab';
import { SearchBar } from 'react-native-elements';
import {cardWthIcon} from '../../components/CardWithIcon';
import Question from '../../assests/Json/Question';





export default class Details extends React.Component{

constructor(props)
{
    
        super(props)
        this.state={
        time: 60000,
        timerVar: '01:00',
}
       this.myfun = this.myfun.bind(this);
       this.setTimer = this.setTimer.bind(this);
}
    
 myfun()
    {
       this.state.timerVar = setInterval(this.setTimer, 1000)
    }   
    
setTimer()
    {
        if(this.state.time == 0) {
        clearInterval(this.state.timerVar);
     }
        else
     {
        this.setState({time: this.state.time-1000})
        var minutes = Math.floor((this.state.time % (1000 * 60 * 60)) / (1000 * 60))
        var seconds = Math.floor((this.state.time % (1000 * 60)) / 1000)
        this.setState({timerVar: minutes+':'+seconds})
    }
        
    }
  
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
                     <Text>{this.state.timerVar}</Text>
                    </CardItem>
                   
                </Card>

                <FlatList
                    data={Question}
                    keyExtractor={(item, index) => item.toString()}
                    renderItem={({item, index}) =>
                        <View>
                            <Checkbox
                                ques1={index+1+'.'+item.question}
                                option1={item.correct_answer}
                                option2={item.incorrect_answers[0]}
                                option3={item.incorrect_answers[1]}
                                option4={item.incorrect_answers[2]}
                            />                          
                        </View>
                }/>
               
            </View>                   
            );
        }
    }

    export {Details}