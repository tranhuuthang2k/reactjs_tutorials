import React from "react";
import { Row, Col, Skeleton } from "antd";
import "../../../styles/product.css";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getDataProductLatest } from "../../../reselect/reselect";
import { helpers } from "../../../helpers/common";
import logo_header from "../../../img/hinhnenpet.jpg";
const Product = () => {
  const { latest } = useSelector(
    createStructuredSelector({
      latest: getDataProductLatest,
    })
  );
  if (helpers.isEmptyObject(latest)) {
    return <Skeleton active />;
  }

  return (
    <div>
      <Row>
        <Col span={24}>
          <div className="container_image_header">
            <img
              src={logo_header}
              alt="Error_image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col span={24}>
          <div className="heading_text_center">
            <h4>NEW ARRIVAL</h4>
            <span>
              shop Chó Mèo gần đây, shop Chó Mèo Đà Nẵng, phụ kiện chó mèo Đà
              Nẵng, Pet shop Đà Nẵng, Cát Mèo Đà Nẵng,Đà Nẵng Pet Shop
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
