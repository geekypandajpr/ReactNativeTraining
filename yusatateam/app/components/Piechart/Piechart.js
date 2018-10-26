import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import PieChart from 'react-native-pie-chart';
import styles from './styles';
import { AppLoading } from 'expo';

export default class Piechart extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }
    
    render() {
        const chart_wh = 150;
        var PieData = [];
        const sliceColor = this.props.sliceColor;
        const series = this.props.series;
        const details = this.props.details;

        for (let i = 0; i < details.length; i++) {
            PieData.push({data: details[i], color: sliceColor[i]});
        }

        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View style={styles.container}>
                <View style={styles.first_view}>
                    {/* <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                        <View><Text style={{fontSize: 20, fontWeight:'900', color: 'gray'}}>{this.props.heading}</Text></View>
                    </View> */}
                    <View style={{flex: 1, alignItems:'center'}}>
                        <PieChart
                            chart_wh={chart_wh}
                            series={series}
                            sliceColor={sliceColor}
                        />
                    </View>
                </View>
                <View style={styles.second_view}>
                    { PieData.map((item,index) => 
                        <View key={index} style={styles.details_view}>
                            <View style={styles.view1}><View style={[styles.square,{backgroundColor: item.color}]}></View></View>
                            <View style={styles.view2}><Text style={styles.text}>{item.data}</Text></View>
                        </View>
                    )}
                    
                </View>
            </View>
        );
    }
}

export { Piechart }