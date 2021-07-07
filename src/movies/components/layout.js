import React from 'react';
import HeaderMovies from './partials/Header';
import FooterMovies from './partials/Footer';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import './movies.css';

const { Content } = Layout;

const LayoutMovies = (props) => {
  return (
    <Layout className="layout">
      <HeaderMovies/>
      <Content style={{ padding: '0 50px' }}>
        {props.children}
      </Content>
      <FooterMovies/>
    </Layout>
  )
}
LayoutMovies.propTypes = {
  children: PropTypes.node.isRequired
}
export default React.memo(LayoutMovies);