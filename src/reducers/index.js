import { combineReducers } from "redux";

import testReducer from './test-store'
import walletReducer from "./walletReducer";



export default combineReducers({
  testReducer,
  walletReducer
});