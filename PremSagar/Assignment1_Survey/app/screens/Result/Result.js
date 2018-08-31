import React from 'react';
import {
    View,
    Text,
    Button,
    ScrollView
} from 'react-native';
import styles from './Styles';
import { Toolbar } from '../../components';
import { Card, CardItem } from 'native-base';
import Results from '../../assets/datas/Results';
import Ques from '../../assets/datas/Ques';

export default class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        }
    }
    componentDidMount() {
        // for(let index in Results) {
        //     if((Results[index].status).toUpperCase()==('Right').toUpperCase()) {
        //         this.setState({
        //             score: parseInt(this.state.score+1)
        //         })
        //     }
        // }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={ styles.container }>
                <Toolbar
                    leftIcon='ios-arrow-back-outline'
                    leftIconType='Ionicons'
                    onPressLeftIcon={() => this.props.navigation.goBack()}
                    headerTitle='Result'
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={ styles.resultView }>
                        <Card style={ styles.cardView }>
                            <CardItem style={ styles.cardItem1 }>
                                <View style={ styles.serialNum }>
                                    <Text>SL NO.</Text>
                                </View>
                                <View style={ styles.choosedAnsView }>
                                    <Text>Your Answer</Text>
                                </View>
                                <View style={ styles.correctAnsView }>
                                    <Text>Correct Answer</Text>
                                </View>
                            </CardItem>
                            {Results.map((item, index) =>
                                <CardItem style={ styles.cardItem } key={index}>
                                    <View style={ styles.serialNum }>
                                        <Text> {parseInt(index+1)} </Text>
                                    </View>
                                    <View style={ styles.choosedAnsView }>
                                        <Text> {item.answer} </Text>
                                    </View>
                                    <View style={ styles.correctAnsView }>
                                        <Text> {Ques[index].correct_answer} </Text>
                                    </View>
                                </CardItem>
                            )}
                            
                        </Card>
                        <View style={ styles.buttonView }>
                            <Button
                                style={ styles.button }
                                color='#fc8e51'
                                onPress={()=>this.props.navigation.navigate('Test')}
                                title='Re-Start Test'
                            />
                        </View>
                        
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export { Result }