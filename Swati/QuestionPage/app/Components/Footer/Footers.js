import React,{ Component } from 'react';
import {Footer,
        FooterTab,
        Button,
        Text
} from 'native-base';
import {View,
        StyleSheet,
        TouchableOpacity
} from 'react-native';
import Styles from './Styles';


export default class Footers extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Footer>
                    <FooterTab>
                        <Button
                            disabled={this.props.disabled}
                            onPress={this.props.buttonPressed}>
                            <Text style={Styles.textView}>{this.props.title}</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        )
    }
}