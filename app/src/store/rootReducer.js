import { combineReducers } from "redux";

import countersPageReducer from "../pages/ReduxCounterPage/reducers";

const rootReducer = combineReducers({
  countersPage: countersPageReducer,
});

export default rootReducer;
