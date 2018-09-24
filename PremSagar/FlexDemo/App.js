import React from 'react';
import Index from './app/index';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({});

export default class App extends React.Component {
    render() {
        return(
            <Index/>
        )
    }
}