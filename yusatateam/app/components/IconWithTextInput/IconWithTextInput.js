import React from 'react';
import { View } from 'react-native';
import styles from './Styles';
import { Icon, Item, Input, Label } from 'native-base';

export default class IconWithTextInput extends React.Component {

    render() {
        return (
            <View style={styles.credentialView}>
                <Item floatingLabel>
                    <Icon active name={this.props.name} style={styles.icon} />
                    <Label>{this.props.placeholder}</Label>
                    <Input
                        value={this.props.value}
                        keyboardType={this.props.keyboardTypes}
                        returnKeyType={this.props.returnKeyTypes}
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

export { IconWithTextInput }