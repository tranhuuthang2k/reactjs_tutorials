import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;
const FooterMovies = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Copyright ©2021 Created by MrKatsu
    </Footer>
  );
};
export default React.memo(FooterMovies);
