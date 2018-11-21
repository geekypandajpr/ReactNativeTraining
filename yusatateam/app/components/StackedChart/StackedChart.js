import React from 'react'
import { View, Text, Dimensions } from 'react-native';
import * as shape from 'd3-shape'
import * as scale from 'd3-scale'
import { StackedBarChart, XAxis, YAxis } from 'react-native-svg-charts';
import styles from './styles';

export default class StackedBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
             data : [
                {   
                    label: 'Mon',
                    Completed: 10,
                    Pending : 5,
                    Scheduled: 4,
                },
                {
                    label: 'Tue',
                    Completed: 12,
                    Pending: 6,
                    Scheduled: 3,
                },
                {   
                    label: 'Wed',
                    Completed: 10,
                    Pending: 3,
                    Scheduled: 9,
                },
                {   
                    label: 'Thur',
                    Completed: 9,
                    Pending: 4,
                    Scheduled: 5,
                },
                {   
                    label: 'Fri',
                    Completed: 12,
                    Pending: 6,
                    Scheduled: 4,
                },
                {   
                    label: 'Sat',
                    Completed: 11,
                    Pending: 5,
                    Scheduled: 6,
                },
                {   
                    label: 'Sun',
                    Completed: 8,
                    Pending: 4,
                    Scheduled: 6,
                },
            ],
            colors : [ '#FD6260', '#B19DFF', '#02B8AB' ],
            keys  :[ 'Completed', 'Pending', 'Scheduled' ]
        }
    
}
    render(){
        return(
            <View style={{ marginTop: 20,flex:1 }}>
                <View style={{ height: 250, flexDirection: 'row',flex:4 }}>
                    <YAxis
                        style={{ width:40 }}
                        data={ StackedBarChart.extractDataPoints(this.state.data, this.state.keys) }
                        contentInset={{ left: 45, right: 25}}
                        svg={{fontSize: 12, fontWeight :'700'}}
                        // scale={scale.scaleBand}
                    />
                    <StackedBarChart
                        style={{ flex: 1}}
                        keys={this.state.keys}
                        colors={this.state.colors}
                        data={this.state.data}
                        showGrid={true}
                        // numberOfTicks={10}
                        spacingInner={0.1}
                        spacingOuter={0.5}
                        contentInset={{ top: 0, bottom: 0 , left: 0, right: 0}}  
                    />
                </View>
                <XAxis
                    style={{marginTop: 10, marginLeft: 40}}
                    data={this.state.data}
                    contentInset={{ top: 30, bottom: 30, }}
                    yAccessor={({index}) => index}
                    formatLabel={(value, index) => { return this.state.data[index].label}}
                    svg={{ fontSize: 10, fill: 'black', fontWeight: '700',}}
                    // numberOfTicks = {8}
                    scale={scale.scaleBand}
                />
                <View style={{ flex:0.5,marginTop:10 }}>
                    <View style={{flex:1,flexDirection:'row', justifyContent:'center'}}>
                        {this.state.keys.map((item, index) => 
                            <View key={index} style={{flex:1,justifyContent:'center',alignItems:'flex-start', flexDirection: 'row'}}>
                                <View style={[styles.Square,{backgroundColor:this.state.colors[index]}]}></View>
                                <Text style={styles.text}>{item}</Text>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        );
    }
}
export { StackedBar }