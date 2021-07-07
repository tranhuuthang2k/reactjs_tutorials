import React, { useState } from 'react';
import LayoutMovies from '../../components/layout';
import BreadcrumbMovies from '../../components/breadcrumb';
import CardMovies from '../../components/CardMovies';
import InputSearchMovies from './components/search';
import { Row, Col } from 'antd';
import { api } from '../../services/api';
import { helper } from '../../helpers/common';

const SearchMovies = () => {
  const [loading, setLoading] = useState(false);
  const [dataSearch, setDataSearch] = useState({});
  //const [page, setPage] = useState(1);

  const searchFilm = async (keyword) => {
    setLoading(true);
    const data = await api.searchMovieByKeyword(keyword, 1);
    if(!helper.isEmptyObject(data)){
      if(data.hasOwnProperty('results')){
        setDataSearch(data.results);
      }
    }
    setLoading(false);
  }

  return (
    <LayoutMovies>
      <BreadcrumbMovies
        item_lv1="App"
        item_lv2="Movies"
        item_lv3="Search"
      />
      <div className="site-layout-content">
        <Row>
          <Col span={24}>
            <h3 style={{ textAlign:'center' }}>This is search movies page !</h3>
            <InputSearchMovies
              search={searchFilm}
              loading={loading}
            />
            { !helper.isEmptyObject(dataSearch) 
              &&
              <Row style={{marginTop: '30px'}}>
                {dataSearch.map(item => (
                  <Col span={6} key={item.id}>
                    <CardMovies item={item} />
                  </Col>
                ))}
              </Row>
            }
          </Col>
        </Row>
      </div>
    </LayoutMovies>
  )
}
export default React.memo(SearchMovies);