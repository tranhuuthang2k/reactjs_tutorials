import React from "react";
import LayoutMovies from "../../components/layout";
import BreadcrumbMovies from "../../components/BreadcrumbMovies";
import { helper } from "../../helpers/common";
import { api } from "../../services/api";
import ListMovie from "../../pages/popularMovies/components/ListMovies";
import { Skeleton, Pagination } from "antd";
const PopularMovies = () => {
  const [loading, setLoading] = React.useState(false);
  const [dataFilm, setDataFilm] = React.useState({});
  const [page, setPage] = React.useState(1);
  const [results, setResults] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(1);

  React.useEffect(() => {
    const getDataApi = async () => {
      setLoading(true);
      const data = await api.getDataMovies(page);
      if (!helper.isEmptyObject(data)) {
        if (data.hasOwnProperty("results")) {
          setDataFilm(data.results);
          setResults(data.total_results);
          setTotalPage(data.total_pages);
        }
      }
      setLoading(false);
    };
    getDataApi();
  }, [page]);
  const getDataByPage = (p) => {
    if (p >= 1 && p <= totalPage) {
      setPage(p);
    }
  };
  if (loading || helper.isEmptyObject(dataFilm)) {
    return <Skeleton active />;
  }
  return (
    <LayoutMovies>
      <BreadcrumbMovies item_lv1="App" item_lv2="Movies" item_lv3="Popular" />
      <div className="site-layout-content">
        <ListMovie movies={dataFilm} />
        <Pagination
          style={{ textAlign: "center" }}
          current={page}
          defaultCurrent={1}
          pageSize={20}
          total={results}
          onChange={(p) => getDataByPage(p)}
        />
      </div>
    </LayoutMovies>
  );
};
export default React.memo(PopularMovies);
