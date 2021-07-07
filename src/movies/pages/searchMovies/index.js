// eslint-disable-next-line
import React from "react";
import InputSearchMovies from "./components/search";
import LayoutMovies from "../../components/layout";
import BreadcrumbMovies from "../../components/BreadcrumbMovies";
import { api } from "../../services/api";
import { helper } from "../../helpers/common";
import { Row, Col, Pagination } from "antd";
import CardMovies from "../../components/CardMovies";
const SearchMovies = () => {
  const [loading, setLoading] = React.useState(false);
  const [dataSearch, setDataSearch] = React.useState({});
  const [page, setPage] = React.useState(1);
  const [results, setResults] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(1);
  const [keywordSearch, setKeywordSearch] = React.useState("");
  const searchFilm = async (keywordSearch) => {
    if (keywordSearch) {
      setLoading(true);
      setKeywordSearch(keywordSearch);
      const data = await api.searchMovieByKeyword(keywordSearch, page);
      if (!helper.isEmptyObject(data)) {
        if (data.hasOwnProperty("results")) {
          setDataSearch(data.results);
          setResults(data.total_results);
          setTotalPage(data.total_pages);
        }
      }
      setLoading(false);
    }
  };
  React.useEffect(() => {
    const searchFilm = async (keywordSearch) => {
      if (keywordSearch) {
        setLoading(true);
        setKeywordSearch(keywordSearch);
        const data = await api.searchMovieByKeyword(keywordSearch, page);
        if (!helper.isEmptyObject(data)) {
          if (data.hasOwnProperty("results")) {
            setDataSearch(data.results);
            setResults(data.total_results);
            setTotalPage(data.total_pages);
          }
        }
        setLoading(false);
      }
    };
    searchFilm(keywordSearch);
  }, [keywordSearch, page]);
  const getDataByPage = (p) => {
    if (p >= 1 && p <= totalPage) {
      setPage(p);
    }
  };
  return (
    <LayoutMovies>
      <BreadcrumbMovies
        item_lv1="App"
        item_lv2="Movies"
        item_lv3="Search-film"
      />
      <div className="site-layout-content">
        <Row>
          <Col span={24}>
            <h3 style={{ textAlign: "center" }}>
              This is search movies page !
            </h3>
            <InputSearchMovies search={searchFilm} loading={loading} />
            {!helper.isEmptyObject(dataSearch) && (
              <Row style={{ marginTop: "30px" }}>
                {dataSearch.map((item) => (
                  <Col span={6} key={item.id}>
                    <CardMovies item={item} />
                  </Col>
                ))}
              </Row>
            )}
            {results > 1 && (
              <Pagination
                style={{ textAlign: "center" }}
                current={page}
                defaultCurrent={1}
                pageSize={20}
                total={results}
                onChange={(p) => getDataByPage(p)}
              />
            )}
          </Col>
        </Row>
      </div>
    </LayoutMovies>
  );
};
export default React.memo(SearchMovies);
