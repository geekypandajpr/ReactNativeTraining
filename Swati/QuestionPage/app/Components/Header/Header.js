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
import Styles from "./Styles";
//import colors from '../Utils/color';
//import {StackNavigator,TabNavigator} from 'react-navigation';
    
   
export default class Headers extends Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        return (
            <View >
                <Header style={Styles.headerBackground}>
                    <Left>
                        
                    </Left>
                    <Body>
                        <Button onPress={()=>{this.props.leftButtonPress}} title='START'>
                           
                        </Button>
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