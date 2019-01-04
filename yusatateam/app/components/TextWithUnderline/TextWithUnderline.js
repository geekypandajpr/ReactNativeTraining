import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AppLoading } from 'expo';

export default class UnderlineText extends React.Component {
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
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View style={{ flex: 1 }}>
                {this.props.upperView ?
                    <View style={{ width: '100%', flexDirection: 'row' }}>
                        <Text style={[styles.label,{fontFamily: 'Roboto'}]}>{this.props.name}</Text>
                        {this.props.isMandatory ?
                            <Text style={[styles.star,{fontFamily: 'Roboto'}]}>*</Text>
                            : null}
                    </View>
                    : null
                }

                <TouchableOpacity onPress={this.props.onpress}>
                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                        <View style={{ justifyContent: 'flex-start', flex: 1.5 }}>
                            <Text style={[styles.value, {fontFamily: 'Roboto'}]}>{this.props.value}</Text>
                        </View>

                        <View style={{ justifyContent: 'flex-end', flex: 0.1 }}>
                            <Ionicons name='ios-arrow-forward' size={20} color='gray' />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ borderBottomColor: '#dcdcdc', borderBottomWidth: 1, marginTop: 7, }} />
            </View>
        );
    }
}

export { UnderlineText }

const styles = EStyleSheet.create({
    label: {
        fontSize: '1rem',
        color: 'rgba(0,0,0,0.6)'
    },
    star: {
        marginTop: 0,
        color: 'red',
        marginLeft: 5,
        fontSize: '1rem'
    },
    value: {
        fontSize: '0.9rem',
        color: '#000'
    }
})