import React from 'react';
import { View, Image } from 'react-native';
import { Item, Input, Icon, Card, Button, Text } from 'native-base';
import { ImagePicker, Permissions } from 'expo';
import styles from './styles';
import { Toolbar } from '../../../components';
import { BarCodeModal } from './BarCodeModal';

export default class CreateVehicle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            searchValue: '',
            image: null,
            hasCameraPermission: null,
            cameraperm: null,
            deviceId: null,
            vim: null,
            sim: null,
            barValueGet: new Map(),
        };
        this.modalReference = React.createRef();
        this.BarCodePage = this.BarCodePage.bind(this);
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ cameraperm: status === 'granted' });
        const { cstatus } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({ hasCameraPermission: cstatus === 'granted' });
    }

    barCodeValue(value) {

        if (value.get("Device")) {
            this.setState({ deviceId: value.get("Device") })
        }
        if (value.get("VIN")) {
            this.setState({ vim: value.get("VIN") })
        }
        if (value.get("SIM")) {
            this.setState({ sim: value.get("SIM") })
        }
    }
    BarCodePage(data) {
        this.modalReference.current.setModalVisible(true, data);
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
    _takephoto = async () => {
        let pickResult = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        if (!pickResult.cancelled) {
            this.setState({ image: pickResult.uri });
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
                            <Input placeholder='Device Id'
                                value={this.state.deviceId} />
                            <Icon name='barcode' onPress={() => this.BarCodePage("Device")} />
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
                            <Input placeholder='Sim number'
                                value={this.state.sim} />
                            <Icon name='barcode' onPress={() => this.BarCodePage("SIM")} />
                        </Item>
                        <Item style={styles.InputItem}>
                            <Input placeholder='VIN'
                                value={this.state.vim} />
                            <Icon name='barcode' onPress={() => this.BarCodePage("VIN")} />
                        </Item>
                    </View>

                    <View style={{ flex: 2, flexDirection: 'row', marginTop: "10%" }}>

                        <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'center', marginTop: '1%' }}>
                            <View style={{ height: 100, width: 100, borderColor: '#000', borderWidth: 1, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>

                                <Image source={{ uri: image }} resizeMode='cover'
                                    style={{ alignItems: 'center', justifyContent: 'center', height: 100, width: 100, borderRadius: 50 }} />
                            </View>
                        </View>

                        <View style={{ flex: 0.6, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '1%' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Button bordered dark style={{ height: 35, borderColor: 'gray' }}
                                    onPress={this._takephoto}>
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
                <BarCodeModal ref={this.modalReference} getBarValue={(detail) => this.barCodeValue(detail)} />
            </View>
        );
    }
}


export { CreateVehicle }

