import React from 'react';
import {Text,View,Button} from 'native-base';
import Styles from './Styles';
import Questions from '../../Assets/Data/Questions';

export default class Result extends React.Component{
    static navigationOptions = {
        header : null
     };
    render(){
        //const { navigate } = this.props.navigation;
        return(
            <View style={Styles.container}>
                <Text>Your Score : /{Questions.length}</Text>
                <View style={Styles.buttonView}>
                <Button onPress={()=>this.props.navigation.goBack()}
                >
                    <Text>
                        RESTART
                    </Text>
                </Button>
                </View>
            </View>
        );
    }
}

export {Result}