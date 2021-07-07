import React from "react";
import { Row, Col, Input } from "antd";
import PropTypes from "prop-types";
const { Search } = Input;

const SearchWeather = (props) => {
  return (
    <Row style={{ margin: 30 }}>
      <Col span={12} offset={6}>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          loading={props.loading}
          onSearch={(val) => props.search(val)}
        />
      </Col>
    </Row>
  );
};
SearchWeather.prototypes = {
  loading: PropTypes.bool.isRequired,
  Search: PropTypes.func.isRequired,
};
export default React.memo(SearchWeather);
