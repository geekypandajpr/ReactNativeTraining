import {
    createStackNavigator,
  } from 'react-navigation';
  import 'es6-symbol/implement';
import { QuizResult } from '../app/screens/QuizResult';
import { Quiz } from '../app/screens/Quiz';
  
  const AppRoutes = createStackNavigator({
    FirstPage: {
      screen: Quiz,
    },
    Product: {
      screen: QuizResult,
    }
  });
  
  export  {AppRoutes};