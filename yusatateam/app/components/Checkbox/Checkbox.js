import React from 'react';
import { CheckBox } from 'native-base';
import styles from './Styles';
import colors from '../../constants/colors';

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checkbox: false }
    }
    render() {
        return (
            <CheckBox checked={this.state.checkbox}
                color={colors.HEADER_COLOR}
                onPress={() => {this.setState({ checkbox: !this.state.checkbox })}}
            />
        )
    }
}