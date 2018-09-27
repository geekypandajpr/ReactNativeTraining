import { createStackNavigator } from 'react-navigation';
import { Home } from '../screens';
const AppRouter = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        initialRouteName: 'Home',
    }
);

export { AppRouter };