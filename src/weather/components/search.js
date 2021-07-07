import React from 'react';
import { Row, Col, Input } from 'antd';
import PropTypes from 'prop-types';

const { Search } = Input;

const SearchWeather = (props) => {
  return (
    <Row style={{ margin: '30px 0px' }}>
      <Col span={12} offset={6}>
        <Search
          placeholder="name of city ..."
          loading={props.loading}
          enterButton="Search"
          onSearch={val => props.search(val)}
        />
      </Col>
    </Row>
  )
}
SearchWeather.propTypes = {
  loading: PropTypes.bool.isRequired,
  search: PropTypes.func.isRequired
}
export default React.memo(SearchWeather);