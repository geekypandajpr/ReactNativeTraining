import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';
// import PropTypes from 'prop-types';
import { Icon } from 'native-base';

const getIcon = (type, active) => {
    let icn;
    switch (type) {
    case 'Daily':
        icn = "Today's";
        break;
    case 'Weekly':
        icn = 'Week';
        break;
    case 'Monthly':
        icn = 'Month';
        break;
    }
    return icn;
};

const Buttons = props => {
    return (
        <View>
            <TouchableOpacity
                onPress={props.onPress}
                style={styles.buttonStyle} >
                <Text name={props.icon} type={props.type} style={styles.buttonText}>{getIcon(props.type, props.active)}</Text>
            </TouchableOpacity>
        </View>
    );
};

// Buttons.propTypes = {
//     type: PropTypes.string,
//     active: PropTypes.bool,
//     onPress: PropTypes.func
// };

// Buttons.defaultProps = {
//     active: false
// };

export default Buttons;