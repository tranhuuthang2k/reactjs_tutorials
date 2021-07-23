import { combineReducers } from "redux";
import { footballReducer as football } from "./football";

const rootReducer = combineReducers({
  football,
});
export default rootReducer;
