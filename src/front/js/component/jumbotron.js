import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { SearchBar } from "./SearchBar";
import travel from "./travel.png";

const Jumbotron = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getMoreStates();
    console.log(store);
  }, []);

  return (
    <div
      className="p-5 text-center bg-image rounded-3"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
        backgroundSize: "cover",
        height: "250px",
        width: "100%",
      }}
    >
      <div className="searchBar_Locator justify-content-center">
        <SearchBar placeholder="Enter State Name..." data={store.basic} />
      </div>
      <div
        className="mask"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      ></div>
    </div>
  );
};
export { Jumbotron };
