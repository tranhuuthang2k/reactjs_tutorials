import React from "react";
import { Breadcrumb } from "antd";
const BreadcrumbShopping = (props) => {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>{props.sub_1}</Breadcrumb.Item>
      <Breadcrumb.Item>{props.sub_2}</Breadcrumb.Item>
      <Breadcrumb.Item>{props.sub_3}</Breadcrumb.Item>
    </Breadcrumb>
  );
};
export default React.memo(BreadcrumbShopping);
