import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterFootball = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Football ©2021 Created by MrKatsu
    </Footer>
  );
};
export default React.memo(FooterFootball);
