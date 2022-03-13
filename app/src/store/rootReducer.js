import { combineReducers } from "redux";

import countersPageReducer from "../pages/ReduxCounterPage/reducers";
import todoListPageReducer from "../pages/TodoListPage/reducers";

const rootReducer = combineReducers({
  countersPage: countersPageReducer,
  todoPage: todoListPageReducer,
});

export default rootReducer;
