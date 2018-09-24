import React from 'react';
import {
    View
} from 'react-native';
import { Icon } from 'native-base';
import styles from './Styles';
export default class Icons extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Icon name='cloud-outline' type='MaterialCommunityIcons' style={styles.icon_view}></Icon>
            </View>
        )
    }
}
export { Icons } 