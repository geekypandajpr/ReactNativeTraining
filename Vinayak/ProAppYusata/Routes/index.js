import {createStackNavigator} from 'react-navigation';

import { MainPage,ItemList,SecondItemList,Test,TestResult} from '../app/Screen';

  
  const AppRoutes = createStackNavigator({
    ItemList: { screen: ItemList ,navigationOptions: {
      header: null
  },},
    SecondItemList: { screen: SecondItemList ,navigationOptions: {
      header: null
  },},
  MainPage: { screen: MainPage ,navigationOptions: {
    header: null
},},
Test: { screen: Test ,navigationOptions: {
  header: null
},},
TestResult: { screen: TestResult ,navigationOptions: {
  header: null
},},
  });
  
  export {AppRoutes};