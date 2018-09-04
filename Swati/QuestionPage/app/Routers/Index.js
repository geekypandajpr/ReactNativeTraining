import {createStackNavigator} from 'react-navigation';
import {Home,Result} from '../Screens/Index';

const AppRouter= createStackNavigator(
 {
    Home: { screen: Home },
    Result:{ screen: Result}
  },
 {
    initialRouteName: 'Home',
 }
);

export  {AppRouter};