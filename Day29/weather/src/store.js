import rootreducer from "./reducers";
import { createStore ,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(rootreducer ,composeWithDevTools(applyMiddleware(thunk,logger)))
export default store