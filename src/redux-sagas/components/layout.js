import React from "react";
import Header from "../components/partials/Header";
import PropTypes from "prop-types";

import Footer from "../components/partials/Footer";
import "./football.css";
import { Layout } from "antd";
const { Content } = Layout;

const LayoutFootball = (props) => {
  return (
    <Layout className="layout">
      <Header />

      <Content>
        {/* noi dung */}
        {props.children}
      </Content>
      <Footer />
    </Layout>
  );
};
LayoutFootball.propTypes = {
  children: PropTypes.node.isRequired,
};
export default React.memo(LayoutFootball);
