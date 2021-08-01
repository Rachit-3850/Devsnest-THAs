import userReducer from "./count"
import { combineReducers } from "redux"
const rootReducer = combineReducers({userReducer})
export default rootReducer