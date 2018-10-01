import React from 'react';
import {View,Text,Button,ScrollView} from 'react-native';
import styles from './styles';
import {SearchBar} from '../../component/SearchBar';
import {VehicleList}  from '../VehicleList'
export default class ViewVehicleList extends React.Component {
    constructor(){
        super();   
        this.state ={   
          status:true 
        }
      }  
    ShowHideTextComponentView = () =>{    
      if(this.state.status == true)
      {
        this.setState({status: false})
      }
      else
      {
        this.setState({status: true})
      }
    }
    render() {
        return (
            <View  style={styles.container}>
            <View style={styles.search}>
                 <SearchBar click={this.ShowHideTextComponentView} />
                 </View>
                 <ScrollView style={styles.list}>
                 {
                 this.state.status ? <VehicleList/> : null
                }
                </ScrollView>
            </View>
        );
      }
    }
export { ViewVehicleList }