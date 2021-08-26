import React from 'react';
import { Layout, Image } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../img/pet-shop.jpg';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
const useStyles = makeStyles(theme => ({
  list_category: {
    borderBottom: '1px solid #ebebeb'
  },
  dropdown: {
    position: 'absolute',
    top: '73px',
    right: 0,
    left: 0,
    zIndex: 1,
    width: '200px',
    padding: theme.spacing(1),
    boxShadow: '0 0 5px rgb(0 0 0 / 20%)',
    backgroundColor: theme.palette.background.paper
  }
}));

const { Header } = Layout;
const HeaderShopping = () => {
  const numberCart = useSelector(
    state => state.reducerCart.shoppingCart
  ).length;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <Header className="container_header">
      <div className="container_header_logo">
        <a href="/">
          <Image src={logo} alt="No" width={90} height={70} preview={false} />
        </a>

        <div className="menu_icon">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <ClickAwayListener onClickAway={handleClickAway}>
                <div style={{ position: 'relative' }}>
                  <span onClick={handleClick}>CATEGORY</span>
                  {open ? (
                    <ul
                      className={classes.dropdown}
                      style={{ flexDirection: 'column' }}
                    >
                      <li className={classes.list_category}>
                        <a href="/category/husky">Chó Husky</a>
                      </li>
                      <li className={classes.list_category}>
                        <a href="/category/corgi">Chó Corgi</a>
                      </li>
                      <li>
                        <a href="/category/samoyed">Chó Samoyed</a>
                      </li>
                    </ul>
                  ) : null}
                </div>
              </ClickAwayListener>
            </li>
            <li>
              {/* <a href="/order">ORDER</a> */}
              <Link to="/order">ORDER</Link>
            </li>
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
