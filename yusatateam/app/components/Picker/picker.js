import React from 'react'
import { Picker,View } from 'react-native';

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
            <View style={{borderColor:'#000',borderWidth:0.5}}>
                <Picker 
                style={{height: 25, width: 216}}
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