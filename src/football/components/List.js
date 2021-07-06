import React from "react";
import { Row, Col } from "antd";
import ViewItems from "./Item";
import MyContext from "../context";
const ListResultFootbal = () => {
  return (
    <Row>
      <Col span={20} offset={2}>
        <h1 style={{ textAlign: "center" }}>Kết quả vòng bảng Euro 2020w</h1>
        <MyContext.Consumer>
          {(context) => {
            // console.log(context);
            if (context.loading) {
              return <h3>loading data</h3>;
            }
            return <ViewItems />;
          }}
        </MyContext.Consumer>
      </Col>
    </Row>
  );
};
export default React.memo(ListResultFootbal);
