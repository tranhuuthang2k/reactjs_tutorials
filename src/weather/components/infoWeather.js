import React from "react";
import { Row, Col, Card, Image } from "antd";
const InfoWeather = (props) => {
  return (
    <Row>
      <Col span={20} offset={2}>
        <Card size="small" title="Thông Tin Thời Tiết">
          <p>-Nhiệt độ : {props.data.temp}</p>
          <p>-Miêu tả : {props.data.description}</p>
          <div>
            <Image
              width={40}
              src={`http://openweathermap.org/img/w/${props.data.icon}.png`}
            />
          </div>
          <p>-Áp suất : {props.data.pressure}</p>
          <p>-Độ ẩm: {props.data.humidity}</p>
        </Card>
      </Col>
    </Row>
  );
};
export default React.memo(InfoWeather);
