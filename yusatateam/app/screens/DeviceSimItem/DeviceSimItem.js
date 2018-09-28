import React from 'react';
import {View,TextInput} from 'react-native';
import { Container, Header, Content, Button, Text,Right,Icon } from 'native-base';
import styles from './styles';
import {ViewVehicleList} from '../ViewVehicleList/ViewVehicleList';
export default class DeviceSimItem extends React.Component {
    constructor(){
        super();   
        this.state ={   
          vehicle:'Tata',
          device : 'UNO',
          sim : 'AIRTEL'
        }
      }  
    render() {
        return (
            <View style={styles.container}>
                    <Button block success style={styles.button}>
                    <Text>{ this.state.vehicle}</Text>
                    <Right>
                        <Icon name="arrow-down" />
                    </Right>
                   </Button>
                    <Button block info style={styles.button}>
                        <Text>{ this.state.device}</Text>
                        <Right>
                <Icon name="arrow-down" />
              </Right>
                    </Button>
                    <Button block warning style={styles.button}>
                        <Text>{ this.state.sim}</Text>
                        <Right>
                <Icon name="arrow-down" />
              </Right>
                    </Button>
            </View>
        );
      }
    }
export { DeviceSimItem }