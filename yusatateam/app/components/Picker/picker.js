import React from 'react'
import { Picker } from 'react-native';

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
            <Picker
                mode="dropdown"
                // iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                style={{ height: 50, width: 100 }}
                selectedValue={this.state.language}
                onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                {dropdown.map((item, index) => 
                    <Picker.Item key={index} label={item.label} value={item.value} />
                )}
                
        </Picker>
        );
    }
}

export{Pickers}