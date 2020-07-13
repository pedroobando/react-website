import React from "react";
import { InfoConsumer } from "./context";

const ReviewCard = (props) => {
  const { id, name, avatar, comment } = props.person;
  return (
    <InfoConsumer>
      {(data) => (
        <div className="media mt-5" key={id}>
          <img src={avatar} alt={name} className="mr-3" style={{ width: "40px" }} />
          <div className="media-body">
            <h5 className="mt-0">{name}</h5>
            <p>{comment}</p>
          </div>
        </div>
      )}
    </InfoConsumer>
  );
};

export default ReviewCard;
