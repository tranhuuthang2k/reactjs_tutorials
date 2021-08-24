import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
import NumberFormat from "react-number-format";
import { Image } from "antd";
import "../../../styles/product.css";
const CardProduct = ({ data }) => {
  return (
    <Row>
      <Col
        span={24}
        style={{
          border: "1px solid #d1d5db",
          overflow: "hidden",
        }}
      >
        <Link to={`/product/${slugify(data.name)}/${data.id}`}>
          <div className="container_product">
            <Image
              style={{ borderRadius: "5%" }}
              src={data.image}
              preview={false}
              className="Image"
            />
            <div className="backgroud_hidden"></div>
            <span className="Price">
              <NumberFormat
                value={data.price}
                displayType={"text"}
                thousandSeparator={true}
                suffix=" ₫"
              />
            </span>
          </div>
        </Link>
        <div className="description_product">
          <h3>{data.name}</h3>
          {/* <p>Lorem ipsum dolor sit amet</p> */}
        </div>
      </Col>
    </Row>
  );
};
export default React.memo(CardProduct);
