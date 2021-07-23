import React from "react";
import { Form, Input, Button, Row, Col, Checkbox } from "antd";
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
      if (values.remember) {
        helper.savePasswordToLocal();
      } else {
        helper.RemovePasswordToLocal();
      }
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
            remember: false,
            username:
              helper.getPasswordLogin() !== null
                ? helper.getPasswordLogin().user
                : "",
            password:
              helper.getPasswordLogin() !== null
                ? helper.getPasswordLogin().password
                : "",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            placeholder="Select a option and change input text above"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username is admin",
              },
            ]}
          >
            <Input placeholder="admin" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password is 123",
              },
            ]}
          >
            <Input.Password placeholder="123" />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Save Password </Checkbox>
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
