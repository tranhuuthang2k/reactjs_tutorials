import React from 'react';
import { Row, Col } from 'antd';
import ViewItems from './Item';
import MyContext from '../context/index';

const ListResultFootball = () => {
  return (
    <Row>
      <Col span={20} offset={2}>
        <h1 style={{ textAlgin: 'center', margin: '30px 0px' }}> Ket qua vong bang Euro 2020</h1>
        <MyContext.Consumer>
          {context => {
            if(context.loading) {
              return <h3>Loading data ....</h3>
            }
            return <ViewItems/>
          }}
        </MyContext.Consumer>
        
      </Col>
    </Row>
  )
}
export default React.memo(ListResultFootball);