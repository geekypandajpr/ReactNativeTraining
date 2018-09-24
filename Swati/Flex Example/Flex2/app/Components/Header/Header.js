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
                <Header  searchBar rounded hasTabs>
                    <Left>
                        <Button transparent>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
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

