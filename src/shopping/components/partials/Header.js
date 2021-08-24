import React from "react";
import { Layout, Image } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../img/pet-shop.jpg";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
const { Header } = Layout;
const HeaderShopping = () => {
  const numberCart = useSelector(
    (state) => state.reducerCart.shoppingCart
  ).length;
  return (
    <Header className="container_header">
      <div className="container_header_logo">
        <a href="/">
          <Image src={logo} alt="No" width={90} height={70} preview={false} />
        </a>

        <div className="menu_icon">
          <ul>
            <li>HOME</li>
            <li>PAGES</li>
          </ul>
          <div className="icon">
            <div className="icon_item">
              <PersonOutlineIcon style={{ fontSize: 25 }} />
            </div>

            <Link to="/cart">
              <div className="icon_item">
                <Badge badgeContent={numberCart} color="primary">
                  <ShoppingCartIcon style={{ fontSize: 25 }} />
                </Badge>
              </div>
            </Link>

            <div className="icon_item">
              <SearchIcon style={{ fontSize: 25 }} />
            </div>
            {/* <PersonOutlineIcon />
            <ShoppingCartIcon /> */}
          </div>
        </div>
      </div>

      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="/">
          <Link to="/"> Products</Link>
        </Menu.Item>
        <Menu.Item key="cart">
          <Link to="/cart">cart ({numberCart})</Link>
        </Menu.Item>
        <Menu.Item key="login">
          <Link to="/login">Login</Link>
        </Menu.Item>
      </Menu> */}
    </Header>
  );
};
export default React.memo(HeaderShopping);
