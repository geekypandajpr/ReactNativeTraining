import React from 'react';
import {
    View,
    BackHandler,

} from 'react-native';
import {Item, Input, Icon, Card,Button,Text,Thumbnail, Right } from 'native-base';
import styles from './styles';
import { Toolbar } from '../../../components';

export default class CreateVehicle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            searchValue : ''
        };
        
    }

    render() {
        const { goBack } = this.props.navigation;
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        return (
            <View style={{flex:1}}>
                <Toolbar title='Create Vehicle'
                        leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()} />
                         <Card style={{flex : 1}}>
                             <View style={{flex : 10}}>
                             <Item style={[styles.InputItem,{marginTop:10}]}>
                                <Input placeholder='Vehicle number'/>
                                {/* <Icon name='barcode' /> */}
                            </Item>
                            <Item style={styles.InputItem}>
                                <Input placeholder='Odometer Reading'/>
                                {/* <Icon name='barcode' /> */}
                            </Item>
                            <Item style={styles.InputItem}>
                                <Input placeholder='Device Id'/>
                                <Icon name='barcode' />
                            </Item>
                            <Item style={styles.InputItem}>
                                <Input placeholder='Department Id'/>
                                {/* <Icon name='barcode' /> */}
                            </Item>
                            <Item style={styles.InputItem}>
                                <Input placeholder='VehicleType Id'/>
                                {/* <Icon name='barcode' /> */}
                            </Item>
                            <Item style={styles.InputItem}>
                                <Input placeholder='Sim number'/>
                                <Icon name='barcode' />
                            </Item>
                            <Item style={styles.InputItem}>
                                <Input placeholder='VIN'/>
                                <Icon name='barcode' />
                            </Item>
                             </View>
                             <View style={{flex:2,flexDirection : 'row',marginTop : "10%"}}>
                                <Button bordered dark style={{ height: 40, borderColor: 'gray',flex : 0.8,marginLeft:"2%" }}
                                    onPress={() =>alert('capture Image')}>
                                    <Text style={styles.createVehicle}>Capture Image</Text>
                                </Button>
                                <Text style={{marginLeft:"10%",marginTop:"2%" ,flex : 0.5}}>xyz.png</Text>
                                <View style={{flex : 0.3}}>
                                    <Thumbnail  small source={{uri: uri}} />
                                </View>
                                
                            </View>          
                            
                            <View style={{flex : 1,margin :20}}>
                                <Button full info>
                                    <Text>Submit</Text>
                                </Button>
                            </View>
                           
                    </Card>
                    <View style={{flex :0.1}}></View>
                                
            </View>
        );
    }
}


export {CreateVehicle}

