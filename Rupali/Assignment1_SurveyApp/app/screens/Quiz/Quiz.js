import React from 'react'; 
import 
{
    Button,
    Text,
    View,
    FlatList
} from 'react-native';
import JSONData from '../../components/JSONData/JSONData';
import {ScrollView} from 'react-native';
import {HeaderIcon} from '../../components/Header';
import { Card,CardItem } from 'native-base';
import {Checkbox} from '../../components/Checkbox/Checkbox';

export default class Quiz extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            timer: 0,
            time: '',
            isStartEnable: false,
        }
        this.beginTest = this.beginTest.bind(this);
        this.finishTest = this.finishTest.bind(this);
        this.setTimer = this.setTimer.bind(this);
    }

    componentDidMount() {
        this.setState({
            timer: 599000,
            time: '10:00',
            isStartEnable: false,
        })
    }

    beginTest() {
        this.setState({ isStartEnable: true })
        timerVar = setInterval(this.setTimer, 1000);

    }

    setTimer() {
        if(this.state.timer == 0) {
            clearInterval(timerVar);
            this.setState({
                timer: 599000,
                time: '10:00',
                isStartEnable: false,
            })
            this.props.navigation.navigate('QuizResult');
        }
        this.setState({
            timer: this.state.timer-1000,
            time: `${Math.floor(this.state.timer / 60000)}:${((this.state.timer % 60000) / 1000).toFixed(0)}`
        })
    }

    finishTest() {
        clearInterval(timerVar);
        this.setState({
            timer: 599000,
            time: '10:00',
            isStartEnable: false,
        })
        this.props.navigation.navigate('QuizResult');
    }
    render(){
        return(
            <View>
                <HeaderIcon />
                    <ScrollView style = {{}}>
                        <Card style={{flexDirection:'row'}}>
                            <CardItem style= {{flex:0.5}}>
                                 <Button title='Start' onPress={this.beginTest} color='cyan'/>
                            </CardItem>
                            <CardItem style= {{flex:0.5}}
                                header >
                                <Text>{this.state.time}</Text>
                            </CardItem>
                         </Card>
                    <FlatList
                        data={JSONData}
                        keyExtractor={(item, index) => item.toString()}
                        renderItem={({item, index}) =>
                            <View>
                                <Checkbox
                                    Question={item.question}
                                    Solution1={item.correct_answer}
                                    Solution2={item.incorrect_answers[0]}
                                    Solution3={item.incorrect_answers[1]}
                                    Solution4={item.incorrect_answers[2]}
                                />
                            </View>
                    }/>
                             <View>
                                <Button
                                    color='#fc8e51'
                                    onPress={this.finishTest}
                                    title='Finish Test'
                                />
                        </View>
                    </ScrollView>
            </View>
        );
    }
}

export {Quiz}



   