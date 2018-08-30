import React from 'react';
import Index from './app/index';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
    $statusBarColor : '#fd9a61',
    $primaryColor : '#fc8e51',
    $iconSize : 20,
    $fontSize : '0.8rem'
});

export default class App extends React.Component {
    render() {
        return (
            <Index />
        )
    }
}