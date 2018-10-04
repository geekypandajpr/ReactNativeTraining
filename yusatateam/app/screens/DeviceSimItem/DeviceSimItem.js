import React from 'react';
import {View,TextInput} from 'react-native';
import { Container, Header, Content, Button, Text,Right,Icon } from 'native-base';
import styles from './styles';
import { AppLoading } from 'expo';

export default class DeviceSimItem extends React.Component {
    constructor(props){
        super(props);   
        this.state = {   
          vehicle:'Tata',
          device : 'UNO',
          sim : 'AIRTEL',
          isLoading: true
        }
      };
      async componentWillMount(){
        await Expo.Font.loadAsync({
            Roboto:require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium:require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    };

    render() {
        const { navigate }=this.props.navigation;
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View style={styles.container}>
            <Toolbar title='Device & Sim' leftIcon='arrow-left' leftIconType='Feather'
                    onLeftButtonPress={() => navigate('VehicleList')}
                    rightIcon='settings'
                    rightIconType='MaterialCommunityIcons' />
                 <View style={styles.ButtonView}>
                        <Button block success style={styles.button}>
                                 <Text>{this.props.navigation.state.params.item.MSIDN}</Text>  
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