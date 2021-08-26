import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './rootSagas';
import { persistStore, persistReducer } from 'redux-persist';
import { history } from '../helpers/history';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { routerMiddleware } from 'connected-react-router';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const ConfigRootPersist = {
  key: 'shopping_cart',
  storage: storage,
  blacklist: ['router', 'reducerLogin']
};
const rootReducerPersisted = persistReducer(
  ConfigRootPersist,
  rootReducer(history)
);

const configStore = (defaultState = {}) => {
  const store = createStore(
    rootReducerPersisted,
    defaultState,
    applyMiddleware(sagaMiddleware, logger, routerMiddleware(history))
  );
  // then run the saga
  sagaMiddleware.run(rootSaga);
  let persistor = persistStore(store);
  return { store, persistor, history };
};
export default configStore;
