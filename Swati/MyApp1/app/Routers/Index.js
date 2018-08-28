import {createStackNavigator} from 'react-navigation';
import {Home,Detail} from '../Screens';

const AppRouter= createStackNavigator(
 {
    Home: { screen: Home },
    Detail: { screen: Detail }
 },
 {
    initialRouteName: 'Home',
 }
);

export  {AppRouter};