import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import  reducer  from "./reducer";
import mySaga from "../ReduxSaga/mySaga";

const sagamiddleware = createSagaMiddleware();
const middleware = [sagamiddleware, logger];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
sagamiddleware.run(mySaga);
// store.dispatch({ type: "GET_USER" });
export default store;