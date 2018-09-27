import React from 'react';
import Index from './app/index';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build({
    $statusBarColor: '#2471A3',
    $headerColor: '#1ABC9C',
    $fontSize: '0.8rem'

});

export default class App extends React.Component {
    render() {
        return (
            <Index />
        );
    }
}