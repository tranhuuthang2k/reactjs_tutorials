import React from 'react';
import { Row, Col } from 'antd';
import CardMovie from './CardMovie';

const ListMovies = ({ movies }) => {
  return (
    <Row style={{ margin: '30px 0px' }}>
      <Col span={20} offset={2}>
        <h2 style={{ textAlign: 'center' }}> Danh sach phim yeu thich ! </h2>
        <Row>
          {movies.map((item, index) => (
            <Col span={6} key={index}>
              <CardMovie list={item} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}
export default React.memo(ListMovies);