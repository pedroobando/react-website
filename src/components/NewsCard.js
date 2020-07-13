import React from "react";
import { InfoConsumer } from "./context";
import { Link } from "react-router-dom";

const NewsCard = (props) => {
  const { id, newsTitle, newsText } = props.item;
  return (
    <InfoConsumer>
      {(value) => (
        <div className="card container mt-2 mb-3 p-5">
          <div className="card-body">
            <h5 className="card-title" key={id}>
              {newsTitle}
            </h5>
            <p className="card-text">{newsText}</p>
            <Link to="/" className="card-link">
              Read More{">>>"}
            </Link>
          </div>
        </div>
      )}
    </InfoConsumer>
  );
};

export default NewsCard;
