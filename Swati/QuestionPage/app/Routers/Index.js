import {createStackNavigator} from 'react-navigation';
import {Home} from '../Screens/Index';

const AppRouter= createStackNavigator(
 {
    Home: { screen: Home },
  },
 {
    initialRouteName: 'Home',
 }
);

export  {AppRouter};