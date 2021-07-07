import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { helper } from '../../helpers/common';

const { Header } = Layout;

const HeaderMovies = () => {
  // biet dc vi tri duong link
  // hooks cua react router
  const history = useHistory();
  const { pathname } = useLocation();
  const emailUser = helper.getEmailUser();

  const logoutMovie = () => {
    helper.removeToken();
    // quay ve trang login
    history.push('/movie/login');
  }

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
        <Menu.Item key="/popular-movie">
          <NavLink to="/popular-movie">
            Popular movies
          </NavLink>
        </Menu.Item>
        <Menu.Item key="/search-movie">
          <NavLink to="/search-movie">
            Search movies
          </NavLink> 
        </Menu.Item>
        { emailUser === null 
          &&
          <Menu.Item key="/movie/login">
            <NavLink to="/movie/login">
              Login
            </NavLink> 
          </Menu.Item>
        }

        { emailUser !== null && <Menu.Item key="user"> Hi : {emailUser} </Menu.Item> }

        { emailUser !== null 
          &&
          <Menu.Item key="logout" onClick={() => logoutMovie()}>
            Logout
          </Menu.Item>
        }
      </Menu>
    </Header>
  )
}
export default React.memo(HeaderMovies);