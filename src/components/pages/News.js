import React from "react";
import { InfoConsumer } from "../context";
import NewsCard from "../NewsCard";

const News = () => {
  return (
    <InfoConsumer>
      {(value) => {
        return value.news.map((item) => {
          return <NewsCard key={item.id} item={item} />;
        });
      }}
    </InfoConsumer>
  );
};

export default News;
