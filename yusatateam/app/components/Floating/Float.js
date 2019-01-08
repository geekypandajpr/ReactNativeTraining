import React from 'react';
import { Item, Input, Label, View, Icon } from 'native-base';
import { Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AppLoading } from 'expo';

export default class Float extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
        }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false });
    }

    render() {
        const { isIcon, iconName, iconType, iconColor } = this.props;

        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View style={{ width: '100%' }}>
                <Item floatingLabel>
                    {/* {isIcon ? 
                        <Icon name={iconName} type={iconType} style={{color: iconColor}} />
                        : null
                    } */}
                    <Label style={[styles.label,{fontFamily: 'Roboto'}]}>{this.props.placeholder}
                        {this.props.isMandatory ?
                            <Text style={[styles.star,{fontFamily: 'Roboto'}]}>*</Text>
                            : null}
                    </Label>

                    <Input
                        // placeholder={this.props.placeholder}
                        style={[styles.value, {fontFamily: 'Roboto'}]}
                        value={this.props.value}
                        keyboardType={this.props.keyboardType}
                        returnKeyType={this.props.returnKeyType}
                        getRef={this.props.getRef}
                        blurOnSubmit={this.props.blurOnSubmit}
                        onChangeText={this.props.onChangeText}
                        secureTextEntry={this.props.secureTextEntry}
                        onSubmitEditing={this.props.onSubmitEditing}
                        onFocus={this.props.onFocus}
                        onBlur={this.props.onBlur}
                    />
                    <Icon name={this.props.rightIcon}
                        onPress={this.props.rightIconPress}
                        type={this.props.rightIconType}
                        style={{fontSize: 24, color:'gray'}} />
                </Item>
                
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    label: {
        color: 'gray',
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