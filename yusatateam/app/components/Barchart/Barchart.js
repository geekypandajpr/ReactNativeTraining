import React from 'react';
import {
    View,
    Dimensions
} from 'react-native';
import { Text, Icon } from 'native-base';
import styles from './Styles';
import colors from '../../constants/colors';
import PureChart from 'react-native-pure-chart';

export default class Barchart extends React.Component {
    render() {
        var barData = [
            {
                seriesName: 'Devices',
                data: [
                    {x: 'Total', y: 300},
                    {x: 'Installed', y: 250},
                    {x: 'Ordered', y: 100}
                ],
                color: colors.HOMESCREEN.DEVICECARD_COLOR
            },
            {
                seriesName: 'Sims',
                data: [
                    {x: 'Total', y: 120},
                    {x: 'Installed', y: 200},
                    {x: 'Ordered', y: 100}
                ],
                color: colors.HOMESCREEN.SIMCARD_COLOR
            }
        ]
        return (
            <View style={styles.container}>
                <View style={styles.bar_view}>
                    <PureChart 
                        type='bar'
                        width='100%'
                        height={Dimensions.get('window').height*0.2}
                        data={barData}
                        customValueRenderer={(index, point) => {
                            return (
                              <Text style={{textAlign: 'center'}}>{point.x}</Text>
                            )
                        }}
                    />
                </View>
                <View style={{flex: 3.5, padding: 5}}>
                    
                    <View style={styles.right_view}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', borderLeftColor: 'red', borderLeftWidth:2}}>
                            <Icon name='devices' type='MaterialIcons'
                                style={{fontSize: 20, color: colors.HOMESCREEN.DEVICECARD_COLOR}}>
                            </Icon>
                        </View>
                        <View style={{flex: 2, justifyContent: 'center'}}>
                            <Text style={{fontSize: 15, color: '#000'}}>Devices</Text>
                            {/* <Text style={{fontSize: 12, color: 'gray'}}>Total devices: 200</Text> */}
                        </View>
                    </View>

                     <View style={styles.right_view}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name='sim' type='MaterialCommunityIcons'
                                style={{fontSize: 20, color: colors.HOMESCREEN.SIMCARD_COLOR}}>
                            </Icon>
                        </View>
                        <View style={{flex: 2, justifyContent: 'center'}}>
                            <Text style={{fontSize: 15, color: '#000'}}>Sims</Text>
                            {/* <Text style={{fontSize: 12, color: 'gray'}}>Total devices: 200</Text> */}
                        </View>
                    </View>

                     <View style={styles.right_view}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name='schedule' type='MaterialIcons'
                                style={{fontSize: 20, color: colors.HOMESCREEN.JOBSCARD_COLOR}}>
                            </Icon>
                        </View>
                        <View style={{flex: 2, justifyContent: 'center'}}>
                            <Text style={{fontSize: 15, color: '#000'}}>Jobs</Text>
                            {/* <Text style={{fontSize: 12, color: 'gray'}}>Total devices: 200</Text> */}
                        </View>
                    </View>
                    
                </View>
                {/* <View style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        <Text style={[styles.text1, {color: colors.HOMESCREEN.DEVICECARD_COLOR}]}>Total Devices</Text>
                        <Text style={styles.text2}>1000</Text>
                        <Text style={[styles.text1, {color:colors.HOMESCREEN.SIMCARD_COLOR}]}>Total Sims</Text>
                        <Text style={styles.text2}>4562</Text>
                    </View>                
                </View> */}
            </View>
        )
    }
}
export { Barchart }
