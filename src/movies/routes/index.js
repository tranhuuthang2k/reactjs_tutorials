import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Skeleton } from 'antd';
import { helper } from '../helpers/common';

const PopularMoviesPage = lazy(() => import('../pages/popularMovies/index'));
const SearchMoviesPage = lazy(() => import('../pages/searchMovies/index'));
const DetailMoviePage = lazy(() => import('../pages/detail/index'));
const LoginMoviePage = lazy(() => import('../pages/login/index'));

function IsLoginUserMovie({ children, ...rest }) {
  let auth = helper.fakeAuthLogin(); // biet login hay chua
  return (
    <Route
      {...rest}
      render={({location}) =>
        auth ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        ) : (
          children
        )
      }
    />
  )
}

function PrivateRouteMovie({ children, ...rest }) {
  let auth = helper.fakeAuthLogin(); // biet login hay chua
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
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const RouteMovie = () => {
  return (
    <Router>
      <Suspense fallback={<Skeleton active/>}>
        <Switch>
          {/* duong dan mac dinh */}
          <PrivateRouteMovie path="/" exact>
            <PopularMoviesPage/>
          </PrivateRouteMovie>

          <PrivateRouteMovie path="/popular-movie">
            <PopularMoviesPage/>
          </PrivateRouteMovie>

          <PrivateRouteMovie path="/search-movie">
            <SearchMoviesPage/>
          </PrivateRouteMovie>

          {/* localhost:3000/movie/ngoi-nha-hanh-phuc~189723 */}
          {/* :slug :ten prama */}
          <PrivateRouteMovie path="/movie/:slug~:id">
            <DetailMoviePage/>
          </PrivateRouteMovie>

          <IsLoginUserMovie path="/movie/login">
            <LoginMoviePage/>
          </IsLoginUserMovie>

        </Switch>
      </Suspense>
    </Router>
  )
}
export default React.memo(RouteMovie);