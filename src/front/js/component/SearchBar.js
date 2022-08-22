import { Store } from "@material-ui/icons";
import React, { useEffect, useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const SearchBar = ({ placeholder, basic }) => {
  const { store, actions } = useContext(Context);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  useEffect(() => {
    actions.getMoreStates();
  }, []);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    event.persist();
    setWordEntered(searchWord);
    const newFilter = store.basic.filter((basic) => {
      return basic.state.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="Search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length != 0 ? (
            <i class="fas fa-times" onClick={clearInput}></i>
          ) : (
            <i className="fas fa-search"></i>
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult mx-auto">
          {filteredData.map((basic, idx) => {
            return (
              <Link to={`/state/${basic.code}`}>
                {/* <a
                  className="dataItem"
                  href={`/state/${basic.code}`}
                  target="_blank"
                > */}
                <p className="dataItem my-3"> {basic.state} </p>
                {/* </a> */}
              </Link>
            );
          })}
        </div>
      )}
      ;
    </div>
  );
};

export { SearchBar };
