import {createStackNavigator} from 'react-navigation';
import {
  Home,
  HomeScreen,
  Sim,
  Association,
  Schedule,
  vehicleList,
  Search
} from '../screens';

const AppRouter= createStackNavigator(
    {
      HomeScreen: {screen: HomeScreen}
    },
    {
      Sim: {screen: Sim}
    },
    {
      Association: {screen: Association}
    },
    {
      Schedule: {screen: Schedule}
    },
    {
      vehicleList: {screen: vehicleList}
    },
    {
      Search: {screen: Search}
    },
    {
       initialRouteName: 'HomeScreen',
    }
   );
   
   export  {AppRouter};