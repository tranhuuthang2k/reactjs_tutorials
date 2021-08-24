import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Col, Row, Skeleton } from "antd";
import { getDataProductFeautured } from "../../../reselect/reselect";
import CardProduct from "./Card";
import { helpers } from "../../../helpers/common";

const FeatureComponent = () => {
  const { featured } = useSelector(
    createStructuredSelector({
      featured: getDataProductFeautured,
    })
  );
  if (helpers.isEmptyObject(featured)) {
    return <Skeleton active />;
  }
  return (
    <Row style={{ margin: "30px 0px" }}>
      <Col span={24}>
        <h3 style={{ textAlign: "center", fontSize: 25 }}> HUSKY</h3>
        <Row>
          {featured.map((item, key) => (
            <Col sm={12} md={6} xs={12} key={key}>
              <CardProduct data={item} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
export default React.memo(FeatureComponent);
