import React from "react";
import { Link } from "react-router-dom";
//import IconButton from "@mui/material/IconButton";
//import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";

const Card = ({ img, title, text, link, link_text, url, url2 }) => {
  return (
    <div
      className="card mb-3 text-light bg-dark mx-2"
      style={{ width: "18rem" }}
    >
      <img
        src={img ? img : "https://via.placeholder.com/468"}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{title ? title : "Filter titles"}</h5>
        <div className="card-buttons">
          <p className="card-text">{text ? text : "This is filler"}</p>
          <div className="cardButtons">
            <a href={link ? link : "#"} className="btn btn-primary">
              {link_text ? link_text : "Find out more"}
            </a>
            <div className="socialButtons">
              <a href={url ? url : "#"} className="btn btn-light">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={url2 ? url2 : "#"} className="btn btn-light">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Card };
