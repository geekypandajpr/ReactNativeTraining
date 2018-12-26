import React from 'react';
import { Item, Input, Label, View, } from 'native-base';
import { Text } from 'react-native';
import EStyleSheet, { create } from 'react-native-extended-stylesheet';

export default class Float extends React.Component {
    render() {
        return (
            <View style={{ width: '100%' }}>
                <Item floatingLabel>
                    {/* <Icon name={this.props.name} type={this.props.iconType} style={{color:this.props.iconColor}} /> */}
                    <Label style={styles.label}>{this.props.placeholder}
                        {this.props.isMandatory ?
                            <Text style={styles.star}>*</Text>
                            : null}
                    </Label>

                    <Input
                        // placeholder={this.props.placeholder}
                        style={styles.value}
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

const styles = EStyleSheet.create({
    label: {
        color: 'rgba(0,0,0,0.6)',
        fontSize: '0.9rem', 
    },
    star: {
        marginTop: 0,
        color: 'red',
        marginLeft: 5,
        fontSize: '1rem' 
    },
    value: {
        color: '#000',
        fontSize: '0.9rem'  
    }
})

export { Float }