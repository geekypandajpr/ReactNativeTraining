import React from 'react';
import {View,
        Text,
        Alert,
        TouchableHighlight,
        Modal
} from 'react-native';
import styles from './styles';
export default class SimDetails extends React.Component{
   constructor(props){
       super(props);
      this.state={
          modalVisible:false,
        }
   }
   setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

    render()
    {
        return(
            <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{  flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#00000090',
        flexDirection: 'column', }}>

            <View style={{ backgroundColor: '#FFFFFF',
            bottom: 0,
            height: '70%',
            width: '100%',
            paddingTop: 15,
            paddingLeft: 15,
            paddingRight: 15 }}>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        </View>

        );
    }
}
export { SimDetails }