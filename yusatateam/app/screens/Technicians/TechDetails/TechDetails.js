import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import { StackedBar } from '../../../components/StackedChart/StackedChart';

export default class TechDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
        }
    };

    render() {
        return (
           <View style={styles.container}>
          <StackedBar></StackedBar>
         </View>

        );
    }
}
export { TechDetails }