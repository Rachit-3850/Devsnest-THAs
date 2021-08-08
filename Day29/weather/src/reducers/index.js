import { cityReducer } from "./cityReducer"
import { dataReducer } from "./dataReducer"
import { combineReducers } from "redux"
import { themeReducer } from "./toggleReducer"
const rootReducer = combineReducers({cityReducer,dataReducer,themeReducer})
export default rootReducer