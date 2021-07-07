import React from 'react';
import { Row, Col, Card, Image } from 'antd';
import PropTypes from 'prop-types';

const InfoWeather = (props) => {
  return (
    <Row>
      <Col span={20} offset={2}>
        <Card size="small" title="Thong tin thoi tiet">
          <p>- Nhiet do: {props.dataWeather.temp}</p>
          <p>- Thong tin: {props.dataWeather.main}</p>
          <p>- Mieu ta: {props.dataWeather.description}</p>
          <div>
            <Image src={`http://openweathermap.org/img/w/${props.dataWeather.icon}.png`} />
          </div>
          <p>- Ap suat: {props.dataWeather.pressure}</p>
          <p>- Do am: {props.dataWeather.humidity}</p>
        </Card>
      </Col>
    </Row>
  )
}
InfoWeather.propTypes = {
  dataWeather: PropTypes.object
}
export default React.memo(InfoWeather);