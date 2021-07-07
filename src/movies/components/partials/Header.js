import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { helper } from "../../helpers/common";
import { useHistory } from "react-router-dom";

const { Header } = Layout;

const HeaderMovies = () => {
  const history = useHistory();
  const logoutMovies = () => {
    helper.removeToken("Token_Login");
    history.push("/");
  };
  return (
    <Header className="header">
      <NavLink className="logo" to="/">
        {" "}
        MrKatsu
      </NavLink>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="/popular-movie">
          <NavLink to="/popular-movie">Popular movies</NavLink>
        </Menu.Item>
        <Menu.Item key="/search-movie">
          <NavLink to="/search-movie">Search movies</NavLink>
        </Menu.Item>
        {helper.getEmail() == null && (
          <Menu.Item key="/movie/login">
            <NavLink to="/movie/login">Login</NavLink>
          </Menu.Item>
        )}
        {helper.getEmail() && (
          <Menu.Item key="user">hi: {helper.getEmail()}</Menu.Item>
        )}
        {helper.getEmail() && (
          <Menu.Item key="/movie/logout" onClick={() => logoutMovies()}>
            <NavLink to="/movie/logout">Logout</NavLink>
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
};
export default React.memo(HeaderMovies);
