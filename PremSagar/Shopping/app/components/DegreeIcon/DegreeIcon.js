import React from 'react';
import {
    View
} from 'native-base';
import styles from './Styles';

export default class DegreeIcon extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.circle}></View>
        )
    }
}

export { DegreeIcon }