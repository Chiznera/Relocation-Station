import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { CityDetails } from "../pages/citydetails";
import { useParams } from "react-router-dom";
import { CityCard } from "./cityCard";

const Singles = (idx) => {
  const { state } = useParams();
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getState(state);
  }, []);
  useEffect(() => {
    console.log(store.singleState);
  }, [store.singleState]);

  return (
    <div className="jumbotron">
      <h1 className="display-4"></h1>
      <p className="lead"></p>
      <hr className="my-4" />
      <CityDetails
        key={idx}
        img={store.singleState?.skyline_background_url}
        state={store.singleState?.state}
        text1={`Population: ${store.singleState?.population}`}
        text2={`Capital City: ${store.singleState?.capital_city}`}
        text3={`Nickname: ${store.singleState?.nickname}`}
      />
      <div className="cityCards">
        {store.singleState?.cities?.map((city, idx) => {
          return (
            <CityCard
              key={idx}
              name={city.name}
              text1={`Population: ${city.population}`}
              text2={`Adverage Housing Cost: ${city.avg_cost_of_living}`}
              text3={`Adverage Income: ${city.avg_annual_income}`}
              text4={`Inclement Weather: ${city.inclement_weather}`}
              text5={`Tempeture Anually this time of year ${city.temperature_range}`}
            />
          );
        })}
      </div>
    </div>
  );
};
export { Singles };
