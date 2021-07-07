import React from 'react';
import LayoutMovies from '../../components/layout';
import BreadcrumbMovies from '../../components/breadcrumb';

const PopularMovies = () => {
  return (
    <LayoutMovies>
      <BreadcrumbMovies
        item_lv1="App"
        item_lv2="Movies"
        item_lv3="Popular"
      />
      <div className="site-layout-content">
        <h3>This is popular movies page !</h3>
      </div>
    </LayoutMovies>
  )
}
export default React.memo(PopularMovies);