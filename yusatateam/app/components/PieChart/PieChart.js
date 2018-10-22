import React, { Component } from 'react';
import {ScrollView , StatusBar, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
 import styles from './styles'
 
export default class PieChart extends Component {
  constructor() {
    super();
    this.state = {
        data: [
            {
                 No : 10,
                ORDER: 'EVKGLI',
                ICCID: 'ICCID1',
                MSIDN: 'MSIDN1',
                Provider: 'Tata Docomo',
                Mobile: '09085-53379',
                status: 'Activate'
            },
            {
                No : 14,
                ORDER: 'JSCKBK',
                ICCID: 'ICCID2',
                MSIDN: 'MSIDN2',
                Provider: 'AIRTEL',
                Mobile: '09085-45090',
                status: 'Deactivate'
            },
            {
                No : 8,
                ORDER: 'UYGEYUJA',
                ICCID: 'ICCID3',
                MSIDN: 'MSIDN3',
                Provider: 'AIRCEL',
                Mobile: '09085-65879',
                status: 'Activate'
            },
            {
                No : 105,
                ORDER: 'HAVCMSV',
                ICCID: 'ICCID4',
                MSIDN: 'MSIDN4',
                Provider: 'IDEA',
                Mobile: '09085-53379',
                status: 'Deactivate'
            },
            {
              No : 15,
              ORDER: 'HAVCMSV',
              ICCID: 'ICCID4',
              MSIDN: 'MSIDN4',
              Provider: 'IDEA',
              Mobile: '09085-53379',
              status: 'Deactivate'
          },
            

        ],
        items: [],
        list: '',
        status: 'Activate'
    }
    this.arrayholder = [];
  }

  componentWillMount() {
    for(var i  in this.state.data)
    {
    this.arrayholder.push(this.state.data[i].No)
    }
}
  render() {
    const chart_wh = 250
    const series = this.arrayholder;
   
    const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']
 
    return (
      <ScrollView style={{flex :1}}>
      <View style={{flex: 1,backgroundColor :'lightgrey',borderRadius : 50,margin : 20}}>
        <View style={styles.container}>
          <StatusBar
            hidden={true}
          />
          <Text style={styles.title}>Basic</Text>
          <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
          />
        </View>
        <View style={{flex :1,flexDirection : 'row',marginLeft : 50,marginTop : 10,marginBottom :10}}>
                <View style={{backgroundColor : '#F44336',height : 20,flex : 0.2}}></View>
                <Text  style={{flex : .9}}>{this.arrayholder[0]}</Text>
                <View style={{backgroundColor : '#2196F3',height : 20,flex : 0.2}}></View>
                <Text  style={{flex : .9}}>{this.arrayholder[1]}</Text>
                <View style={{backgroundColor : '#FFEB3B',height : 20,flex : 0.2}}></View>
                <Text  style={{flex : .9}}>{this.arrayholder[2]}</Text>
                <View style={{backgroundColor : '#4CAF50',height : 20,flex : 0.2}}></View>
                <Text  style={{flex : .9}}>{this.arrayholder[3]}</Text>
                <View style={{backgroundColor : '#FF9800',height : 20,flex : 0.2}}></View>
                <Text  style={{flex : .9}}>{this.arrayholder[4]}</Text>
            </View>
      </View>
      </ScrollView>
    );
  }
}
export {PieChart}