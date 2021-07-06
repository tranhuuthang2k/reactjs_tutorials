import React from 'react';
import Header from './header';
import SideBar from './sidebar';
import Footer from './footer';

class LayoutComponent extends React.Component {

  render() {
    return(
      <>
        <Header
          title="home-page"
        />
        {this.props.children}
        <SideBar name="trieuNT" />
        <Footer/>
      </>
    )
  }
}
export default LayoutComponent;