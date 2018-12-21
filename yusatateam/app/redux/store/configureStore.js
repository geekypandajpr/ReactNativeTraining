import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootSaga from '../sagas/rootSaga';
import rootReducers from '../reducers';
import { middleware } from '../../router';

export default function configureStore() {
    const middlewares = [];
    const enhancers = [];
    
    const sagaMiddleware = createSagaMiddleware();
    middlewares.push(sagaMiddleware);
    middlewares.push(middleware);
    //middlewares.push(logger);

    enhancers.push(applyMiddleware(...middlewares));

    const store = createStore(rootReducers, compose(...enhancers));
    sagaMiddleware.run(rootSaga);
    return store;
}