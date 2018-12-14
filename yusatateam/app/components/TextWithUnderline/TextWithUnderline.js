import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';


export default class UnderlineText extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={{ width: '100%', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 15, color: 'gray', }}>{this.props.name}</Text>
                    <Text style={{ marginTop: 0, color: 'red', marginLeft: 5, fontSize: 15 }}>{this.props.icon}</Text>
                </View>
                {/* <FontAwesome name={ this.props.icon} size={7} color="red" */}

                <TouchableOpacity onPress={this.props.onpress}>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ justifyContent: 'flex-start', flex: 1.5 }}>
                            <Text style={{ fontSize: 17, color: 'rgb(56,64,64)' }}>{this.props.value}</Text>
                        </View>

                        <View style={{ justifyContent: 'flex-end', flex: 0.1 }}>
                            <Ionicons name='ios-arrow-forward' size={20} color='rgb(56,64,64)' />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 7, }} />
            </View>
        );
    }
}
export { UnderlineText }