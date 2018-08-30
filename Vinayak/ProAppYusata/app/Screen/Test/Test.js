import React from 'react';
import { StyleSheet, View,ScrollView,Button} from 'react-native';
import styles from './style';
import { Left, Right,Container, Header, Content, ListItem, CheckBox, Text, Body,List } from 'native-base';
 import {Json} from './Json';
export default class Test extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            isShowingText:300000,
            checked: false
           
        };  
      }
      
     ResultShow()
      {
          
          Result=this.Result+1;
          return Result;
      }
    render() {
        const Result =0;
      return (
     <View style={styles.secondItem}>
        
                    <View style={styles.view}>
                        <Left> <Button title="Start" onPress={ setInterval(() => { this.setState(Time => { return { isShowingText = isShowingText-1000 }}}}/></Left>
                        <Right ><Text style={styles.viewAll}>{this.props.isShowingText}</Text></Right>
                     </View>
                     <ScrollView>
                     <List>
                            <ListItem itemDivider>
                            <Text>{data.results[1].question}</Text>
                            </ListItem>                    
                            <ListItem>
                            <input type='checkbox' checked={this.state.checked} onChange={() => this.ResultShow()}/>
                            <Text>{data.results[1].correct_answer}</Text>
                            </ListItem>
                            <ListItem>
                            <input type='checkbox' checked={this.state.checked} />
                            <Text>{data.results[1].incorrect_answers[0]}</Text>
                            </ListItem>
                            <ListItem>
                            <input type='checkbox' checked={this.state.checked} />
                            <Text>{data.results[1].incorrect_answers[1]}</Text>
                            </ListItem>
                            <ListItem>
                            <input type='checkbox' checked={this.state.checked} />
                            <Text>{data.results[1].incorrect_answers[2]}</Text>
                            </ListItem>
                            <ListItem itemDivider>
                            <Text>{data.results[2].question}</Text>
                            </ListItem>                    
                            <ListItem>
                            <input type='checkbox' checked={this.state.checked} onChange={() => this.ResultShow()}/>
                            <Text>{data.results[2].correct_answer}</Text>
                            </ListItem>
                            <ListItem>
                            <input type='checkbox' checked={this.state.checked} />
                            <Text>{data.results[2].incorrect_answers[0]}</Text>
                            </ListItem>
                            <ListItem>
                            <input type='checkbox' checked={this.state.checked} />
                            <Text>{data.results[2].incorrect_answers[1]}</Text>
                            </ListItem>
                            <ListItem>
                            <input type='checkbox' checked={this.state.checked} />
                            <Text>{data.results[2].incorrect_answers[2]}</Text>
                            </ListItem>
                            <ListItem itemDivider>
                            <Text>{data.results[3].question}</Text>
                            </ListItem>                    
                            <ListItem>
                            <input type='checkbox' checked={this.state.checked} onChange={() => this.ResultShow()}/>
                            <Text>{data.results[3].correct_answer}</Text>
                            </ListItem>
                            <ListItem>
                            <input type='checkbox' checked={this.state.checked} />
                            <Text>{data.results[3].incorrect_answers[0]}</Text>
                            </ListItem>
                            <ListItem>
                            <input type='checkbox' checked={this.state.checked} />
                            <Text>{data.results[3].incorrect_answers[1]}</Text>
                            </ListItem>
                            <ListItem>
                            <input type='checkbox' checked={this.state.checked} />
                            <Text>{data.results[3].incorrect_answers[2]}</Text>
                            </ListItem>
                            <ListItem itemDivider>
                            <Text>{data.results[4].question}</Text>
                            </ListItem>                    
                            <ListItem>
                            <input type='checkbox' checked={this.state.checked} onChange={() => this.ResultShow()}/>
                            <Text>{data.results[4].correct_answer}</Text>
                            </ListItem>
                            <ListItem>
                            <input type='checkbox' checked={this.state.checked} />
                            <Text>{data.results[4].incorrect_answers[0]}</Text>
                            </ListItem>
                            <ListItem>
                            <input type='checkbox' checked={this.state.checked} />
                            <Text>{data.results[4].incorrect_answers[1]}</Text>
                            </ListItem>
                            <ListItem>
                            <input type='checkbox' checked={this.state.checked} />
                            <Text>{data.results[4].incorrect_answers[2]}</Text>
                            </ListItem>
                    </List>
                    <View>
                        <Button title="Submit" onPress={() => this.props.navigation.navigate('TestResult',{Result : {this.Result})/>
                        </View>
                    </ScrollView>
                    </View>
    );
}
}
export {Test}