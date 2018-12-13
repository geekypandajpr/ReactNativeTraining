import React from 'react'
import { View, Picker } from 'native-base';

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
            <View style={{
                    borderColor:'#dcdcdc',
                    borderWidth: 1,
                    width:'100%', justifyContent:'center',height:40 }}>
                <Picker
                    mode="dropdown"
                    // style={{width: 100}}
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