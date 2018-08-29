import React from 'react';
import { AppRoutes } from './routes/index';
import {Details} from './screens/detail';
import {Home} from './screens/home'

export default class Index extends React.Component {
    render() {
        return(
            <Details/>
        )
    }
}