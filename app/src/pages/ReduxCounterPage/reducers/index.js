import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  countersList: [],
};

const countersPageReducer = handleActions(
  {
    [actions.CREATE_COUNTER]: (state) => {
      const newCounter = { countValue: 0 };

      return { countersList: [...state.countersList, newCounter] };
    },
  },
  defaultState
);

export default countersPageReducer;
