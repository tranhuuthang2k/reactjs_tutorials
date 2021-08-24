import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Col, Row, Skeleton } from "antd";
import { getDataProductTopSelling } from "../../../reselect/reselect";
import CardProduct from "./Card";
import { helpers } from "../../../helpers/common";
const TopSelling = () => {
  const { TopSelling } = useSelector(
    createStructuredSelector({
      TopSelling: getDataProductTopSelling,
    })
  );
  if (helpers.isEmptyObject(TopSelling)) {
    return <Skeleton active />;
  }
  return (
    <Row style={{ margin: "10px 0px" }}>
      <Col span={24}>
        <h3 style={{ textAlign: "center", fontSize: 25 }}> CORGI</h3>
        <Row>
          {TopSelling.map((item, key) => (
            <Col sm={12} md={6} key={key}>
              <CardProduct data={item} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
export default React.memo(TopSelling);
