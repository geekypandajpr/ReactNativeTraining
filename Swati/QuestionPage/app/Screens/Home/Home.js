import React from 'react';
import {Text, View,StatusBar,ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Index from '../../Components/Header/Index';
import { Button } from 'native-base';
import Styles from './Styles';
import {QuestionCard} from '../../Components/Card/QuestionCard';

export default class Home extends React.Component{
    static navigationOptions = {
       header : null
    };

    constructor(props){
        super(props);
        this.state = {
            start:false
        }
    }


    render(){
        return(
            <ScrollView>
                <StatusBar />
                <View style={Styles.backgroundView}>
                   <View>
                       <Button onPress={()=>this.setState({start: !this.state.start})} title='START'>
                       <Text style={Styles.buttonText}> START </Text>
                       </Button>
                   </View>                  
                    <View>
                        <Text></Text>
                    </View>
                </View>
                {this.state.start == false ? null :<QuestionCard /> }
            </ScrollView>
        );
    }
}
export {Home}