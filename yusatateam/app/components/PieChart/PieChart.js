import React, { Component } from 'react';
import {
    ScrollView, 
    Text,
    View,
    StyleSheet
} from 'react-native';
import PieChart from 'react-native-pie-chart';
import styles from './styles'

export default class Piechart extends Component {
    render() {
        const details = ['Total (2000)', 'Installed (200)', 'TestedOk (100)', 'ReadyToUse (500)', 'Defective (1000)'];
        const chart_wh = 190
        const series = [2000, 400, 700, 500, 400];
        const sliceColor = ['#31A9B8', '#84e184', '#5BC8AC', '#F2C059', '#F98866']
        var PieData = [];

        for (let i = 0; i < this.props.details.length; i++) {
            PieData.push({data: this.props.details[i], color: this.props.sliceColor[i]});
        }

        return (
            <View style={styles.container}>
                <View style={styles.first_view}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                        <View><Text style={{fontSize: 20, fontWeight:'900'}}>Device</Text></View>
                    </View>
                    <View style={{flex: 6, alignItems:'center'}}>
                        <PieChart
                            chart_wh={chart_wh}
                            series={this.props.series}
                            sliceColor={this.props.sliceColor}
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