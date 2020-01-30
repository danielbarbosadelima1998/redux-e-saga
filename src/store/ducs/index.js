import { combineReducers } from 'redux'
import { reducersUser } from "./user";
const rootReducers = combineReducers({ user: reducersUser });

export default rootReducers;