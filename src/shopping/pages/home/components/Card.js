import React from "react";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
import NumberFormat from "react-number-format";
const { Meta } = Card;
const CardProduct = ({ data }) => {
  return (
    <Row>
      <Col span={20} offset={2}>
        <Link to={`/product/${slugify(data.name)}/${data.id}`}>
          <Card
            hoverable
            style={{ marginTop: "15px" }}
            cover={
              <img alt={data.name} src={data.image} style={{ marginTop: 20 }} />
            }
          >
            <Meta title={data.name} />
            <NumberFormat
              value={data.price}
              displayType={"text"}
              thousandSeparator={true}
              suffix=" ₫"
            />
          </Card>
        </Link>
      </Col>
    </Row>
  );
};
export default React.memo(CardProduct);
