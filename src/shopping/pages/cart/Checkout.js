import React from "react";
import "../../../shopping/styles/product.css";
import { Row, Col, Form, Input, notification } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Checkoutloading, Checkout } from "../../actions/index";
import { ClearCart } from "../../actions";
import NumberFormat from "react-number-format";

const CheckoutShopping = () => {
  const productCarts = useSelector((state) => state.reducerCart.shoppingCart);
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
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  function guidGenerator() {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  }
  const openNotificationCheckout = (type) => {
    notification[type]({
      message: "Checkout success",
      description: "you can view order",
    });
  };
  const ErrorCheckout = (type) => {
    notification[type]({
      message: "You do not choose a cart",
      // description: 'you '
    });
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(Checkoutloading(true));
    if (productCarts.length === 0) {
      ErrorCheckout("error");
    } else {
      dispatch(
        Checkout(
          guidGenerator(),
          values.Firstname,
          values.address,
          values.companyname,
          values.country,
          values.email,
          values.lastname,
          values.phone,
          values.towncity,
          productCarts,
          new Date().toLocaleString(),
          getTotal()
        )
      );
      dispatch(Checkoutloading(false));
      form.resetFields();
      openNotificationCheckout("success");
      dispatch(ClearCart());
    }
  };

  const onFinishFailed = (errorInfo) => {
    if (errorInfo.errorFields.length === 0) {
      openNotificationCheckout("success");
    }
  };

  return (
    <Form
      form={form}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row style={{ marginTop: 100 }}>
        <Col offset={6} span={12}>
          <Row>
            <Col style={{ position: "relative" }}>
              <Row style={{ justifyContent: "center" }}>
                <h3>BILLING DETAILS</h3>
              </Row>
              <Row style={{ justifyContent: "center" }}>
                <Col
                  md={10}
                  sm={20}
                  lg={10}
                  xl={10}
                  style={{ paddingRight: 20 }}
                >
                  <Row style={{ position: "relative" }}>
                    <label>FIRST NAME</label>
                    <Form.Item
                      name="Firstname"
                      rules={[
                        {
                          required: true,
                          message: "Please input your first name!",
                        },
                      ]}
                      style={{ width: 310 }}
                    >
                      <Input />
                    </Form.Item>
                  </Row>

                  <Row>
                    <label>COMPANY NAME</label>
                    <Form.Item
                      name="companyname"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Company Name!",
                        },
                      ]}
                      style={{ width: 310 }}
                    >
                      <Input />
                    </Form.Item>
                  </Row>

                  <Row>
                    <label>TOWN CITY</label>
                    <Form.Item
                      name="towncity"
                      rules={[
                        {
                          required: true,
                          message: "Please input your town city!",
                        },
                      ]}
                      style={{ width: 310 }}
                    >
                      <Input />
                    </Form.Item>
                  </Row>

                  <Row>
                    <label>EMAIL ADDRESS</label>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          type: "email",
                          message: "The input is not valid E-mail!",
                        },
                      ]}
                      style={{ width: 310 }}
                    >
                      <Input />
                    </Form.Item>
                  </Row>
                </Col>
                <Col md={10} sm={20} lg={10} xl={10}>
                  <Row>
                    <label>LAST NAME</label>
                    <Form.Item
                      name="lastname"
                      rules={[
                        {
                          required: true,
                          message: "Please input your last name!",
                        },
                      ]}
                      style={{ width: 310 }}
                    >
                      <Input />
                    </Form.Item>
                  </Row>

                  <Row>
                    <label>ADDRESS</label>
                    <Form.Item
                      name="address"
                      rules={[
                        {
                          required: true,
                          message: "Please input your address!",
                        },
                      ]}
                      style={{ width: 310 }}
                    >
                      <Input />
                    </Form.Item>
                  </Row>

                  <Row>
                    <label>COUNTRY</label>
                    <Form.Item
                      name="country"
                      rules={[
                        {
                          required: true,
                          message: "Please input your country!",
                        },
                      ]}
                      style={{ width: 310 }}
                    >
                      <Input />
                    </Form.Item>
                  </Row>

                  <Row>
                    <label>PHONE</label>
                    <Form.Item
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Not valid phone number",
                          pattern: new RegExp("^[0-9-+]{9,15}$"),
                        },
                      ]}
                      style={{ width: 310 }}
                    >
                      {/* <InputNumber min={1} max={10} size="small" /> */}
                      <Input />
                    </Form.Item>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={12} offset={6}>
              <Row style={{ justifyContent: "center" }}>
                <h3>YOUR ORDER</h3>
              </Row>
              <Row
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="border_checkout">
                  {productCarts.length === 0 ? (
                    <h3 style={{ textAlign: "center", color: "red" }}>
                      No product in cart
                    </h3>
                  ) : (
                    productCarts.map((item, index) => (
                      <div className="order_detail" key={index}>
                        <span>
                          {item.shoppingCart.name} x
                          <small>{item.shoppingCart.quantity}</small>
                        </span>
                        <span>
                          <NumberFormat
                            style={{ fontSize: 20 }}
                            value={
                              item.shoppingCart.price *
                              item.shoppingCart.quantity
                            }
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix="₫"
                          />
                        </span>
                      </div>
                    ))
                  )}

                  <div className="order_detail">
                    <span
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      TOTAL COST
                    </span>
                    <span
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      <NumberFormat
                        style={{ fontSize: 20 }}
                        value={getTotal()}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix="₫"
                      />
                    </span>
                  </div>
                  <div
                    style={{
                      padding: 10,
                      display: "flex",
                      justifyContent: "center",
                    }}
                    className="container_button"
                  >
                    <button
                      // htmlType="submit"
                      className="button_order"
                      style={{
                        width: 175,
                        height: 44,
                      }}
                    >
                      CHECKOUT
                    </button>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};
export default React.memo(CheckoutShopping);
