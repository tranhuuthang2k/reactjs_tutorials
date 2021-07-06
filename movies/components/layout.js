import React from "react";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import "./movies.css";
import { Layout } from "antd";
const { Content } = Layout;

const LayoutMovies = (props) => {
  return (
    <Layout>
      <Header />

      <Content style={{ padding: "0 50px" }}>
        {/* noi dung */}
        {props.children}
      </Content>
      <Footer />
    </Layout>
  );
};
export default React.memo(LayoutMovies);
