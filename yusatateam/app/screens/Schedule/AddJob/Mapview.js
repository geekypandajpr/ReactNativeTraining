import React from 'react';
import { BackHandler, View, Linking, Platform, StyleSheet, TextInput } from 'react-native';
import { MapView, Permissions, Location } from 'expo';
import { Button, Text } from 'native-base';
import { showToast } from '../../../common/functions';

export default class Mapview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
            errorMessage: null,
            latitude: 26.8034,
            longitude: 75.8178,
        }
    }

    componentWillMount() {
        this._getLocationAsync();
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({ errorMessage: 'Permission to access location was denied' });
        }

        let location = await Location.getCurrentPositionAsync({});
        // console.log(location);
        if(location) {
            // this.setState({ latitude: location.coords.latitude, longitude: location.coords.longitude });
        } else {
            this.setState({ errorMessage: 'Unable to fetch location' });
        }
    };

    onRegionChange(region) {
        // console.log(region);
    }

    openMap() {
        const apiKey = 'AIzaSyDz0W7TW9zOdHduPuyUwlcJwhWOzkh66ig';
        var androidurl = `https://www.google.com/maps/dir/?api=1&travelmode=driving`;
        var iosurl = `http://maps.apple.com/maps/dir/?api=1&travelmode=driving`;

        Platform.select({
            ios: () => {
                Linking.canOpenURL(iosurl).then(supported => {
                    if (!supported) {
                        console.log('Can\'t handle url: ' + iosurl);
                    } else {
                        return Linking.openURL(iosurl);
                    }
                }).catch(err => showToast('An error occurred', 'danger')); 
            },
            android: () => {
                Linking.canOpenURL(androidurl).then(supported => {
                    if (!supported) {
                        console.log('Can\'t handle url: ' + androidurl);
                    } else {
                        return Linking.openURL(androidurl);
                    }
                }).catch(err => showToast('An error occurred', 'danger')); 
            }
        });
    }

    render() {
        return (
            <MapView
                style={{ flex: 1 }}
                onRegionChange={this.onRegionChange}
                initialRegion={{
                    latitude: 26.8034,
                    longitude: 75.8178,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                    <MapView.Marker
                        coordinate={{ "latitude": this.state.latitude, "longitude": this.state.longitude }}
                        draggable={true}
                        onPress={(e) => console.log('onPress', e)}
                        onDrag={(e) => console.log('onDrag', e)}
                        onDragEnd={(e) => console.log('onDragEnd')}
                        //title={"Your Location"}
                    />
            </MapView>
        );
    }
}

export { Mapview }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    SearchBar: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})