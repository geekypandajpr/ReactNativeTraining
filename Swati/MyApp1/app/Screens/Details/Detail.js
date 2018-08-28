import React from 'react';
import Index from '../../Components/Header/Index';
//import { View } from 'native-base';
import { StyleSheet, Text, View,ImageBackground,StatusBar,ScrollView } from 'react-native';

export default class Detail extends React.Component{
    render(){
        return(
            <View>
                <StatusBar />
                <Index title='Detail Screen' />
            </View>
        );
    }
}

export {Detail}