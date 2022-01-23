import { useHistory } from "react-router-dom";
import { useCallback, useEffect } from "react";

import FunctionalCounterLayout from "../components/layout";
import { useCounter } from "../../../hooks";

import { ROUTES } from "../../../routes/routeNames";

const FunctionalCounterContainer = () => {
  const history = useHistory();

  const [count, increment, decrement, reset] = useCounter(0);

  useEffect(() => {
    if (count === 5) {
      history.push(ROUTES.USERS_PAGE);
    }
  }, [count]);

  const handleGoToUsers = useCallback(() => {
    history.push(ROUTES.USERS_PAGE);
  }, []);

  return (
    <FunctionalCounterLayout
      countValue={count}
      handleIncrement={increment}
      handleDecrement={decrement}
      handleReset={reset}
      handleGoToUsers={handleGoToUsers}
    />
  );
};

export default FunctionalCounterContainer;
