import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Col, Row, Skeleton } from "antd";
import { getDataProductLatest } from "../../../reselect/reselect";
import CardProduct from "./Card";
import { helpers } from "../../../helpers/common";
import { Link } from "react-router-dom";

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
        <h3 style={{ textAlign: "center", fontSize: 25 }}> SAMOYED</h3>
        <Row>
          {latest.map((item, key) => (
            <React.Fragment key={"product" + item.id}>
              {key < 4 && (
                <Col sm={12} md={6} xs={12} key={key}>
                  <CardProduct data={item} />
                </Col>
              )}
            </React.Fragment>
          ))}
        </Row>
        <Link to={`/category/samoyed`}>
          <h5
            style={{
              textAlign: "center",
              color: "green",
              marginTop: "10px",
              fontSize: "15px",
            }}
          >
            Xem Thêm
          </h5>
        </Link>
      </Col>
    </Row>
  );
};
export default React.memo(Latest);
