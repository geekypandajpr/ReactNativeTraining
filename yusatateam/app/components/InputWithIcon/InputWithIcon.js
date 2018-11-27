import React from 'react';
import { View } from 'react-native';
import styles from './Styles';
import { Icon, Item, Input, Label } from 'native-base';

export default class InputWithIcon extends React.Component {

    render() {
        return (
            <View style={this.props.inputStyles}>
                <Item floatingLabel>
                    <Icon name={this.props.name} type={this.props.iconType} style={{color:this.props.iconColor}} />
                    <Label style={{color:'#FFFFFF90', fontSize: 15}}>{this.props.placeholder}</Label>
                    <Input
                        //placeholder={this.props.placeholder}
                        style={{color:'#fff', fontSize: 15}}
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
        )
    }
}

export { InputWithIcon }