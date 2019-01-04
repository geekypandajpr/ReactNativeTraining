import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Item, Input, Icon, Card, Button, Text } from 'native-base';
import { ImagePicker, Permissions } from 'expo';
import styles from './styles';
import { Toolbar } from '../../../components';
import { BarCodeModal } from './BarCodeModal';
import { userActions } from '../../../redux/actions';
import { connect } from 'react-redux';

export class CreateVehicle extends React.Component {
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
            imagename: ''
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
        const str = result.uri;
        var strArray = str.split("/");

        if (!result.cancelled) {
            this.setState({
                image: result.uri,
                imagename: strArray[strArray.length - 1]
            })
        }
    }

    _takephoto = async () => {
        let pickResult = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });
        const str = pickResult.uri;
        var strArray = str.split("/");

        if (!pickResult.cancelled) {
            this.setState({
                image: pickResult.uri,
                imagename: strArray[strArray.length - 1]
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.Addvehicles !== nextProps.Addvehicles) {
            this.setState({ createVehicle: nextProps.Addvehicles.data })
        }
    }

    submitRequest() {
        alert("hello");
        // const item = {
        //     "vehicleNumber": "678945",
        //     "odometerReading": "1",
        //     "vehicleVin": "23456",
        //     "departmentId": "56789",
        //     "vehicleTypeId": "Bus",
        // }
        // this.props.oncreateVehicle(item);
    }

    render() {
        let { image } = this.state;
        const { goBack } = this.props.navigation;
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        return (
            <View style={{ flex: 1 }}>
                <Toolbar title='Create Vehicle'
                    leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()} />
                <ScrollView>
                    <Card style={{ flex: 1 }}>
                        <View style={{ flex: 5 }}>
                            <Item style={[styles.InputItem]}>
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

                        <View style={{ flex: 3, flexDirection: 'row' }}>

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
                                <Text>{this.state.imagename}</Text>
                            </View>

                        </View>

                        <View style={{ flex: 2, margin: "5%" }}>
                            <Button full info
                                onpress={this.submitRequest}>
                                <Text>Submit</Text>
                            </Button>
                        </View>

                    </Card>
                </ScrollView>
                {/* <View style={{ flex: 0.1 }}></View> */}
                <BarCodeModal ref={this.modalReference} getBarValue={(detail) => this.barCodeValue(detail)} />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        Addvehicles: state.createVehicleData,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        oncreateVehicle: (value) => dispatch(userActions.createVehicle(value)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateVehicle)

