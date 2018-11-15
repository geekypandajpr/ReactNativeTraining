import React from 'react';
import {
    View,
    Dimensions
} from 'react-native';
import { Text, Icon, Radio } from 'native-base';
import styles from './Styles';
import colors from '../../constants/colors';
import PureChart from 'react-native-pure-chart';
export default class Barchart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radios: [true, false, false],
            barData : [
                {
                    seriesName: 'Total Devices',
                    data: [
                        { x: 'Total', y: 300 },
                        { x: 'Ordered', y: 120 },
                        { x: 'Installed', y: 150 },
                        { x: 'Delivered', y: 100 }
                    ],
                    color: colors.HOMESCREEN.DEVICECARD_COLOR
                }
            ]
        }
        this.onRadioPress = this.onRadioPress.bind(this);
    }

    onRadioPress(key) {
        const radios = [false, false, false];
        radios[key] = true;
        if(key=='0')
        {
            const barValues = [
                {
                    seriesName: 'Total Devices',
                    data: [
                        { x: 'Total', y: 300 },
                        { x: 'Ordered', y: 120 },
                        { x: 'Installed', y: 150 },
                        { x: 'Delivered', y: 100 }
                    ],
                    color: colors.HOMESCREEN.DEVICECARD_COLOR
                }
            ]
            this.setState({ radios: radios,barData : barValues });
        }
        if(key=='1')
        {
            const barValues = [
                {
                    seriesName: 'Total Devices',
                    data: [
                        { x: 'Total', y: 500 },
                        { x: 'Ordered', y: 200 },
                        { x: 'Installed', y: 150 },
                        { x: 'Delivered', y: 150 }
                    ],
                    color: colors.HOMESCREEN.SIMCARD_COLOR
                }
            ]
            this.setState({ radios: radios,barData : barValues });
        }
        if(key=='2')
        {
            const barValues = [
                {
                    seriesName: 'Total Devices',
                    data: [
                        { x: 'Total', y: 400 },
                        { x: 'Ordered', y: 120 },
                        { x: 'Installed', y: 150 },
                        { x: 'Delivered', y: 130 }
                    ],
                    color: colors.HOMESCREEN.JOBSCARD_COLOR
                }
            ]
            this.setState({ radios: radios,barData : barValues });
        } 
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
                        height={Dimensions.get('window').height * 0.19}
                        data={this.state.barData}
                        showEvenNumberXaxisLabel={false}
                        showOddNumberXaxisLabel={false}
                        //backgroundColor = 'red'
                        customValueRenderer={(index, point) => {
                            return (
                                <Text style={{ textAlign: 'center' }}>{point.x}</Text>
                            )
                        }}
                    />
                </View>
                <View style={{ flex: 2.5, padding: 5 }}>
                    <View style={styles.radio_view}>
                        <Radio selected={this.state.radios[0]}
                            selectedColor={colors.HOMESCREEN.DEVICECARD_COLOR}
                            onPress={()=>this.onRadioPress(0)}
                        />
                        <Text style={styles.radio_text}>Devices</Text>
                    </View>
                    <View style={styles.radio_view}>
                        <Radio selected={this.state.radios[1]}
                            selectedColor={colors.HOMESCREEN.SIMCARD_COLOR}
                            onPress={()=>this.onRadioPress(1)}
                        />
                        <Text style={styles.radio_text}>Sims</Text>
                    </View>
                    <View style={styles.radio_view}>
                        <Radio selected={this.state.radios[2]}
                            selectedColor={colors.HOMESCREEN.JOBSCARD_COLOR}
                            onPress={()=>this.onRadioPress(2)}
                        />
                        <Text style={styles.radio_text}>Jobs</Text>
                    </View>

                </View>
            </View>
        )
    }
}
export { Barchart }