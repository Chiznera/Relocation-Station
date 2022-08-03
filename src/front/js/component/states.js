import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import { Card } from "../component/card";

const States = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getMoreStates();
    console.log(store);
  }, []);

  return (
    <div className="container text-light">
      <div className="cardRow">
        {store.basic.map((basic, idx) => {
          return (
            <div className="col" key={idx}>
              <Card
                img={basic.state_seal_url}
                title={basic.state}
                text={`${basic.state} has a population of ${basic.population}, and the capital is ${basic.capital_city} .`}
                link={"/state/:state"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export { States };
