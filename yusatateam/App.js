import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Permissions } from 'expo';
import Index from './app/index';

EStyleSheet.build({
    $primaryColor: '#0073b7',
    $primaryColorDark: '#004887',
    $primaryColorLight: '#56a1ea',
    $primaryColortext: '#FFFFFF',
    $fontSize: '0.8rem',
});

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasCameraPermission: null,
            cameraperm: null,
        };
    }
    async componentDidMount() {
        this.allowPermission();
    }

    allowPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ cameraperm: status === 'granted' });
        const { cstatus } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({ hasCameraPermission: cstatus === 'granted' });
    }

    render() {
        return (
            <Index />
        );
    }
}