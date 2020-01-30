import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducers from './ducs';
import rootSagas from './sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, applyMiddleware(logger, sagaMiddleware))

sagaMiddleware.run(rootSagas);

export default store;