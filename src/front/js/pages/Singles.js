import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { CityDetails } from "./citydetails";
import { useParams } from "react-router-dom";
import { CityCard } from "../component/cityCard";

const Singles = (idx) => {
  const { state } = useParams();
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getState(state);
  }, []);
  useEffect(() => {
    console.log(store.singleState);
  }, [store.singleState]);

  const bgStyle = {
    backgroundImage: `url('${store.singleState?.skyline_background_url}')`,
  };

  return (
    // <div className="jumbotron border border-5 border-warning">
    //   <h1 className="display-4"></h1>
    //   <p className="lead"></p>
    //   <hr className="my-4" />
    <>
      {/* <div style={bgStyle}> */}
      <div className="container my-3 bg-dark">
        <CityDetails
          key={idx}
          img={store.singleState?.skyline_background_url}
          state={store.singleState?.state}
          text1={`Population: ${store.singleState?.population?.toLocaleString()}`}
          text2={`Capital City: ${store.singleState?.capital_city}`}
          text3={`Nickname: ${store.singleState?.nickname}`}
        />
        <div className="container my-4 d-flex bg-dark">
          {store.singleState?.cities?.map((city, idx) => {
            return (
              <CityCard
                key={idx}
                name={city.name}
                text1={`Population: ${parseInt(
                  city.population
                )?.toLocaleString()}`}
                text2={`Average Cost of Living: ${city.avg_cost_of_living}% of National Average`}
                text3={`Average Income: $${city.avg_annual_income}`}
                text4={`Inclement Weather: ${city.inclement_weather}`}
                text5={`Typical Annual Temperature Range: ${city.temperature_range}`}
                // text6={`Walk Score: `}
                // text7={`Transit Score: `}
                // text8={`Bike Score: `}
              />
            );
          })}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export { Singles };
