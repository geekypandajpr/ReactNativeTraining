import React from 'react'
import { Picker,View,Dimensions } from 'react-native';

export default class Pickers extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            language: "key1"
        };
    }
     
    render() {
        const dropdown = this.props.dropdown
        return(
            <View style={{borderColor:'#000',borderWidth:0.5,width:'80%',justifyContent:'center',height:30,marginTop:3}}>
                <Picker 
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    {dropdown.map((item, index) => 
                        <Picker.Item key={index} label={item.label} value={item.value} />
                    )}
                </Picker>
            </View>
        );
    }
}

export{Pickers}