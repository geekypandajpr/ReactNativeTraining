import { createStackNavigator } from 'react-navigation';
import LogIn from '../screens/LogIn/LogIn';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Sim from '../screens/Sim/Sim';
import Device from '../screens/Device/Device';
import Schedule from '../screens/Schedule/Schedule';
import VehicleList from '../screens/VehicleList/VehicleList';
import Jobs from '../screens/Jobs/Jobs';
import Settings from '../screens/Settings/Settings';
import Dashboard from '../screens/Dashboard/Dashboard';
import Technicians from '../screens/Technicians/Technicians';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import OpenJobs from '../screens/OpenJobs/OpenJobs';
import Calendars from '../screens/Calendars/Calendars';
import { TabComponent } from '../screens/Technicians/TechDetails/TabComponent';
// import {
//     LogIn,
//     HomeScreen,
//     Sim,
//     Device,
//     Schedule,
//     VehicleList,
//     Jobs,
//     Settings,
//     Dashboard,
//     Technicians,
//     ForgotPassword,
//     OpenJobs,
//     Calendars,
// } from '../screens';
// import { TabComponent } from '../screens/Technicians/TechDetails/TabComponent';

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
    },
    Technicians: {
        screen: Technicians,
        navigationOptions: {
            header: null
        }
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            header: null
        }
    },
    OpenJobs: {
        screen: OpenJobs,
        navigationOptions: {
            header: null
        }
    },
    Calendars: {
        screen: Calendars,
        navigationOptions: {
            header: null
        }
    },
    TabComponent:
    {   
        screen: TabComponent,
        navigationOptions: {
            header: null
        }
    }
}

const StackNavigatorConfig = {
    initialRouteName: 'LogIn',
    headerMode: 'float'
}

const Routes = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default Routes ;