import React from 'react'
import { View, Text, Dimensions } from 'react-native';
import * as shape from 'd3-shape'
import * as scale from 'd3-scale'
import { StackedBarChart, XAxis, YAxis } from 'react-native-svg-charts';

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
                    label: 'Tues',
                    Completed: 12,
                    Pending: 13,
                    Scheduled: 3,
                },
                {   
                    label: 'Wed',
                    Completed: 10,
                    Pending: 3,
                    Scheduled: 9,
                },
                {   
                    label: 'Thurs',
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
            colors : [ '#007aff', '#d9534f', '#5cb85c' ],
            keys  :[ 'Completed', 'Pending', 'Scheduled' ]
        }
    
}
    render(){
        return(
            <View style={{ marginTop: 20 }}>
                <View style={{ height: 250, flexDirection: 'row' }}>
                    <YAxis
                        style={{ width:40 }}
                        data={ StackedBarChart.extractDataPoints(this.state.data, this.state.keys) }
                        contentInset={{ left: 50, right: 30}}
                        svg={{fontSize: 8, fill: '#000'}}
                        // scale={scale.scaleBand}
                    />
                    <StackedBarChart
                        style={{ flex: 1 }}
                        keys={this.state.keys}
                        colors={this.state.colors}
                        data={this.state.data}
                        showGrid={true}
                        // numberOfTicks={10}
                        spacingInner={0.1}
                        spacingOuter={0.1}
                        contentInset={{ top: 0, bottom: 0 , left: 0, right: 0}}  
                    />
                </View>
            
                <XAxis
                    style={{marginTop: 10, marginLeft: 40}}
                    data={this.state.data}
                    contentInset={{ top: 30, bottom: 30, }}
                    yAccessor={({index}) => index}
                    formatLabel={(value, index) => { return this.state.data[index].label}}
                    svg={{ fontSize: 10, fill: 'black'}}
                    // numberOfTicks = {8}
                    scale={scale.scaleBand}
                />
            </View>
        );
    }
}
export { StackedBar }