import React from "react";
import { Col, Row, Input } from "antd";
import PropTypes from "prop-types";
const { Search } = Input;
const inputSearchMovies = (props) => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Search
          placeholder="nhập tên phim"
          enterButton="search"
          size="large"
          loading={props.loading}
          onSearch={(val) => props.search(val)}
        />
      </Col>
    </Row>
  );
};
inputSearchMovies.prototype = {
  loading: PropTypes.bool,
  onSearch: PropTypes.func.isRequired,
};
export default React.memo(inputSearchMovies);
