import { combineReducers } from "redux";
import { homeReducer } from "../reducers/reducerHome";
import { reducerDetail } from "../reducers/reducerDetail";

const rootReducer = combineReducers({
  homeReducer,
  reducerDetail,
});
export default rootReducer;
