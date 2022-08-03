import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { CityDetails } from "../pages/citydetails";
import { useParams } from "react-router-dom";

const Singles = (idx) => {
  const { state } = useParams();
  const { store, actions } = useContext(Context);
  const [stateObj, setStateObj] = useState({});
  useEffect(() => {
    actions.getState(state).then(() => {
      setStateObj(store.singleState);
    });

    console.log(store.singleState);
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-4"></h1>
      <p className="lead"></p>
      <hr className="my-4" />
      <CityDetails
        key={idx}
        img={stateObj.skyline_background_url}
        state={stateObj.state}
        text1={`Population: ${stateObj.population}`}
        text2={`Capital City: ${stateObj.capital_city}`}
        text3={`Nickname: ${stateObj.nickname}`}
      />
    </div>
  );
};
export { Singles };
