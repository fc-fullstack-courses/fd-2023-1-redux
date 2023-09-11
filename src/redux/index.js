import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const enchancer = applyMiddleware(sagaMiddleware);

const store = createStore(reducer, composeWithDevTools(enchancer));

sagaMiddleware.run(rootSaga);

export default store;