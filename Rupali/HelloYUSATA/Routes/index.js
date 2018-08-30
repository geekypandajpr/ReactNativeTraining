import {
    createStackNavigator,
  } from 'react-navigation';
  import 'es6-symbol/implement';
  import { FirstPage } from '../app/screens/FirstPage/FirstPage';
  import { Product} from '../app/screens/Product/Product';
  import { ScrollViewDemo} from '../app/screens/ScrollViewDemo/ScrollViewDemo';
  
  const AppRoutes = createStackNavigator({
    FirstPage: {
      screen: FirstPage,
    },
    Product: {
      screen: Product,
    },
    ScrollViewDemo: {
      screen: ScrollViewDemo,
    }
  });
  
  export  {AppRoutes};