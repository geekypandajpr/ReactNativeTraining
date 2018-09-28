import { createStackNavigator } from 'react-navigation';
import { Schedule } from '../screens';

const AppRouter = createStackNavigator(
    {
        Schedule: {
            screen: Schedule,
            navigationOptions: {
                header: null
            }
        }
    },

    {
        initialRouteName: 'Schedule'
    }
)

export { AppRouter };