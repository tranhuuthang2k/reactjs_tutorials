import React from "react";
import { Breadcrumb } from "antd";
const BreadcrumbMovies = (props) => {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>{props.item_lv1}</Breadcrumb.Item>
      <Breadcrumb.Item>{props.item_lv2}</Breadcrumb.Item>
      <Breadcrumb.Item>{props.item_lv3}</Breadcrumb.Item>
    </Breadcrumb>
  );
};
export default React.memo(BreadcrumbMovies);
