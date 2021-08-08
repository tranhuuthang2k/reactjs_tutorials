import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Checkbox, Col, Row } from "antd";
import { loginRequestAction } from "../../actions";
import { loginFailMessage } from "../../reselect/reselect";
import { createStructuredSelector } from "reselect";
const Login = () => {
  const { loginFail } = useSelector(
    createStructuredSelector({
      loginFail: loginFailMessage,
    })
  );

  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(loginRequestAction(values.email, values.password));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row style={{ marginTop: 30 }}>
      <Col span={10} offset={6}>
        {loginFail && <h2>{loginFail}</h2>}
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
export default React.memo(Login);
