import React from 'react'
import { View,
    Text,
    Dimensions 
} from 'react-native';
import PureChart from 'react-native-pure-chart';
import { StackedBarChart, XAxis } from 'react-native-svg-charts';


const data1 = [ 7, 30, 10, 17, 14, 17,22 ];
const dataWeek = [ 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat','Sun' ]

export default class StackedBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
             data : [
                {   Completed: 10,
                    Pending : 5,
                    Scheduled: 4,
                },
                {   Completed: 12,
                    Pending: 13,
                    Scheduled: 3,
                },
                {   Completed: 10,
                    Pending: 3,
                    Scheduled: 9,
                },
                {   Completed: 9,
                    Pending: 4,
                    Scheduled: 5,
                },
                {   Completed: 12,
                    Pending: 6,
                    Scheduled: 4,
                },
                {   Completed: 11,
                    Pending: 5,
                    Scheduled: 6,
                },
                {   Completed: 8,
                    Pending: 4,
                    Scheduled: 6,
                },
            ],
             colors : [ '#7b4173', '#a55194', '#ce6dbd' ],
             keys  :[ 'Completed', 'Pending', 'Scheduled' ]
        }
    
}
    render(){
        return(
            <View>
            <StackedBarChart
            style={{ height: 200,width:'100%' }}
            keys={this.state.keys}
            colors={this.state.colors}
            data={this.state.data}
            showGrid={true}
            numberOfTicks={10}
            spacingInner={0.1}
            spacingOuter={0.1}
            contentInset={{ top: 0, bottom: 0 , left: 0, right: 0}}
            // valueAccessor ={(index,key)=>{
            //     return(
            //         <Text style={{ textAlign:'center'}}>{index}</Text>
            //     )
            // }}
               
            />
            <XAxis
                style={{ height: 40, paddingTop:10,backgroundColor: 'red' }}
                data={data1}
                formatLabel={(value, index) => dataWeek[ index ]}
                contentInset={{ left: 10, right: 10 }}
            />
            </View>
        );
    }
}
export { StackedBar }