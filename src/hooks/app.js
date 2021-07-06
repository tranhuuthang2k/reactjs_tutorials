import React, { useEffect } from "react";
import ListMovie from "./movies/components/ListMovie";
import { Row, Col, Skeleton, Pagination } from "antd";

import { api } from "./movies/services/api";
import { helper } from "./movies/helpers/common";
const AppMovies = () => {
  const [loading, setLoading] = React.useState(false);
  const [movies, setLismovies] = React.useState({});
  const [page, setPage] = React.useState(1);
  const [results, setResults] = React.useState(1);

  const [totalPage, setTotalPage] = React.useState(1);
  const getDataApi = async () => {
    setLoading(true);
    const data = await api.getdata(page);
    if (!helper.isEmptyObject(data)) {
      if (data.hasOwnProperty("results")) {
        setLismovies(data.results);
        setResults(data.total_results);
        setTotalPage(data.total_pages);
      }
    }
    setLoading(false);
  };

  useEffect(() => getDataApi(), [page]);

  if (loading || helper.isEmptyObject(movies)) {
    return <Skeleton active />;
  }
  const getDataByPage = (p) => {
    if (p >= 1 && p <= totalPage) {
      setPage(p);
    }
  };
  return (
    <Col span={20} offset={2}>
      <ListMovie movies={movies} />
      <Pagination
        style={{ textAlign: "center" }}
        current={page}
        defaultCurrent={1}
        pageSize={20}
        total={results}
        onChange={(p) => getDataByPage(p)}
      />
    </Col>
  );
};
export default React.memo(AppMovies);
