import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';

const LayoutVirus = (props) => {
  return (
    <Row>
      <Col span={20} offset={2}>
        {props.children}
      </Col>
    </Row>
  )
}
LayoutVirus.propTypes = {
  children: PropTypes.node.isRequired
}

export default React.memo(LayoutVirus);