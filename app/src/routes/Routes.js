import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "../pages/Home";
import UsersPageContainer from "../pages/UsersPage/containers/UsersPageContainer";
import CounterPageContainer from "../pages/CounterPage/containers/CounterPageContainer";
import FunctionalCounterCounter from "../pages/FunctionalCounter/containers/FunctionalCounterContainer";
import CounterOfCountersContainer from "../pages/CounterOfCounters/containers/CounterOfCountersContainer";
import ReduxCounterContainer from "../pages/ReduxCounterPage/containers/ReduxCounterContainer";
import FormPageContainer from "../pages/FormPage/containers/FormPageContainer";

import { ROUTES } from "./routeNames";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.USERS_PAGE} component={UsersPageContainer} />
      <Route path={ROUTES.COUNTER_PAGE} component={CounterPageContainer} />
      <Route
        path={ROUTES.COUNTER_OF_COUNTERS}
        component={CounterOfCountersContainer}
      />
      <Route
        path={ROUTES.FUNCTIONAL_COUNTER}
        component={FunctionalCounterCounter}
      />
      <Route path={ROUTES.REDUX_COUNTER} component={ReduxCounterContainer} />
      <Route path={ROUTES.FORM} component={FormPageContainer} />

      <Redirect path="*" to={ROUTES.HOME} />
    </Switch>
  );
};

export default Routes;
