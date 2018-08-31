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
            isChecked: [false,false,false,false]
        }
        this.onPress = this.onPress.bind(this);
    }

    async componentWillMount(){
        await Expo.Font.loadAsync({
            Roboto:require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium:require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
        for(let index=0;index<10;index++) {
            RESULTS.splice(index, 1, { 'answer' : 'Not Attempted', 'status' : false, });
        }
        
    }

    onPress(option, index, ans) {
        var res = false
        if((Ques[index].correct_answer).toUpperCase()==(ans).toUpperCase()){
            res = true;
        }

        if(option == 0) {
            this.setState({ isChecked: [true, false, false, false] })
            RESULTS.splice(index, 1, { "answer" : ans, "status" : res});
        } else if(option == 1) {
            this.setState({ isChecked: [false, true, false, false] })
            RESULTS.splice(index, 1, { "answer" : ans, "status" : res });
        } else if(option == 2) {
            this.setState({ isChecked: [false, false, true, false] })   
            RESULTS.splice(index, 1, { "answer" : ans, "status" : res });
        } else if(option == 3) {
            this.setState({ isChecked: [false, false, false, true] })
            RESULTS.splice(index, 1, { "answer" : ans, "status" : res });
        }
    }
    
    render() {
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View>
                <Card style={ styles.cardView }>

                    <CardItem style={ styles.quesCardItem }>
                        <Text style={ styles.quesText }> {this.props.question} </Text>
                    </CardItem>

                    {this.props.type == 'boolean' ?
                        <View>
                            <CardItem style={ styles.optionCardItemView }>
                                <View style={ styles.checkbox }>
                                    <CheckBox checked={this.state.isChecked[0]}
                                        onPress={()=>this.onPress(0, this.props.index,this.props.option1)} />
                                </View>
                                <View style={ styles.textView }>
                                    <Text style={ styles.optionText }> {this.props.option1} </Text>
                                </View>
                            </CardItem>

                            <CardItem style={ styles.optionCardItemView }>
                                <View style={ styles.checkbox }>
                                    <CheckBox checked={this.state.isChecked[1]}
                                        onPress={()=>this.onPress(1, this.props.index,this.props.option2)}/>
                                </View>
                                <View style={ styles.textView }>
                                    <Text style={ styles.optionText }> {this.props.option2} </Text>
                                </View>
                            </CardItem>
                        </View>
                    :

                        <View>
                            <CardItem style={ styles.optionCardItemView }>
                                <View style={ styles.checkbox }>
                                    <CheckBox checked={this.state.isChecked[0]}
                                        onPress={()=>this.onPress(0, this.props.index,this.props.option1)}/>
                                </View>
                                <View style={ styles.textView }>
                                    <Text style={ styles.optionText }> {this.props.option1} </Text>
                                </View>
                            </CardItem>

                            <CardItem style={ styles.optionCardItemView }>
                                <View style={ styles.checkbox }>
                                    <CheckBox checked={this.state.isChecked[1]}
                                        onPress={()=>this.onPress(1, this.props.index,this.props.option2)}/>
                                </View>
                                <View style={ styles.textView }>
                                    <Text style={ styles.optionText }> {this.props.option2} </Text>
                                </View>
                            </CardItem>
                            <CardItem style={ styles.optionCardItemView }>
                                <View style={ styles.checkbox }>
                                    <CheckBox checked={this.state.isChecked[2]}
                                        onPress={()=>this.onPress(2, this.props.index,this.props.option3)}/>
                                </View>
                                <View style={ styles.textView }>
                                    <Text style={ styles.optionText }> {this.props.option3} </Text>
                                </View>
                            </CardItem>

                            <CardItem style={ styles.optionCardItemView }>
                                <View style={ styles.checkbox }>
                                    <CheckBox checked={this.state.isChecked[3]}
                                        onPress={()=>this.onPress(3, this.props.index,this.props.option4)}/>
                                </View>
                                <View style={ styles.textView }>
                                    <Text style={ styles.optionText }> {this.props.option4} </Text>
                                </View>
                            </CardItem>
                        </View>
                    }
                </Card>
            </View>
        )
    }
}

export { QuesCard }