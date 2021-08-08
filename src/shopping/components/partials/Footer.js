import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;
const FooterShopping = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      MrKatsu ©2021 Created by MrKatsu
    </Footer>
  );
};
export default React.memo(FooterShopping);
