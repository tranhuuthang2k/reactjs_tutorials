import React from "react";
import LayoutShopping from "../../components/Layout";
import { Button, InputNumber } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import { removetCartAction } from "../../actions";
import { changeQuantityCartAction } from "../../actions";
import NumberFormat from "react-number-format";
import "../home/style.css";
import "../../../shopping/styles/product.css";
import logo_header from "../../img/hinhnenpet.jpg";
import Checkout from "./Checkout";
const CartShopping = () => {
  const productCarts = useSelector((state) => state.reducerCart.shoppingCart);

  const dispatch = useDispatch();
  // const [qty, setNumberQty] = useState([]);
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

  // const handlechangeQty = (e) => {
  //   console.log(e.target.value);
  // };
  if (productCarts.length === 0) {
    return (
      <LayoutShopping>
        <img
          src={logo_header}
          alt="Error_image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <h1 style={{ textAlign: "center" }}>
          Bạn chưa có sản phẩm trong giỏ hàng
        </h1>
      </LayoutShopping>
    );
  }
  return (
    <LayoutShopping>
      <div className="container_image_header">
        <img
          src={logo_header}
          alt="Error_image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="Shopping_cart">
        <Row>
          <Col span={20} offset={2}>
            <Row style={{ display: "flex", justifyContent: "space-around" }}>
              <Col>
                <h6>PRODUCTS</h6>{" "}
              </Col>
              <Col>
                <h6>NAME</h6>{" "}
              </Col>
              <Col>
                <h6>PRICE</h6>
              </Col>
              <Col>
                <h6>QTY</h6>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            {productCarts.map((item, index) => (
              <div key={index}>
                <Row>
                  <div className="border_bottom"></div>
                </Row>
                <Row style={{ marginTop: 10, justifyContent: "space-around" }}>
                  <Col>
                    <img
                      src={item.shoppingCart.image}
                      alt="error"
                      style={{
                        height: 168,
                        objectFit: "cover",
                        borderRadius: "5%",
                      }}
                    />
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h5>{item.shoppingCart.name}</h5>
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span className="price">
                      <small>
                        <NumberFormat
                          style={{ fontSize: 20 }}
                          value={item.shoppingCart.price}
                          displayType={"text"}
                          thousandSeparator={true}
                          suffix="₫"
                        />
                      </small>
                    </span>
                  </Col>
                  <Col
                    style={{
                      width: 139,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
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
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: 156,
                    }}
                  >
                    <span className="price">
                      <Button
                        type="dashed"
                        onClick={() =>
                          dispatch(removetCartAction(item.shoppingCart.id, 1))
                        }
                      >
                        Xóa{" "}
                      </Button>
                    </span>
                  </Col>
                  <Col style={{ display: "flex", alignItems: "center" }}></Col>
                </Row>
              </div>
            ))}
          </Col>
        </Row>
      </div>
      <div style={{ clear: "both" }}></div>
      {getTotal() > 0 && (
        <h5 style={{ float: "right" }}>
          <NumberFormat
            value={getTotal()}
            displayType={"text"}
            thousandSeparator={true}
            suffix=" ₫"
            prefix="Tổng Cộng: "
          />
        </h5>
      )}
      {/* Chỗ này import component checkout nhé cu phát */}
      {/* https://ant.design/components/form/ */}
      <Checkout />
      <div style={{ clear: "both" }}></div>
    </LayoutShopping>
  );
};
export default React.memo(CartShopping);
