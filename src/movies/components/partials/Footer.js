import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterMovies = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>My movies ©2021 Created by ReactJS</Footer>
  )
} 
export default React.memo(FooterMovies);