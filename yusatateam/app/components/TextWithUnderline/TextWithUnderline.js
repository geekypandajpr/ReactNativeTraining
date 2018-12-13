import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default class UnderlineText extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
        }
    }
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{ width: '100%',marginBottom: 5}}>
                    <Text style={{fontSize: 15,color: 'gray'}}>{this.props.name}</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:5}}>
                    <View style={{ justifyContent:'flex-start',flex:1.5}}>
                        <Text style={{fontSize: 17,color: 'rgb(56,64,64)'}}>{this.props.value}</Text>
                    </View>
                    
                        <View style={{justifyContent:'flex-end',flex:0.1}}>
                            <TouchableOpacity onPress={this.props.onpress}>
                                <Ionicons name={this.props.iconName} size={20} color='rgb(56,64,64)' />
                            </TouchableOpacity>
                        </View>
                    
                </View>
                <View style={{borderBottomColor: 'gray',borderBottomWidth: 1,marginTop:7,}}/>
            </View>
        );
    }
}
export {UnderlineText}