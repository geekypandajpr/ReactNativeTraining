import React from 'react'
import { View,
    Text,
    Dimensions 
} from 'react-native';
import PureChart from 'react-native-pure-chart';
import { StackedBarChart } from 'react-native-svg-charts';

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
            <StackedBarChart
            style={{ height: 200,width:'80%' }}
            keys={this.state.keys}
            colors={this.state.colors}
            data={this.state.data}
            showGrid={false}
            contentInset={{ top: 30, bottom: 30 }}
            // valueAccessor ={(index,key)=>{
            //     return(
            //         <Text style={{ textAlign:'center'}}>{index}</Text>
            //     )
            // }}
               
        />
        );
    }
}
export { StackedBar }