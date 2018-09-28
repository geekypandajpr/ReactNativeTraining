import React from 'react';
import {View,Text,Button} from 'react-native';
import styles from './styles';
import {SearchBar} from '../../components';
import {VehicleList}  from '../VehicleList/VehicleList';
export default class ViewVehicleList extends React.Component {
    constructor(){
        super();   
        this.state ={   
          status:false 
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
                 <View style={styles.list}>
                 {
                 this.state.status ? <VehicleList/> : null
                }
                </View>
            </View>
        );
      }
    }
export { ViewVehicleList }