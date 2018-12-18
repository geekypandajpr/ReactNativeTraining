import React from 'react';
import { Item, Input, Label, View, } from 'native-base';
import { Text } from 'react-native'

export default class Float extends React.Component {
    render() {
        return (
            <View style={{ width: '100%' }}>
                <Item floatingLabel>
                    {/* <Icon name={this.props.name} type={this.props.iconType} style={{color:this.props.iconColor}} /> */}
                    <Label style={{ color: 'rgba(0,0,0,0.6)', fontSize: 15, }}>{this.props.placeholder}
                        {this.props.isMandatory ?
                            <Text style={{ marginTop: 0, color: 'red', fontSize: 15, marginLeft: 3 }}>*</Text>
                            : null}
                    </Label>

                    <Input
                        // placeholder={this.props.placeholder}
                        style={{ color: '#000', fontSize: 15 }}
                        value={this.props.value}
                        keyboardType={this.props.keyboardType}
                        returnKeyType={this.props.returnKeyType}
                        getRef={this.props.getRef}
                        blurOnSubmit={this.props.blurOnSubmit}
                        onChangeText={this.props.onChangeText}
                        secureTextEntry={this.props.secureTextEntry}
                        onSubmitEditing={this.props.onSubmitEditing}
                    />
                </Item>
            </View>
        );
    }
}
export { Float }