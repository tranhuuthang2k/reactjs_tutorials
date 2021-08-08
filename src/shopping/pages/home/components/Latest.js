import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Col, Row, Skeleton } from "antd";
import { getDataProductLatest } from "../../../reselect/reselect";
import CardProduct from "./Card";
import { helpers } from "../../../helpers/common";
const Latest = () => {
  const { latest } = useSelector(
    createStructuredSelector({
      latest: getDataProductLatest,
    })
  );
  if (helpers.isEmptyObject(latest)) {
    return <Skeleton active />;
  }
  return (
    <Row style={{ margin: "30px 0px" }}>
      <Col span={24}>
        <h3 style={{ textAlign: "center", fontSize: 25 }}> Latest</h3>
        <Row>
          {latest.map((item, key) => (
            <Col sm={12} md={6} key={key}>
              <CardProduct data={item} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
export default React.memo(Latest);
