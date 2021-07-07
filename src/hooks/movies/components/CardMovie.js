import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const CardMovie = ({ list }) => {
  return (
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
  );
};
export default React.memo(CardMovie);
