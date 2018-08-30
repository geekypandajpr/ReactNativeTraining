import React from 'react';
import {
    View,
    ScrollView,
    Button,
    Text
} from 'react-native';
import styles from './Styles';
import { Toolbar, QuesCard } from '../../components';
import Ques from '../../assets/datas/Ques';
import { Card, CardItem, Right, Left } from 'native-base';

var timerVar;
export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0,
            time: '',
            isStartEnable: false,
        }
        this.startTest = this.startTest.bind(this);
        this.submitTest = this.submitTest.bind(this);
        this.setTime = this.setTime.bind(this);
    }

    componentDidMount() {
        this.setState({
            timer: 599000,
            time: '10:00',
            isStartEnable: false,
        })
    }

    /*componentWillUnmount() {
        console.log('unmount');
    }*/

    startTest() {
        this.setState({ isStartEnable: true })
        timerVar = setInterval(this.setTime, 1000);

    }

    setTime() {
        if(this.state.timer == 0) {
            clearInterval(timerVar);
            this.setState({
                timer: 599000,
                time: '10:00',
                isStartEnable: false,
            })
            this.props.navigation.navigate('Result');
        }
        this.setState({
            timer: this.state.timer-1000,
            time: `${Math.floor(this.state.timer / 60000)}:${((this.state.timer % 60000) / 1000).toFixed(0)}`
        })
    }

    submitTest() {
        clearInterval(timerVar);
        this.setState({
            timer: 599000,
            time: '10:00',
            isStartEnable: false,
        })
        this.props.navigation.navigate('Result');
    }

    render() {
        return (
            <View style={ styles.container }>
                <Toolbar
                    leftIcon='ios-menu-outline'
                    leftIconType='Ionicons'
                    headerTitle='OnlineTest'
                />

                <View style={ styles.topView }>
                    <Card style={ styles.cardView }>
                        <CardItem style={ styles.cardItemView }>
                            <Left style={ styles.startButtonView }>
                                {this.state.isStartEnable == false ?
                                    <Button title='Start' onPress={this.startTest} color='#fc8e51'></Button>
                                :
                                    <Button disabled title='Start' onPress={this.startTest} color='#fc8e51'></Button>
                                }
                            </Left>
                            <Right style={ styles.timerView }>
                                <Text style={ styles.timerText }> {this.state.time} </Text>
                            </Right>
                        </CardItem>
                    </Card>
                </View>
                

                <ScrollView showsVerticalScrollIndicator={false}>

                    {this.state.isStartEnable == false ? null :
                        <View style={ styles.scrollView }>
                            {Ques.map((item, index) =>
                                <QuesCard
                                    key={index}
                                    index={index}
                                    type={item.type}
                                    question={item.question}
                                    option1={item.correct_answer}
                                    option2={item.incorrect_answers[0]}
                                    option3={item.incorrect_answers[1]}
                                    option4={item.incorrect_answers[2]}
                                />
                            )}
                        
                            <View style={ styles.buttonView }>
                                <Button
                                    style={ styles.button }
                                    color='#fc8e51'
                                    onPress={this.submitTest}
                                    title='Finish Test'
                                />
                            </View>
                        </View>
                    }

                </ScrollView>
            </View>
        )
    }
}

export { Test }

//Math.floor((Math.random() * 4) + 0)