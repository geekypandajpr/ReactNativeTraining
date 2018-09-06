import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title, CardItem } from 'native-base';
import {
  StyleSheet,
  View,
  Text,
  CheckBox 
} from 'react-native';
// import { CheckBox } from 'react-native-elements'
import { Card } from 'native-base';
export default class Checkbox extends Component 
{
    constructor(props) {
        super(props)
       
        this.state = {
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        }
      }
  render() {
    return (
    <Card >
        <CardItem><Text style = {{backgroundColor: 'cyan'}}>{this.props.Question}</Text></CardItem>
            <CardItem>
                <CheckBox  
                    value={this.state.checkbox1}
                    onChange={() => this.setState({ checkbox1: !this.state.checkbox1 })}
                />
                <Text>{this.props.Solution1}</Text>
            </CardItem>  

            <CardItem>
                <CheckBox 
                    value={this.state.checkbox2}
                    onChange={() => this.setState({ checkbox2: !this.state.checkbox2 })}
                    />
                <Text>{this.props.Solution2}</Text>
            </CardItem>

            <CardItem>
                <CheckBox  
                    value={this.state.checkbox3}
                    onChange={() => this.setState({ checkbox3: !this.state.checkbox3 })}
                    />
                <Text>{this.props.Solution3}</Text>
            </CardItem>

             <CardItem>
                <CheckBox  
                    value={this.state.checkbox4}
                    onChange={() => this.setState({ checkbox4: !this.state.checkbox4 })}
                    />
                <Text>{this.props.Solution4}</Text>
            </CardItem>

    </Card>
    );
  }
}

export {Checkbox};