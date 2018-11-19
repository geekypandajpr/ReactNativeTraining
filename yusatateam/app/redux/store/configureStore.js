import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootSaga from '../sagas/rootSaga';
import rootReducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const store = createStore(rootReducers, applyMiddleware(logger, sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
}