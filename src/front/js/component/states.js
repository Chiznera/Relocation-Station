import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import { HomeTile } from "./homeTile";

const States = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getMoreStates();
    console.log(store);
  }, []);

  return (
    <div className="row row-cols-5 text-light mx-5 my-1">
      {store.basic.map((basic, idx) => {
        return (
          <div className="col my-2" key={idx}>
            <HomeTile
              img={basic.landscape_background_url}
              text={basic.state}
              link={basic.code}
            />
          </div>
        );
      })}
    </div>
  );
};
export { States };
