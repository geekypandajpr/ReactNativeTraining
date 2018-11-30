import React from 'react'
import { View, Text, Dimensions } from 'react-native';
import * as shape from 'd3-shape'
import * as scale from 'd3-scale'
import { StackedBarChart, XAxis, YAxis } from 'react-native-svg-charts';

import styles from './styles';

export default class StackedBar extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        const { data, colors,keys } = this.props;
        const value = [25,21,22,18,4,8,0,-1]
        return(
            <View style={{ marginTop: 20,flex:1 }}>
                <View style={{ height: 200, flexDirection: 'row',flex:4 }}>
                    <YAxis
                        style={{ width:30 }}
                        data={value}
                        contentInset={{ left: 70, }}
                        svg={{fontSize: 12, fontWeight :'700'}}
                        // scale={scale.scaleBand}
                    />
                    <StackedBarChart
                        style={{ flex: 1}}
                        keys={keys}
                        colors={colors}
                        data={data}
                        showGrid={true}
                        // numberOfTicks={10}
                        spacingInner={0.1}
                        spacingOuter={0.3}
                        contentInset={{ top: 0, bottom: 0 , left: 0, right: 0}}  
                    />
                </View>
                <XAxis
                    style={{marginTop: 10, marginLeft: 35}}
                    data={data}
                    contentInset={{ top: 30, bottom: 30, }}
                    yAccessor={({index}) => index}
                    formatLabel={(value, index) => { return data[index].label}}
                    svg={{ fontSize: 10, fill: 'black', fontWeight: '700',}}
                    // numberOfTicks = {8}
                    scale={scale.scaleBand}
                />
                {/* <View style={{ flex:0.5,marginTop:10 }}>
                    <View style={{flex:1,flexDirection:'row', justifyContent:'center'}}>
                        {this.state.keys.map((item, index) => 
                            <View key={index} style={{flex:1,justifyContent:'center',alignItems:'flex-start', flexDirection: 'row'}}>
                                <View style={[styles.Square,{backgroundColor:this.state.colors[index]}]}></View>
                                <Text style={styles.text}>{item}</Text>
                            </View>
                        )}
                    </View>
                </View> */}
            </View>
        );
    }
}
export { StackedBar }