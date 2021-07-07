import React, { useContext } from 'react';
import { Row, Col, Table, Skeleton } from 'antd';
import CoronaContext from '../context/index';
import { helper } from '../helpers/common';
import NumberFormat from 'react-number-format';

const columns = [
  // cac dong va cot cua bang
  {
    title: "Country",
    dataIndex: "Country",
    key: "Country"
  },
  {
    title: "Country code",
    dataIndex: "CountryCode",
    key: "CountryCode"
  },
  {
    title: "New confirmed",
    dataIndex: "NewConfirmed",
    key: "NewConfirmed",
    render: text => <NumberFormat value={text} displayType={'text'} thousandSeparator={true}/>
  },
  {
    title: "Total confirmed",
    dataIndex: "TotalConfirmed",
    key: "TotalConfirmed",
    render: text => <NumberFormat value={text} displayType={'text'} thousandSeparator={true}/>
  },
  {
    title: "New deaths",
    dataIndex: "NewDeaths",
    key: "NewDeaths",
    render: text => <NumberFormat value={text} displayType={'text'} thousandSeparator={true}/>
  },
  {
    title: "Total deaths",
    dataIndex: "TotalDeaths",
    key: "TotalDeaths",
    render: text => <NumberFormat value={text} displayType={'text'} thousandSeparator={true}/>
  },
  {
    title: "New recovered",
    dataIndex: "NewRecovered",
    key: "NewRecovered",
    render: text => <NumberFormat value={text} displayType={'text'} thousandSeparator={true}/>
  },
  {
    title: "Total recovered",
    dataIndex: "TotalRecovered",
    key: "TotalRecovered",
    render: text => <NumberFormat value={text} displayType={'text'} thousandSeparator={true}/>
  },
];

const CountriesVirus = () => {

  const { loading, virus } = useContext(CoronaContext);
  // waiting load data
  if(loading || helper.isEmptyObject(virus)) {
    return <Skeleton active />
  }

  return (
    <Row style={{ marginTop: '20px' }}>
      <Col span={24}>
        <Table rowKey="ID" dataSource={virus.Countries} columns={columns} />
      </Col>
    </Row>
  )
}
export default React.memo(CountriesVirus);