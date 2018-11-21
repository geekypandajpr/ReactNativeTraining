import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Index from './app/index';

EStyleSheet.build({
    $primaryColor: '#0073b7',
    $primaryColorDark: '#004887',
    $primaryColorLight: '#56a1ea',
    $primaryColortext: '#FFFFFF',
    $fontSize: '0.8rem',
});

export default class App extends React.Component {
    render() {
        return (
            <Index/>
        );
    }
}