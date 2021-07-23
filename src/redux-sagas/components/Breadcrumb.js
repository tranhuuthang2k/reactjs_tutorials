import React from "react";
import { Breadcrumb } from "antd";
import PropTypes from "prop-types";

const BreadcrumbFootball = (props) => {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>{props.item_lv1}</Breadcrumb.Item>
      <Breadcrumb.Item>{props.item_lv2}</Breadcrumb.Item>
      <Breadcrumb.Item>{props.item_lv3}</Breadcrumb.Item>
    </Breadcrumb>
  );
};
BreadcrumbFootball.propTypes = {
  item_lv1: PropTypes.string,
  item_lv2: PropTypes.string,
  item_lv3: PropTypes.string,
};
export default React.memo(BreadcrumbFootball);
