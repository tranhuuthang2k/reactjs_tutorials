import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store

const configStore = (defaultState = {}) => {
  const store = createStore(
    rootReducer,
    defaultState,
    applyMiddleware(sagaMiddleware, logger)
  );
  // then run the saga
  sagaMiddleware.run(rootSaga);
  return { store };
};
export default configStore;
