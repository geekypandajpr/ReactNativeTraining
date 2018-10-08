import React from 'react';
import { View } from 'react-native';
import styles from './Styles';
import { Icon, Item, Input, Label } from 'native-base';

export default class InputWithIcon extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Item floatingLabel>
                    <Icon active name={this.props.name} style={styles.icon} />
                    <Label>{this.props.placeholder}</Label>
                    <Input
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