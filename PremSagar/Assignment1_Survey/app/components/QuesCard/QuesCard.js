import React from 'react';
import { View } from 'react-native';
import {
    Card,
    CardItem,
    Text,
    CheckBox
} from 'native-base';
import { AppLoading } from 'expo';
import styles from './Styles';
import RESULTS from '../../assets/datas/Results';
import Ques from '../../assets/datas/Ques';

export default class QuesCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isChecked: false,
            //isChecked: [false, false, false, false],
            answerList: [],
            correctAnswerList: new Map()
        }
        this.selectOptions = this.selectOptions.bind(this);
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false });
    }

    componentDidMount() {
        this.setAnswerList();
    }

    setAnswerList() {
        const {correct_answer, incorrect_answers} = this.props;
        incorrect_answers.push(correct_answer);
        this.state.answerList = this.suffleAnswerList(incorrect_answers);
    }


    suffleAnswerList(answers) {
        var count = answers.length, temp, randomNumber;
        while(count>0) {
            randomNumber = Math.floor(Math.random() * count);
            count--;
            temp = answers[count];
            answers[count] = answers[randomNumber];
            answers[randomNumber] = temp;
        }
        //console.log(answers);
        return answers;
    }

    selectOptions(option) {
        console.log(this.state.correctAnswerList);
        //this.setState({ isChecked: !this.state.isChecked });
        this.state.correctAnswerList.set(option,true);
    }

    render() {
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View>
                    <Card style={styles.cardView}>

                        <CardItem style={styles.quesCardItem}>
                            <Text style={styles.quesText}> {this.props.question} </Text>
                        </CardItem>

                        {this.state.answerList.map((item,index) =>
                            <CardItem key={index} style={styles.optionCardItemView}>
                                <View style={styles.checkbox}>
                                    <CheckBox checked={this.state.isChecked}
                                        onPress={()=>this.selectOptions(item)} />
                                </View>
                                <View style={styles.textView}>
                                    <Text style={styles.optionText}> {item} </Text>
                                </View>
                            </CardItem>
                        )}
                    </Card>
                </View>
        )
    }
}

export { QuesCard }