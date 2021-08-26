import React, { lazy, Suspense } from 'react';
import { Skeleton } from 'antd';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import configStore from '../store';
import Login from '../pages/login';
const HomePage = lazy(() => import('../pages/home'));
const DetailPage = lazy(() => import('../pages/detail'));
const CartShopping = lazy(() => import('../pages/cart/index'));
const CategoryPage = lazy(() => import('../pages/categories'));
const OrderShopping = lazy(() => import('../pages/cart/Order'));

const { history } = configStore();
const RouteApp = () => {
  return (
    <ConnectedRouter history={history}>
      <Suspense fallback={<Skeleton />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/product/:slug/:id">
            <DetailPage />
          </Route>
          <Route path="/category/:slug">
            <CategoryPage />
          </Route>
          <Route path="/cart">
            <CartShopping />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Order">
            <OrderShopping />
          </Route>
        </Switch>
      </Suspense>
    </ConnectedRouter>
  );
};
export default React.memo(RouteApp);
