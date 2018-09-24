import React from 'react';
import 'es6-symbol/implement';
import { FlexDemoNew } from "./app/screens/FlexDemoNew";

import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({});

export default class App extends React.Component {
    render() {
        return (
           <FlexDemoNew />
        )
    }
}
