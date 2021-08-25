import React from "react";
import { Layout } from "antd";
import HeaderShopping from "./partials/Header";
import FooterShopping from "./partials/Footer";
import "./style.css";
const { Content } = Layout;
const LayoutShopping = (props) => {
  return (
    <Layout>
      <HeaderShopping />
      <Layout>
        {/* <SideBar /> */}
        <Layout
        // style={{ padding: '0 24px 24px' }}
        >
          {/* <BreadcrumbShopping
            sub_1={props.sub_1}
            sub_2={props.sub_2}
            sub_3={props.sub_3}
          /> */}
          <Content
            className="site-layout-background"
            style={{
              // padding: 24,

              minHeight: 180,
              marginTop: 80,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
      <FooterShopping />
    </Layout>
  );
};
export default React.memo(LayoutShopping);
