import React, { useContext } from 'react';
import { Row, Col, Card, Skeleton } from 'antd';
import CoronaContext from '../context/index';
import { helper } from '../helpers/common';
import NumberFormat from 'react-number-format';

const GlobalVirus = () => {
  // useContext : hooks of context api
  const { loading, virus } = useContext(CoronaContext);
  // waiting load data
  if(loading || helper.isEmptyObject(virus)) {
    return <Skeleton active />
  }

  return (
    <Row>
      <Col span={8}>
        <Card title="Nhiem Benh">
          <p> - Ca nhiem : <NumberFormat value={virus.Global.NewConfirmed} displayType={'text'} thousandSeparator={true} /></p>
          <p> - Tong ca nhiem : <NumberFormat value={virus.Global.TotalConfirmed} displayType={'text'} thousandSeparator={true} /></p>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Tu vong">
          <p> - so ca tu vong : <NumberFormat value={virus.Global.NewDeaths} displayType={'text'} thousandSeparator={true} /></p>
          <p> - Tong so ca tu vong : <NumberFormat value={virus.Global.TotalDeaths} displayType={'text'} thousandSeparator={true} /></p>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Khoi benh">
          <p> - so ca khoi benh : <NumberFormat value={virus.Global.NewRecovered} displayType={'text'} thousandSeparator={true} /></p>
          <p> - Tong so ca khoi benh : <NumberFormat value={virus.Global.TotalRecovered} displayType={'text'} thousandSeparator={true} /></p>
        </Card>
      </Col>
    </Row>
  )
}
export default React.memo(GlobalVirus);
