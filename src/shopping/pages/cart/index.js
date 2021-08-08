import React from "react";
import LayoutShopping from "../../components/Layout";
import { Button, InputNumber } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Image } from "antd";
import { removetCartAction } from "../../actions";
import { changeQuantityCartAction } from "../../actions";
import NumberFormat from "react-number-format";

const CartShopping = () => {
  const productCarts = useSelector((state) => state.reducerCart.shoppingCart);
  const dispatch = useDispatch();
  const getTotal = () => {
    // eslint-disable-next-line no-lone-blocks
    {
      let result = productCarts.reduce(
        (total, item) =>
          total +
          (item.shoppingCart.price * item.shoppingCart.quantity * 100) / 100,
        0
      );

      return result;
    }
  };
  return (
    <LayoutShopping sub_1="Product" sub_2="cart" sub_3="view">
      <Row>
        <Col span={24}>
          {productCarts.length === 0 && (
            <h1> Bạn chưa có sản phẩm trong giỏ hàng</h1>
          )}

          {productCarts.map((item, index) => (
            <Row
              key={index}
              style={{
                margin: "15px 0px",
                border: "1px solid #ccc",
                padding: "10px",
              }}
            >
              <Col sm={12} xs={12} md={4}>
                <Image src={item.shoppingCart.image} />
              </Col>
              <Col span={10} offset={1}>
                <h4> {item.shoppingCart.name}</h4>
                <NumberFormat
                  value={item.shoppingCart.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix=" ₫"
                  prefix="Price: "
                />
                <p>
                  <NumberFormat
                    value={item.shoppingCart.price * item.shoppingCart.quantity}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix=" ₫"
                    style={{ fontWeight: "bold" }}
                    prefix="Money: "
                  />
                </p>
                <br />
                <InputNumber
                  min={1}
                  max={30}
                  value={item.shoppingCart.quantity}
                  onChange={(value) => {
                    dispatch(
                      changeQuantityCartAction(value, item.shoppingCart.id)
                    );
                  }}
                />
                <Button
                  type="dashed"
                  onClick={() =>
                    dispatch(removetCartAction(item.shoppingCart.id, 1))
                  }
                >
                  Xóa{" "}
                </Button>
              </Col>
            </Row>
          ))}
          <div style={{ clear: "both" }}></div>
          {getTotal() > 0 && (
            <h3 style={{ float: "right" }}>
              <NumberFormat
                value={getTotal()}
                displayType={"text"}
                style={{ color: "red", fontWeight: "bold" }}
                thousandSeparator={true}
                suffix=" ₫"
                prefix="Tổng Cộng: "
              />
            </h3>
          )}
          <div style={{ clear: "both" }}></div>
        </Col>
      </Row>
    </LayoutShopping>
  );
};
export default React.memo(CartShopping);
