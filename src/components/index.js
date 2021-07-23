import React from "react";
import { Layout } from "antd";
import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import AcivityComponent from "../components/Activity";
import AboutComponent from "../components/About";

import "./style.css";
const { Content } = Layout;

const LayoutMaster = () => {
  return (
    <Layout className="layout">
      <HeaderComponent />
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb />
        <div className="site-layout-content">
          <AcivityComponent />
          <AboutComponent />
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
};
export default React.memo(LayoutMaster);
