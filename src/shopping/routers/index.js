import React, { lazy, Suspense } from "react";
import { Skeleton } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const HomePage = lazy(() => import("../pages/home"));
const DetailPage = lazy(() => import("../pages/detail"));

const RouteApp = () => {
  return (
    <Router>
      <Suspense fallback={<Skeleton />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/product/:slug/:id">
            <DetailPage />
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
