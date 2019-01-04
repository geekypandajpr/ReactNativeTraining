import React from 'react';
import { View, Image } from 'react-native';
import { Item, Input, Icon, Card, Button, Text} from 'native-base';
import { ImagePicker } from 'expo';
import styles from './styles';
import { Toolbar } from '../../../components';

export default class CreateVehicle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            searchValue: '',
            image: null
        };
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        })
        if (!result.cancelled) {
            this.setState({
                image: result.uri
            })
        }
    }

    render() {
        let { image } = this.state;
        const { goBack } = this.props.navigation;
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        return (
            <View style={{ flex: 1 }}>
                <Toolbar title='Create Vehicle'
                    leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()} />
                <Card style={{ flex: 1 }}>
                    <View style={{ flex: 10 }}>
                        <Item style={[styles.InputItem, { marginTop: 10 }]}>
                            <Input placeholder='Vehicle number' />
                            {/* <Icon name='barcode' /> */}
                        </Item>
                        <Item style={styles.InputItem}>
                            <Input placeholder='Odometer Reading' />
                            {/* <Icon name='barcode' /> */}
                        </Item>
                        <Item style={styles.InputItem}>
                            <Input placeholder='Device Id' />
                            <Icon name='barcode' />
                        </Item>
                        <Item style={styles.InputItem}>
                            <Input placeholder='Department Id' />
                            {/* <Icon name='barcode' /> */}
                        </Item>
                        <Item style={styles.InputItem}>
                            <Input placeholder='VehicleType Id' />
                            {/* <Icon name='barcode' /> */}
                        </Item>
                        <Item style={styles.InputItem}>
                            <Input placeholder='Sim number' />
                            <Icon name='barcode' />
                        </Item>
                        <Item style={styles.InputItem}>
                            <Input placeholder='VIN' />
                            <Icon name='barcode' />
                        </Item>
                    </View>

                    <View style={{ flex: 2, flexDirection: 'row', marginTop: "10%" }}>

                        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center', marginTop: '1%' }}>
                            <View style={{ height: 90, width: 90, borderColor: '#000', borderWidth: 1, borderRadius: 45, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={{ uri: image }}
                                    style={{ alignItems: 'center', justifyContent: 'center' }} />
                            </View>
                        </View>

                        <View style={{ flex: 0.6, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '1%' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Button bordered dark style={{ height: 35, borderColor: 'gray' }}
                                    onPress={() => alert('capture Image')}>
                                    <Text style={styles.createVehicle}>Capture Image</Text>
                                </Button>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text>OR</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Button bordered dark style={{ height: 35, borderColor: 'gray', }}
                                    onPress={this._pickImage}>
                                    <Text style={styles.createVehicle}>Upload Image</Text>
                                </Button>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 0.3 }}>
                            <Text>xyz.png</Text>
                        </View>

                    </View>

                    <View style={{ flex: 1, margin: 20 }}>
                        <Button full info>
                            <Text>Submit</Text>
                        </Button>
                    </View>

                </Card>
                <View style={{ flex: 0.1 }}></View>

            </View>
        );
    }
}


export { CreateVehicle }

