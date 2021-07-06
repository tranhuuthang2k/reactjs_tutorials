import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
const { Meta } = Card;
const CardMovie = ({ list }) => {
  // console.log(list);
  return (
    <Link to={`/movie/${slugify(list.title)}~${list.id}`}>
      <Card
        hoverable
        style={{ margin: 10 }}
        cover={
          <img
            alt="example"
            src={`https://image.tmdb.org/t/p/w300${list.poster_path}`}
          />
        }
      >
        <Meta title={list.title} description="www.instagram.com" />
      </Card>
    </Link>
  );
};
export default React.memo(CardMovie);
