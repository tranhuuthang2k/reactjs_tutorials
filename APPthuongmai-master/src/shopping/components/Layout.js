import React from "react";
import { Layout } from "antd";
import HeaderShopping from "./partials/Header";
import SideBarShopping from "./partials/SideBar";
import BreadcrumbShopping from "./partials/Breadcrumb";
import FooterShopping from "./partials/Footer";
import "./style.css";
const { Content } = Layout;
const LayoutShopping = (props) => {
  return (
    <Layout>
      <HeaderShopping />
      <Layout>
        <SideBarShopping />
        <Layout style={{ padding: "0 24px 24px" }}>
          <BreadcrumbShopping
            sub_1={props.sub_1}
            sub_2={props.sub_2}
            sub_3={props.sub_3}
          />
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
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
