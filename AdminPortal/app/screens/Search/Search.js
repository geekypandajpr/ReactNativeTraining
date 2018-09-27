import React from 'react';
import {View,Text,Button} from 'react-native';
import styles from './styles';
//import  SearchableDropDown from 'react-native-searchable-dropdown';
var  items  = [
  {
      id: 1,
      name: 'Javascript',
      subject : 'math'
  },
  {
      id: 2,
      name: 'Java',
      subject : 'math'
  },
  {
      id: 3,
      name: 'Ruby',
      subject : 'math'
  },
  {
      id: 4,
      name: 'React Native',
      subject : 'math'
  },
  {
      id: 5,
      name: 'PHP',
      subject : 'math'
  },
  {
      id: 6,
      name: 'Python',
      subject : 'math'
  },
  {
      id: 7,
      name: 'Go',
      subject : 'math'
  },
  {
      id: 8,
      name: 'Swift',
      subject : 'math'
  },
];
export default class Search extends React.Component {
  
     
      render() {
        return (
          <View style={styles.container}>
           {/* <SearchableDropDown
            // onTextChange={(text) =>  alert(text)}
            onItemSelect={(item) =>  alert(JSON.stringify(item))}
            containerStyle={{
                padding: 5
            }}
            textInputStyle={{
                padding: 12,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5
            }}
            itemStyle={{
                padding: 10,
                backgroundColor: '#ddd',
                borderColor: '#bbb',
                borderWidth: 1,
                borderRadius:5
            }}
            itemTextStyle={{
            color: '#222'
            }}
            items={items}
            defaultIndex={2}
            placeholder="Search."
            resetValue={false}
            underlineColorAndroid='transparent' /> */}
          </View>
        );
      };
    }
    export {Search}