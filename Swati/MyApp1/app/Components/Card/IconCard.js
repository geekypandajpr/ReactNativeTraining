import React,{Component} from 'react';
import {Icon,Card,View,Text, CardItem} from 'native-base';
import CardIcon from '../Icon/CardIcon';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles=EStyleSheet.create({
    card:{
        //height:'50',
//width:'90%',
        flexDirection:'column', justifyContent: 'space-between'
       // backgroundColor:'red'
       //flex:1
    }
})
export default class IconCard extends React.Component{
    render(){
        return(
            <View>
                <Card>
                    <CardItem style={styles.card}>
                        <View style={{flex:0.7}}>
                            <CardIcon
                               name={this.props.name}
                               type={this.props.type}
                               style={this.props.style}>
                                
                            </CardIcon>     
                        </View>   
                        <View style={{flexDirection:'column',alignItems:'flex-end',flex:0.5}}>
                            <Text>
                               {this.props.text}    
                            </Text>
                            <Text>
                               {this.props.text1}    
                            </Text>                            
                        </View>              
                    </CardItem>
                </Card>
            </View>
        );
    }
}