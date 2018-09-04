import React from 'react';
import {Text, View,StatusBar,ScrollView,FlatList } from 'react-native';
import {Card,Right,Left, Footer} from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import Footers from '../../Components/Footer/Footers';
import { Button } from 'native-base';
import Styles from './Styles';
import QuestionCard from '../../Components/Card/QuestionCard';
import Result from '../Result/Result';
import Questions from '../../Assets/Data/Questions';

export default class Home extends React.Component{
    static navigationOptions = {
       header : null
    };

    constructor(props){
        super(props);
        this.state = {
            start:false,
            timePassed:false,
            remainingTime: 10,
            timer:600,
           
        }
        this.start=this.start.bind(this);
    }

   /* componentDidMount() {
           setTimeout( () => {
           this.setState({timePassed: true})
        },6000);
      }*/
    
      start(){
          this.setState({start:!this.state.start,})
        this.interval = setInterval(
          () =>          
            this.setState({              
                timer:--this.state.timer}) ,1000          
        );
       
      }
      
      componentDidUpdate(){
        if(this.state.timer === 0){
          clearInterval(this.interval);  
          setTimeout( () => {
            this.setState({
                timePassed: true,
                timer:600,
                start:false,
                 })
         },600000);      
        }
      }

      endTest(){
         clearInterval(this.interval); 
          this.setState({
              timer:600,
              start:false,              
          })
         
          this.props.navigation.navigate('Result');
      }

    render(){
        if(!this.state.timePassed){
        
        return(
            <ScrollView>
                <StatusBar />
                <Card style={Styles.backgroundView}>
                   <Left>
                       <Button onPress={()=>this.start()} title='START'>
                       <Text style={Styles.buttonText}> START </Text>
                       </Button>
                   </Left>                  
                    <Right style={Styles.rightTextView}>
                        <Text>{this.state.timer}</Text>
                    </Right>
                </Card>
             
                {this.state.start == false ? null :
                
                    <FlatList
                            extraData={this.state}  
                            data={Questions}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item}) =>
                            <QuestionCard ref='question'
                                          text={item.question}
                                          type={item.type}
                                          option1={item.correct_answer}
                                          option2={item.incorrect_answers[0]}
                                          option3={item.incorrect_answers[1]}
                                          option4={item.incorrect_answers[2]}/>}
                    />
                }
                <Footers title='SUBMIT'
                         buttonPressed={()=>this.endTest()}/>
                            
            </ScrollView>
        );
    }

        else{
            return(
                <View>
                    <Result />
                </View>
            );
        }
    }
}
export {Home}