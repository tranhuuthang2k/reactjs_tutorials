import React, { useState, useEffect } from "react";
import LayoutMovies from "../../components/layout";
import BreadcrumbMovies from "../../components/BreadcrumbMovies";
import { Row, Col, Image, Skeleton } from "antd";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { helper } from "../../helpers/common";

const DetailMovie = () => {
  const { id, slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [detailMovie, setDetailMovie] = useState({});
  useEffect(() => {
    const getData = async () => {
      const data = await api.getDataMovieById(id);
      const result = {};
      if (!helper.isEmptyObject(data)) {
        result.poster_path = data.poster_path;
        result.original_title = data.original_title;
        result.title = data.title;
        result.overview = data.overview;
        result.imdb_id = data.imdb_id;
        result.vote_average = data.vote_average;
        result.vote_count = data.vote_count;
        result.images = data["images"]["posters"] || [];
        setDetailMovie(result);
      }
      setLoading(false);
    };
    getData();
  }, [id]);

  // hieu ung loading data
  if (loading || helper.isEmptyObject(detailMovie)) {
    return <Skeleton active />;
  }

  return (
    <LayoutMovies>
      <BreadcrumbMovies item_lv1="App" item_lv2="Movies" item_lv3={slug} />
      <div className="site-layout-content">
        <Row>
          <Col span={8}>
            <div style={{ padding: "20px" }}>
              <Image
                src={`https://image.tmdb.org/t/p/w300${detailMovie.poster_path}`}
              />

              <p> {detailMovie.original_title} </p>
            </div>
          </Col>
          <Col span={16}>
            <div style={{ padding: "20px" }}>
              <h2> {detailMovie.title} </h2>
              <p> {detailMovie.overview} </p>
              <p> vote average: {detailMovie.vote_average}</p>
              <p> vote count: {detailMovie.vote_count}</p>
              <p> imdb id: {detailMovie.imdb_id}</p>

              <Row style={{ marginTop: "20px" }}>
                {detailMovie.images.map((item, index) => (
                  <Col
                    span={4}
                    key={"item" + index}
                    style={{ marginRight: "10px" }}
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/w300${item.file_path}`}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </LayoutMovies>
  );
};
export default DetailMovie;
