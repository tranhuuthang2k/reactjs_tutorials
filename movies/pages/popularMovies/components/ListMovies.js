import React from "react";
import { Row, Col } from "antd";
import CardMovie from "./CardMovie";
const ListMovie = ({ movies }) => {
  return (
    <Row style={{ margin: "30px 0px" }}>
      <Col span={20} offset={2}>
        <h2 style={{ textAlign: "center" }}>Danh sách yêu thích...</h2>
        <Row>
          {movies.map((item, index) => (
            <Col span={6} key={"item" + index}>
              <CardMovie list={item} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
export default React.memo(ListMovie);
