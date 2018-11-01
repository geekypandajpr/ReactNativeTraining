import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Text } from 'native-base';
import PieChart from 'react-native-pie-chart';
import styles from './styles';
import { AppLoading } from 'expo';
import PureChart from 'react-native-pure-chart';

export default class Piechart extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            piedata: [],
            pie_wh: 150,
            series: [],
            sliceColor: []
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

    componentDidMount() {
        this.setState({piedata: this.props.piedata}, function() {
            for(let index in this.state.piedata) {
                this.state.series.push(this.state.piedata[index].value)
                this.state.sliceColor.push(this.state.piedata[index].color)
            }
        });
    }
    
    render() {
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View style={styles.container}>
                <View style={styles.first_view}>
                    <View style={{flex: 1, alignItems:'center'}}>
                        <PieChart
                            chart_wh={ Dimensions.get('window').height*0.24}
                            series={this.props.pieSeries}
                            sliceColor={this.props.pieColors}
                        />
                        {/* <PureChart data={this.props.piedata} type='pie' width={'100%'} height={10}/> */}
                    </View>
                </View>
                <View style={styles.second_view}>
                    { this.props.piedata.map((item,index) => 
                        <View key={index} style={styles.details_view}>
                            <View style={styles.view1}><View style={[styles.square,{backgroundColor: item.color}]}></View></View>
                            <View style={styles.view2}><Text style={styles.text}>{item.label} : {item.value}</Text></View>
                        </View>
                    )}
                    
                </View>


                
            </View>
        );
    }
}

export { Piechart }