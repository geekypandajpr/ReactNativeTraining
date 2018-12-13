import React from 'react';
import { FontAwesome } from '@expo/vector-icons'
import { Content, Container, Form, Item, Input, Label, Icon, View, Text } from 'native-base';

export default class Float extends React.Component {
    render() {
        return (
            <View style={{width: '100%'}}>
                <Item floatingLabel>
                    {/* <Icon name={this.props.name} type={this.props.iconType} style={{color:this.props.iconColor}} /> */}
                    <Label style={{color:'rgba(0,0,0,0.6)', fontSize: 15}}>{this.props.placeholder}</Label>
                    <Input
                        // placeholder={this.props.placeholder}
                        style={{color:'#000', fontSize: 15}}
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