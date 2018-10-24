import React, { Component } from 'react';
import {
    ScrollView, 
    Text,
    View,
    StyleSheet
} from 'react-native';
import PieChart from 'react-native-pie-chart';
import styles from './styles';

export default class Piechart extends Component {
    
    render() {
        const chart_wh = 190;
        var PieData = [];
        const sliceColor = this.props.sliceColor;
        const series = this.props.series;
        const details = this.props.details;

        for (let i = 0; i < details.length; i++) {
            PieData.push({data: details[i], color: sliceColor[i]});
        }

        return (
            <View style={styles.container}>
                <View style={styles.first_view}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                        <View><Text style={{fontSize: 20, fontWeight:'900'}}>{this.props.heading}</Text></View>
                    </View>
                    <View style={{flex: 6, alignItems:'center'}}>
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
                            <View style={styles.view2}><Text>{item.data}</Text></View>
                        </View>
                    )}
                    
                </View>
            </View>
        );
    }
}
export { Piechart }