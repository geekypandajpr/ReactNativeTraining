import React from 'react';
import {View,TextInput} from 'react-native';
import { Container, Header, Content, Button, Text,Right,Icon } from 'native-base';
import styles from './styles';
import { AppLoading } from 'expo';
import {ViewVehicleList} from '../ViewVehicleList/ViewVehicleList';
export default class DeviceSimItem extends React.Component {
    constructor(){
        super();   
        this.state ={   
          vehicle:'Tata',
          device : 'UNO',
          sim : 'AIRTEL',
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
            <View style={styles.container}>
                 <View style={styles.ButtonView}>
                        <Button block success style={styles.button}>
                                 <Text>{ this.state.vehicle}</Text>  
                        </Button>
                        
                   </View>
                   <View style={styles.ButtonView}>
                          <Button block info style={styles.button}>
                            <Text>{ this.state.device}</Text>
                            
                        </Button>
                    </View>
                    <View style={styles.ButtonView}>
                          <Button block warning style={styles.button}>
                            <Text>{ this.state.sim}</Text>
                            
                        </Button>
                    </View>
            </View>
        );
      }
    }
export { DeviceSimItem }