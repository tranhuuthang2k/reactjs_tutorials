import React, { useState, useEffect } from 'react';
import ListMovies from './components/ListMovie';
import { api } from './services/api';
import { helper } from './helpers/common';
import { Skeleton, Pagination, Row, Col } from 'antd';

const AppMovies = () => {
  // khai bao state
  const [loading, setLoading] = useState(false); // loading data
  const [movies, setListMovies] = useState({}); // data movies
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  // khai bao 5 state

  // trong class component, call api trong componentDidMount
  // trong function component dung useEffect
  useEffect(() => {
    // viet ham call api
    const getDataApi = async () => {
      // set state
      setLoading(true);
      const data = await api.getDataMovies(page);
      if(!helper.isEmptyObject(data)){
        // co du lieu - cap nhat state
        if(data.hasOwnProperty('results')){
          // kiem tra object ton tai key ko???
          setListMovies(data.results);
        }
        // cap nhat state total item 
        if(data.hasOwnProperty('total_results')){
          setTotalResults(data.total_results);
        }
        // cap nhat total page
        if(data.hasOwnProperty('total_pages')){
          setTotalPage(data.total_pages);
        }
      }
      // dung viec get data
      setLoading(false);
    }
    getDataApi();
  },[page]); // tuong duong nhu componentDidMount(mang dieu kien rong) va componentDidUpdate(mang dieu kien ko rong)

  const getDataByPage = (p) => {
    // p >= 1 && p <= totalPage : cap nhat lai state page 
    if(p >= 1 && p <= totalPage) {
      setPage(p);
    }
  }

  // console.log(loading);
  // console.log(movies);

  return (
    <>
      { (loading || helper.isEmptyObject(movies)) ?
        <Skeleton active /> :
        <Row>
          <Col span={20} offset={2}>
            <ListMovies movies={movies} />
            <Pagination
              style={{ marginBottom: '30px', textAlign: 'center' }}
              current={page}
              total={totalResults}
              pageSize={20} // do api no quy dinh
              showSizeChanger={false} // khong hien thi chon item tren trang
              onChange={ p => getDataByPage(p) } // bam chuyen trang - p : trang chon bam
            />
          </Col>
        </Row>
      }
    </>

  )
}
export default React.memo(AppMovies)