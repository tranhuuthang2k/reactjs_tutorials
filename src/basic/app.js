import React from 'react';
// import HeaderLayout from './components/header';
// import FooterLayout from './components/footer';
// import SidebarLayout from './components/sidebar';
import LayoutComponent from './components/layout';

// class component
class HelloWord extends React.Component {
  // hien thi
  render() {
    return (
      <>
        {/* su dung component */}
        {/* <HeaderLayout
          title="home-page"
        /> */}
        {/* h1 ma jsx */}

        <LayoutComponent>
          <h1> Hello word</h1>
          <h3> AAAAAAAA </h3>
        </LayoutComponent>

        {/* <SidebarLayout
          name="trieuNT"
        />
        <FooterLayout/> */}
      </>
    )
  }
}

// su dung cho nhung noi khac
export default HelloWord;