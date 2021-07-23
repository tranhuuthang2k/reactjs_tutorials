import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Skeleton } from "antd";

const HomePage = lazy(() => import("../pages/Home/App"));
const DetailPage = lazy(() => import("../pages/detail/App"));

const WebRoute = () => {
  return (
    <Router>
      <Suspense fallback={<Skeleton active />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/ket-qua-bong-da">
            <HomePage />
          </Route>
          <Route path="/tran-dau/:slug/:id">
            <DetailPage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};
export default WebRoute;
