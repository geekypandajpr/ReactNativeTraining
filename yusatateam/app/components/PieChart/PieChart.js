import React, { Component } from 'react';
import {ScrollView , StatusBar, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
 import styles from './styles'
 
export default class Piechart extends Component {
  arrayholder = [2000,200,100,500,1000];
    arrayName = ['Total','Installed','TestedOk','ReadyToUse','Defective'];
  
  render() {
    const chart_wh = 250
    const series = this.arrayholder;
   
    const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']
    var PieData = [];

    for(let i = 0; i < this.arrayholder.length; i++){
  
      PieData.push(
        <View style={{paddingLeft :25}} key = {i}>
           <View style={{backgroundColor : sliceColor[i],height : 20,flex : 0.2}}></View>
                <Text  style={{flex : .9}}>{this.arrayholder[i]}</Text>
        </View>
      )
    }
    var Data = [];

    for(let i = 0; i < this.arrayName.length; i++){
  
      Data.push(
        <View style={{paddingBottom :25,paddingRight :5}} key = {i}>
           <View style={{backgroundColor : sliceColor[i],height : 20}}>
           <Text>{this.arrayName[i]}</Text>
           </View>
                
        </View>
      )
    }
    return (
      <ScrollView style={{flex :1}}>
      <View style={{flex: 1,backgroundColor :'lightgrey',borderRadius : 10,margin : 10}}>
        <View style={styles.container}>
          <StatusBar
            hidden={true}
          />
          <Text style={styles.title}>Devices</Text>
          <View style={{flex :10,flexDirection : 'row'}}>
                <View style={{flex:7}}>
              <PieChart
                chart_wh={chart_wh}
                series={series}
                sliceColor={sliceColor}
                style={{height :10}}
              />
              </View>
                <View  style={{flex:3}}>
                  {Data}
                </View>
          </View>
        </View>
        <View style={{flex :1,flexDirection : 'row',marginTop : 10,marginBottom :10}}>
               
               {PieData}
            </View>
      </View>
     
      </ScrollView>
    );
  }
}
export {Piechart}