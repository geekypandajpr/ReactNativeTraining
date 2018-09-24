import {createStackNavigator} from 'react-navigation';
import {Page1,Page2} from '../Screens/Index';

const AppRouter= createStackNavigator(
 {
    Page1: { screen: Page1 },
    Page2: { screen: Page2 }
 },
 {
    initialRouteName: 'Page1',
 }
);

export  {AppRouter};