import React from 'react';
import 'es6-symbol/implement';
import { Product } from './app/screens/Product';
import {AppRoutes} from './Routes/index';
export default class App extends React.Component {
    render() {
        return (
           <AppRoutes />
        )
    }
}