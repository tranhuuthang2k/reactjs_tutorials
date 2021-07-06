import { React, lazy, Suspense } from "react";
import { Skeleton } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { helper } from "../helpers/common";
// import PopularMoviesPage from "../pages/popularMovies";
// import SearchMoviesPage from "../pages/searchMovies";
// import DetailMoviePage from "../pages/detailMovies";

const PopularMoviesPage = lazy(() => import("../pages/popularMovies/index"));
const SearchMoviesPage = lazy(() => import("../pages/searchMovies/index"));
const DetailMoviePage = lazy(() => import("../pages/detailMovies/"));
const LoginMoviePage = lazy(() => import("../pages/loginMovies"));
function PrivateRouteLogin({ children, ...rest }) {
  let auth = helper.fakeAuthLogin();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}

function PrivateRouteMovies({ children, ...rest }) {
  let auth = helper.fakeAuthLogin();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/movie/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
const RouteMovies = () => {
  return (
    <Router>
      <Suspense fallback={<Skeleton active />}>
        <Switch>
          <Route path="/" exact>
            <PopularMoviesPage />
          </Route>
          <Route path="/popular-movie">
            <PopularMoviesPage />
          </Route>
          <Route path="/search-movie">
            <SearchMoviesPage />
          </Route>
          <PrivateRouteMovies path="/movie/:slug~:id">
            <DetailMoviePage />
          </PrivateRouteMovies>
          <PrivateRouteLogin path="/movie/login">
            <LoginMoviePage />
          </PrivateRouteLogin>
        </Switch>
      </Suspense>
    </Router>
  );
};
export default RouteMovies;
