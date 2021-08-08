import React, { Suspense } from "react";
import { Skeleton } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/home";
const RouteApp = () => {
  return (
    <Router>
      <Suspense fallback={<Skeleton />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          {/* <Route path="/">
              <Home />
            </Route> */}
        </Switch>
      </Suspense>
    </Router>
  );
};
export default React.memo(RouteApp);
