import { combineReducers } from 'redux';
import { homeReducer } from '../reducers/reducerHome';
import { reducerDetail } from '../reducers/reducerDetail';
import { reducerCart } from '../reducers/reducerCart';
import { reducerLogin } from '../reducers/reducerLogin';
import { reducerCheckout } from '../reducers/reducerCheckout';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { connectRouter } from 'connected-react-router';
const configPersistCart = {
  key: 'root',
  storage: storage,
  whitelist: ['shoppingCart']
};

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    homeReducer,
    reducerDetail,
    reducerLogin,
    reducerCheckout,
    reducerCart: persistReducer(configPersistCart, reducerCart)
  });
export default rootReducer;
