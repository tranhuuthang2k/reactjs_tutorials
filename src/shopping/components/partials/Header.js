import React from "react";
import { Menu, Layout } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const { Header } = Layout;
const HeaderShopping = () => {
  const numberCart = useSelector(
    (state) => state.reducerCart.shoppingCart
  ).length;
  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="/">
          <Link to="/"> Products</Link>
        </Menu.Item>
        <Menu.Item key="cart">
          <Link to="/cart">cart ({numberCart})</Link>
        </Menu.Item>
        <Menu.Item key="login">
          <Link to="/login">Login</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
export default React.memo(HeaderShopping);
