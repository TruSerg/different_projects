import { handleActions } from "redux-actions";
import { v4 as uuidV4 } from "uuid";

import * as actions from "../actions";

const defaultState = {
  countersList: [],
};

const countersPageReducer = handleActions(
  {
    [actions.CREATE_COUNTER]: (state) => {
      const newCounter = { id: uuidV4(), countValue: 0 };

      return { countersList: [...state.countersList, newCounter] };
    },
    [actions.INCREMENT_COUNTER]: (state, { payload }) => {
      const counterId = payload;

      const updatedCounter = state.countersList.map(({ id, countValue }) => ({
        id,
        countValue: id === counterId ? countValue + 1 : countValue,
      }));
      return {
        countersList: updatedCounter,
      };
    },
  },
  defaultState
);

export default countersPageReducer;
