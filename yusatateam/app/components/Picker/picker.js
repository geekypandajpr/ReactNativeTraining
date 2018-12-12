import React from 'react'
import {Picker} from 'react-native';

export default class Pickers extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            language: "key1"
        };
    }
     
render()
{
    return(
        <Picker
        mode="dropdown"
        // iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
        style={{ height: 50, width: 100 }}
        selectedValue={this.state.language}
        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
      >
        <Picker.Item label={this.props.label1} value={this.props.value1} />
        <Picker.Item label={this.props.label2} value={this.props.value2} />
        <Picker.Item label={this.props.label3} value={this.props.value3} />
        <Picker.Item label={this.props.label4} value={this.props.value4} />
        <Picker.Item label={this.props.label5} value={this.props.value5} />
      </Picker>
    );
}
}
export{Pickers}