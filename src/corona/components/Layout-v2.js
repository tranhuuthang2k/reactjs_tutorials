import React from "react";
import { Row, Col } from "antd";
import PropType from "prop-types";
const layoutVirus = (props) => {
  return (
    <Row>
      <Col span={20} offset={2}>
        {props.children}
      </Col>
    </Row>
  );
};
layoutVirus.prototype = {
  children: PropType.node.isRequired,
};
export default React.memo(layoutVirus);
