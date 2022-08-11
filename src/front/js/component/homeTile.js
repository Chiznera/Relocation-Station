import React from "react";
import { Link } from "react-router-dom";

const HomeTile = ({ img, text, link }) => {
  return (
    <Link to={`/state/${link}`}>
      <div className="tile">
        <img
          src={img ? img : "https://via.placeholder.com/468"}
          className="card-img-top"
        />
        <div className="centered">{text ? text : "Place Holder"}</div>
      </div>
    </Link>
  );
};

export { HomeTile };
