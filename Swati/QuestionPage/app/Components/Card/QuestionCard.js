import React from 'react';
import {Card,CardItem,Text,View,CheckBox,Body,Radio} from 'native-base';
import Styles from './Styles';
import SelectMultiple from 'react-native-select-multiple';
import Questions from '../../Assets/Data/Questions';


export default class QuestionCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked:false,
            true:'',
            option:'',
            count:0,
           
        }
        this.showAnsr=this.showAnsr.bind(this);
    }
   
    
    showAnsr(){
        if(this.state.option=='1'){        
           this.setState({
              count:this.state.count+1
            })}
                   
    }
    render(){
       
        return(
            <View style={Styles.cardView}>
            <Card>
                <CardItem>
                    <View style={Styles.textView}>
                       <Text>{this.props.text}</Text>
                    </View>
                </CardItem>
                {this.props.type== 'boolean'?
                   <View>
                        <CardItem>   
                           <Radio onPress={() => this.setState({ true: 'Y' })}
                                                    selected={this.state.true == 'Y' }            
                                                />
                            <Body>
                            <Text style={Styles.optionText}>{this.props.option1}</Text>
                            </Body>
                        </CardItem>
                        <CardItem>   
                        <Radio onPress={() => this.setState({ true: 'N' })}
                                                    selected={this.state.true == 'N' }            
                                                />
                            <Body>
                            <Text style={Styles.optionText}>{this.props.option2}</Text>
                            </Body>
                        </CardItem>                        
                   </View> : 
                   <View>
                        <CardItem>   
                            <Radio onPress={() => this.setState({ option: '1' })}
                                                    selected={this.state.option == '1' }            
                                                />
                            <Body>
                            <Text style={Styles.optionText}>{this.props.option1}</Text>
                            </Body>
                        </CardItem>
                        <CardItem>   
                            <Radio onPress={() => this.setState({ option: '2' })}
                                                    selected={this.state.option == '2' }            
                                                /> 
                            <Body>
                            <Text style={Styles.optionText}>{this.props.option2}</Text>
                            </Body>
                        </CardItem>
                        <CardItem>   
                            <Radio onPress={() => this.setState({ option: '3' })}
                                                    selected={this.state.option == '3' }            
                                                />
                            <Body>
                            <Text style={Styles.optionText}>{this.props.option3}</Text>
                            </Body>
                        </CardItem>
                        <CardItem>   
                            <Radio onPress={() => this.setState({ option: '4' })}
                                                    selected={this.state.option == '4' }            
                                                />
                            <Body>
                            <Text style={Styles.optionText}>{this.props.option4}</Text>
                            </Body>
                        </CardItem> 
                  </View>}
            </Card>
            </View>
        );
    }
}