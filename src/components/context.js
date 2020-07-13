import React, { useState } from "react";
import { placeInfo, reviews, detailInfo, news } from "../data";

const InfoContext = React.createContext();

const initState = {
  info: placeInfo,
  reviews,
  detailInfo,
  news,
};

const InfoProvider = (props) => {
  const [datoState, setDatoState] = useState(initState);

  const getItem = (id) => {
    const item = datoState.info.find((item) => item.id === id);
    return item;
  };

  const handleDetail = (id) => {
    const item = getItem(id);
    setDatoState({ ...datoState, detailInfo: item });
  };

  return (
    <InfoContext.Provider
      value={{
        info: datoState.info,
        reviews: datoState.reviews,
        detailInfo: datoState.detailInfo,
        news: datoState.news,
        handleDetail: handleDetail,
      }}
    >
      {props.children}
    </InfoContext.Provider>
  );
};

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };
