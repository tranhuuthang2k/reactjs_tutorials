import React from "react";
import { Row, Col } from "antd";
import LayoutShopping from "../../components/Layout";
const DetailShopping = () => {
  return (
    <LayoutShopping sub_1="Detail" sub_2="Product" sub_3="Iphones">
      <Row>
        <Col span="24">
          <h3> This is detail</h3>
        </Col>
      </Row>
    </LayoutShopping>
  );
};
export default React.memo(DetailShopping);
