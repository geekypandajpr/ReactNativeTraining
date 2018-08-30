import {createStackNavigator} from 'react-navigation';

import { MainPage,ItemList,SecondItemList} from '../app/Screen';

  
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
  });
  
  export {AppRoutes};