import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import ReduxCounterLayout from "../components/ReduxCounterLayout";
import { CREATE_COUNTER } from "../actions";

const ReduxCounterContainer = () => {
  const dispatch = useDispatch();

  const { countersList } = useSelector((store) => store.countersPage);

  const handleCounterCreate = useCallback(() => {
    dispatch(CREATE_COUNTER());
  }, [dispatch]);

  return (
    <ReduxCounterLayout
      countersList={countersList}
      handleCounterCreate={handleCounterCreate}
    />
  );
};

export default ReduxCounterContainer;
