import React from 'react';
import {View,Text,Button} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import styles from './styles';
import { Item } from 'native-base';
export default class Association extends React.Component {
    render() {
        let data = [{ value: 'Banana', }, { value: 'Mango', }, { value: 'Pear',}];
        return (
            <View  style={styles.container}>
          <Dropdown label='Vehicle No' data={data}  />
          <Dropdown label='Device NO' data={data} />
          <Dropdown label='Sim No' data={data} />
          <Button title="submit"  onPress={() => this.props.navigation.navigate('Search')}>Submit</Button>
          </View>
        );
      }
    }
export { Association }