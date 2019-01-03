import React, { Component } from 'react';
import { Alert, Linking, Dimensions, LayoutAnimation, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { Toolbar, SearchBar } from '../../components';
import styles from './styles';

export default class QrCode extends Component {
  state = {
    hasCameraPermission: null,
    lastScannedUrl: null,
    deviceUDID: '',
    bottomBar : false
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = result => {
    if (result.data !== this.state.lastScannedUrl) {
      LayoutAnimation.spring();
      this.setState({ lastScannedUrl: result.data,bottomBar : true});
    }
  };
  getDeviceInfo() {
    if(this.state.deviceUDID !== '') {
        this.setState({ isSearching: true });
        //this.props.fetchDeviceInfo(this.state.lastScannedUrl);
    }
}

  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Toolbar title='Device Report'
        leftIcon='arrow-left' leftIconType='Feather' onLeftButtonPress={() => goBack()}/>
      <View style={{flex :1,justifyContent:'center',alignItems:'center'}}>
      <SearchBar
        placeholder={'Search by device ESN'}
        isDropdown={false}
        onChangeText={(text) => this.setState({lastScannedUrl: text})}
        value={this.state.lastScannedUrl}
        onSearch={this.getDeviceInfo}
                    />
      </View>
        <View style={{flex :9}}>
        {this.state.hasCameraPermission === null
                ? <Text>Requesting for camera permission</Text>
                : this.state.hasCameraPermission === false
                    ? <Text style={{ color: '#fff' }}>
                        Camera permission is not granted
                        </Text>
                    : 
                    <View style={{flex :1,justifyContent:'center',alignItems:'center'}}>
                    <BarCodeScanner
                        onBarCodeRead={this._handleBarCodeRead}
                        style={styles.barCode} /></View>
                        }

                {this._maybeRenderUrl()}

                {/* <StatusBar hidden /> */}
        </View>
       
      </View>
    );
  }

  _handlePressUrl = () => {
    Alert.alert(
      'Open this URL?',
      this.state.lastScannedUrl,
      [
        {
          text: 'Yes',
          onPress: () => Linking.openURL(this.state.lastScannedUrl),
        },
        { text: 'No', onPress: () => {} },
      ],
      { cancellable: false }
    );
  };

  _handlePressCancel = () => {
    this.setState({ bottomBar : false});
  };

  _maybeRenderUrl = () => {
    if (!this.state.lastScannedUrl) {
      return;
    }

    return (
        <View>
            { this.state.bottomBar ?  <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
            <Text numberOfLines={1} style={styles.urlText}>
                {this.state.lastScannedUrl}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.cancelButton}
            onPress={this._handlePressCancel}>
            <Text style={styles.cancelButtonText}>
                Ok
            </Text>
            </TouchableOpacity>
        </View> : null }
           
   </View>
    );
  };
}


export {QrCode}