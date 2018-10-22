import { createStackNavigator } from 'react-navigation';
import {
    LogIn,
    HomeScreen,
    Sim,
    Device,
    Schedule,
    VehicleList,
    Jobs,
    Settings,
    Dashboard
} from '../screens';

const RouteConfigs = {
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            header: null
        }
    },
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
    Device: {
        screen: Device,
        navigationOptions: {
            header: null
        }
    },
    Jobs: {
        screen: Jobs,
        navigationOptions: {
            header: null
        }
    },
    Settings: {
        screen: Settings,
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