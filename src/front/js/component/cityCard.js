import React from "react";
import { Link } from "react-router-dom";
//import IconButton from "@mui/material/IconButton";
//import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";

const CityCard = ({ name, text1, text2, text3, text4, text5 }) => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <strong>{name ? name : "Filter titles"}</strong>
            </h5>
            <p className="card-text">{text1 ? text1 : "Filter titles"}</p>
            <p className="card-text">{text2 ? text2 : "Filter titles"}</p>
            <p className="card-text">{text3 ? text3 : "Filter titles"}</p>
            <p className="card-text">{text4 ? text4 : "Filter titles"}</p>
            <p className="card-text">{text5 ? text5 : "Filter titles"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CityCard };
