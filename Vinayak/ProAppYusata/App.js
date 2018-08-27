import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Header,Divider} from 'react-native-elements';
import {HeaderView} from './component/HeaderView/index'
import {FooterView} from './component/FooterView/index'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
{/*       
        <HeaderView
          left='menu'
          title='Shop'
          right='home'
        />
        <FooterView 
        home='home'
        homeType='FontAwesome'
        percentage='ticket-percent'
        percentageType='MaterialCommunityIcons'
        bag='shopping-bag'
        bagType='Entypo'
        search='search'
        searchType='Feather'
        user='user'
        userType='FontAwesome'
        ></FooterView> */}
          <Header leftComponent={{ icon: 'menu', color: 'orange' }}
            centerComponent={{ text: 'Offer on Shoes', style: { color: 'orange' } }}
            rightComponent={{ icon: 'search', color: 'orange'}}/>
            <View style={styles.divider} >
            <Divider style={{ backgroundColor: 'blue' }} />
            </View>
            
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    
  },
  divider :
  {
    flex : 1,
    flexDirection : 'row',
  }
});
