import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { api } from "../../services/api";
import { helper } from "../../helpers/common";
import { useHistory } from "react-router-dom";

const LoginMovies = () => {
  const history = useHistory();
  const [ErrorLogin, setErrorLogin] = React.useState(null);
  const onFinish = (values) => {
    let token = api.checkLoginMovies(values.username, values.password);
    if (token !== null) {
      setErrorLogin(null);
      helper.saveTokenToLocalStorage(token);
      history.push("/");
    } else {
      setErrorLogin("Account invalid");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row style={{ marginTop: 30 }}>
      <Col span={20} offset={2}>
        <h1 style={{ textAlign: "center" }}>
          {ErrorLogin !== null && (
            <p style={{ textAlign: "center", color: "red" }}>{ErrorLogin}</p>
          )}
        </h1>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
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
            label="Password"
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
            wrapperCol={{
              offset: 11,
              span: 11,
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
export default React.memo(LoginMovies);
