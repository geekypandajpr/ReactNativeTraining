import React, { Component } from "react";
import {Container,
        Header,
        Title,
        Button,
        Content,
        Icon,
        Right,
        Left,
        Text, 
        Body
} from 'native-base';
import {View,
        StyleSheet,
        TouchableOpacity
} from 'react-native';
//import colors from '../Utils/color';
//import {StackNavigator,TabNavigator} from 'react-navigation';
    
   
export default class Headers extends Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        return (
            <View >
                <Header >
                    <Left>
                        <Button transparent>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.props.title}</Title>
                    </Body>
                    <Right>
                       <Button
                           transparent>
                           <Icon name='power'/>
                       </Button>
                        
                    </Right>
                </Header>
            </View>
        )
    }
}

