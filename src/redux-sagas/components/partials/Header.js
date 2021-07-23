import React from "react";
import { Layout, Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";

const { Header } = Layout;

const HeaderFootball = () => {
  // biet dc vi tri duong link
  // hooks cua react router
  const { pathname } = useLocation();

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
        <Menu.Item key="/ket-qua-bong-da">
          <NavLink to="/ket-qua-bong-da">Ket qua bong da</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
export default React.memo(HeaderFootball);
