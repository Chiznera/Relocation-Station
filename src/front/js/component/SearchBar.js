import { Store } from "@material-ui/icons";
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const SearchBar = ({ placeholder, data }) => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getMoreStates();
    console.log(store);
  }, []);
  return (
    <div className="Search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} />
        <div className="searchIcon">
          <i class="fas fa-search"></i>
        </div>
      </div>
      <div className="dataResult">
        {store.basic.map((basic, idx) => {
          return (
            <a className="dataInfo">
              <p> {basic.state} </p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export { SearchBar };
