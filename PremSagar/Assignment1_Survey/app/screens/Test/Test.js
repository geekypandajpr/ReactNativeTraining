import React from 'react';
import { View, ScrollView, Button,Text } from 'react-native';
import styles from './Styles';
import { Toolbar, QuesCard } from '../../components';
import Ques from '../../assets/datas/Ques';
import { Card, CardItem, Right, Left } from 'native-base';
import moment from 'moment';

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalTime: 600000,
            remainingTime: moment.utc(moment.duration(600000).asMilliseconds()).format('mm:ss'),
            isStart: false,
        }
        this.startQuiz = this.startQuiz.bind(this);
        this.submitTest = this.submitTest.bind(this);
        this.calculateRemainingTime = this.calculateRemainingTime.bind(this);
        this.timerVar;
    }
    
    startQuiz() {
        this.setState({ isStart: !this.state.isStart })
        timerVar = setInterval(this.calculateRemainingTime, 1000);
    }

    calculateRemainingTime() {
        if (this.state.totalTime == 0) {
            clearInterval(timerVar);
            this.props.navigation.navigate('Result');
        }
        this.setState({
            totalTime: this.state.totalTime - 1000,
            remainingTime: moment.utc(moment.duration(this.state.totalTime).asMilliseconds()).format('mm:ss')
        })
    }

    submitTest() {
        clearInterval(timerVar);
        this.props.navigation.navigate('Result');
    }

    render() {
        return (
            <View style={styles.container}>
                <Toolbar
                    leftIcon='ios-menu-outline'
                    leftIconType='Ionicons'
                    headerTitle='OnlineTest'
                />

                <View style={styles.topView}>
                    <Card style={styles.cardView}>
                        <CardItem style={styles.cardItemView}>
                            <Left style={styles.startButtonView}>
                                <Button disabled={this.state.isStart}
                                    title='Start'
                                    onPress={this.startQuiz}
                                    color='#fc8e51' />
                            </Left>
                            <Right style={styles.timerView}>
                                <Text style={styles.timerText}> {this.state.remainingTime} </Text>
                            </Right>
                        </CardItem>
                    </Card>
                </View>


                <ScrollView showsVerticalScrollIndicator={false}>

                    {this.state.isStart == false ? null :
                        <View style={styles.scrollView}>
                            {Ques.map((item, index) =>
                                <QuesCard key={index} {...item} index={index} />
                            )}

                            <View style={styles.buttonView}>
                                <Button
                                    style={styles.button}
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