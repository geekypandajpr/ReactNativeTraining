import { createStackNavigator } from 'react-navigation';
import {
    LogIn,
    HomeScreen,
    Sim,
    Schedule,
    VehicleList,
    Jobs
} from '../screens';

const RouteConfigs = {
    LogIn: {
        screen: LogIn,
        navigationOptions: {
            header: null
        }
    },
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },
    Schedule: {
        screen: Schedule,
        navigationOptions: {
            header: null
        }
    },
    VehicleList: {
        screen: VehicleList,
        navigationOptions: {
            header: null
        }
    },
    Sim: {
        screen: Sim,
        navigationOptions: {
            header: null
        }
    },
    Jobs: {
        screen: Jobs,
        navigationOptions: {
            header: null
        }
    }
}

const StackNavigatorConfig = {
    initialRouteName: 'LogIn',
    headerMode: 'float'
}

const AppRouter = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export { AppRouter };