import React,{Component} from 'react';
import {ImageBackground} from 'react-native';
import {Icon,Card,View,Text, CardItem} from 'native-base';
import CardIcon from '../Icon/CardIcon';
import EStyleSheet from 'react-native-extended-stylesheet';
import Styles from './Styles';

const styles=EStyleSheet.create({
    card:{
        height:50,
        width:'100%',
        flexDirection:'column',
         justifyContent: 'space-between',
       backgroundColor:'red'
       //flex:1
    }
})
export default class IconCard extends React.Component{
    render(){
        return(
            <View>
             
                    <Card style={{flexDirection:'row'}}>
                  {/*}  <ImageBackground style={{height:90,width:'99%',backgroundColor:'white',justifyContent: 'space-around',flexDirection:'row'}}
                                      //source={require('../../Assets/Images/backgroundImage1.png')}
                        >*/}
                        <View style={{flex:1.2}}>
                            <CardIcon
                               name={this.props.name}
                               type={this.props.type}
                               style={this.props.style}>
                                
                            </CardIcon>     
                        </View>   
                        <View style={Styles.textView}>                        
                            <Text>
                               {this.props.text}    
                            </Text>
                            <Text>
                               {this.props.text1}    
                            </Text>                            
                        </View>     
                       {/*} </ImageBackground>         */}
                    </Card>
                
            </View>
        );
    }
}