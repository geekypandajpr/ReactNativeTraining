import { createStackNavigator } from 'react-navigation';
import { Schedule } from '../screens';

const AppRouter = createStackNavigator(
    {
        Schedule: {Screen: Schedule}
    },

    {
        initialRouteName: 'Schedule'
    }
)

export { AppRouter };