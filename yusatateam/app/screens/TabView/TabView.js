import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import Tab1 from './tabOne';
import Tab5 from './tabFive';
import styles from './styles';
import {VehicleList} from '../VehicleList';
import {DeviceSimItem} from '../DeviceSimItem';
import { AppLoading } from 'expo';
​export default class TabView extends Component {
    constructor(){
        super();   
        this.state ={   
          isLoading: true
        }
      } ;
      async componentWillMount(){
        await Expo.Font.loadAsync({
            Roboto:require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium:require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    };

    render() {
        return (
            this.state.isLoading === true ? <AppLoading /> :
      <View>
           
            <Tabs renderTabBar={()=> <ScrollableTab />}>
            <Tab heading="Tab1">
                <VehicleList />
            </Tab>
            <Tab heading="Tab2">
                <DeviceSimItem />
            </Tab>
            <Tab heading="Tab3">
                <Tab3 />
            </Tab>
            <Tab heading="Tab4">
                <VehicleList />
            </Tab>
            <Tab heading="Tab5">
                <Tab5 />
            </Tab>
            </Tabs>
      </View>
    );
  }
}
export { TabView }