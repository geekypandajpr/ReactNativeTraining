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

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 600000,
            time: '10:00'
        }
        this.startTest = this.startTest.bind(this);
        this.submitTest = this.submitTest.bind(this);
        this.setTime = this.setTime.bind(this);
    }

    startTest() {
        setInterval(this.setTime, 1000);
    }

    setTime() {
        this.setState({
            timer: this.state.timer-1000,
            time: `${Math.floor(this.state.timer / 60000)}:${((this.state.timer % 60000) / 1000).toFixed(0)}`
        })
    }

    submitTest() {
        this.props.navigation.navigate('Result');
    }

    render() {
        const { navigate } = this.props.navigation;
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
                                <Button title='Start' onPress={this.startTest} color='#fc8e51'></Button>
                            </Left>
                            <Right style={ styles.timerView }>
                                <Text style={ styles.timerText }> {this.state.time} </Text>
                            </Right>
                        </CardItem>
                    </Card>
                </View>
                

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={ styles.scrollView }>
                        {Ques.map((item, index) =>
                            <QuesCard
                                key={index}
                                question={item.question}
                                option1={item.correct_answer}
                                option2={item.incorrect_answers[0]}
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


                </ScrollView>
            </View>
        )
    }
}

export { Test }