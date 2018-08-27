import React,{Component} from 'react';
import {Icon,Card,View,Text, CardItem} from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles=EStyleSheet.create({
    card:{
        height:'20%',
        width:'10%',
       // backgroundColor:'red'
    }
})

export default class CardIcon extends React.Component{
    render(){
        return(
            <View >
                <Card style={styles.card}>
                    <CardItem style={this.props.style}>
                        <View>
                            <Icon
                               name={this.props.name}
                               type={this.props.type}
                               style={{color:'#fff'}}>
                                
                            </Icon>     
                        </View>                 
                    </CardItem>
                </Card>
            </View>
        );
    }
}