import React from 'react';
import {
    View,
    Dimensions
} from 'react-native';
import { Text, Radio } from 'native-base';
import PureChart from 'react-native-pure-chart';
import { AppLoading } from 'expo';

import { colors } from '../../styles';
import styles from './Styles';

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
    },
    {
        seriesName: 'Total Sims',
        data: [
            { x: 'Total', y: 500 },
            { x: 'Ordered', y: 200 },
            { x: 'Installed', y: 150 },
            { x: 'Delivered', y: 150 }
        ],
        color: colors.HOMESCREEN.SIMCARD_COLOR
    },
    {
        seriesName: 'Total Jobs',
        data: [
            { x: 'Total', y: 400 },
            { x: 'Completed', y: 120 },
            { x: 'Scheduled', y: 150 },
            { x: 'Pedning', y: 130 }
        ],
        color: colors.HOMESCREEN.JOBSCARD_COLOR
    }
]

export default class Barchart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
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

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }

    onRadioPress(key) {
        const radios = [false, false, false];
        radios[key] = true;
        this.setState({radios: radios, barData: [barValues[key]]});
    }

    render() {

        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View style={styles.container}>

                <View style={styles.first_view}>
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
                        backgroundColor = '#fff'
                        labelColor="rgba(0,0,0,0.5)"
                        customValueRenderer={(index, point) => {
                            return (
                                <Text style={{ textAlign: 'center',color: 'gray' }}>{point.x}</Text>
                            )
                        }}
                    />
                </View>
                
                <View style={styles.second_view}>
                    <View style={styles.radio_view}>
                        <Radio selected={this.state.radios[0]} color="rgba(0,0,0,0.5)"
                            selectedColor={colors.HOMESCREEN.DEVICECARD_COLOR}
                            onPress={()=>this.onRadioPress(0)}
                        />
                        <Text style={[styles.radio_text,{color: 'rgba(0,0,0,0.5)', fontFamily: 'Roboto'}]}>
                            Devices
                        </Text>
                    </View>
                    <View style={styles.radio_view}>
                        <Radio selected={this.state.radios[1]} color="rgba(0,0,0,0.5)"
                            selectedColor={colors.HOMESCREEN.SIMCARD_COLOR}
                            onPress={()=>this.onRadioPress(1)}
                        />
                        <Text style={[styles.radio_text,{color: 'rgba(0,0,0,0.5)', fontFamily: 'Roboto'}]}>
                            Sims
                        </Text>
                    </View>
                    <View style={styles.radio_view}>
                        <Radio selected={this.state.radios[2]} color="rgba(0,0,0,0.5)"
                            selectedColor={colors.HOMESCREEN.JOBSCARD_COLOR}
                            onPress={()=>this.onRadioPress(2)}
                        />
                        <Text style={[styles.radio_text,{color: 'rgba(0,0,0,0.5)', fontFamily: 'Roboto'}]}>
                            Jobs
                        </Text>
                    </View>

                </View>
            </View>
        )
    }
}