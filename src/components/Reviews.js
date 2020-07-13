import React from "react";
import { InfoConsumer } from "./context";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <InfoConsumer>
      {(data) => {
        return data.reviews.map((person) => {
          return <ReviewCard key={person.id} person={person} />;
        });
      }}
    </InfoConsumer>
  );
};

export default Reviews;
