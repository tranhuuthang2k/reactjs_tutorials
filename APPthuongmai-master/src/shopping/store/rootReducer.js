import {combineReducers} from 'redux'
import { homeReducer } from '../reducers/reducerHome'
const rootReducer = combineReducers({
    homeReducer,
});
export default rootReducer;
