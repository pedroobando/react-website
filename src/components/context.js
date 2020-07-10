import React from "react";
import { placeInfo, reviews, detailInfo, news } from "../data";

const InfoContext = React.createContext();

const initState = {
  info: placeInfo,
  reviews,
  detailInfo,
  news,
};

const InfoProvider = (props) => {
  return (
    <InfoContext.Provider
      value={{
        info: initState.info,
        reviews: initState.reviews,
        detailInfo: initState.detailInfo,
        news: initState.news,
      }}
    >
      {props.children}
    </InfoContext.Provider>
  );
};

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };
