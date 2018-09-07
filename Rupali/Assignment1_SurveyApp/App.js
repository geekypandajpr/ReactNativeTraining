import React from 'react';
import 'es6-symbol/implement';
import { AppRoutes } from './Routes';
export default class App extends React.Component {
    render() {
        return (
             <AppRoutes />
        )
    }
}