import React from 'react';
import {
    View,
    Dimensions
} from 'react-native';
import { Text, Icon, Radio } from 'native-base';
import styles from './Styles';
import colors from '../../constants/colors';
import PureChart from 'react-native-pure-chart';


const barData = [
    {
        seriesName: 'Total Devices',
        data: [
            {x: 'Total', y: 300},
            {x: 'Ordered', y: 120},
            {x: 'Installed', y: 150},
            {x: 'Delivered', y: 100}
        ],
        color: colors.HOMESCREEN.DEVICECARD_COLOR
    }
]

export default class Barchart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        return (
            <View style={styles.container}>
                <View style={styles.bar_view}>
                    <PureChart 
                        type='bar'
                        width={'100%'}
                        defaultColumnWidth={20}
                        defaultColumnMargin={30}
                        numberOfYAxisGuideLine={5}
                        height={Dimensions.get('window').height*0.19}
                        data={barData}
                        showEvenNumberXaxisLabel = {false}
                        showOddNumberXaxisLabel = {false}
                        //backgroundColor = 'red'
                        customValueRenderer={(index, point) => {
                            return (
                              <Text style={{textAlign: 'center'}}>{point.x}</Text>
                            )
                        }}
                    />
                </View>
                <View style={{flex: 2.5, padding: 5}}>
                    <View style={styles.radio_view}>
                        <Radio selected={true} />
                        <Text style={styles.radio_text}>Devices</Text>
                    </View>
                    <View style={styles.radio_view}>
                        <Radio selected={false} />
                        <Text style={styles.radio_text}>Sims</Text>
                    </View>
                    <View style={styles.radio_view}>
                        <Radio selected={false} />
                        <Text style={styles.radio_text}>Jobs</Text>
                    </View>
                    
                </View>
            </View>
        )
    }
}
export { Barchart }